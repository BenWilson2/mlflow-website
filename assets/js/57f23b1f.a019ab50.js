"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2152],{8121:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>r,contentTitle:()=>i,default:()=>h,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var a=o(5893),l=o(1151);const n={title:"Automatic Metric, Parameter, and Artifact Logging with mlflow.autolog",slug:"mlflow-autolog",tags:["autolog"],authors:["daniel-liden"],thumbnail:"/img/blog/mlflow-autolog.png"},i="Introduction to mlflow.autolog",s={permalink:"/mlflow-website/blog/mlflow-autolog",source:"@site/blog/2023-11-30-mlflow-autolog/index.md",title:"Automatic Metric, Parameter, and Artifact Logging with mlflow.autolog",description:"Looking to learn more about the autologging functionality included in MLflow? Look no further than this primer on the basics of using this powerful and time-saving feature!",date:"2023-11-30T00:00:00.000Z",formattedDate:"November 30, 2023",tags:[{label:"autolog",permalink:"/mlflow-website/blog/tags/autolog"}],readingTime:5.905,hasTruncateMarker:!0,authors:[{name:"Daniel Liden",title:"Developer Advocate at Databricks",url:"https://www.linkedin.com/in/danielliden",imageURL:"/img/authors/daniel_liden.png",key:"daniel-liden"}],frontMatter:{title:"Automatic Metric, Parameter, and Artifact Logging with mlflow.autolog",slug:"mlflow-autolog",tags:["autolog"],authors:["daniel-liden"],thumbnail:"/img/blog/mlflow-autolog.png"},unlisted:!1,prevItem:{title:"MLflow AI Gateway renamed to MLflow Deployments for LLMs",permalink:"/mlflow-website/blog/ai-gateway-rename"},nextItem:{title:"MLflow Docs Overhaul",permalink:"/mlflow-website/blog/mlflow-docs-overhaul"}},r={authorsImageUrls:[void 0]},c=[{value:"Autolog features",id:"autolog-features",level:2},{value:"Basic Usage of <code>mlflow.autolog</code>",id:"basic-usage-of-mlflowautolog",level:2},{value:"Example",id:"example",level:3},{value:"Configuration and Customization",id:"configuration-and-customization",level:2},{value:"Conclusion and Next Steps",id:"conclusion-and-next-steps",level:2},{value:"Further Reading",id:"further-reading",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Looking to learn more about the autologging functionality included in MLflow? Look no further than this primer on the basics of using this powerful and time-saving feature!"}),"\n",(0,a.jsx)(t.p,{children:"Robust logging practices are central to the iterative development and improvement of machine learning models. Carefully tracking metrics, parameters, and artifacts can be challenging when working with complex machine learning libraries or when experimenting with multiple different frameworks with varying APIs and selections of different objects and values to track."}),"\n",(0,a.jsxs)(t.p,{children:["MLflow\u2019s ",(0,a.jsx)(t.strong,{children:"automatic logging functionality"})," offers a simple solution that is compatible with many widely-used machine learning libraries, such as ",(0,a.jsx)(t.a,{href:"https://mlflow.org/docs/latest/python_api/mlflow.pytorch.html",children:"PyTorch"}),", ",(0,a.jsx)(t.a,{href:"https://mlflow.org/docs/latest/python_api/mlflow.sklearn.html#mlflow.sklearn.autolog",children:"Scikit-learn"}),", and ",(0,a.jsx)(t.a,{href:"https://mlflow.org/docs/latest/python_api/mlflow.xgboost.html#mlflow.xgboost.autolog",children:"XGBoost"}),". Using ",(0,a.jsx)(t.code,{children:"mlflow.autolog()"})," instructs MLflow to capture essential data without requiring the user to specify what to capture manually. It is an accessible and powerful entrypoint for MLflow\u2019s logging capabilities."]}),"\n",(0,a.jsx)(t.p,{children:"To enable automatic logging, simply add the following line to your machine learning scripts/notebooks, before initiating activities like model training or evaluation that may include information or artifacts you would like to log:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"import mlflow\n\n\nmlflow.autolog()\n"})}),"\n",(0,a.jsx)(t.h2,{id:"autolog-features",children:"Autolog features"}),"\n",(0,a.jsxs)(t.p,{children:["When a data science workflow includes ",(0,a.jsx)(t.code,{children:"mlflow.autolog()"}),", MLflow will automatically log:"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Metrics"}),": standard training and evaluation measures such as accuracy and F1 score;"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Parameters"}),": hyperparameters, such as learning rate and number of estimators; and"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Artifacts"}),": important files, such as trained models."]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"MLflow\u2019s automatic logging captures details tailored to the specific activities of the library being used: different libraries will result in different logged objects and data. In addition, MLflow logs key metadata such as software versions, a git commit hash, and the file name from which the run was initiated. By documenting the system's state during model training, MLflow aims to facilitate environment reproducibility and provide audit lineage, minimizing the possibility of inference issues that could arise from package regressions or deprecations in newer library versions."}),"\n",(0,a.jsx)(t.p,{children:"The specifics of what is captured through automatic logging depend on the libraries used. Additionally, MLflow captures contextual metadata such as software versions, git commit hash, and the name of the file from which the run was launched. By logging as much detail as possible about the state of the system that trained the model, MLflow can offer environment reproducibility and audit lineage, minimizing the possibility of inference issues resulting from, for example, package regressions or deprecations."}),"\n",(0,a.jsxs)(t.h2,{id:"basic-usage-of-mlflowautolog",children:["Basic Usage of ",(0,a.jsx)(t.code,{children:"mlflow.autolog"})]}),"\n",(0,a.jsx)(t.p,{children:"You can access auto logging functionality in two different ways:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["Via the ",(0,a.jsx)(t.code,{children:"mlflow.autolog()"})," function, which enables and configures automatic logging across all supported libraries. This provides a broad, one-size-fits-all approach when working with multiple libraries and is ideal for prototyping and exploratory analysis of a machine learning pipeline."]}),"\n",(0,a.jsxs)(t.li,{children:["Via the library-specific autolog functions, such as ",(0,a.jsx)(t.code,{children:"mlflow.sklearn.autolog()"}),", which enable finer-grained logging configuration for individual libraries. For example, ",(0,a.jsx)(t.code,{children:"mlflow.pytorch.autolog()"})," includes the ",(0,a.jsx)(t.code,{children:"log_every_n_epoch"})," and ",(0,a.jsx)(t.code,{children:"log_every_n_step"})," arguments for specifying how often to log metrics."]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["Regardless of which of these two approaches you use, you do not need to manually initialize an MLflow run with ",(0,a.jsx)(t.a,{href:"https://www.mlflow.org/docs/latest/python_api/mlflow.html#mlflow.start_run",children:"start_run()"})," in order to have a run created and for your model, parameters, and metrics to be captured in MLflow."]}),"\n",(0,a.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"import mlflow\nfrom sklearn import datasets\nfrom sklearn.ensemble import RandomForestClassifier\nfrom sklearn.model_selection import train_test_split\n\n# Generate a 3-class classification problem\nX, y = datasets.make_classification(\n    n_samples=1000,\n    class_sep=0.5,\n    random_state=42,\n    n_classes=3,\n    n_informative=3,\n)\n\n# Split the data into training and validation sets\nX_train, X_val, y_train, y_val = train_test_split(X, y, test_size=0.2, random_state=42)\n\n# Enable autolog\nmlflow.autolog()  # or mlflow.sklearn.autolog()\n\n# Initialize the classifier with n_estimators=200 and max_depth=10\nclf = RandomForestClassifier(n_estimators=200, max_depth=10)\n\n# Fit the classifier to the data.\n# The `fit` method is patched to perform autologging. When engaged in training, a\n# run is created and the parameters are logged.\n# After the fit is complete, the model artifact is logged to the run.\nclf.fit(X_train, y_train)\n\n# Score the model on the data\n# The current active run is retrieved during calling `score` and the loss metrics are logged\n# to the active MLflow run.\nclf.score(X_val, y_val)\n\n# Visualize the automatically logged run results to validate what we recorded\nmlflow.last_active_run()\n"})}),"\n",(0,a.jsxs)(t.p,{children:["The above logs model parameters, metrics, and the model to an MLflow run. The output result of the final statement (",(0,a.jsx)(t.a,{href:"https://www.mlflow.org/docs/latest/python_api/mlflow.html#mlflow.last_active_run",children:"mlflow.last_active_run()"}),") in the above example, which will return data from the run on model metrics, parameters, and logged artifacts (results truncated) is as shown below:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-text",children:"<Run: data=<RunData:\nmetrics={'RandomForestClassifier_score_X_val': 0.72,\n         'training_accuracy_score': 0.99625,\n         'training_f1_score': 0.9962547564333545,\n         'training_log_loss': 0.3354604497935824,\n         'training_precision_score': 0.9962921348314606,\n         'training_recall_score': 0.99625,\n         'training_roc_auc': 0.9998943433719795,\n         'training_score': 0.99625\n         },\n params={'bootstrap': 'True',\n         'ccp_alpha': '0.0',\n         'class_weight': 'None',\n         'criterion': 'gini',\n         'max_depth': '10',\n         'max_features': 'sqrt',\n         'max_leaf_nodes': 'None',\n         [...],\n         },\ntags={'estimator_class': 'sklearn.ensemble._forest.RandomForestClassifier',\n      'estimator_name': 'RandomForestClassifier',\n      'mlflow.autologging': 'sklearn',\n      [...]\n}, [...]>>\n"})}),"\n",(0,a.jsxs)(t.p,{children:["You can also access these in the mlflow ui by executing ",(0,a.jsx)(t.a,{href:"https://www.mlflow.org/docs/latest/tracking.html#tracking-ui",children:"mlflow ui"})," on a command line terminal."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"The MLflow Tracking UI",src:o(5757).Z+"",width:"1687",height:"1307"})}),"\n",(0,a.jsxs)(t.p,{children:["The MLflow UI also allows you to graphically compare different metrics and parameters across multiple runs, including those generated via ",(0,a.jsx)(t.code,{children:"mlflow.autolog"}),"."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Run comparison of autologged runs in the MLflow UI",src:o(8252).Z+"",width:"1685",height:"1307"})}),"\n",(0,a.jsx)(t.h2,{id:"configuration-and-customization",children:"Configuration and Customization"}),"\n",(0,a.jsxs)(t.p,{children:["The automatic logging functions take many arguments that give the user greater control over logging behavior. For example, ",(0,a.jsx)(t.code,{children:"mlflow.autolog()"})," includes ",(0,a.jsx)(t.code,{children:"log_models"})," and ",(0,a.jsx)(t.code,{children:"log_datasets"})," arguments (both ",(0,a.jsx)(t.code,{children:"True"})," by default) that specify whether models and dataset information should be saved to the MLflow run, enabling you to specify what is actually logged. To disable automatic logging of datasets while continuing to log all the usual elements, simply disable the autologging of datasets feature by setting ",(0,a.jsx)(t.code,{children:"mlflow.autolog(log_datasets=False)"})," before fitting a model. You can also adjust the behavior of library-specific autolog functions: for example, the ",(0,a.jsx)(t.code,{children:"mlflow.sklearn.autolog()"})," function includes a ",(0,a.jsx)(t.code,{children:"max_tuning_runs"})," argument that specifies how many nested runs to capture when performing hyperparameter searches."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"mlflow.autolog()"})," can be used in combination with the library-specific autolog functions to control the logging behavior for specific libraries. The library-specific autolog call will always supersede ",(0,a.jsx)(t.code,{children:"mlflow.autolog()"}),", regardless of the order in which they are called. For example, combining ",(0,a.jsx)(t.code,{children:"mlflow.autolog()"})," with ",(0,a.jsx)(t.code,{children:"mlflow.sklearn.autolog(disable=True)"})," will result in automatic logging for all supported libraries except for ",(0,a.jsx)(t.code,{children:"scikit-learn"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["It is important to consult the documentation for the specific framework(s) you are using in order to understand what is logged automatically and what configuration options are available. See the ",(0,a.jsx)(t.a,{href:"#further-reading",children:"further reading section below"})," for links."]}),"\n",(0,a.jsx)(t.h2,{id:"conclusion-and-next-steps",children:"Conclusion and Next Steps"}),"\n",(0,a.jsx)(t.p,{children:"MLflow's autologging capabilities and library-specific automatic logging functions provide a straightforward starting point for MLflow tracking with little or no required configuration. They log key metrics, parameters, and artifacts from many popular machine learning libraries, allowing users to track their machine learning workflows without writing custom tracking code."}),"\n",(0,a.jsxs)(t.p,{children:["They are not, however, the right solution for all use cases. If you only need to track a handful of specific metrics, enabling automatic logging may be inefficient, resulting in much more generated data and stored artifacts than needed. Furthermore, automatic logging is not available for every possible framework and custom values one might want to track. In such cases, it might be necessary to ",(0,a.jsx)(t.a,{href:"https://mlflow.org/docs/latest/tracking/tracking-api.html#logging-functions",children:"manually specify what to track"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"further-reading",children:"Further Reading"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://mlflow.org/docs/latest/tracking/autolog.html",children:"MLflow Documentation on Automatic Logging"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://mlflow.org/docs/latest/python_api/mlflow.html#mlflow.autolog",children:"Python API reference for mlflow.autolog"})}),"\n",(0,a.jsxs)(t.li,{children:["Python API references for library-specific autolog functions","\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://mlflow.org/docs/latest/python_api/mlflow.pytorch.html",children:"PyTorch"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://mlflow.org/docs/latest/python_api/mlflow.tensorflow.html#mlflow.tensorflow.autolog",children:"Tensorflow"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://mlflow.org/docs/latest/python_api/mlflow.sklearn.html#mlflow.sklearn.autolog",children:"Scikit-learn"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://mlflow.org/docs/latest/python_api/mlflow.xgboost.html#mlflow.xgboost.autolog",children:"XGBoost"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://mlflow.org/docs/latest/python_api/mlflow.pyspark.ml.html#mlflow.pyspark.ml.autolog",children:"PySpark"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://mlflow.org/docs/latest/python_api/mlflow.statsmodels.html#mlflow.statsmodels.autolog",children:"Statsmodels"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://mlflow.org/docs/latest/python_api/mlflow.lightgbm.html#mlflow.lightgbm.autolog",children:"LightGBM"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://mlflow.org/docs/latest/python_api/mlflow.paddle.html#mlflow.paddle.autolog",children:"Paddle"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://mlflow.org/docs/latest/python_api/mlflow.fastai.html#mlflow.fastai.autolog",children:"Fastai"})}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8252:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/autolog_compare_runs-08773285a5af4ee8175c0ed1fc3c8c83.png"},5757:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/autolog_in_ui-2a92179f1ef630da4f1357e3daaf5999.png"},1151:(e,t,o)=>{o.d(t,{Z:()=>s,a:()=>i});var a=o(7294);const l={},n=a.createContext(l);function i(e){const t=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),a.createElement(n.Provider,{value:t},e.children)}}}]);