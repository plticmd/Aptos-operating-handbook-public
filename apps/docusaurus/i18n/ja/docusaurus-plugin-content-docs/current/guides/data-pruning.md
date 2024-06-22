---
title: "Data Pruning"
---
# データのプルーニング

全てのAptosノード(バリデータ、VFN、PFNなど)はトランザクションを処理し、新しいデータをブロックチェーンにコミットします。ブロックチェーンが(無期限に)成長すると、ノードは古いブロックチェーンデータを整理(プルーニング)する事で、必要なストレージディスク容量を管理できます。これを実現するため、Aptosノードは、全トランザクション履歴を含むデータベース内のブロックチェーン台帳履歴を整理します。
台帳履歴は**全部揃っている**(アーカイブノードを操作している場合など)もしくは、特定のトランザクションウィンドウへ**整理されます**(ストレージ要件を削減するため)。

デフォルトでは、全てのノードで台帳の整理が可能で、プルーニングウィンドウの設定をする事が出来ます。
このドキュメントでは、台帳プルーナーの動作の設定方法を解説します。

:::tip デフォルトのプルーニングウィンドウ
台帳プルーナーのデフォルト設定では、最新の1億5000万トランザクションのみが保持されます。これは、約200Gのディスク容量に相当します。トランザクションの種類と出力で決まります。テストネットとメインネットのほぼ全てのAptosノードは、デフォルト設定を使用します。アーカイブノードを実行したい場合は[ここ](../guides/state-sync.md#archival-pfns)の手順へ従って下さい。
:::

## 台帳プルーナーの無効化

元帳プルーナーを完全に無効にしたい場合は、ノード構成ファイル(`fullnode.yaml`もしくは`validator.yaml`)へ以下を追加します。
 
```yaml
storage:
  storage_pruner_config:
    ledger_pruner_config:
      enable: false
```

:::danger 無制限のストレージ増加
台帳プルーナーを無効にすると、ストレージが無制限に増大します、注意して下さい。これは、ストレージディスクがすぐあふれる原因となります。
:::

## 台帳プルーナーの設定

必要なら、元帳プルーニングウィンドウのサイズ(つまりストレージへ保持する最新のトランザクションの数)を設定出来ます。これを行う場合、ノード構成ファイルへ以下を追加します (`fullnode.yaml`もしくは`validator.yaml`)。

```yaml
storage:
  storage_pruner_config:
    ledger_pruner_config:
      prune_window: 100000000 # 100 million transactions
```

:::danger 最小プルーニングウィンドウ
プルーニングウィンドウを1億トランザクション未満で設定すると、ランタイムエラーが発生し、ノードの健全性が損なわれる可能性があります。
:::