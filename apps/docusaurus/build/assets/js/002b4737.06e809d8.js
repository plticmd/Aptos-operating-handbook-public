"use strict";(self.webpackChunkaptos_docs=self.webpackChunkaptos_docs||[]).push([[4418],{34886:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var t=o(63159),s=o(83581);const r={title:"Using GCP",slug:"deploy-a-pfn-gcp"},i="Deploy a PFN using GCP",l={id:"nodes/full-node/deployments/using-gcp",title:"Using GCP",description:"This tutorial explains how to configure and deploy a PFN using Google Cloud (GCP). Running a PFN in the cloud",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/nodes/full-node/deployments/using-gcp.md",sourceDirName:"nodes/full-node/deployments",slug:"/nodes/full-node/deployments/deploy-a-pfn-gcp",permalink:"/nodes/full-node/deployments/deploy-a-pfn-gcp",draft:!1,unlisted:!1,editUrl:"https://github.com/aptos-labs/developer-docs/edit/main/apps/docusaurus/docs/nodes/full-node/deployments/using-gcp.md",tags:[],version:"current",lastUpdatedAt:1713535793,formattedLastUpdatedAt:"2024\u5e744\u670819\u65e5",frontMatter:{title:"Using GCP",slug:"deploy-a-pfn-gcp"},sidebar:"nodeSidebar",previous:{title:"Using Docker",permalink:"/nodes/full-node/deployments/deploy-a-pfn-docker"},next:{title:"Verify a PFN",permalink:"/nodes/full-node/verify-pfn"}},a={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"GCP setup",id:"gcp-setup",level:3},{value:"Sign up for the 90-day free trial",id:"sign-up-for-the-90-day-free-trial",level:4},{value:"Create a new GCP project",id:"create-a-new-gcp-project",level:4},{value:"Enable billing, upgrade your account",id:"enable-billing-upgrade-your-account",level:4},{value:"Additional GCP resources",id:"additional-gcp-resources",level:4},{value:"Getting started",id:"getting-started",level:2},{value:"Validation",id:"validation",level:2},{value:"PFN identity and seed peers",id:"pfn-identity-and-seed-peers",level:2},{value:"Static identity",id:"static-identity",level:3},{value:"Seed peers",id:"seed-peers",level:3},{value:"Check logging",id:"check-logging",level:2},{value:"Check monitoring",id:"check-monitoring",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"deploy-a-pfn-using-gcp",children:"Deploy a PFN using GCP"}),"\n",(0,t.jsx)(n.p,{children:"This tutorial explains how to configure and deploy a PFN using Google Cloud (GCP). Running a PFN in the cloud\nusually provides better stability and availability compared to running it on your laptop."}),"\n",(0,t.jsx)(n.admonition,{title:"Don't want to connect to devnet?",type:"caution",children:(0,t.jsxs)(n.p,{children:["This tutorial defaults to deploying a PFN in the Aptos ",(0,t.jsx)(n.code,{children:"devnet"})," network. To connect to other networks\n(e.g., ",(0,t.jsx)(n.code,{children:"mainnet"})," and ",(0,t.jsx)(n.code,{children:"testnet"}),"), replace all instances of ",(0,t.jsx)(n.code,{children:"devnet"})," with the appropriate network name."]})}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(n.p,{children:["You can run the commands in this guide to deploy your PFN on Google Kubernetes Engine from any machine you want, e.g.\na ",(0,t.jsx)(n.a,{href:"https://cloud.google.com/compute",children:"VM on GCP"}),", ",(0,t.jsx)(n.a,{href:"https://cloud.google.com/shell",children:"Google Cloud Shell"}),", or your personal computer."]}),"\n",(0,t.jsxs)(n.p,{children:["The following packages are pre-installed with Cloud Shell. ",(0,t.jsx)(n.strong,{children:"Make sure to review"})," the\n",(0,t.jsx)(n.a,{href:"https://cloud.google.com/shell/docs/using-cloud-shell/#choose_ephemeral_mode",children:"documentation around ephemeral mode"})," if\nyou choose to use Cloud Shell. However, if you are running the installation from your laptop or another machine,\nyou need to install:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Terraform 1.3.6: ",(0,t.jsx)(n.a,{href:"https://www.terraform.io/downloads.html",children:"https://www.terraform.io/downloads.html"})]}),"\n",(0,t.jsxs)(n.li,{children:["Kubernetes CLI: ",(0,t.jsx)(n.a,{href:"https://kubernetes.io/docs/tasks/tools/",children:"https://kubernetes.io/docs/tasks/tools/"})]}),"\n",(0,t.jsxs)(n.li,{children:["Google Cloud CLI: ",(0,t.jsx)(n.a,{href:"https://cloud.google.com/sdk/docs/install-sdk",children:"https://cloud.google.com/sdk/docs/install-sdk"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["After you have installed the gcloud CLI, ",(0,t.jsx)(n.a,{href:"https://cloud.google.com/sdk/gcloud/reference/auth/login",children:"log into GCP using gcloud"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"gcloud auth login --update-adc\n"})}),"\n",(0,t.jsx)(n.admonition,{title:"Already have a GCP account set up?",type:"tip",children:(0,t.jsxs)(n.p,{children:["If you already have a GCP account setup, skip to ",(0,t.jsx)(n.a,{href:"#getting-started",children:"Getting Started"}),". If you do not have a GCP account, then follow\nthe below sections to create and configure your GCP account."]})}),"\n",(0,t.jsx)(n.h3,{id:"gcp-setup",children:"GCP setup"}),"\n",(0,t.jsx)(n.h4,{id:"sign-up-for-the-90-day-free-trial",children:"Sign up for the 90-day free trial"}),"\n",(0,t.jsxs)(n.p,{children:["Google Cloud offers a ",(0,t.jsx)(n.a,{href:"https://cloud.google.com/free/docs/gcp-free-tier/#free-trial",children:"90 day, $300 free trial for every new user"}),". The $300 are given as credits to your\naccount and you can use them to get a sense of Google Cloud products. Some GCP feature such as GPUs and Windows\nservers are not available in the free trial. Sign up for the credits, ",(0,t.jsx)(n.a,{href:"https://cloud.google.com/free",children:"here"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"create-a-new-gcp-project",children:"Create a new GCP project"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Create a new project on the GCP Console or using the gcloud command from the Google Cloud CLI. Be sure to\nfamiliarize yourself with the ",(0,t.jsx)(n.a,{href:"https://cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy",children:"resource hierarchy on GCP"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://cloud.google.com/resource-manager/docs/creating-managing-projects#creating_a_project",children:"Follow these instructions to setup a new project"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"enable-billing-upgrade-your-account",children:"Enable billing, upgrade your account"}),"\n",(0,t.jsxs)(n.p,{children:["You will still be able to use the free trial credits, but enabling billing allows you to have full access to all the\nfeatures of GCP and not experience any interruption to your nodes. ",(0,t.jsx)(n.a,{href:"https://cloud.google.com/free/docs/gcp-free-tier#how-to-upgrade",children:"Upgrade your account by following the steps outlined here."})]}),"\n",(0,t.jsx)(n.h4,{id:"additional-gcp-resources",children:"Additional GCP resources"}),"\n",(0,t.jsxs)(n.p,{children:["This should be enough to get your GCP setup ready to start deploying your PFN. But if you are new to GCP, you may want\nto check out some of their ",(0,t.jsx)(n.a,{href:"https://cloud.google.com/docs/get-started/quickstarts",children:"guides"})," and ",(0,t.jsx)(n.a,{href:"https://www.cloudskillsboost.google/catalog",children:"Google Cloud Skills Boost"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"getting-started",children:"Getting started"}),"\n",(0,t.jsx)(n.admonition,{title:"Before you proceed",type:"tip",children:(0,t.jsx)(n.p,{children:"From here on, this guide assumes that you have already set up your GCP account, and have created a new project for\ndeploying an Aptos PFN."})}),"\n",(0,t.jsx)(n.p,{children:"You can deploy a PFN on GCP by using the Aptos Terraform module."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Create a working directory for your configuration."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Choose a workspace name e.g. ",(0,t.jsx)(n.code,{children:"devnet"}),". ",(0,t.jsx)(n.strong,{children:"Note"}),": This defines the Terraform workspace name, which in turn is used\nto form resource names. Feel free to choose a different name if you are connecting to a different network."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"export WORKSPACE=devnet\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Create a directory for the workspace"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"mkdir -p ~/$WORKSPACE\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Create a storage bucket for storing the Terraform state on Google Cloud Storage. Use the console or this gcs command\nto create the bucket. The name of the bucket must be unique. See the Google Cloud Storage documentation,\n",(0,t.jsx)(n.a,{href:"https://cloud.google.com/storage/docs/creating-buckets#prereq-cli",children:"here"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"gsutil mb gs://BUCKET_NAME\n# for example\ngsutil mb gs://<project-name>-aptos-terraform-dev\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsxs)(n.li,{children:["Create Terraform file called ",(0,t.jsx)(n.code,{children:"main.tf"})," in your working directory:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd ~/$WORKSPACE\ntouch main.tf\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsxs)(n.li,{children:["Modify the ",(0,t.jsx)(n.code,{children:"main.tf"})," file to configure Terraform and create a PFN from the Terraform module."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note:"})," If you are using a different version of Terraform, you will need to use the ",(0,t.jsx)(n.code,{children:"tfenv"})," command to change the required version."]}),"\n",(0,t.jsxs)(n.p,{children:["You can find the Docker image tag for ",(0,t.jsx)(n.code,{children:"devnet"})," on the ",(0,t.jsx)(n.a,{href:"https://hub.docker.com/r/aptoslabs/validator/tags?page=1&ordering=last_updated&name=devnet",children:"Aptos Docker Hub"}),"."]}),"\n",(0,t.jsx)(n.admonition,{title:"Want to connect to a different network?",type:"caution",children:(0,t.jsxs)(n.p,{children:["If you wish to connect to a different network than ",(0,t.jsx)(n.code,{children:"devnet"}),", you will need to find the appropriate Docker image\ntag for that network and replace all references to it."]})}),"\n",(0,t.jsxs)(n.p,{children:["Example content for ",(0,t.jsx)(n.code,{children:"main.tf"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'terraform {\n  required_version = "~> 1.3.6"\n  backend "gcs" {\n    bucket = "BUCKET_NAME" # bucket name created in step 2\n    prefix = "state/fullnode"\n  }\n}\n\nmodule "fullnode" {\n  # download Terraform module from aptos-labs/aptos-core repo\n  source        = "github.com/aptos-labs/aptos-core.git//terraform/fullnode/gcp?ref=main"\n  region        = "us-central1"  # Specify the region\n  zone          = "c"            # Specify the zone suffix\n  project       = "gcp-fullnode" # Specify your GCP project ID\n  fullnode_name = "BUCKET_NAME" #bucket name created in step 2\n  era           = 1              # bump era number to wipe the chain\n  image_tag     = "devnet" # Specify the docker image tag\n}\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"5",children:["\n",(0,t.jsxs)(n.li,{children:["Initialize Terraform in the same directory of your ",(0,t.jsx)(n.code,{children:"main.tf"})," file:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"terraform init\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This will download all the Terraform dependencies into the ",(0,t.jsx)(n.code,{children:".terraform"})," folder."]}),"\n",(0,t.jsxs)(n.ol,{start:"6",children:["\n",(0,t.jsx)(n.li,{children:"Create a new Terraform workspace to isolate your environments:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"terraform workspace new $WORKSPACE\n# This command will list all workspaces\nterraform workspace list\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"7",children:["\n",(0,t.jsx)(n.li,{children:"Apply the configuration:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"terraform apply\n"})}),"\n",(0,t.jsx)(n.p,{children:"This might take a while to finish (10 - 20 minutes), Terraform will create all the resources on your cloud account."}),"\n",(0,t.jsx)(n.h2,{id:"validation",children:"Validation"}),"\n",(0,t.jsx)(n.p,{children:"Once Terraform apply finishes, you can follow this section to validate your deployment."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Configure your Kubernetes client to access the cluster you just deployed:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"gcloud container clusters get-credentials aptos-$WORKSPACE --zone <region_zone_name> --project <project_name>\n# for example:\ngcloud container clusters get-credentials aptos-devnet --zone us-central1-a --project aptos-fullnode\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"Check that your PFN pods are now running (this may take a few minutes):"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"kubectl get pods -n aptos\n"})}),"\n",(0,t.jsx)(n.p,{children:"You should see this:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"NAME                       READY   STATUS    RESTARTS   AGE\ndevnet0-aptos-fullnode-0   1/1     Running   0          56s\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsx)(n.li,{children:"Get your PFN IP:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"kubectl get svc -o custom-columns=IP:status.loadBalancer.ingress -n aptos\n"})}),"\n",(0,t.jsx)(n.p,{children:"You should see something like this:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-IP",children:"[map[ip:104.198.36.142]]\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsx)(n.li,{children:"Check the REST API, make sure that the ledger version is increasing:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"curl http://<IP>/v1\n# Example command syntax: curl http://104.198.36.142/v1\n"})}),"\n",(0,t.jsx)(n.p,{children:"You should see this something like this:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'{"chain_id":25,"epoch":"22","ledger_version":"9019844","oldest_ledger_version":"0","ledger_timestamp":"1661620200131348","node_role":"full_node","oldest_block_height":"0","block_height":"1825467"}\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"5",children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"To verify the correctness of your PFN, you will need to:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Set up a port-forwarding mechanism directly to the Aptos pod in one ssh terminal, and"}),"\n",(0,t.jsx)(n.li,{children:"Test it in another ssh terminal."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Follow the below steps:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Set up the port-forwarding to the aptos-fullnode pod. Use ",(0,t.jsx)(n.code,{children:"kubectl get pods -n aptos"})," to get the name of the pod:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"kubectl port-forward -n aptos <pod-name> 9101:9101\n# for example:\nkubectl port-forward -n aptos devnet0-aptos-fullnode-0 9101:9101\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Open a new ssh terminal. Execute the following curl calls to verify the correctness:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'curl -v http://0:9101/metrics 2> /dev/null | grep "aptos_state_sync_version{type=\\"synced\\"}"\n\ncurl -v http://0:9101/metrics 2> /dev/null | grep "aptos_connections{direction=\\"outbound\\""\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Exit port-forwarding when you are done by entering control-c in the terminal."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"pfn-identity-and-seed-peers",children:"PFN identity and seed peers"}),"\n",(0,t.jsx)(n.h3,{id:"static-identity",children:"Static identity"}),"\n",(0,t.jsxs)(n.p,{children:["If you want to configure your node with a static identity, first see the ",(0,t.jsx)(n.a,{href:"/nodes/full-node/network-identity-fullnode",children:"Generate a PFN Identity"})," tutorial\nto generate a static identity, and then follow the below instructions to configure your Terraform file."]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Generate a static identity for your PFN by following the guide: ",(0,t.jsx)(n.a,{href:"/nodes/full-node/network-identity-fullnode#generate-a-static-identity",children:"Creating a static identity for a PFN"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Modify the ",(0,t.jsx)(n.code,{children:"main.tf"})," to add ",(0,t.jsx)(n.code,{children:"fullnode_identity"})," entries in ",(0,t.jsx)(n.code,{children:"fullnode_helm_values"}),". This will configure the identity\nfor the PFN. Insert the correct values for your PFN's identity attributes. For example:"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'module "fullnode" {\n  # download Terraform module from aptos-labs/aptos-core repo\n  source        = "github.com/aptos-labs/aptos-core.git//terraform/fullnode/gcp?ref=main"\n  region        = "us-central1"  # Specify the region\n  zone          = "c"            # Specify the zone suffix\n  project       = "gcp-fullnode" # Specify your GCP project name\n  era           = 1              # bump era number to wipe the chain\n  image_tag     = "devnet"       # Specify the docker image tag to use\n\n  fullnode_helm_values = {\n    chain = {\n      name = "devnet"\n    }\n    # create fullnode from this identity config, so it will always have same peer id and address\n    fullnode_identity = {\n      type = "from_config"\n      key = "B8BD811A91D8E6E0C6DAC991009F189337378760B55F3AD05580235325615C74"\n      peer_id = "ca3579457555c80fc7bb39964eb298c414fd60f81a2f8eedb0244ec07a26e575"\n    }\n  }\n}\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsx)(n.li,{children:"Apply Terraform changes:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"terraform apply\n"})}),"\n",(0,t.jsx)(n.h3,{id:"seed-peers",children:"Seed peers"}),"\n",(0,t.jsxs)(n.p,{children:["You can add seed peers to allow your PFN to connect to specific nodes. See the guide\n",(0,t.jsx)(n.a,{href:"/nodes/full-node/fullnode-network-connections",children:"Generate a PFN Identity"})," for more information."]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Obtain the seed peer information."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Modify the ",(0,t.jsx)(n.code,{children:"main.tf"})," to add the seed peers in ",(0,t.jsx)(n.code,{children:"fullnode_helm_values"}),". This will configure the seeds for the PFN. For example:"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'module "fullnode" {\n    # download Terraform module from aptos-labs/aptos-core repo\n    source        = "github.com/aptos-labs/aptos-core.git//terraform/fullnode/gcp?ref=main"\n    region        = "us-central1"  # Specify the region\n    zone          = "c"            # Specify the zone suffix\n    project       = "gcp-fullnode" # Specify your GCP project name\n    era           = 1              # bump era number to wipe the chain\n    image_tag     = "dev_5b525691" # Specify the docker image tag to use\n\n    fullnode_helm_values = {\n      # add a list of peers as upstream\n      aptos_chains = {\n        devnet = {\n          seeds = {\n            "bb14af025d226288a3488b4433cf5cb54d6a710365a2d95ac6ffbd9b9198a86a" = {\n            addresses = ["/dns4/pfn0.node.devnet.aptoslabs.com/tcp/6182/noise-ik/bb14af025d226288a3488b4433cf5cb54d6a710365a2d95ac6ffbd9b9198a86a/handshake/0"]\n            role = "Upstream"\n            },\n            "7fe8523388084607cdf78ff40e3e717652173b436ae1809df4a5fcfc67f8fc61" = {\n            addresses = ["/dns4/pfn1.node.devnet.aptoslabs.com/tcp/6182/noise-ik/7fe8523388084607cdf78ff40e3e717652173b436ae1809df4a5fcfc67f8fc61/handshake/0"]\n            role = "Upstream"\n            },\n            "f6b135a59591677afc98168791551a0a476222516fdc55869d2b649c614d965b" = {\n            addresses = ["/dns4/pfn2.node.devnet.aptoslabs.com/tcp/6182/noise-ik/f6b135a59591677afc98168791551a0a476222516fdc55869d2b649c614d965b/handshake/0"]\n            role = "Upstream"\n            }\n          }\n        }\n      }\n    }\n  }\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsx)(n.li,{children:"Apply Terraform changes:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"terraform apply\n"})}),"\n",(0,t.jsx)(n.h2,{id:"check-logging",children:"Check logging"}),"\n",(0,t.jsx)(n.p,{children:"To check the logs of the pod, use the following commands:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# Get a list of the pods\nkubectl get pods -n aptos\n\n# Get logs of the pod\nkubectl logs <pod-name> -n aptos\n# for example:\nkubectl logs devnet0-aptos-fullnode-0 -n aptos\n"})}),"\n",(0,t.jsxs)(n.p,{children:["When using GKE, the logs of the cluster and pod will automatically show up in the Google Cloud console. From the console menu, choose ",(0,t.jsx)(n.code,{children:"Kubernetes Engine"}),". From the side menu, choose ",(0,t.jsx)(n.code,{children:"Workloads"}),". You will see all the pods from the cluster listed."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"GKE Workloads screenshot",src:o(74856).A+"",title:"GKE Workloads screenshot",width:"1999",height:"742"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"devnet0-aptos-fullnode"})," is the pod that is running the aptos fullnode container. Click on the pod to view details. You will see some metrics and other details about the pod."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"GKE Workloads Pod screenshot",src:o(11715).A+"",title:"GKE Workloads Pod screenshot",width:"1999",height:"976"})}),"\n",(0,t.jsxs)(n.p,{children:["Click the ",(0,t.jsx)(n.code,{children:"LOGS"})," tab to view the logs directly from the pod. If there are errors in the pod, you will see them here."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"GKE Workloads Pod Logs screenshot",src:o(63962).A+"",title:"GKE Workloads Pod Logs screenshot",width:"1999",height:"1113"})}),"\n",(0,t.jsxs)(n.p,{children:["Click the ",(0,t.jsx)(n.code,{children:"open in new window"})," icon to view the logs in the Log Explorer. This screen allows advanced searching in the logs."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"GKE Workloads Pod Logs Explorer screenshot",src:o(87733).A+"",title:"GKE Workloads Pod Logs Explorer screenshot",width:"1999",height:"678"})}),"\n",(0,t.jsx)(n.p,{children:"Other logging insights are available in the Logs Dashboard"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"GKE Workloads Pod Logs Dashboard screenshot",src:o(35468).A+"",title:"GKE Workloads Pod Logs Dashboard screenshot",width:"1999",height:"955"})}),"\n",(0,t.jsxs)(n.p,{children:["Additional ",(0,t.jsx)(n.a,{href:"https://cloud.google.com/logging/docs",children:"features"})," are available through ",(0,t.jsx)(n.a,{href:"https://cloud.google.com/logging",children:"Cloud Logging"}),", including creating log-based metrics, logging sinks and log buckets."]}),"\n",(0,t.jsx)(n.h2,{id:"check-monitoring",children:"Check monitoring"}),"\n",(0,t.jsxs)(n.p,{children:["Google cloud captures many metrics from the cluster and makes them easily viewable in the console. From the console menu, choose ",(0,t.jsx)(n.code,{children:"Kubernetes Engine"}),". Click on the cluster that aptos is deployed to. Click on the ",(0,t.jsx)(n.code,{children:"Operations"})," link at the top right. Click on the ",(0,t.jsx)(n.code,{children:"Metrics"})," sub-tab to view specific cluster metrics."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"GKE Monitoring metrics screenshot",src:o(49263).A+"",title:"GKE Monitoring metrics screenshot",width:"1999",height:"1639"})}),"\n",(0,t.jsxs)(n.p,{children:["Click the ",(0,t.jsx)(n.code,{children:"View in Cloud Monitoring"})," link at the top to view the built-in GKE ",(0,t.jsx)(n.a,{href:"https://cloud.google.com/stackdriver/docs/solutions/gke/observing",children:"dashboard"})," for the cluster."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"GKE Monitoring dashboard screenshot",src:o(30356).A+"",title:"GKE Monitoring dashboard screenshot",width:"1999",height:"921"})}),"\n",(0,t.jsxs)(n.p,{children:["Google Cloud ",(0,t.jsx)(n.a,{href:"https://cloud.google.com/monitoring",children:"Monitoring"})," has many other features to easily monitor the cluster and pods. You can configure ",(0,t.jsx)(n.a,{href:"https://cloud.google.com/monitoring/uptime-checks/introduction",children:"uptime checks"})," for the services and configure ",(0,t.jsx)(n.a,{href:"https://cloud.google.com/monitoring/alerts/using-alerting-ui",children:"alerts"})," for when the metrics reach a certain ",(0,t.jsx)(n.a,{href:"https://cloud.google.com/stackdriver/docs/solutions/slo-monitoring/sli-metrics/overview",children:"threshold"}),"."]}),"\n",(0,t.jsx)(n.admonition,{title:"Verify your PFN",type:"tip",children:(0,t.jsxs)(n.p,{children:["If you want to verify that your PFN is running correctly, you can follow the instructions in the ",(0,t.jsx)(n.a,{href:"/nodes/full-node/verify-pfn",children:"Verify a PFN"})," guide."]})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},74856:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/tutorial-gcp-logging1-b2eed3ddcdc3f32fa0a98d156eb576c3.png"},11715:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/tutorial-gcp-logging2-7c7394435178b639ad3c49537270c5ca.png"},63962:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/tutorial-gcp-logging3-ce881ec60dd529f88fde99a3197bf2f1.png"},87733:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/tutorial-gcp-logging4-b79b3db6552a833070107f26138f72da.png"},35468:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/tutorial-gcp-logging5-78873facafd1c13b8963cf9520972f8f.png"},49263:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/tutorial-gcp-mon1-8e519d888d8278e3905c2a853c735011.png"},30356:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/tutorial-gcp-mon2-daf3266735be444309cf6445df4e1c68.png"},83581:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>l});var t=o(11855);const s={},r=t.createContext(s);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);