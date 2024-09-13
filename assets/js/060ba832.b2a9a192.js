"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5104],{2194:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var a=t(5893),s=t(1151);const o={title:"LangGraph with Custom PyFunc",tags:["genai","mlops"],slug:"langgraph-custom-pyfunc",authors:["michael-berk","mlflow-maintainers"],thumbnail:"/img/blog/release-candidates.png"},i=void 0,r={permalink:"/mlflow-website/blog/langgraph-custom-pyfunc",source:"@site/blog/2024-08-06-langgraph-pyfunc/index.md",title:"LangGraph with Custom PyFunc",description:"In this blog, we'll guide you through creating a LangGraph chatbot within an MLflow custom PyFunc. By combining MLflow with LangGraph's ability to create and manage cyclical graphs, you can create powerful stateful, multi-actor applications in a scalable fashion.",date:"2024-08-06T00:00:00.000Z",formattedDate:"August 6, 2024",tags:[{label:"genai",permalink:"/mlflow-website/blog/tags/genai"},{label:"mlops",permalink:"/mlflow-website/blog/tags/mlops"}],readingTime:9.89,hasTruncateMarker:!1,authors:[{name:"Michael Berk",title:"Sr. Resident Solutions Architect at Databricks",url:"https://www.linkedin.com/in/-michael-berk/",imageURL:"/img/authors/michael_berk.png",key:"michael-berk"},{name:"MLflow maintainers",title:"MLflow maintainers",url:"https://github.com/mlflow/mlflow.git",imageURL:"https://github.com/mlflow-automation.png",key:"mlflow-maintainers"}],frontMatter:{title:"LangGraph with Custom PyFunc",tags:["genai","mlops"],slug:"langgraph-custom-pyfunc",authors:["michael-berk","mlflow-maintainers"],thumbnail:"/img/blog/release-candidates.png"},unlisted:!1,prevItem:{title:"AutoGen with Custom PyFunc",permalink:"/mlflow-website/blog/autogen-image-agent"},nextItem:{title:"PyFunc in Practice",permalink:"/mlflow-website/blog/pyfunc-in-practice"}},l={authorsImageUrls:[void 0,void 0]},c=[{value:"What is a Custom PyFunc?",id:"what-is-a-custom-pyfunc",level:3},{value:"What is LangGraph?",id:"what-is-langgraph",level:3},{value:"1 - Setup",id:"1---setup",level:2},{value:"2 - Custom Utilities",id:"2---custom-utilities",level:2},{value:"3 - Custom PyFunc ChatModel",id:"3---custom-pyfunc-chatmodel",level:2},{value:"3.1 - Create our Model-From-Code File",id:"31---create-our-model-from-code-file",level:3},{value:"3.2 - Log our Model-From-Code",id:"32---log-our-model-from-code",level:3},{value:"4 - Use the Logged Model",id:"4---use-the-logged-model",level:2},{value:"5 - Summary",id:"5---summary",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"In this blog, we'll guide you through creating a LangGraph chatbot within an MLflow custom PyFunc. By combining MLflow with LangGraph's ability to create and manage cyclical graphs, you can create powerful stateful, multi-actor applications in a scalable fashion."}),"\n",(0,a.jsx)(n.p,{children:"Throughout this post we will demonstrate how to leverage MLflow's ChatModel to create a serializable and servable MLflow model which can easily be tracked, versioned, and deployed on a variety of servers."}),"\n",(0,a.jsx)(n.h3,{id:"what-is-a-custom-pyfunc",children:"What is a Custom PyFunc?"}),"\n",(0,a.jsxs)(n.p,{children:["While MLflow strives to cover many popular machine learning libraries, there has been a proliferation of open source packages. If users want MLflow's myriad benefits paired with a package that doesn't have native support, users can create a ",(0,a.jsx)(n.a,{href:"https://mlflow.org/docs/latest/traditional-ml/creating-custom-pyfunc/index.html",children:"custom PyFunc model"}),".\nCustom PyFunc models allow you to integrate any Python code, providing flexibility in defining GenAI apps and AI models. These models can be easily logged, managed, and deployed using the typical MLflow APIs, enhancing flexibility and portability in machine learning workflows."]}),"\n",(0,a.jsxs)(n.p,{children:["Within the category of custom PyFunc models, MLflow supports a specialized model called ",(0,a.jsx)(n.a,{href:"https://mlflow.org/docs/latest/llms/transformers/tutorials/conversational/pyfunc-chat-model.html",children:"ChatModel"}),". It extends the base PyFunc functionality to specifically support messages. For this demo, we will use ChatModel to create a LangGraph chatbot."]}),"\n",(0,a.jsx)(n.h3,{id:"what-is-langgraph",children:"What is LangGraph?"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://langchain-ai.github.io/langgraph/",children:"LangGraph"})," is a library for building stateful, multi-actor applications with LLMs, used to create agent and multi-agent workflows. Compared to other LLM frameworks, it offers these core benefits:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Cycles and Branching"}),": Implement loops and conditionals in your apps."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Persistence"}),": Automatically save state after each step in the graph. Pause and resume the graph execution at any point to support error recovery, human-in-the-loop workflows, time travel and more."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Human-in-the-Loop"}),": Interrupt graph execution to approve or edit next action planned by the agent."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Streaming Support"}),": Stream outputs as they are produced by each node (including token streaming)."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Integration with LangChain"}),": LangGraph integrates seamlessly with LangChain and LangSmith (but does not require them)."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"LangGraph allows you to define flows that involve cycles, essential for most agentic architectures, differentiating it from DAG-based solutions. As a very low-level framework, it provides fine-grained control over both the flow and state of your application, crucial for creating reliable agents. Additionally, LangGraph includes built-in persistence, enabling advanced human-in-the-loop and memory features."}),"\n",(0,a.jsx)(n.p,{children:"LangGraph is inspired by Pregel and Apache Beam. The public interface draws inspiration from NetworkX. LangGraph is built by LangChain Inc, the creators of LangChain, but can be used without LangChain."}),"\n",(0,a.jsxs)(n.p,{children:["For a full walkthrough, check out the ",(0,a.jsx)(n.a,{href:"https://langchain-ai.github.io/langgraph/tutorials/introduction/",children:"LangGraph Quickstart"})," and for more on the fundamentals of design with LangGraph, check out the ",(0,a.jsx)(n.a,{href:"https://langchain-ai.github.io/langgraph/concepts/#human-in-the-loop",children:"conceptual guides"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"1---setup",children:"1 - Setup"}),"\n",(0,a.jsx)(n.p,{children:"First, we must install the required dependencies. We will use OpenAI for our LLM in this example, but using LangChain with LangGraph makes it easy to substitute any alternative supported LLM or LLM provider."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"%%capture\n%pip install langgraph==0.2.3 langsmith==0.1.98 mlflow>=2.15.1\n%pip install -U typing_extensions\n%pip install langchain_openai==0.1.21\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Next, let's get our relevant secrets. ",(0,a.jsx)(n.code,{children:"getpass"}),", as demonstrated in the ",(0,a.jsx)(n.a,{href:"https://langchain-ai.github.io/langgraph/tutorials/introduction/#setup",children:"LangGraph quickstart"})," is a great way to insert your keys into an interactive jupyter environment."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'import os\n\n# Set required environment variables for authenticating to OpenAI and LangSmith\n# Check additional MLflow tutorials for examples of authentication if needed\n# https://mlflow.org/docs/latest/llms/openai/guide/index.html#direct-openai-service-usage\nassert "OPENAI_API_KEY" in os.environ, "Please set the OPENAI_API_KEY environment variable."\nassert "LANGSMITH_API_KEY" in os.environ, "Please set the LANGSMITH_API_KEY environment variable."\n'})}),"\n",(0,a.jsx)(n.h2,{id:"2---custom-utilities",children:"2 - Custom Utilities"}),"\n",(0,a.jsx)(n.p,{children:"While this is a demo, it's good practice to separate reusable utilities into a separate file/directory. Below we create three general utilities that theoretically would valuable when building additional MLflow + LangGraph implementations."}),"\n",(0,a.jsxs)(n.p,{children:["Note that we use the magic ",(0,a.jsx)(n.code,{children:"%%writefile"})," command to create a new file in a jupyter notebook context. If you're running this outside of an interactive notebook, simply create the file below, omitting the ",(0,a.jsx)(n.code,{children:"%%writefile {FILE_NAME}.py"})," line."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'%%writefile langgraph_utils.py\n# omit this line if directly creating this file; this command is purely for running within Jupyter\n\nimport os\nfrom typing import Union, List, Dict\n\nfrom langchain_core.messages import (\n    AIMessage,\n    HumanMessage,\n    SystemMessage,\n    messages_from_dict,\n)\nfrom mlflow.types.llm import ChatMessage\n\n\ndef validate_langgraph_environment_variables():\n    """Ensure that required secrets and project environment variables are present."""\n\n    # Validate enviornment variable secrets are present\n    required_secrets = ["OPENAI_API_KEY", "LANGSMITH_API_KEY"]\n\n    if missing_keys := [key for key in required_secrets if not os.environ.get(key)]:\n        raise ValueError(f"The following keys are missing: {missing_keys}")\n\n    # Add project environent variables if not present\n    os.environ["LANCHAIN_TRACING_V2"] = os.environ.get("LANGCHAIN_TRACING_V2", "true")\n    os.environ["LANGCHAIN_PROJECT"] = os.environ.get(\n        "LANGCHAIN_TRACING_V2", "LangGraph MLflow Tutorial"\n    )\n\n\ndef _format_mlflow_chat_message_for_langraph_message(\n    chat_message: ChatMessage,\n) -> Dict:\n    mlflow_role_to_langgraph_type = {\n        "user": "human",\n        "assistant": "ai",\n        "system": "system",\n    }\n\n    if role_clean := mlflow_role_to_langgraph_type.get(chat_message.role):\n        return {"type": role_clean, "data": {"content": chat_message.content}}\n    else:\n        raise ValueError(f"Incorrect role specified: {chat_message.role}")\n\n\ndef mlflow_chat_message_to_langgraph_message(\n    chat_message: List[ChatMessage],\n) -> List[Union[AIMessage, HumanMessage, SystemMessage]]:\n    """Convert MLflow messages (list of mlflow.types.llm.ChatMessage) to LangGraph messages.\n\n    This utility is required because LangGraph messages have a different structure and type\n    than MLflow ChatMessage. If we pass the payload coming into our `predict()` method directly\n    into the LangGraph graph, we\'ll get an error.\n    """\n    # NOTE: This is a simplified example for demonstration purposes\n    if isinstance(chat_message, list):\n        list_of_parsed_dicts = [\n            _format_mlflow_chat_message_for_langraph_message(d) for d in chat_message\n        ]\n        return messages_from_dict(list_of_parsed_dicts)\n    else:\n        raise ValueError(f"Invalid _dict type: {type(chat_message)}")\n\n'})}),"\n",(0,a.jsxs)(n.p,{children:["By the end of this step, you should see a new file in your current directory with the name ",(0,a.jsx)(n.code,{children:"langgraph_utils.py"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Note that it's best practice to add unit tests and properly organize your project into logically structured directories."}),"\n",(0,a.jsx)(n.h2,{id:"3---custom-pyfunc-chatmodel",children:"3 - Custom PyFunc ChatModel"}),"\n",(0,a.jsxs)(n.p,{children:["Great! Now that we have some reusable utilities located in ",(0,a.jsx)(n.code,{children:"./langgraph_utils.py"}),", we are ready to declare a custom PyFunc and log the model. However, before writing more code, let's provide some quick background on the ",(0,a.jsx)(n.strong,{children:"Model from Code"})," feature."]}),"\n",(0,a.jsx)(n.h3,{id:"31---create-our-model-from-code-file",children:"3.1 - Create our Model-From-Code File"}),"\n",(0,a.jsxs)(n.p,{children:["Historically, MLflow's process of saving a custom ",(0,a.jsx)(n.code,{children:"pyfunc"})," model uses a mechanism that has some frustrating drawbacks: ",(0,a.jsx)(n.code,{children:"cloudpickle"}),". Prior to the release of support for saving a model as a Python script in MLflow 2.12.2 (known as the ",(0,a.jsx)(n.a,{href:"https://mlflow.org/docs/latest/models.html#models-from-code",children:"models from code"})," feature), logging a defined ",(0,a.jsx)(n.code,{children:"pyfunc"})," involved pickling an instance of that model. Along with the pickled model artifact, MLflow will store the signature, which can be passed or inferred from the ",(0,a.jsx)(n.code,{children:"model_input"})," parameter. It will also log inferred model dependencies to help you serve the model in a new environment."]}),"\n",(0,a.jsx)(n.p,{children:"Pickle is an easy-to-use serialization mechanism, but it has a variety of limitations:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Limited Support for Some Data Types"}),": ",(0,a.jsx)(n.code,{children:"cloudpickle"})," may struggle with serializing certain complex or low-level data types, such as file handles, sockets, or objects containing these types, which can lead to errors or incorrect deserialization."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Version Compatibility Issues"}),": Serialized objects with ",(0,a.jsx)(n.code,{children:"cloudpickle"})," may not be deserializable across different versions of ",(0,a.jsx)(n.code,{children:"cloudpickle"})," or Python, making long-term storage or sharing between different environments risky."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Recursion Depth for Nested Dependencies"}),": ",(0,a.jsx)(n.code,{children:"cloudpickle"})," can serialize objects with nested dependencies (e.g., functions within functions, or objects that reference other objects). However, deeply nested dependencies can hit the recursion depth limit imposed by Python's interpreter."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Mutable Object States that Cannot be Serialized"}),": ",(0,a.jsx)(n.code,{children:"cloudpickle"})," struggles to serialize certain mutable objects whose states change during runtime, especially if these objects contain non-serializable elements like open file handles, thread locks, or custom C extensions. Even if ",(0,a.jsx)(n.code,{children:"cloudpickle"})," can serialize the object structure, it may fail to capture the exact state or may not be able to deserialize the state accurately, leading to potential data loss or incorrect behavior upon deserialization."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"To get around this issue, we must perform the following steps:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Create an additional Python file in our directory."}),"\n",(0,a.jsxs)(n.li,{children:["In that file, create a function that creates a ",(0,a.jsx)(n.a,{href:"https://langchain-ai.github.io/langgraph/tutorials/introduction/#part-1-build-a-basic-chatbot",children:"CompiledStateGraph"}),", which is DAG-based stateful chatbot."]}),"\n",(0,a.jsxs)(n.li,{children:["Also in that file, create a ",(0,a.jsx)(n.a,{href:"https://mlflow.org/docs/latest/traditional-ml/creating-custom-pyfunc/index.html",children:"MLflow custom PyFunc"}),". Note that in our case, we're using a ",(0,a.jsx)(n.a,{href:"https://mlflow.org/docs/latest/llms/transformers/tutorials/conversational/pyfunc-chat-model.html#Customizing-the-model",children:"custom ChatModel"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["Also in that file, set the custom ChatModel to be accessible by ",(0,a.jsx)(n.a,{href:"https://mlflow.org/docs/latest/models.html#models-from-code",children:"MLflow model from code"})," via the ",(0,a.jsx)(n.a,{href:"https://mlflow.org/docs/latest/python_api/mlflow.models.html#mlflow.models.set_model",children:"mlflow.models.set_model()"})," command."]}),"\n",(0,a.jsxs)(n.li,{children:["In a different file, log the ",(0,a.jsx)(n.strong,{children:"path"})," to the file created in steps 1-3 instead of the model object."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["By passing a Python file, we simply can load the model from that Python code, thereby bypassing all the headaches associated with serialization and ",(0,a.jsx)(n.code,{children:"cloudpickle"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'%%writefile graph_chain.py\n# omit this line if directly creating this file; this command is purely for running within Jupyter\n\nfrom langchain_openai import ChatOpenAI\nfrom langgraph.graph import StateGraph, START, END\nfrom langgraph.graph.message import add_messages\nfrom langgraph.graph.state import CompiledStateGraph\n\n# Our custom utilities\nfrom langgraph_utils import (\n    mlflow_chat_message_to_langgraph_message,\n    validate_langgraph_environment_variables,\n)\n\nimport mlflow\nfrom mlflow.types.llm import ChatMessage, ChatParams, ChatResponse\n\nimport random\nfrom typing import Annotated, List\nfrom typing_extensions import TypedDict\n\n\ndef load_graph() -> CompiledStateGraph:\n    """Create example chatbot from LangGraph Quickstart."""\n\n    class State(TypedDict):\n        messages: Annotated[list, add_messages]\n\n    graph_builder = StateGraph(State)\n    llm = ChatOpenAI()\n\n    def chatbot(state: State):\n        return {"messages": [llm.invoke(state["messages"])]}\n\n    graph_builder.add_node("chatbot", chatbot)\n    graph_builder.add_edge(START, "chatbot")\n    graph_builder.add_edge("chatbot", END)\n    return graph_builder.compile()\n\n\nclass LangGraphChatModel(mlflow.pyfunc.ChatModel):\n    def load_context(self, context):\n        self.graph = load_graph()\n\n    def predict(\n        self, context, messages: List[ChatMessage], params: ChatParams\n    ) -> ChatResponse:\n\n        # Format mlflow ChatMessage as LangGraph messages\n        messages = mlflow_chat_message_to_langgraph_message(messages)\n\n        # Query the model\n        response = self.graph.invoke({"messages": messages})\n\n        # Extract the response text\n        text = response["messages"][-1].content\n\n        # NB: chat session ID should be handled on the client side. Here we\n        # create a placeholder for demonstration purposes. Furthermore, if you\n        # need persistance between model sessions, it\'s a good idea to\n        # write your session history to a database.\n        id = f"some_meaningful_id_{random.randint(0, 100)}"\n\n        # Format the response to be compatible with MLflow\n        response = {\n            "id": id,\n            "model": "MyChatModel",\n            "choices": [\n                {\n                    "index": 0,\n                    "message": {"role": "assistant", "content": text},\n                    "finish_reason": "stop",\n                }\n            ],\n            "usage": {},\n        }\n\n        return ChatResponse(**response)\n\n\n# Set our model to be accessible by MLflow model from code\nmlflow.models.set_model(LangGraphChatModel())\n'})}),"\n",(0,a.jsx)(n.h3,{id:"32---log-our-model-from-code",children:"3.2 - Log our Model-From-Code"}),"\n",(0,a.jsxs)(n.p,{children:["After creating this ChatModel implementation in we leverage the standard MLflow APIs to log the model. However, as noted above, instead of passing a model object, we pass the path ",(0,a.jsx)(n.code,{children:"str"})," to the file containing our ",(0,a.jsx)(n.code,{children:"mlflow.models.set_model()"})," command."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'import mlflow\n\n# Save the model\nwith mlflow.start_run() as run:\n    # Log the model to the mlflow tracking server\n    mlflow.pyfunc.log_model(\n        python_model="graph_chain.py", # Path to our custom model\n        artifact_path="langgraph_model",\n    )\n\n    # Store the run id for later loading\n    run_id = run.info.run_id\n'})}),"\n",(0,a.jsx)(n.h2,{id:"4---use-the-logged-model",children:"4 - Use the Logged Model"}),"\n",(0,a.jsx)(n.p,{children:"Now that we have successfully logged a model, we can load it and leverage it for inference."}),"\n",(0,a.jsx)(n.p,{children:"In the code below, we demonstrate that our chain has chatbot functionality!"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'import mlflow\n\n# Load the model\n# NOTE: you need the run_id from the above step or another model URI format\nloaded_model = mlflow.pyfunc.load_model(f"runs:/{run_id}/langgraph_model")\n\n# Show inference and message history\nprint("-------- Message 1 -----------")\nmessage = "What\'s my name?"\npayload = {"messages": [{"role": "user", "content": message}]}\nresponse = loaded_model.predict(payload)\n\nprint(f"User: {message}")\nprint(f"Agent: {response[\'choices\'][-1][\'message\'][\'content\']}")\n\n# print("\\n-------- Message 2 -----------")\nmessage = "My name is Morpheus."\nmessage_history = [choice[\'message\'] for choice in response[\'choices\']]\npayload = {"messages": message_history + [{"role": "user", "content": message}]}\nresponse = loaded_model.predict(payload)\n\nprint(f"User: {message}")\nprint(f"Agent: {response[\'choices\'][-1][\'message\'][\'content\']}")\n\n# # print("\\n-------- Message 3 -----------")\nmessage = "What\'s my name?"\nmessage_history = [choice[\'message\'] for choice in response[\'choices\']]\npayload = {"messages": message_history + [{"role": "user", "content": message}]}\nresponse = loaded_model.predict(payload)\n\nprint(f"User: {message}")\nprint(f"Agent: {response[\'choices\'][-1][\'message\'][\'content\']}")\n'})}),"\n",(0,a.jsx)(n.p,{children:"Ouput:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"-------- Message 1 -----------\nUser: What's my name?\nAgent: I'm sorry, I don't know your name. Can you please tell me?\n\n-------- Message 2 -----------\nUser: My name is Morpheus.\nAgent: Nice to meet you, Morpheus! How can I assist you today?\n\n-------- Message 3 -----------\nUser: What's my name?\nAgent: Your name is Morpheus!\n"})}),"\n",(0,a.jsx)(n.h2,{id:"5---summary",children:"5 - Summary"}),"\n",(0,a.jsx)(n.p,{children:"There are many logical extensions of the this tutorial, however the MLflow components can remain largely unchanged. Some examples include persisting chat history to a database, implementing a more complex langgraph object, productionizing this solution, and much more!"}),"\n",(0,a.jsx)(n.p,{children:"To summarize, here's what was covered in this tutorial:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Creating a simple LangGraph chain."}),"\n",(0,a.jsx)(n.li,{children:"Declaring a custom MLflow PyFunc ChatModel that wraps the above LangGraph chain with pre/post-processing logic."}),"\n",(0,a.jsxs)(n.li,{children:["Leveraging MLflow ",(0,a.jsx)(n.a,{href:"https://mlflow.org/docs/latest/models.html#models-from-code",children:"model from code"})," functionality to log our Custom PyFunc."]}),"\n",(0,a.jsx)(n.li,{children:"Loading the Custom PyFunc via the standard MLflow APIs."}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Happy coding!"})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>i});var a=t(7294);const s={},o=a.createContext(s);function i(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);