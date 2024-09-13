"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6182],{3362:(e,l,i)=>{i.r(l),i.d(l,{assets:()=>o,contentTitle:()=>n,default:()=>d,frontMatter:()=>r,metadata:()=>h,toc:()=>c});var t=i(5893),s=i(1151);const r={title:"MLflow 1.28.0",slug:"1.28.0",authors:["mlflow-maintainers"]},n=void 0,h={permalink:"/mlflow-website/releases/1.28.0",source:"@site/releases/2022-08-11-1.28.0-release.md",title:"MLflow 1.28.0",description:"We are happy to announce the availability of MLflow 1.28.0!",date:"2022-08-11T00:00:00.000Z",formattedDate:"August 11, 2022",tags:[],readingTime:3.81,hasTruncateMarker:!1,authors:[{name:"MLflow maintainers",title:"MLflow maintainers",url:"https://github.com/mlflow/mlflow.git",imageURL:"https://github.com/mlflow-automation.png",key:"mlflow-maintainers"}],frontMatter:{title:"MLflow 1.28.0",slug:"1.28.0",authors:["mlflow-maintainers"]},unlisted:!1,prevItem:{title:"MLflow 1.29.0",permalink:"/mlflow-website/releases/1.29.0"},nextItem:{title:"MLflow 1.27.0",permalink:"/mlflow-website/releases/1.27.0"}},o={authorsImageUrls:[void 0]},c=[];function a(e){const l={a:"a",code:"code",li:"li",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(l.p,{children:["We are happy to announce the availability of ",(0,t.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/releases/tag/v1.28.0",children:"MLflow 1.28.0"}),"!"]}),"\n",(0,t.jsx)(l.p,{children:"MLflow 1.28.0 includes several major features and improvements:"}),"\n",(0,t.jsx)(l.p,{children:"Features:"}),"\n",(0,t.jsxs)(l.ul,{children:["\n",(0,t.jsxs)(l.li,{children:["[Pipelines] Log the full Pipeline runtime configuration to MLflow Tracking during Pipeline execution (",(0,t.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6359",children:"#6359"}),", ",(0,t.jsx)(l.a,{href:"https://github.com/jinzhang21",children:"@jinzhang21"}),")"]}),"\n",(0,t.jsxs)(l.li,{children:["[Pipelines] Add ",(0,t.jsx)(l.code,{children:"pipeline.yaml"})," configurations to specify the Model Registry backend used for model registration (",(0,t.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6284",children:"#6284"}),", ",(0,t.jsx)(l.a,{href:"https://github.com/sunishsheth2009",children:"@sunishsheth2009"}),")"]}),"\n",(0,t.jsxs)(l.li,{children:["[Pipelines] Support optionally skipping the ",(0,t.jsx)(l.code,{children:"transform"})," step of the scikit-learn regression pipeline (",(0,t.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6362",children:"#6362"}),", ",(0,t.jsx)(l.a,{href:"https://github.com/sunishsheth2009",children:"@sunishsheth2009"}),")"]}),"\n",(0,t.jsxs)(l.li,{children:["[Pipelines] Add UI links to Runs and Models in Pipeline Step Cards on Databricks (",(0,t.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6294",children:"#6294"}),", ",(0,t.jsx)(l.a,{href:"https://github.com/dbczumar",children:"@dbczumar"}),")"]}),"\n",(0,t.jsxs)(l.li,{children:["[Tracking] Introduce ",(0,t.jsx)(l.code,{children:"mlflow.search_experiments()"})," API for searching experiments by name and by tags (",(0,t.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6333",children:"#6333"}),", ",(0,t.jsx)(l.a,{href:"https://github.com/WeichenXu123",children:"@WeichenXu123"}),"; ",(0,t.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6227",children:"#6227"}),", ",(0,t.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6172",children:"#6172"}),", ",(0,t.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6154",children:"#6154"}),", ",(0,t.jsx)(l.a,{href:"https://github.com/harupy",children:"@harupy"}),")"]}),"\n",(0,t.jsxs)(l.li,{children:["[Tracking] Increase the maximum parameter value length supported by File and SQL backends to 500 characters (",(0,t.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6358",children:"#6358"}),", ",(0,t.jsx)(l.a,{href:"https://github.com/johnyNJ",children:"@johnyNJ"}),")"]}),"\n",(0,t.jsxs)(l.li,{children:["[Tracking] Introduce an ",(0,t.jsx)(l.code,{children:"--older-than"})," flag to ",(0,t.jsx)(l.code,{children:"mlflow gc"})," for removing runs based on deletion time (",(0,t.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6354",children:"#6354"}),", ",(0,t.jsx)(l.a,{href:"https://github.com/Jason-CKY",children:"@Jason-CKY"}),")"]}),"\n",(0,t.jsxs)(l.li,{children:["[Tracking] Add ",(0,t.jsx)(l.code,{children:"MLFLOW_SQLALCHEMYSTORE_POOL_RECYCLE"})," environment variable for recycling SQLAlchemy connections (",(0,t.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6344",children:"#6344"}),", ",(0,t.jsx)(l.a,{href:"https://github.com/postrational",children:"@postrational"}),")"]}),"\n",(0,t.jsxs)(l.li,{children:["[UI] Display deeply nested runs in the Runs Table on the Experiment Page (",(0,t.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6065",children:"#6065"}),", ",(0,t.jsx)(l.a,{href:"https://github.com/tospe",children:"@tospe"}),")"]}),"\n",(0,t.jsxs)(l.li,{children:["[UI] Add box plot visualization for metrics to the Compare Runs page (",(0,t.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6308",children:"#6308"}),", ",(0,t.jsx)(l.a,{href:"https://github.com/ahlag",children:"@ahlag"}),")"]}),"\n",(0,t.jsxs)(l.li,{children:["[UI] Display tags on the Compare Runs page (",(0,t.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6164",children:"#6164"}),", ",(0,t.jsx)(l.a,{href:"https://github.com/CaioCavalcanti",children:"@CaioCavalcanti"}),")"]}),"\n",(0,t.jsxs)(l.li,{children:["[UI] Use scientific notation for axes when viewing metric plots in log scale (",(0,t.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6176",children:"#6176"}),", ",(0,t.jsx)(l.a,{href:"https://github.com/RajezMariner",children:"@RajezMariner"}),")"]}),"\n",(0,t.jsxs)(l.li,{children:["[UI] Add button to Metrics page for downloading metrics as CSV (",(0,t.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6048",children:"#6048"}),", ",(0,t.jsx)(l.a,{href:"https://github.com/rafaelvp-db",children:"@rafaelvp-db"}),")"]}),"\n",(0,t.jsxs)(l.li,{children:["[UI] Include NaN and +/- infinity values in plots on the Metrics page (",(0,t.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6422",children:"#6422"}),", ",(0,t.jsx)(l.a,{href:"https://github.com/hubertzub-db",children:"@hubertzub-db"}),")"]}),"\n",(0,t.jsxs)(l.li,{children:["[Tracking / Model Registry] Introduce environment variables to control retry behavior and timeouts for REST API requests (",(0,t.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/5745",children:"#5745"}),", ",(0,t.jsx)(l.a,{href:"https://github.com/peterdhansen",children:"@peterdhansen"}),")"]}),"\n",(0,t.jsxs)(l.li,{children:["[Tracking / Model Registry] Make ",(0,t.jsx)(l.code,{children:"MlflowClient"})," importable as ",(0,t.jsx)(l.code,{children:"mlflow.MlflowClient"})," (",(0,t.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6085",children:"#6085"}),", ",(0,t.jsx)(l.a,{href:"https://github.com/subramaniam02",children:"@subramaniam02"}),")"]}),"\n",(0,t.jsxs)(l.li,{children:["[Model Registry] Add support for searching registered models and model versions by tags (",(0,t.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6413",children:"#6413"}),", ",(0,t.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6411",children:"#6411"}),", ",(0,t.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6320",children:"#6320"}),", ",(0,t.jsx)(l.a,{href:"https://github.com/WeichenXu123",children:"@WeichenXu123"}),")"]}),"\n",(0,t.jsxs)(l.li,{children:["[Model Registry] Add ",(0,t.jsx)(l.code,{children:"stage"})," parameter to ",(0,t.jsx)(l.code,{children:"set_model_version_tag()"})," (",(0,t.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6185",children:"#6185"}),", ",(0,t.jsx)(l.a,{href:"https://github.com/subramaniam02",children:"@subramaniam02"}),")"]}),"\n",(0,t.jsxs)(l.li,{children:["[Model Registry] Add ",(0,t.jsx)(l.code,{children:"--registry-store-uri"})," flag to ",(0,t.jsx)(l.code,{children:"mlflow server"})," for specifying the Model Registry backend URI (",(0,t.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6142",children:"#6142"}),", ",(0,t.jsx)(l.a,{href:"https://github.com/Secbone",children:"@Secbone"}),")"]}),"\n",(0,t.jsxs)(l.li,{children:["[Models] Improve performance of Spark Model logging on Databricks (",(0,t.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6282",children:"#6282"}),", ",(0,t.jsx)(l.a,{href:"https://github.com/bbarnes52",children:"@bbarnes52"}),")"]}),"\n",(0,t.jsxs)(l.li,{children:["[Models] Include Pandas Series names in inferred model schemas (",(0,t.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6361",children:"#6361"}),", ",(0,t.jsx)(l.a,{href:"https://github.com/RynoXLI",children:"@RynoXLI"}),")"]}),"\n",(0,t.jsxs)(l.li,{children:["[Scoring] Make ",(0,t.jsx)(l.code,{children:"model_uri"})," optional in ",(0,t.jsx)(l.code,{children:"mlflow models build-docker"})," to support building generic model serving images (",(0,t.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6302",children:"#6302"}),", ",(0,t.jsx)(l.a,{href:"https://github.com/harupy",children:"@harupy"}),")"]}),"\n",(0,t.jsxs)(l.li,{children:["[R] Support logging of NA and NaN parameter values (",(0,t.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6263",children:"#6263"}),", ",(0,t.jsx)(l.a,{href:"https://github.com/nathaneastwood",children:"@nathaneastwood"}),")"]}),"\n"]}),"\n",(0,t.jsx)(l.p,{children:"Bug fixes and documentation updates:"}),"\n",(0,t.jsxs)(l.ul,{children:["\n",(0,t.jsxs)(l.li,{children:["[Pipelines] Improve scikit-learn regression pipeline latency by limiting dataset profiling to the first 100 columns (",(0,t.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6297",children:"#6297"}),", ",(0,t.jsx)(l.a,{href:"https://github.com/sunishsheth2009",children:"@sunishsheth2009"}),")"]}),"\n",(0,t.jsxs)(l.li,{children:["[Pipelines] Use ",(0,t.jsx)(l.code,{children:"xdg-open"})," instead of ",(0,t.jsx)(l.code,{children:"open"})," for viewing Pipeline results on Linux systems (",(0,t.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6326",children:"#6326"}),", ",(0,t.jsx)(l.a,{href:"https://github.com/strangiato",children:"@strangiato"}),")"]}),"\n",(0,t.jsxs)(l.li,{children:["[Pipelines] Fix a bug that skipped Step Card rendering in Jupyter Notebooks (",(0,t.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6378",children:"#6378"}),", ",(0,t.jsx)(l.a,{href:"https://github.com/apurva-koti",children:"@apurva-koti"}),")"]}),"\n",(0,t.jsxs)(l.li,{children:["[Tracking] Use the 401 HTTP response code in authorization failure REST API responses, instead of 500 (",(0,t.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6106",children:"#6106"}),", ",(0,t.jsx)(l.a,{href:"https://github.com/balvisio",children:"@balvisio"}),")"]}),"\n",(0,t.jsxs)(l.li,{children:["[Tracking] Correctly classify artifacts as files and directories when using Azure Blob Storage (",(0,t.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6237",children:"#6237"}),", ",(0,t.jsx)(l.a,{href:"https://github.com/nerdinand",children:"@nerdinand"}),")"]}),"\n",(0,t.jsxs)(l.li,{children:["[Tracking] Fix a bug in the File backend that caused run metadata to be lost in the event of a failed write (",(0,t.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6388",children:"#6388"}),", ",(0,t.jsx)(l.a,{href:"https://github.com/dbczumar",children:"@dbczumar"}),")"]}),"\n",(0,t.jsxs)(l.li,{children:["[Tracking] Adjust ",(0,t.jsx)(l.code,{children:"mlflow.pyspark.ml.autolog()"})," to only log model signatures for supported input / output data types (",(0,t.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6365",children:"#6365"}),", ",(0,t.jsx)(l.a,{href:"https://github.com/harupy",children:"@harupy"}),")"]}),"\n",(0,t.jsxs)(l.li,{children:["[Tracking] Adjust ",(0,t.jsx)(l.code,{children:"mlflow.tensorflow.autolog()"})," to log TensorFlow early stopping callback info when ",(0,t.jsx)(l.code,{children:"log_models=False"})," is specified (",(0,t.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6170",children:"#6170"}),", ",(0,t.jsx)(l.a,{href:"https://github.com/WeichenXu123",children:"@WeichenXu123"}),")"]}),"\n",(0,t.jsxs)(l.li,{children:["[Tracking] Fix signature and input example logging errors in ",(0,t.jsx)(l.code,{children:"mlflow.sklearn.autolog()"})," for models containing transformers (",(0,t.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6230",children:"#6230"}),", ",(0,t.jsx)(l.a,{href:"https://github.com/dbczumar",children:"@dbczumar"}),")"]}),"\n",(0,t.jsxs)(l.li,{children:["[Tracking] Fix a failure in ",(0,t.jsx)(l.code,{children:"mlflow gc"})," that occurred when removing a run whose artifacts had been previously deleted (",(0,t.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6165",children:"#6165"}),", ",(0,t.jsx)(l.a,{href:"https://github.com/dbczumar",children:"@dbczumar"}),")"]}),"\n",(0,t.jsxs)(l.li,{children:["[Tracking] Add missing ",(0,t.jsx)(l.code,{children:"sqlparse"})," library to MLflow Skinny client, which is required for search support (",(0,t.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6174",children:"#6174"}),", ",(0,t.jsx)(l.a,{href:"https://github.com/dbczumar",children:"@dbczumar"}),")"]}),"\n",(0,t.jsxs)(l.li,{children:["[Tracking / Model Registry] Fix an ",(0,t.jsx)(l.code,{children:"mlflow server"})," bug that rejected parameters and tags with empty string values (",(0,t.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6179",children:"#6179"}),", ",(0,t.jsx)(l.a,{href:"https://github.com/dbczumar",children:"@dbczumar"}),")"]}),"\n",(0,t.jsxs)(l.li,{children:["[Model Registry] Fix a failure preventing model version schemas from being downloaded with ",(0,t.jsx)(l.code,{children:"--serve-arifacts"})," enabled (",(0,t.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6355",children:"#6355"}),", ",(0,t.jsx)(l.a,{href:"https://github.com/abbas123456",children:"@abbas123456"}),")"]}),"\n",(0,t.jsxs)(l.li,{children:["[Scoring] Patch the Java Model Server to support MLflow Models logged on recent versions of the Databricks Runtime (",(0,t.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6337",children:"#6337"}),", ",(0,t.jsx)(l.a,{href:"https://github.com/dbczumar",children:"@dbczumar"}),")"]}),"\n",(0,t.jsxs)(l.li,{children:["[Scoring] Verify that either the deployment name or endpoint is specified when invoking the ",(0,t.jsx)(l.code,{children:"mlflow deployments predict"})," CLI (",(0,t.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6323",children:"#6323"}),", ",(0,t.jsx)(l.a,{href:"https://github.com/dbczumar",children:"@dbczumar"}),")"]}),"\n",(0,t.jsxs)(l.li,{children:["[Scoring] Properly encode datetime columns when performing batch inference with ",(0,t.jsx)(l.code,{children:"mlflow.pyfunc.spark_udf()"})," (",(0,t.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6244",children:"#6244"}),", ",(0,t.jsx)(l.a,{href:"https://github.com/harupy",children:"@harupy"}),")"]}),"\n",(0,t.jsxs)(l.li,{children:["[Projects] Fix an issue where local directory paths were misclassified as Git URIs when running Projects (",(0,t.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6218",children:"#6218"}),", ",(0,t.jsx)(l.a,{href:"https://github.com/ElefHead",children:"@ElefHead"}),")"]}),"\n",(0,t.jsxs)(l.li,{children:["[R] Fix metric logging behavior for +/- infinity values (",(0,t.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6271",children:"#6271"}),", ",(0,t.jsx)(l.a,{href:"https://github.com/nathaneastwood",children:"@nathaneastwood"}),")"]}),"\n",(0,t.jsxs)(l.li,{children:["[Docs] Move Python API docs for ",(0,t.jsx)(l.code,{children:"MlflowClient"})," from ",(0,t.jsx)(l.code,{children:"mlflow.tracking"})," to ",(0,t.jsx)(l.code,{children:"mlflow.client"})," (",(0,t.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6405",children:"#6405"}),", ",(0,t.jsx)(l.a,{href:"https://github.com/dbczumar",children:"@dbczumar"}),")"]}),"\n",(0,t.jsxs)(l.li,{children:["[Docs] Document that MLflow Pipelines requires Make (",(0,t.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6216",children:"#6216"}),", ",(0,t.jsx)(l.a,{href:"https://github.com/dbczumar",children:"@dbczumar"}),")"]}),"\n",(0,t.jsxs)(l.li,{children:["[Docs] Improve documentation for developing and testing MLflow JS changes in ",(0,t.jsx)(l.code,{children:"CONTRIBUTING.rst"})," (",(0,t.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/pull/6330",children:"#6330"}),", ",(0,t.jsx)(l.a,{href:"https://github.com/ahlag",children:"@ahlag"}),")"]}),"\n"]}),"\n",(0,t.jsxs)(l.p,{children:["For a comprehensive list of changes, see the ",(0,t.jsx)(l.a,{href:"https://github.com/mlflow/mlflow/releases/tag/v1.28.0",children:"release change log"}),", and check out the latest documentation on ",(0,t.jsx)(l.a,{href:"http://mlflow.org/",children:"mlflow.org"}),"."]})]})}function d(e={}){const{wrapper:l}={...(0,s.a)(),...e.components};return l?(0,t.jsx)(l,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},1151:(e,l,i)=>{i.d(l,{Z:()=>h,a:()=>n});var t=i(7294);const s={},r=t.createContext(s);function n(e){const l=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function h(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),t.createElement(r.Provider,{value:l},e.children)}}}]);