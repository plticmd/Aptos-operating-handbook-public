import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/ja/__docusaurus/debug',
    component: ComponentCreator('/ja/__docusaurus/debug', '83a'),
    exact: true
  },
  {
    path: '/ja/__docusaurus/debug/config',
    component: ComponentCreator('/ja/__docusaurus/debug/config', '8e7'),
    exact: true
  },
  {
    path: '/ja/__docusaurus/debug/content',
    component: ComponentCreator('/ja/__docusaurus/debug/content', '5da'),
    exact: true
  },
  {
    path: '/ja/__docusaurus/debug/globalData',
    component: ComponentCreator('/ja/__docusaurus/debug/globalData', 'ddd'),
    exact: true
  },
  {
    path: '/ja/__docusaurus/debug/metadata',
    component: ComponentCreator('/ja/__docusaurus/debug/metadata', 'e5c'),
    exact: true
  },
  {
    path: '/ja/__docusaurus/debug/registry',
    component: ComponentCreator('/ja/__docusaurus/debug/registry', 'd98'),
    exact: true
  },
  {
    path: '/ja/__docusaurus/debug/routes',
    component: ComponentCreator('/ja/__docusaurus/debug/routes', '835'),
    exact: true
  },
  {
    path: '/ja/search',
    component: ComponentCreator('/ja/search', '2e7'),
    exact: true
  },
  {
    path: '/ja/',
    component: ComponentCreator('/ja/', 'dcf'),
    routes: [
      {
        path: '/ja/',
        component: ComponentCreator('/ja/', 'f4e'),
        routes: [
          {
            path: '/ja/',
            component: ComponentCreator('/ja/', 'b5c'),
            routes: [
              {
                path: '/ja/apis/',
                component: ComponentCreator('/ja/apis/', 'b19'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/apis/aptos-labs-developer-portal',
                component: ComponentCreator('/ja/apis/aptos-labs-developer-portal', '24d'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/apis/fullnode-rest-api',
                component: ComponentCreator('/ja/apis/fullnode-rest-api', '9ce'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/aptos-white-paper/',
                component: ComponentCreator('/ja/aptos-white-paper/', '70c'),
                exact: true,
                sidebar: "aptosSidebar"
              },
              {
                path: '/ja/category/advanced-builders',
                component: ComponentCreator('/ja/category/advanced-builders', 'ef4'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/community/',
                component: ComponentCreator('/ja/community/', 'd00'),
                exact: true,
                sidebar: "comSidebar"
              },
              {
                path: '/ja/community/aptos-style',
                component: ComponentCreator('/ja/community/aptos-style', '8f9'),
                exact: true,
                sidebar: "comSidebar"
              },
              {
                path: '/ja/community/contributions/remix-ide-plugin',
                component: ComponentCreator('/ja/community/contributions/remix-ide-plugin', '8d3'),
                exact: true
              },
              {
                path: '/ja/community/contributors',
                component: ComponentCreator('/ja/community/contributors', 'fa0'),
                exact: true,
                sidebar: "comSidebar"
              },
              {
                path: '/ja/community/external-resources',
                component: ComponentCreator('/ja/community/external-resources', 'f46'),
                exact: true,
                sidebar: "comSidebar"
              },
              {
                path: '/ja/community/site-updates',
                component: ComponentCreator('/ja/community/site-updates', '092'),
                exact: true,
                sidebar: "comSidebar"
              },
              {
                path: '/ja/concepts/',
                component: ComponentCreator('/ja/concepts/', '7cc'),
                exact: true,
                sidebar: "aptosSidebar"
              },
              {
                path: '/ja/concepts/accounts',
                component: ComponentCreator('/ja/concepts/accounts', '84c'),
                exact: true,
                sidebar: "aptosSidebar"
              },
              {
                path: '/ja/concepts/base-gas',
                component: ComponentCreator('/ja/concepts/base-gas', '983'),
                exact: true,
                sidebar: "aptosSidebar"
              },
              {
                path: '/ja/concepts/blockchain',
                component: ComponentCreator('/ja/concepts/blockchain', 'a4c'),
                exact: true,
                sidebar: "aptosSidebar"
              },
              {
                path: '/ja/concepts/blocks',
                component: ComponentCreator('/ja/concepts/blocks', 'c09'),
                exact: true,
                sidebar: "aptosSidebar"
              },
              {
                path: '/ja/concepts/delegated-staking',
                component: ComponentCreator('/ja/concepts/delegated-staking', 'a46'),
                exact: true,
                sidebar: "aptosSidebar"
              },
              {
                path: '/ja/concepts/events',
                component: ComponentCreator('/ja/concepts/events', '550'),
                exact: true,
                sidebar: "aptosSidebar"
              },
              {
                path: '/ja/concepts/fullnodes',
                component: ComponentCreator('/ja/concepts/fullnodes', '0f4'),
                exact: true,
                sidebar: "aptosSidebar"
              },
              {
                path: '/ja/concepts/gas-txn-fee',
                component: ComponentCreator('/ja/concepts/gas-txn-fee', 'ef5'),
                exact: true,
                sidebar: "aptosSidebar"
              },
              {
                path: '/ja/concepts/governance',
                component: ComponentCreator('/ja/concepts/governance', '08f'),
                exact: true,
                sidebar: "aptosSidebar"
              },
              {
                path: '/ja/concepts/move-on-aptos',
                component: ComponentCreator('/ja/concepts/move-on-aptos', '2ae'),
                exact: true,
                sidebar: "aptosSidebar"
              },
              {
                path: '/ja/concepts/node-networks-sync',
                component: ComponentCreator('/ja/concepts/node-networks-sync', '7b2'),
                exact: true,
                sidebar: "aptosSidebar"
              },
              {
                path: '/ja/concepts/resources',
                component: ComponentCreator('/ja/concepts/resources', '325'),
                exact: true,
                sidebar: "aptosSidebar"
              },
              {
                path: '/ja/concepts/staking',
                component: ComponentCreator('/ja/concepts/staking', '520'),
                exact: true,
                sidebar: "aptosSidebar"
              },
              {
                path: '/ja/concepts/txns-states',
                component: ComponentCreator('/ja/concepts/txns-states', '01a'),
                exact: true,
                sidebar: "aptosSidebar"
              },
              {
                path: '/ja/concepts/validator-nodes',
                component: ComponentCreator('/ja/concepts/validator-nodes', 'cf2'),
                exact: true,
                sidebar: "aptosSidebar"
              },
              {
                path: '/ja/guides/account-management/key-rotation',
                component: ComponentCreator('/ja/guides/account-management/key-rotation', 'efb'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/guides/building-from-source',
                component: ComponentCreator('/ja/guides/building-from-source', '548'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/guides/data-pruning',
                component: ComponentCreator('/ja/guides/data-pruning', '489'),
                exact: true,
                sidebar: "nodeSidebar"
              },
              {
                path: '/ja/guides/explore-aptos',
                component: ComponentCreator('/ja/guides/explore-aptos', 'ee7'),
                exact: true,
                sidebar: "aptosSidebar"
              },
              {
                path: '/ja/guides/keyless-accounts',
                component: ComponentCreator('/ja/guides/keyless-accounts', '91c'),
                exact: true
              },
              {
                path: '/ja/guides/local-development-network',
                component: ComponentCreator('/ja/guides/local-development-network', '62f'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/guides/nfts/aptos-token-overview',
                component: ComponentCreator('/ja/guides/nfts/aptos-token-overview', '6a3'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/guides/running-a-local-multi-node-network',
                component: ComponentCreator('/ja/guides/running-a-local-multi-node-network', '1ae'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/guides/sponsored-transactions',
                component: ComponentCreator('/ja/guides/sponsored-transactions', '086'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/guides/state-sync',
                component: ComponentCreator('/ja/guides/state-sync', '380'),
                exact: true,
                sidebar: "nodeSidebar"
              },
              {
                path: '/ja/guides/system-integrators-guide',
                component: ComponentCreator('/ja/guides/system-integrators-guide', 'f6e'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/guides/transaction-management',
                component: ComponentCreator('/ja/guides/transaction-management', '327'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/indexer/api/',
                component: ComponentCreator('/ja/indexer/api/', '35f'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/indexer/api/example-queries',
                component: ComponentCreator('/ja/indexer/api/example-queries', '535'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/indexer/api/labs-hosted',
                component: ComponentCreator('/ja/indexer/api/labs-hosted', '3f6'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/indexer/api/self-hosted',
                component: ComponentCreator('/ja/indexer/api/self-hosted', '494'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/indexer/api/usage-guide',
                component: ComponentCreator('/ja/indexer/api/usage-guide', '25d'),
                exact: true
              },
              {
                path: '/ja/indexer/custom-processors/',
                component: ComponentCreator('/ja/indexer/custom-processors/', 'c99'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/indexer/custom-processors/e2e-tutorial',
                component: ComponentCreator('/ja/indexer/custom-processors/e2e-tutorial', '56e'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/indexer/custom-processors/parsing-txns',
                component: ComponentCreator('/ja/indexer/custom-processors/parsing-txns', '48b'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/indexer/indexer-landing',
                component: ComponentCreator('/ja/indexer/indexer-landing', '1e7'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/indexer/legacy/',
                component: ComponentCreator('/ja/indexer/legacy/', '802'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/indexer/legacy/custom-data-model',
                component: ComponentCreator('/ja/indexer/legacy/custom-data-model', '248'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/indexer/legacy/indexer-fullnode',
                component: ComponentCreator('/ja/indexer/legacy/indexer-fullnode', '619'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/indexer/legacy/migration',
                component: ComponentCreator('/ja/indexer/legacy/migration', 'cd7'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/indexer/txn-stream/',
                component: ComponentCreator('/ja/indexer/txn-stream/', 'e63'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/indexer/txn-stream/labs-hosted',
                component: ComponentCreator('/ja/indexer/txn-stream/labs-hosted', '7c2'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/indexer/txn-stream/local-development',
                component: ComponentCreator('/ja/indexer/txn-stream/local-development', '4cf'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/indexer/txn-stream/self-hosted',
                component: ComponentCreator('/ja/indexer/txn-stream/self-hosted', 'a8b'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/integration/',
                component: ComponentCreator('/ja/integration/', 'aed'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/integration/aptos-names-service-package',
                component: ComponentCreator('/ja/integration/aptos-names-service-package', '0b0'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/integration/wallet-adapter-concept',
                component: ComponentCreator('/ja/integration/wallet-adapter-concept', '32e'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/integration/wallet-adapter-for-dapp',
                component: ComponentCreator('/ja/integration/wallet-adapter-for-dapp', '094'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/integration/wallet-adapter-for-wallets',
                component: ComponentCreator('/ja/integration/wallet-adapter-for-wallets', 'fcb'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/move/aptos-move',
                component: ComponentCreator('/ja/move/aptos-move', '383'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/move/book/abilities',
                component: ComponentCreator('/ja/move/book/abilities', '061'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/move/book/abort-and-assert',
                component: ComponentCreator('/ja/move/book/abort-and-assert', 'f1c'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/move/book/address',
                component: ComponentCreator('/ja/move/book/address', 'edf'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/move/book/bool',
                component: ComponentCreator('/ja/move/book/bool', '800'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/move/book/coding-conventions',
                component: ComponentCreator('/ja/move/book/coding-conventions', '8c9'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/move/book/conditionals',
                component: ComponentCreator('/ja/move/book/conditionals', 'cf7'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/move/book/constants',
                component: ComponentCreator('/ja/move/book/constants', '09d'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/move/book/creating-coins',
                component: ComponentCreator('/ja/move/book/creating-coins', '67b'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/move/book/equality',
                component: ComponentCreator('/ja/move/book/equality', '5c1'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/move/book/friends',
                component: ComponentCreator('/ja/move/book/friends', '4cf'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/move/book/functions',
                component: ComponentCreator('/ja/move/book/functions', '4b2'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/move/book/generics',
                component: ComponentCreator('/ja/move/book/generics', '48a'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/move/book/global-storage-operators',
                component: ComponentCreator('/ja/move/book/global-storage-operators', '5dc'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/move/book/global-storage-structure',
                component: ComponentCreator('/ja/move/book/global-storage-structure', '60c'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/move/book/integers',
                component: ComponentCreator('/ja/move/book/integers', '52e'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/move/book/introduction',
                component: ComponentCreator('/ja/move/book/introduction', '4f7'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/move/book/loops',
                component: ComponentCreator('/ja/move/book/loops', 'fa5'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/move/book/modules-and-scripts',
                component: ComponentCreator('/ja/move/book/modules-and-scripts', 'cde'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/move/book/package-upgrades',
                component: ComponentCreator('/ja/move/book/package-upgrades', 'f35'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/move/book/packages',
                component: ComponentCreator('/ja/move/book/packages', 'a6a'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/move/book/references',
                component: ComponentCreator('/ja/move/book/references', 'e5f'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/move/book/signer',
                component: ComponentCreator('/ja/move/book/signer', 'ae4'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/move/book/standard-library',
                component: ComponentCreator('/ja/move/book/standard-library', 'e87'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/move/book/structs-and-resources',
                component: ComponentCreator('/ja/move/book/structs-and-resources', 'bde'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/move/book/SUMMARY',
                component: ComponentCreator('/ja/move/book/SUMMARY', 'bab'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/move/book/tuples',
                component: ComponentCreator('/ja/move/book/tuples', 'f46'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/move/book/unit-testing',
                component: ComponentCreator('/ja/move/book/unit-testing', '449'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/move/book/uses',
                component: ComponentCreator('/ja/move/book/uses', '785'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/move/book/variables',
                component: ComponentCreator('/ja/move/book/variables', '892'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/move/book/vector',
                component: ComponentCreator('/ja/move/book/vector', 'e25'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/move/move-on-aptos',
                component: ComponentCreator('/ja/move/move-on-aptos', 'c33'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/move/move-on-aptos/cli',
                component: ComponentCreator('/ja/move/move-on-aptos/cli', 'dc5'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/move/move-on-aptos/cryptography',
                component: ComponentCreator('/ja/move/move-on-aptos/cryptography', '16c'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/move/move-on-aptos/gas-profiling',
                component: ComponentCreator('/ja/move/move-on-aptos/gas-profiling', 'be7'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/move/move-on-aptos/modules-on-aptos',
                component: ComponentCreator('/ja/move/move-on-aptos/modules-on-aptos', 'ca3'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/move/move-on-aptos/move-security-guidelines',
                component: ComponentCreator('/ja/move/move-on-aptos/move-security-guidelines', '077'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/move/move-on-aptos/objects/',
                component: ComponentCreator('/ja/move/move-on-aptos/objects/', '096'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/move/move-on-aptos/objects/configuring-objects',
                component: ComponentCreator('/ja/move/move-on-aptos/objects/configuring-objects', 'cc4'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/move/move-on-aptos/objects/creating-objects',
                component: ComponentCreator('/ja/move/move-on-aptos/objects/creating-objects', 'ca6'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/move/move-on-aptos/objects/using-objects',
                component: ComponentCreator('/ja/move/move-on-aptos/objects/using-objects', '4ba'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/move/move-on-aptos/resource-accounts',
                component: ComponentCreator('/ja/move/move-on-aptos/resource-accounts', '53a'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/move/move-on-aptos/scripts/',
                component: ComponentCreator('/ja/move/move-on-aptos/scripts/', '382'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/move/move-on-aptos/scripts/compiling-scripts',
                component: ComponentCreator('/ja/move/move-on-aptos/scripts/compiling-scripts', '8e3'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/move/move-on-aptos/scripts/running-scripts',
                component: ComponentCreator('/ja/move/move-on-aptos/scripts/running-scripts', '2e4'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/move/move-on-aptos/scripts/script-tutorial',
                component: ComponentCreator('/ja/move/move-on-aptos/scripts/script-tutorial', '322'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/move/move-on-aptos/scripts/writing-scripts',
                component: ComponentCreator('/ja/move/move-on-aptos/scripts/writing-scripts', '416'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/move/prover/move-prover',
                component: ComponentCreator('/ja/move/prover/move-prover', '363'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/move/prover/prover-guide',
                component: ComponentCreator('/ja/move/prover/prover-guide', 'c98'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/move/prover/spec-lang',
                component: ComponentCreator('/ja/move/prover/spec-lang', 'ab5'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/move/prover/supporting-resources',
                component: ComponentCreator('/ja/move/prover/supporting-resources', 'efd'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/nodes/aptos-api-spec',
                component: ComponentCreator('/ja/nodes/aptos-api-spec', '99f'),
                exact: true,
                sidebar: "refSidebar"
              },
              {
                path: '/ja/nodes/configure/configure-index',
                component: ComponentCreator('/ja/nodes/configure/configure-index', 'fa8'),
                exact: true,
                sidebar: "nodeSidebar"
              },
              {
                path: '/ja/nodes/full-node/aptos-db-restore',
                component: ComponentCreator('/ja/nodes/full-node/aptos-db-restore', '325'),
                exact: true,
                sidebar: "nodeSidebar"
              },
              {
                path: '/ja/nodes/full-node/bootstrap-fullnode',
                component: ComponentCreator('/ja/nodes/full-node/bootstrap-fullnode', 'f12'),
                exact: true,
                sidebar: "nodeSidebar"
              },
              {
                path: '/ja/nodes/full-node/deployments/deploy-a-pfn',
                component: ComponentCreator('/ja/nodes/full-node/deployments/deploy-a-pfn', '2b8'),
                exact: true,
                sidebar: "nodeSidebar"
              },
              {
                path: '/ja/nodes/full-node/deployments/deploy-a-pfn-docker',
                component: ComponentCreator('/ja/nodes/full-node/deployments/deploy-a-pfn-docker', '559'),
                exact: true,
                sidebar: "nodeSidebar"
              },
              {
                path: '/ja/nodes/full-node/deployments/deploy-a-pfn-gcp',
                component: ComponentCreator('/ja/nodes/full-node/deployments/deploy-a-pfn-gcp', 'a8b'),
                exact: true,
                sidebar: "nodeSidebar"
              },
              {
                path: '/ja/nodes/full-node/deployments/deploy-a-pfn-source-code',
                component: ComponentCreator('/ja/nodes/full-node/deployments/deploy-a-pfn-source-code', '28f'),
                exact: true,
                sidebar: "nodeSidebar"
              },
              {
                path: '/ja/nodes/full-node/fullnode-network-connections',
                component: ComponentCreator('/ja/nodes/full-node/fullnode-network-connections', '288'),
                exact: true,
                sidebar: "nodeSidebar"
              },
              {
                path: '/ja/nodes/full-node/fullnode-source-code-or-docker',
                component: ComponentCreator('/ja/nodes/full-node/fullnode-source-code-or-docker', '029'),
                exact: true
              },
              {
                path: '/ja/nodes/full-node/network-identity-fullnode',
                component: ComponentCreator('/ja/nodes/full-node/network-identity-fullnode', '320'),
                exact: true,
                sidebar: "nodeSidebar"
              },
              {
                path: '/ja/nodes/full-node/pfn-requirements',
                component: ComponentCreator('/ja/nodes/full-node/pfn-requirements', '622'),
                exact: true,
                sidebar: "nodeSidebar"
              },
              {
                path: '/ja/nodes/full-node/public-fullnode',
                component: ComponentCreator('/ja/nodes/full-node/public-fullnode', 'd5d'),
                exact: true,
                sidebar: "nodeSidebar"
              },
              {
                path: '/ja/nodes/full-node/update-fullnode-with-new-devnet-releases',
                component: ComponentCreator('/ja/nodes/full-node/update-fullnode-with-new-devnet-releases', '819'),
                exact: true,
                sidebar: "nodeSidebar"
              },
              {
                path: '/ja/nodes/full-node/verify-pfn',
                component: ComponentCreator('/ja/nodes/full-node/verify-pfn', '32f'),
                exact: true,
                sidebar: "nodeSidebar"
              },
              {
                path: '/ja/nodes/identity-and-configuration',
                component: ComponentCreator('/ja/nodes/identity-and-configuration', 'a02'),
                exact: true
              },
              {
                path: '/ja/nodes/leaderboard-metrics',
                component: ComponentCreator('/ja/nodes/leaderboard-metrics', '195'),
                exact: true,
                sidebar: "nodeSidebar"
              },
              {
                path: '/ja/nodes/localnet/localnet-index',
                component: ComponentCreator('/ja/nodes/localnet/localnet-index', '8b8'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/nodes/localnet/run-a-localnet',
                component: ComponentCreator('/ja/nodes/localnet/run-a-localnet', 'b96'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/nodes/measure/important-metrics',
                component: ComponentCreator('/ja/nodes/measure/important-metrics', '5fd'),
                exact: true,
                sidebar: "nodeSidebar"
              },
              {
                path: '/ja/nodes/measure/measure-index',
                component: ComponentCreator('/ja/nodes/measure/measure-index', '02e'),
                exact: true,
                sidebar: "nodeSidebar"
              },
              {
                path: '/ja/nodes/measure/node-health-checker',
                component: ComponentCreator('/ja/nodes/measure/node-health-checker', '860'),
                exact: true,
                sidebar: "nodeSidebar"
              },
              {
                path: '/ja/nodes/measure/node-health-checker-faq',
                component: ComponentCreator('/ja/nodes/measure/node-health-checker-faq', '521'),
                exact: true
              },
              {
                path: '/ja/nodes/measure/node-inspection-service',
                component: ComponentCreator('/ja/nodes/measure/node-inspection-service', 'e61'),
                exact: true,
                sidebar: "nodeSidebar"
              },
              {
                path: '/ja/nodes/modify/modify-index',
                component: ComponentCreator('/ja/nodes/modify/modify-index', '861'),
                exact: true,
                sidebar: "nodeSidebar"
              },
              {
                path: '/ja/nodes/networks',
                component: ComponentCreator('/ja/nodes/networks', 'bc7'),
                exact: true,
                sidebar: "aptosSidebar"
              },
              {
                path: '/ja/nodes/node-files-all-networks/node-files',
                component: ComponentCreator('/ja/nodes/node-files-all-networks/node-files', '131'),
                exact: true,
                sidebar: "nodeSidebar"
              },
              {
                path: '/ja/nodes/node-files-all-networks/node-files-devnet',
                component: ComponentCreator('/ja/nodes/node-files-all-networks/node-files-devnet', '130'),
                exact: true,
                sidebar: "nodeSidebar"
              },
              {
                path: '/ja/nodes/node-files-all-networks/node-files-index',
                component: ComponentCreator('/ja/nodes/node-files-all-networks/node-files-index', '8b5'),
                exact: true,
                sidebar: "nodeSidebar"
              },
              {
                path: '/ja/nodes/node-files-all-networks/node-files-testnet',
                component: ComponentCreator('/ja/nodes/node-files-all-networks/node-files-testnet', '395'),
                exact: true,
                sidebar: "nodeSidebar"
              },
              {
                path: '/ja/nodes/nodes-landing',
                component: ComponentCreator('/ja/nodes/nodes-landing', '42a'),
                exact: true,
                sidebar: "nodeSidebar"
              },
              {
                path: '/ja/nodes/operations/operations-index',
                component: ComponentCreator('/ja/nodes/operations/operations-index', 'cd0'),
                exact: true,
                sidebar: "nodeSidebar"
              },
              {
                path: '/ja/nodes/validator-node/operator/connect-nodes/connect-validator-node',
                component: ComponentCreator('/ja/nodes/validator-node/operator/connect-nodes/connect-validator-node', '49b'),
                exact: true,
                sidebar: "nodeSidebar"
              },
              {
                path: '/ja/nodes/validator-node/operator/connect-to-aptos-network',
                component: ComponentCreator('/ja/nodes/validator-node/operator/connect-to-aptos-network', '9d4'),
                exact: true,
                sidebar: "nodeSidebar"
              },
              {
                path: '/ja/nodes/validator-node/operator/delegation-pool-operations',
                component: ComponentCreator('/ja/nodes/validator-node/operator/delegation-pool-operations', '3b6'),
                exact: true,
                sidebar: "nodeSidebar"
              },
              {
                path: '/ja/nodes/validator-node/operator/index',
                component: ComponentCreator('/ja/nodes/validator-node/operator/index', 'fec'),
                exact: true
              },
              {
                path: '/ja/nodes/validator-node/operator/modify-nodes/modify-validator-node',
                component: ComponentCreator('/ja/nodes/validator-node/operator/modify-nodes/modify-validator-node', '608'),
                exact: true,
                sidebar: "nodeSidebar"
              },
              {
                path: '/ja/nodes/validator-node/operator/node-liveness-criteria',
                component: ComponentCreator('/ja/nodes/validator-node/operator/node-liveness-criteria', '4cd'),
                exact: true,
                sidebar: "nodeSidebar"
              },
              {
                path: '/ja/nodes/validator-node/operator/node-requirements',
                component: ComponentCreator('/ja/nodes/validator-node/operator/node-requirements', '04c'),
                exact: true,
                sidebar: "nodeSidebar"
              },
              {
                path: '/ja/nodes/validator-node/operator/running-validator-node/run-validator-node-using-aws',
                component: ComponentCreator('/ja/nodes/validator-node/operator/running-validator-node/run-validator-node-using-aws', '749'),
                exact: true,
                sidebar: "nodeSidebar"
              },
              {
                path: '/ja/nodes/validator-node/operator/running-validator-node/run-validator-node-using-azure',
                component: ComponentCreator('/ja/nodes/validator-node/operator/running-validator-node/run-validator-node-using-azure', 'f72'),
                exact: true,
                sidebar: "nodeSidebar"
              },
              {
                path: '/ja/nodes/validator-node/operator/running-validator-node/run-validator-node-using-docker',
                component: ComponentCreator('/ja/nodes/validator-node/operator/running-validator-node/run-validator-node-using-docker', 'be6'),
                exact: true,
                sidebar: "nodeSidebar"
              },
              {
                path: '/ja/nodes/validator-node/operator/running-validator-node/run-validator-node-using-gcp',
                component: ComponentCreator('/ja/nodes/validator-node/operator/running-validator-node/run-validator-node-using-gcp', 'c96'),
                exact: true,
                sidebar: "nodeSidebar"
              },
              {
                path: '/ja/nodes/validator-node/operator/running-validator-node/run-validator-node-using-source',
                component: ComponentCreator('/ja/nodes/validator-node/operator/running-validator-node/run-validator-node-using-source', '695'),
                exact: true,
                sidebar: "nodeSidebar"
              },
              {
                path: '/ja/nodes/validator-node/operator/running-validator-node/running-validator-node',
                component: ComponentCreator('/ja/nodes/validator-node/operator/running-validator-node/running-validator-node', '4a2'),
                exact: true,
                sidebar: "nodeSidebar"
              },
              {
                path: '/ja/nodes/validator-node/operator/shutting-down-nodes',
                component: ComponentCreator('/ja/nodes/validator-node/operator/shutting-down-nodes', '7de'),
                exact: true,
                sidebar: "nodeSidebar"
              },
              {
                path: '/ja/nodes/validator-node/operator/staking-pool-operations',
                component: ComponentCreator('/ja/nodes/validator-node/operator/staking-pool-operations', '3be'),
                exact: true,
                sidebar: "nodeSidebar"
              },
              {
                path: '/ja/nodes/validator-node/operator/update-validator-node',
                component: ComponentCreator('/ja/nodes/validator-node/operator/update-validator-node', 'ecd'),
                exact: true,
                sidebar: "nodeSidebar"
              },
              {
                path: '/ja/nodes/validator-node/operator/verify-nodes/verify-validator-node',
                component: ComponentCreator('/ja/nodes/validator-node/operator/verify-nodes/verify-validator-node', '95f'),
                exact: true,
                sidebar: "nodeSidebar"
              },
              {
                path: '/ja/nodes/validator-node/validators',
                component: ComponentCreator('/ja/nodes/validator-node/validators', '7b3'),
                exact: true,
                sidebar: "nodeSidebar"
              },
              {
                path: '/ja/nodes/validator-node/voter/index',
                component: ComponentCreator('/ja/nodes/validator-node/voter/index', '6c8'),
                exact: true,
                sidebar: "nodeSidebar"
              },
              {
                path: '/ja/reference/error-codes',
                component: ComponentCreator('/ja/reference/error-codes', '2b9'),
                exact: true,
                sidebar: "refSidebar"
              },
              {
                path: '/ja/reference/glossary',
                component: ComponentCreator('/ja/reference/glossary', '280'),
                exact: true,
                sidebar: "refSidebar"
              },
              {
                path: '/ja/reference/move',
                component: ComponentCreator('/ja/reference/move', 'bd5'),
                exact: true,
                sidebar: "refSidebar"
              },
              {
                path: '/ja/reference/telemetry',
                component: ComponentCreator('/ja/reference/telemetry', 'cc6'),
                exact: true,
                sidebar: "nodeSidebar"
              },
              {
                path: '/ja/releases/aptos-releases',
                component: ComponentCreator('/ja/releases/aptos-releases', '17f'),
                exact: true,
                sidebar: "aptosSidebar"
              },
              {
                path: '/ja/sdks/index',
                component: ComponentCreator('/ja/sdks/index', 'd09'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/sdks/legacy-ts-sdk/index',
                component: ComponentCreator('/ja/sdks/legacy-ts-sdk/index', 'b6b'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/sdks/legacy-ts-sdk/typescript-sdk-aptos-client-class',
                component: ComponentCreator('/ja/sdks/legacy-ts-sdk/typescript-sdk-aptos-client-class', 'fd6'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/sdks/legacy-ts-sdk/typescript-sdk-client-layer',
                component: ComponentCreator('/ja/sdks/legacy-ts-sdk/typescript-sdk-client-layer', 'e21'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/sdks/legacy-ts-sdk/typescript-sdk-core-layer',
                component: ComponentCreator('/ja/sdks/legacy-ts-sdk/typescript-sdk-core-layer', 'c4e'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/sdks/legacy-ts-sdk/typescript-sdk-indexer-client-class',
                component: ComponentCreator('/ja/sdks/legacy-ts-sdk/typescript-sdk-indexer-client-class', 'b2e'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/sdks/legacy-ts-sdk/typescript-sdk-overview',
                component: ComponentCreator('/ja/sdks/legacy-ts-sdk/typescript-sdk-overview', '868'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/sdks/legacy-ts-sdk/typescript-sdk-plugins-layer',
                component: ComponentCreator('/ja/sdks/legacy-ts-sdk/typescript-sdk-plugins-layer', '8c6'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/sdks/legacy-ts-sdk/typescript-sdk-tests',
                component: ComponentCreator('/ja/sdks/legacy-ts-sdk/typescript-sdk-tests', '62f'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/sdks/python-sdk/',
                component: ComponentCreator('/ja/sdks/python-sdk/', 'af1'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/sdks/rust-sdk/',
                component: ComponentCreator('/ja/sdks/rust-sdk/', '2cf'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/sdks/ts-sdk/',
                component: ComponentCreator('/ja/sdks/ts-sdk/', '140'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/sdks/ts-sdk/account',
                component: ComponentCreator('/ja/sdks/ts-sdk/account', '6f7'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/sdks/ts-sdk/fetch-data-from-chain',
                component: ComponentCreator('/ja/sdks/ts-sdk/fetch-data-from-chain', '8c1'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/sdks/ts-sdk/http-client',
                component: ComponentCreator('/ja/sdks/ts-sdk/http-client', '937'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/sdks/ts-sdk/migration-guide',
                component: ComponentCreator('/ja/sdks/ts-sdk/migration-guide', '4f0'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/sdks/ts-sdk/move-types',
                component: ComponentCreator('/ja/sdks/ts-sdk/move-types', 'd53'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/sdks/ts-sdk/sdk-configuration',
                component: ComponentCreator('/ja/sdks/ts-sdk/sdk-configuration', '894'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/sdks/ts-sdk/testing',
                component: ComponentCreator('/ja/sdks/ts-sdk/testing', '09d'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/sdks/ts-sdk/transaction-builder',
                component: ComponentCreator('/ja/sdks/ts-sdk/transaction-builder', '720'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/sdks/ts-sdk/typescript',
                component: ComponentCreator('/ja/sdks/ts-sdk/typescript', 'a19'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/sdks/unity-sdk/',
                component: ComponentCreator('/ja/sdks/unity-sdk/', 'c21'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/standards/',
                component: ComponentCreator('/ja/standards/', '78a'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/standards/aptos-coin',
                component: ComponentCreator('/ja/standards/aptos-coin', 'acd'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/standards/aptos-object',
                component: ComponentCreator('/ja/standards/aptos-object', 'aa4'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/standards/aptos-token',
                component: ComponentCreator('/ja/standards/aptos-token', 'f8d'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/standards/digital-asset',
                component: ComponentCreator('/ja/standards/digital-asset', 'bf0'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/standards/fungible-asset',
                component: ComponentCreator('/ja/standards/fungible-asset', '4d5'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/standards/multisig-managed-fungible-asset',
                component: ComponentCreator('/ja/standards/multisig-managed-fungible-asset', 'ed8'),
                exact: true
              },
              {
                path: '/ja/standards/wallets',
                component: ComponentCreator('/ja/standards/wallets', '27f'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/tools/aptos-cli/',
                component: ComponentCreator('/ja/tools/aptos-cli/', '61e'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/tools/aptos-cli/install-cli/',
                component: ComponentCreator('/ja/tools/aptos-cli/install-cli/', 'b06'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/tools/aptos-cli/install-cli/automated-install',
                component: ComponentCreator('/ja/tools/aptos-cli/install-cli/automated-install', '922'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/tools/aptos-cli/install-cli/build-from-source',
                component: ComponentCreator('/ja/tools/aptos-cli/install-cli/build-from-source', 'b55'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/tools/aptos-cli/install-cli/download-cli-binaries',
                component: ComponentCreator('/ja/tools/aptos-cli/install-cli/download-cli-binaries', '0ce'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/tools/aptos-cli/install-cli/install-from-brew',
                component: ComponentCreator('/ja/tools/aptos-cli/install-cli/install-from-brew', 'df1'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/tools/aptos-cli/install-cli/install-move-prover',
                component: ComponentCreator('/ja/tools/aptos-cli/install-cli/install-move-prover', '228'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/tools/aptos-cli/use-cli/cli-account',
                component: ComponentCreator('/ja/tools/aptos-cli/use-cli/cli-account', '58e'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/tools/aptos-cli/use-cli/cli-configuration',
                component: ComponentCreator('/ja/tools/aptos-cli/use-cli/cli-configuration', '569'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/tools/aptos-cli/use-cli/cli-genesis',
                component: ComponentCreator('/ja/tools/aptos-cli/use-cli/cli-genesis', '212'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/tools/aptos-cli/use-cli/cli-key',
                component: ComponentCreator('/ja/tools/aptos-cli/use-cli/cli-key', 'd98'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/tools/aptos-cli/use-cli/cli-node',
                component: ComponentCreator('/ja/tools/aptos-cli/use-cli/cli-node', 'fa9'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/tools/aptos-cli/use-cli/move-tutorials/arguments-in-json-tutorial',
                component: ComponentCreator('/ja/tools/aptos-cli/use-cli/move-tutorials/arguments-in-json-tutorial', 'e4d'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/tools/aptos-cli/use-cli/move-tutorials/multi-signature-tutorial',
                component: ComponentCreator('/ja/tools/aptos-cli/use-cli/move-tutorials/multi-signature-tutorial', 'c67'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/tools/aptos-cli/use-cli/public-network/run-public-network',
                component: ComponentCreator('/ja/tools/aptos-cli/use-cli/public-network/run-public-network', '82b'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/tools/aptos-cli/use-cli/running-a-local-network',
                component: ComponentCreator('/ja/tools/aptos-cli/use-cli/running-a-local-network', 'a89'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/tools/aptos-cli/use-cli/use-aptos-cli',
                component: ComponentCreator('/ja/tools/aptos-cli/use-cli/use-aptos-cli', '158'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/tools/aptos-cli/use-cli/use-aptos-ledger',
                component: ComponentCreator('/ja/tools/aptos-cli/use-cli/use-aptos-ledger', '056'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/tools/aptos-cli/use-cli/working-with-move-contracts',
                component: ComponentCreator('/ja/tools/aptos-cli/use-cli/working-with-move-contracts', '96d'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/tutorials/',
                component: ComponentCreator('/ja/tutorials/', '767'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/tutorials/build-e2e-dapp/add-wallet-support',
                component: ComponentCreator('/ja/tutorials/build-e2e-dapp/add-wallet-support', 'c67'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/tutorials/build-e2e-dapp/create-a-smart-contract',
                component: ComponentCreator('/ja/tutorials/build-e2e-dapp/create-a-smart-contract', '139'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/tutorials/build-e2e-dapp/e2e-dapp-index',
                component: ComponentCreator('/ja/tutorials/build-e2e-dapp/e2e-dapp-index', 'ed5'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/tutorials/build-e2e-dapp/fetch-data-from-chain',
                component: ComponentCreator('/ja/tutorials/build-e2e-dapp/fetch-data-from-chain', '49b'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/tutorials/build-e2e-dapp/handle-tasks',
                component: ComponentCreator('/ja/tutorials/build-e2e-dapp/handle-tasks', 'f50'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/tutorials/build-e2e-dapp/set-up-react-app',
                component: ComponentCreator('/ja/tutorials/build-e2e-dapp/set-up-react-app', 'a52'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/tutorials/build-e2e-dapp/submit-data-to-chain',
                component: ComponentCreator('/ja/tutorials/build-e2e-dapp/submit-data-to-chain', '8e0'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/tutorials/first-move-module',
                component: ComponentCreator('/ja/tutorials/first-move-module', '742'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/tutorials/programmatic-upgradeable-module',
                component: ComponentCreator('/ja/tutorials/programmatic-upgradeable-module', '889'),
                exact: true
              },
              {
                path: '/ja/tutorials/your-first-coin',
                component: ComponentCreator('/ja/tutorials/your-first-coin', 'a53'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/tutorials/your-first-fungible-asset',
                component: ComponentCreator('/ja/tutorials/your-first-fungible-asset', 'b0e'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/tutorials/your-first-multisig',
                component: ComponentCreator('/ja/tutorials/your-first-multisig', '3e7'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/tutorials/your-first-nft',
                component: ComponentCreator('/ja/tutorials/your-first-nft', '792'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/tutorials/your-first-transaction',
                component: ComponentCreator('/ja/tutorials/your-first-transaction', 'bec'),
                exact: true,
                sidebar: "appSidebar"
              },
              {
                path: '/ja/',
                component: ComponentCreator('/ja/', '71b'),
                exact: true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
