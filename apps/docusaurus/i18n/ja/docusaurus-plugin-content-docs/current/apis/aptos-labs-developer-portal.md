---
title: "Aptosラボ開発者ポータル"
---
# Aptosラボ開発者ポータル

<!-- import BetaNotice from '../../src/components/\_dev_portal_beta_notice_jp.mdx'; -->
import BetaNotice from '/src/components/\_dev_portal_beta_notice_jp.mdx'; 


<BetaNotice />

[Aptosラボ開発者ポータル](https://developers.aptoslabs.com)は、Aptosラボ提供のAPIに素早く簡単にアクセスするためのゲートウェイで、あなたのdappを強化します。Aptosラボが運営するポータル(UI)と一連のAPIゲートウェイで構成されます。

開発者ポータルは以下によりdapps構築を簡単にする事を目的としています。

1. 各APIに[統一されたドメイン名/URLs](../nodes/networks.md)を提供します。
2. 各APIの使用方法に関するパーソナライズされた例を提供します。
3. 個人的な使用状況、エラー率、APIのレイテンシの観測。
4. オリジンIPではなくAPI開発者アカウント/アプリによるレート制限。
5. (近日公開) 高トラフィックアプリ向けのカスタマイズ可能なレート制限。

Aptosラボ開発者アカウントを作成するには、https://developers.aptoslabs.com/ で指示に従って下さい。

### 開発者ポータルアカウントのデフォルトのレート制限

現在、以下のレート制限を適用します。

1. GRPCトランザクションストリーム: 1ユーザーあたり20の同時ストリーム。
2. フルノードAPI: 5分のスライディングウィンドウごとに 5000リクエスト。
3. グラフQL API: 5分のスライディングウィンドウあたり5000リクエスト。

   注目）フルノードAPI/グラフQL APIのリクエストは個別にカウントされるため、同一の5分間のウィンドウ内で5000件のフルノードAPIリクエストと5000件のグラフQL APIリクエストを行う事が出来ます。レート制限は、連続的なスライディングウィンドウとして適用されます。

リクエストに応じてユーザーごとにレート制限をカスタマイズ出来ます。デフォルトよりも高いレート制限が必要なユースケースがある場合は、ポータルがサポートするチャネルのいずれかを通してサポートケースを開いて下さい。

### 既知の制限事項

1. 認証されたアクセスのみがサポートされます。

   現時点では、開発者ポータル/APIゲートウェイによって導入された新しいURLは、APIキー(ベアラー認証)を使用したリクエストのみをサポートします。事実上、新しいAPIゲートウェイが提供するURLのみを使用できる事を意味します。(認証情報を安全に保持できるバックエンドアプリからのURL)より高度なレート制限保護と組み合わせた匿名認証のサポートを間もなく追加する予定です。これにより、ブラウザウォレットなどのクライアント側のみのアプリケーションで新しいURLが使用出来る様になります。

