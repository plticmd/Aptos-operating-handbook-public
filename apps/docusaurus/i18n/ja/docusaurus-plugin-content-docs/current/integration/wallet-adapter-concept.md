---
title: "Integrate with Aptos Wallets"
id: "wallet-adapter-concept"
---

import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Aptosウォレットとの統合

分散型アプリケーションは多くの場合、ブラウザ拡張機能またはモバイル アプリケーションを通じて実行され、オンチェーン データを読み取り、トランザクションを送信します。Aptosウォレットアダプターは、アプリとウォレットを単一のインターフェイスとして統合出来ます。

## Aptosウォレットアダプターの実装

dappsのウォレット統合で以下の実装が難しい場合があります。

1. すべてのエッジケースのサポートとテスト
2. さまざまなウォレットAPIの実装と保守
3. ウォレット自体がサポートしていない機能をユーザーに提供する
4. エコシステム内のさまざまなウォレットをすべて追跡する

ウォレットの作成、実装作業(以下の通り)も簡単ではありません。

1. Dappプロジェクトと簡単に統合出来る様な、既知の標準に準拠したウォレットを提供する
2. Dappプロジェクトは、アプリ内にウォレットを統合するために時間とリソースを費やす必要がある
3. ウォレットはdapp統合の取り組みのみに依存する必要がある

私達がウォレットアダプターの構築を開始した時、ウォレットが簡単に統合出来、dappsが使用および実装できるアダプターを提供したいと考えていました。

そのため,[Aptosウォレットアダプター](https://github.com/aptos-labs/aptos-wallet-adapter)モノリポジトリを提供し、ウォレットとdapps作成者の開発を容易にし、Aptosネットワーク上でのプロジェクトのスムーズな構築プロセスを確保します。Aptosウォレットアダプターは、dappとウォレット間のサービスとして機能し、[ウォレット標準](../standards/wallets.md)に従ってdappがウォレットと対話するためのAPIを公開します。これによりdappは最小限の統合作業で多くのウォレットをサポート出来、ウォレットが既知の標準に従って可視化されていきます。

## アダプターの構造

アダプターには、３つの異なるコンポーネントがあります。

1. アダプターコアパッケージ
2. アダプターReactプロバイダー(DAPP用)
3. アダプター テンプレート プラグイン(ウォレット用)

この構造には以下の利点があります。

- モジュール性(懸念事項の分離) - アダプターを3つのコンポーネントに分離する事で設計、実装、展開、使用の自由度が高まります。
- ウォレットはプラグイン実装を作成して所有します。(同じモノリポジトリに全てを含めるのではなく):
  - dappsで使用されるパッケージバンドルのサイズを削減します。
  - あまり摩擦を起こすことなく、セルフサービスで自分自身をサポートできる様にしましょう。
  - バグ/不適切な実装/間違ったファイル構成/の際のビルドの失敗を防ぎます。
- シンプルさ - 主要なロジックがコアパッケージに実装されているため、プロバイダーパッケージは非常に軽量かつ小型に保たれます。
- 柔軟性 - ウォレット作成とカスタム関数の実装用。

:::note
エコシステムが新しい標準に移行中、[新しいウォレット標準AIP-62](https://github.com/aptos-foundation/AIPs/blob/main/aips/aip-62.md)に従い、ウォレットアダプターは古いウォレットアダプタ標準と新しいウォレット標準（AIP-62で説明されている）をサポートします。
Dappsは[ここ](./wallet-adapter-for-dapp.md#aip-62-wallet-standard)の統合ガイドに従うことができ、ウォレットは[ここ](./wallet-adapter-for-wallets.md#aip-62-wallet-standard)の統合ガイドに従うことができます。
:::

### アダプターコアパッケージ

[アダプターコアパッケージ](https://github.com/aptos-labs/aptos-wallet-adapter/tree/main/packages/wallet-adapter-core)は、dappとウォレット間の対話を処理します。それは、

- 標準API(及び様々なウォレットがサポートする様々な機能)を公開します
- 現在のウォレットの状態とインストールされているウォレットを保持します
- アクションなどでイベントを発行します

Dappsはこのパッケージを、（コアパッケージと対話していく）プロバイダーと対話するdappとして _認識_ すべきではありません。一部のタイプは、dappで使用するためにコアパッケージから公開されます。

ウォレットは、独自のプラグインクラスを実装する必要があります。このプラグインクラスはコアパッケージに存在する基本的なプラグインクラス(プロパティ+イベント)インターフェイスを拡張します。

:::tip
ウォレットが基本的なプラグインインターフェイスの一部ではない機能をサポートしている場合、この機能を含める様コアパッケージにプルリクエストを行い、サポート出来る様にする必要があります。ガイダンスとして、ウォレットのコアパッケージの`signTransaction`を参照してください。
:::

### アダプターReactプロバイダー

軽量の[アダプターReactパッケージ](https://github.com/aptos-labs/aptos-wallet-adapter/tree/main/packages/wallet-adapter-react)は、Dappsをインポートして使用するためのものです。パッケージには、アプリ内で実装して使用するための`Provider`と`Context`が含まれています。

Dappでプロバイダーパッケージを使用する方法は[Dapp構築者用ウォレットアダプター](./wallet-adapter-for-dapp.md)ガイドに従って下さい。

### アダプターテンプレートプラグイン

アダプターとの統合を検討しているウォレットは、独自のウォレットプラグインを実装する必要があります。プロセスを容易にするために、事前に作成されたクラスが提供され、基本機能 (ウォレット標準に従って)を実装します。

[ウォレットアダプター プラグイン テンプレート リポジトリ](https://github.com/aptos-labs/wallet-adapter-plugin-template)は事前に作成されたクラス、テスト ファイル、いくつかの構成ファイルを保持しており、プラグインをNPMパッケージとして構築して公開する際役立ちます。

テンプレートを使用してウォレットプラグインを実装および公開する方法は[ウォレット ビルダー向けウォレット アダプター](./wallet-adapter-for-wallets.md)を御覧下さい。

<div style={{textAlign:"center"}}>
<ThemedImage
alt="Wallet Adapter Concept"
sources={{
    light: useBaseUrl('/img/docs/wallet-adapter-chart-light.svg'),
    dark: useBaseUrl('/img/docs/wallet-adapter-chart-dark.svg'),
  }}
/>
</div>
