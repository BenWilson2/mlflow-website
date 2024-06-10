"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8874],{5852:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>h,contentTitle:()=>r,default:()=>d,frontMatter:()=>n,metadata:()=>o,toc:()=>a});var i=l(5893),s=l(1151);const n={title:"MLflow 2.12.2",slug:"2.12.2",authors:["mlflow-maintainers"]},r=void 0,o={permalink:"/mlflow-website/releases/2.12.2",source:"@site/releases/2024-05-08-2.12.2-release.md",title:"MLflow 2.12.2",description:"MLflow 2.12.2 is a patch release that includes several bug fixes and integration improvements to existing features.",date:"2024-05-08T00:00:00.000Z",formattedDate:"May 8, 2024",tags:[],readingTime:1.96,hasTruncateMarker:!1,authors:[{name:"MLflow maintainers",title:"MLflow maintainers",url:"https://github.com/mlflow/mlflow.git",imageURL:"https://github.com/mlflow-automation.png",key:"mlflow-maintainers"}],frontMatter:{title:"MLflow 2.12.2",slug:"2.12.2",authors:["mlflow-maintainers"]},unlisted:!1,prevItem:{title:"MLflow 2.13.0",permalink:"/mlflow-website/releases/2.13.0"},nextItem:{title:"MLflow 2.12.1",permalink:"/mlflow-website/releases/2.12.1"}},h={authorsImageUrls:[void 0]},a=[];function c(e){const t={a:"a",code:"code",li:"li",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"MLflow 2.12.2 is a patch release that includes several bug fixes and integration improvements to existing features."}),"\n",(0,i.jsx)(t.p,{children:"New features that are introduced in this patch release are intended to provide a foundation to further major features that will be released in the next 2 minor releases."}),"\n",(0,i.jsx)(t.p,{children:"Features:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["[Models] Add an environment configuration flag to enable raising an exception instead of a warning for failures in model dependency inference (",(0,i.jsx)(t.a,{href:"https://github.com/mlflow/mlflow/pull/11903",children:"#11903"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/BenWilson2",children:"@BenWilson2"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["[Models] Add support for the ",(0,i.jsx)(t.code,{children:"llm/v1/embeddings"})," task in the Transformers flavor to unify the input and output structures for embedding models (",(0,i.jsx)(t.a,{href:"https://github.com/mlflow/mlflow/pull/11795",children:"#11795"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/B-Step62",children:"@B-Step62"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["[Models] Introduce model streaming return via ",(0,i.jsx)(t.code,{children:"predict_stream()"})," for custom ",(0,i.jsx)(t.code,{children:"pyfunc"})," models capable of returning a stream response (",(0,i.jsx)(t.a,{href:"https://github.com/mlflow/mlflow/pull/11791",children:"#11791"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/mlflow/mlflow/pull/11895",children:"#11895"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/WeichenXu123",children:"@WeichenXu123"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["[Evaluate] Add support for overriding the entire model evaluation judgment prompt within ",(0,i.jsx)(t.code,{children:"mlflow.evaluate"})," for GenAI models (",(0,i.jsx)(t.a,{href:"https://github.com/mlflow/mlflow/pull/11912",children:"#11912"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/apurva-koti",children:"@apurva-koti"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["[Tracking] Add support for defining deployment resource metadata to configure deployment resources within ",(0,i.jsx)(t.code,{children:"pyfunc"})," models (",(0,i.jsx)(t.a,{href:"https://github.com/mlflow/mlflow/pull/11832",children:"#11832"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/mlflow/mlflow/pull/11825",children:"#11825"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/mlflow/mlflow/pull/11804",children:"#11804"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/sunishsheth2009",children:"@sunishsheth2009"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["[Tracking] Add support for logging ",(0,i.jsx)(t.code,{children:"LangChain"})," and custom ",(0,i.jsx)(t.code,{children:"pyfunc"})," models as code (",(0,i.jsx)(t.a,{href:"https://github.com/mlflow/mlflow/pull/11855",children:"#11855"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/mlflow/mlflow/pull/11842",children:"#11842"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/sunishsheth2009",children:"@sunishsheth2009"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["[Tracking] Modify MLflow client's behavior to read from a global asynchronous configuration state (",(0,i.jsx)(t.a,{href:"https://github.com/mlflow/mlflow/pull/11778",children:"#11778"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/mlflow/mlflow/pull/11780",children:"#11780"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/chenmoneygithub",children:"@chenmoneygithub"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["[Tracking] Enhance system metrics data collection to include a GPU power consumption metric (",(0,i.jsx)(t.a,{href:"https://github.com/mlflow/mlflow/pull/11747",children:"#11747"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/chenmoneygithub",children:"@chenmoneygithub"}),")"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Bug fixes:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["[Models] Fix a validation issue when performing signature validation if ",(0,i.jsx)(t.code,{children:"params"})," are specified (",(0,i.jsx)(t.a,{href:"https://github.com/mlflow/mlflow/pull/11838",children:"#11838"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/WeichenXu123",children:"@WeichenXu123"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["[Databricks] Fix an issue where models cannot be loaded in the Databricks serverless runtime (",(0,i.jsx)(t.a,{href:"https://github.com/mlflow/mlflow/pull/11758",children:"#11758"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/WeichenXu123",children:"@WeichenXu123"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["[Databricks] Fix an issue with the Databricks serverless runtime where scaled workers do not have authorization to read from the driver NFS mount (",(0,i.jsx)(t.a,{href:"https://github.com/mlflow/mlflow/pull/11757",children:"#11757"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/WeichenXu123",children:"@WeichenXu123"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["[Databricks] Fix an issue in the Databricks serverless runtime where a model loaded via a ",(0,i.jsx)(t.code,{children:"spark_udf"})," for inference fails due to a configuration issue (",(0,i.jsx)(t.a,{href:"https://github.com/mlflow/mlflow/pull/11752",children:"#11752"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/WeichenXu123",children:"@WeichenXu123"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["[Server-infra] Upgrade the gunicorn dependency to version 22 to address a third-party security issue (",(0,i.jsx)(t.a,{href:"https://github.com/mlflow/mlflow/pull/11742",children:"#11742"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/maitreyakv",children:"@maitreyakv"}),")"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Documentation updates:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["[Docs] Add additional guidance on search syntax restrictions for search APIs (",(0,i.jsx)(t.a,{href:"https://github.com/mlflow/mlflow/pull/11892",children:"#11892"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/BenWilson2",children:"@BenWilson2"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["[Docs] Fix an issue with the quickstart guide where the Keras example model is defined incorrectly (",(0,i.jsx)(t.a,{href:"https://github.com/mlflow/mlflow/pull/11848",children:"#11848"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/horw",children:"@horw"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["[Docs] Provide fixes and updates to LangChain tutorials and guides (",(0,i.jsx)(t.a,{href:"https://github.com/mlflow/mlflow/pull/11802",children:"#11802"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/BenWilson2",children:"@BenWilson2"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["[Docs] Fix the model registry example within the docs for correct type formatting (",(0,i.jsx)(t.a,{href:"https://github.com/mlflow/mlflow/pull/11789",children:"#11789"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/80rian",children:"@80rian"}),")"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["For a comprehensive list of changes, see the ",(0,i.jsx)(t.a,{href:"https://github.com/mlflow/mlflow/releases/tag/v2.12.2",children:"release change log"}),", and check out the latest documentation on ",(0,i.jsx)(t.a,{href:"http://mlflow.org/",children:"mlflow.org"}),"."]})]})}function d(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,t,l)=>{l.d(t,{Z:()=>o,a:()=>r});var i=l(7294);const s={},n=i.createContext(s);function r(e){const t=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);