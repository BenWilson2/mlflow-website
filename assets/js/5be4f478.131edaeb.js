"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[534],{4739:(e,l,t)=>{t.r(l),t.d(l,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>h,toc:()=>a});var i=t(5893),n=t(1151);const r={title:"MLflow 1.29.0",slug:"1.29.0",authors:["mlflow-maintainers"]},s=void 0,h={permalink:"/mlflow-website/releases/1.29.0",source:"@site/releases/2022-09-19-1.29.0-release.md",title:"MLflow 1.29.0",description:"We are happy to announce the availability of MLflow 1.29.0!",date:"2022-09-19T00:00:00.000Z",formattedDate:"September 19, 2022",tags:[],readingTime:2.535,hasTruncateMarker:!1,authors:[{name:"MLflow maintainers",title:"MLflow maintainers",url:"https://github.com/mlflow/mlflow.git",imageURL:"https://github.com/mlflow-automation.png",key:"mlflow-maintainers"}],frontMatter:{title:"MLflow 1.29.0",slug:"1.29.0",authors:["mlflow-maintainers"]},unlisted:!1,prevItem:{title:"MLflow 1.30.0",permalink:"/mlflow-website/releases/1.30.0"},nextItem:{title:"MLflow 1.28.0",permalink:"/mlflow-website/releases/1.28.0"}},o={authorsImageUrls:[void 0]},a=[];function c(e){const l={a:"a",li:"li",p:"p",ul:"ul",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(l.p,{children:["We are happy to announce the availability of ",(0,i.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/releases/tag/v1.29.0",children:"MLflow 1.29.0"}),"!"]}),"\n",(0,i.jsx)(l.p,{children:"MLflow 1.29.0 includes several major features and improvements:"}),"\n",(0,i.jsx)(l.p,{children:"Features:"}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsxs)(l.li,{children:["[Pipelines] Improve performance and fidelity of dataset profiling in the scikit-learn regression Pipeline (",(0,i.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6792",children:"#6792"}),", ",(0,i.jsx)(l.a,{href:"https://github.com/sunishsheth2009",children:"@sunishsheth2009"}),")"]}),"\n",(0,i.jsxs)(l.li,{children:["[Pipelines] Add an mlflow pipelines get-artifact CLI for retrieving Pipeline artifacts (",(0,i.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6517",children:"#6517"}),", ",(0,i.jsx)(l.a,{href:"https://github.com/prithvikannan",children:"@prithvikannan"}),")"]}),"\n",(0,i.jsxs)(l.li,{children:["[Pipelines] Introduce an option for skipping dataset profiling to the scikit-learn regression Pipeline (",(0,i.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6456",children:"#6456"}),", ",(0,i.jsx)(l.a,{href:"https://github.com/apurva-koti",children:"@apurva-koti"}),")"]}),"\n",(0,i.jsxs)(l.li,{children:["[Pipelines / UI] Display an mlflow pipelines CLI command for reproducing a Pipeline run in the MLflow UI (",(0,i.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6376",children:"#6376"}),", ",(0,i.jsx)(l.a,{href:"https://github.com/hubertzub-db",children:"@hubertzub-db"}),")"]}),"\n",(0,i.jsxs)(l.li,{children:["[Tracking] Automatically generate friendly names for Runs if not supplied by the user (",(0,i.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6736",children:"#6736"}),", ",(0,i.jsx)(l.a,{href:"https://github.com/BenWilson2",children:"@BenWilson2"}),")"]}),"\n",(0,i.jsxs)(l.li,{children:["[Tracking] Add load_text(), load_image() and load_dict() fluent APIs for convenient artifact loading (",(0,i.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6475",children:"#6475"}),", ",(0,i.jsx)(l.a,{href:"https://github.com/subramaniam02",children:"@subramaniam02"}),")"]}),"\n",(0,i.jsxs)(l.li,{children:["[Tracking] Add creation_time and last_update_time attributes to the Experiment class (",(0,i.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6756",children:"#6756"}),", ",(0,i.jsx)(l.a,{href:"https://github.com/subramaniam02",children:"@subramaniam02"}),")"]}),"\n",(0,i.jsxs)(l.li,{children:["[Tracking] Add official MLflow Tracking Server Dockerfiles to the MLflow repository (",(0,i.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6731",children:"#6731"}),", ",(0,i.jsx)(l.a,{href:"https://github.com/oojo12",children:"@oojo12"}),")"]}),"\n",(0,i.jsxs)(l.li,{children:["[Tracking] Add searchExperiments API to Java client and deprecate listExperiments (",(0,i.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6561",children:"#6561"}),", ",(0,i.jsx)(l.a,{href:"https://github.com/dbczumar",children:"@dbczumar"}),")"]}),"\n",(0,i.jsxs)(l.li,{children:["[Tracking] Add mlflow_search_experiments API to R client and deprecate mlflow_list_experiments (",(0,i.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6576",children:"#6576"}),", ",(0,i.jsx)(l.a,{href:"https://github.com/dbczumar",children:"@dbczumar"}),")"]}),"\n",(0,i.jsxs)(l.li,{children:["[UI] Make URLs clickable in the MLflow Tracking UI (",(0,i.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6526",children:"#6526"}),", ",(0,i.jsx)(l.a,{href:"https://github.com/marijncv",children:"@marijncv"}),")"]}),"\n",(0,i.jsxs)(l.li,{children:["[UI] Introduce support for csv data preview within the artifact viewer pane (",(0,i.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6567",children:"#6567"}),", ",(0,i.jsx)(l.a,{href:"https://github.com/nnethery",children:"@nnethery"}),")"]}),"\n",(0,i.jsxs)(l.li,{children:["[Model Registry / Models] Introduce mlflow.models.add_libraries_to_model() API for adding libraries to an MLflow Model (",(0,i.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6586",children:"#6586"}),", ",(0,i.jsx)(l.a,{href:"https://github.com/arjundc-db",children:"@arjundc-db"}),")"]}),"\n",(0,i.jsxs)(l.li,{children:["[Models] Add model validation support to mlflow.evaluate() (",(0,i.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6582",children:"#6582"}),", ",(0,i.jsx)(l.a,{href:"https://github.com/zhe-db",children:"@zhe-db"}),", ",(0,i.jsx)(l.a,{href:"https://github.com/jerrylian-db",children:"@jerrylian-db"}),")"]}),"\n",(0,i.jsxs)(l.li,{children:["[Models] Introduce sample_weights support to mlflow.evaluate() (",(0,i.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6806",children:"#6806"}),", ",(0,i.jsx)(l.a,{href:"https://github.com/dbczumar",children:"@dbczumar"}),")"]}),"\n",(0,i.jsxs)(l.li,{children:["[Models] Add pos_label support to mlflow.evaluate() for identifying the positive class (",(0,i.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6696",children:"#6696"}),", ",(0,i.jsx)(l.a,{href:"https://github.com/harupy",children:"@harupy"}),")"]}),"\n",(0,i.jsxs)(l.li,{children:["[Models] Make the metric name prefix and dataset info configurable in mlflow.evaluate() (",(0,i.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6593",children:"#6593"}),", ",(0,i.jsx)(l.a,{href:"https://github.com/dbczumar",children:"@dbczumar"}),")"]}),"\n",(0,i.jsxs)(l.li,{children:["[Models] Add utility for validating the compatibility of a dataset with a model signature (",(0,i.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6494",children:"#6494"}),", ",(0,i.jsx)(l.a,{href:"https://github.com/serena-ruan",children:"@serena-ruan"}),")"]}),"\n",(0,i.jsxs)(l.li,{children:["[Models] Add predict_proba() support to the pyfunc representation of scikit-learn models (",(0,i.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6631",children:"#6631"}),", ",(0,i.jsx)(l.a,{href:"https://github.com/skylarbpayne",children:"@skylarbpayne"}),")"]}),"\n",(0,i.jsxs)(l.li,{children:["[Models] Add support for Decimal type inference to MLflow Model schemas (",(0,i.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6600",children:"#6600"}),", ",(0,i.jsx)(l.a,{href:"https://github.com/shitaoli-db",children:"@shitaoli-db"}),")"]}),"\n",(0,i.jsxs)(l.li,{children:["[Models] Add new CLI command for generating Dockerfiles for model serving (",(0,i.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6591",children:"#6591"}),", ",(0,i.jsx)(l.a,{href:"https://github.com/anuarkaliyev23",children:"@anuarkaliyev23"}),")"]}),"\n",(0,i.jsxs)(l.li,{children:["[Scoring] Add /health endpoint to scoring server (",(0,i.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6574",children:"#6574"}),", ",(0,i.jsx)(l.a,{href:"https://github.com/gabriel-milan",children:"@gabriel-milan"}),")"]}),"\n",(0,i.jsxs)(l.li,{children:["[Scoring] Support specifying a variant_name during Sagemaker deployment (",(0,i.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6486",children:"#6486"}),", ",(0,i.jsx)(l.a,{href:"https://github.com/nfarley-soaren",children:"@nfarley-soaren"}),")"]}),"\n",(0,i.jsxs)(l.li,{children:["[Scoring] Support specifying a data_capture_config during SageMaker deployment (",(0,i.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6423",children:"#6423"}),", ",(0,i.jsx)(l.a,{href:"https://github.com/jonwiggins",children:"@jonwiggins"}),")"]}),"\n"]}),"\n",(0,i.jsx)(l.p,{children:"Bug fixes:"}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsxs)(l.li,{children:["[Tracking] Make Run and Experiment deletion and restoration idempotent (",(0,i.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6641",children:"#6641"}),", ",(0,i.jsx)(l.a,{href:"https://github.com/dbczumar",children:"@dbczumar"}),")"]}),"\n",(0,i.jsxs)(l.li,{children:["[UI] Fix an alignment bug affecting the Experiments list in the MLflow UI (",(0,i.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6569",children:"#6569"}),", ",(0,i.jsx)(l.a,{href:"https://github.com/sunishsheth2009",children:"@sunishsheth2009"}),")"]}),"\n",(0,i.jsxs)(l.li,{children:["[Models] Fix a regression in the directory path structure of logged Spark Models that occurred in MLflow 1.28.0 (",(0,i.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6683",children:"#6683"}),", ",(0,i.jsx)(l.a,{href:"https://github.com/gwy1995",children:"@gwy1995"}),")"]}),"\n",(0,i.jsxs)(l.li,{children:["[Models] No longer reload the main module when loading model code (",(0,i.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6647",children:"#6647"}),", ",(0,i.jsx)(l.a,{href:"https://github.com/Jooakim",children:"@Jooakim"}),")"]}),"\n",(0,i.jsxs)(l.li,{children:["[Artifacts] Fix an mlflow server compatibility issue with HDFS when running in --serve-artifacts mode (",(0,i.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6482",children:"#6482"}),", ",(0,i.jsx)(l.a,{href:"https://github.com/shidianshifen",children:"@shidianshifen"}),")"]}),"\n",(0,i.jsxs)(l.li,{children:["[Scoring] Fix an inference failure with 1-dimensional tensor inputs in TensorFlow and Keras (",(0,i.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6796",children:"#6796"}),", ",(0,i.jsx)(l.a,{href:"https://github.com/LiamConnell",children:"@LiamConnell"}),")"]}),"\n"]}),"\n",(0,i.jsx)(l.p,{children:"Documentation updates:"}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsxs)(l.li,{children:["[Tracking] Mark the SearchExperiments API as stable (",(0,i.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6551",children:"#6551"}),", ",(0,i.jsx)(l.a,{href:"https://github.com/dbczumar",children:"@dbczumar"}),")"]}),"\n",(0,i.jsxs)(l.li,{children:["[Tracking / Model Registry] Deprecate the ListExperiments, ListRegisteredModels, and list_run_infos() APIs (",(0,i.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6550",children:"#6550"}),", ",(0,i.jsx)(l.a,{href:"https://github.com/dbczumar",children:"@dbczumar"}),")"]}),"\n",(0,i.jsxs)(l.li,{children:["[Scoring] Deprecate mlflow.sagemaker.deploy() in favor of SageMakerDeploymentClient.create() (",(0,i.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6651",children:"#6651"}),", ",(0,i.jsx)(l.a,{href:"https://github.com/dbczumar",children:"@dbczumar"}),")"]}),"\n"]}),"\n",(0,i.jsxs)(l.p,{children:["For a comprehensive list of changes, see the ",(0,i.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/releases/tag/v1.29.0",children:"release change log"}),", and check out the latest documentation on ",(0,i.jsx)(l.a,{href:"http://mlflow.org/",children:"mlflow.org"}),"."]})]})}function m(e={}){const{wrapper:l}={...(0,n.a)(),...e.components};return l?(0,i.jsx)(l,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,l,t)=>{t.d(l,{Z:()=>h,a:()=>s});var i=t(7294);const n={},r=i.createContext(n);function s(e){const l=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function h(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),i.createElement(r.Provider,{value:l},e.children)}}}]);