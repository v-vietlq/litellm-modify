(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[418],{33786:function(e,n,t){Promise.resolve().then(t.bind(t,87494))},87494:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return i}});var s=t(57437),l=t(2265),r=t(47907),a=t(41134);function i(){let e=(0,r.useSearchParams)().get("key"),[n,t]=(0,l.useState)(null);return(0,l.useEffect)(()=>{e&&t(e)},[e]),(0,s.jsx)(a.Z,{accessToken:n,publicPage:!0,premiumUser:!1})}},41134:function(e,n,t){"use strict";t.d(n,{Z:function(){return f}});var s=t(57437),l=t(2265),r=t(47907),a=t(777),i=t(2179),o=t(13810),c=t(92836),d=t(26734),m=t(41608),p=t(32126),u=t(23682),h=t(71801),x=t(42440),_=t(84174),g=t(50459),j=t(6180),b=t(99129),y=t(67951),f=e=>{var n;let{accessToken:t,publicPage:f,premiumUser:v}=e,[Z,k]=(0,l.useState)(!1),[N,S]=(0,l.useState)(null),[A,w]=(0,l.useState)(!1),[M,I]=(0,l.useState)(!1),[O,P]=(0,l.useState)(null),C=(0,r.useRouter)();(0,l.useEffect)(()=>{t&&(async()=>{try{let e=await (0,a.kn)(t);console.log("ModelHubData:",e),S(e.data),(0,a.E9)(t,"enable_public_model_hub").then(e=>{console.log("data: ".concat(JSON.stringify(e))),!0==e.field_value&&k(!0)}).catch(e=>{})}catch(e){console.error("There was an error fetching the model data",e)}})()},[t,f]);let E=e=>{P(e),w(!0)},z=async()=>{t&&(0,a.jA)(t,"enable_public_model_hub",!0).then(e=>{I(!0)})},H=()=>{w(!1),I(!1),P(null)},T=()=>{w(!1),I(!1),P(null)},R=e=>{navigator.clipboard.writeText(e)};return(0,s.jsxs)("div",{children:[f&&Z||!1==f?(0,s.jsxs)("div",{className:"w-full m-2 mt-2 p-8",children:[(0,s.jsx)("div",{className:"relative w-full"}),(0,s.jsxs)("div",{className:"flex ".concat(f?"justify-between":"items-center"),children:[(0,s.jsx)(x.Z,{className:"ml-8 text-center ",children:"Model Hub"}),!1==f?v?(0,s.jsx)(i.Z,{className:"ml-4",onClick:()=>z(),children:"✨ Make Public"}):(0,s.jsx)(i.Z,{className:"ml-4",children:(0,s.jsx)("a",{href:"https://forms.gle/W3U4PZpJGFHWtHyA9",target:"_blank",children:"✨ Make Public"})}):(0,s.jsxs)("div",{className:"flex justify-between items-center",children:[(0,s.jsx)("p",{children:"Filter by key:"}),(0,s.jsx)(h.Z,{className:"bg-gray-200 pr-2 pl-2 pt-1 pb-1 text-center",children:"/ui/model_hub?key=<YOUR_KEY>"})]})]}),(0,s.jsx)("div",{className:"grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 pr-8",children:N&&N.map(e=>(0,s.jsxs)(o.Z,{className:"mt-5 mx-8",children:[(0,s.jsxs)("pre",{className:"flex justify-between",children:[(0,s.jsx)(x.Z,{children:e.model_group}),(0,s.jsx)(j.Z,{title:e.model_group,children:(0,s.jsx)(_.Z,{onClick:()=>R(e.model_group),style:{cursor:"pointer",marginRight:"10px"}})})]}),(0,s.jsxs)("div",{className:"my-5",children:[(0,s.jsxs)(h.Z,{children:["Mode: ",e.mode]}),(0,s.jsxs)(h.Z,{children:["Supports Function Calling:"," ",(null==e?void 0:e.supports_function_calling)==!0?"Yes":"No"]}),(0,s.jsxs)(h.Z,{children:["Supports Vision:"," ",(null==e?void 0:e.supports_vision)==!0?"Yes":"No"]}),(0,s.jsxs)(h.Z,{children:["Max Input Tokens:"," ",(null==e?void 0:e.max_input_tokens)?null==e?void 0:e.max_input_tokens:"N/A"]}),(0,s.jsxs)(h.Z,{children:["Max Output Tokens:"," ",(null==e?void 0:e.max_output_tokens)?null==e?void 0:e.max_output_tokens:"N/A"]})]}),(0,s.jsx)("div",{style:{marginTop:"auto",textAlign:"right"},children:(0,s.jsxs)("a",{href:"#",onClick:()=>E(e),style:{color:"#1890ff",fontSize:"smaller"},children:["View more ",(0,s.jsx)(g.Z,{})]})})]},e.model_group))})]}):(0,s.jsxs)(o.Z,{className:"mx-auto max-w-xl mt-10",children:[(0,s.jsx)(h.Z,{className:"text-xl text-center mb-2 text-black",children:"Public Model Hub not enabled."}),(0,s.jsx)("p",{className:"text-base text-center text-slate-800",children:"Ask your proxy admin to enable this on their Admin UI."})]}),(0,s.jsx)(b.Z,{title:"Public Model Hub",width:600,visible:M,footer:null,onOk:H,onCancel:T,children:(0,s.jsxs)("div",{className:"pt-5 pb-5",children:[(0,s.jsxs)("div",{className:"flex justify-between mb-4",children:[(0,s.jsx)(h.Z,{className:"text-base mr-2",children:"Shareable Link:"}),(0,s.jsx)(h.Z,{className:"max-w-sm ml-2 bg-gray-200 pr-2 pl-2 pt-1 pb-1 text-center rounded",children:"<proxy_base_url>/ui/model_hub?key=<YOUR_API_KEY>"})]}),(0,s.jsx)("div",{className:"flex justify-end",children:(0,s.jsx)(i.Z,{onClick:()=>{C.replace("/model_hub?key=".concat(t))},children:"See Page"})})]})}),(0,s.jsx)(b.Z,{title:O&&O.model_group?O.model_group:"Unknown Model",width:800,visible:A,footer:null,onOk:H,onCancel:T,children:O&&(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"mb-4",children:(0,s.jsx)("strong",{children:"Model Information & Usage"})}),(0,s.jsxs)(d.Z,{children:[(0,s.jsxs)(m.Z,{children:[(0,s.jsx)(c.Z,{children:"OpenAI Python SDK"}),(0,s.jsx)(c.Z,{children:"Supported OpenAI Params"}),(0,s.jsx)(c.Z,{children:"LlamaIndex"}),(0,s.jsx)(c.Z,{children:"Langchain Py"})]}),(0,s.jsxs)(u.Z,{children:[(0,s.jsx)(p.Z,{children:(0,s.jsx)(y.Z,{language:"python",children:'\nimport openai\nclient = openai.OpenAI(\n    api_key="your_api_key",\n    base_url="http://0.0.0.0:4000" # LiteLLM Proxy is OpenAI compatible, Read More: https://docs.litellm.ai/docs/proxy/user_keys\n)\n\nresponse = client.chat.completions.create(\n    model="'.concat(O.model_group,'", # model to send to the proxy\n    messages = [\n        {\n            "role": "user",\n            "content": "this is a test request, write a short poem"\n        }\n    ]\n)\n\nprint(response)\n            ')})}),(0,s.jsx)(p.Z,{children:(0,s.jsx)(y.Z,{language:"python",children:"".concat(null===(n=O.supported_openai_params)||void 0===n?void 0:n.map(e=>"".concat(e,"\n")).join(""))})}),(0,s.jsx)(p.Z,{children:(0,s.jsx)(y.Z,{language:"python",children:'\nimport os, dotenv\n\nfrom llama_index.llms import AzureOpenAI\nfrom llama_index.embeddings import AzureOpenAIEmbedding\nfrom llama_index import VectorStoreIndex, SimpleDirectoryReader, ServiceContext\n\nllm = AzureOpenAI(\n    engine="'.concat(O.model_group,'",               # model_name on litellm proxy\n    temperature=0.0,\n    azure_endpoint="http://0.0.0.0:4000", # litellm proxy endpoint\n    api_key="sk-1234",                    # litellm proxy API Key\n    api_version="2023-07-01-preview",\n)\n\nembed_model = AzureOpenAIEmbedding(\n    deployment_name="azure-embedding-model",\n    azure_endpoint="http://0.0.0.0:4000",\n    api_key="sk-1234",\n    api_version="2023-07-01-preview",\n)\n\n\ndocuments = SimpleDirectoryReader("llama_index_data").load_data()\nservice_context = ServiceContext.from_defaults(llm=llm, embed_model=embed_model)\nindex = VectorStoreIndex.from_documents(documents, service_context=service_context)\n\nquery_engine = index.as_query_engine()\nresponse = query_engine.query("What did the author do growing up?")\nprint(response)\n\n            ')})}),(0,s.jsx)(p.Z,{children:(0,s.jsx)(y.Z,{language:"python",children:'\nfrom langchain.chat_models import ChatOpenAI\nfrom langchain.prompts.chat import (\n    ChatPromptTemplate,\n    HumanMessagePromptTemplate,\n    SystemMessagePromptTemplate,\n)\nfrom langchain.schema import HumanMessage, SystemMessage\n\nchat = ChatOpenAI(\n    openai_api_base="http://0.0.0.0:4000",\n    model = "'.concat(O.model_group,'",\n    temperature=0.1\n)\n\nmessages = [\n    SystemMessage(\n        content="You are a helpful assistant that im using to make a test request to."\n    ),\n    HumanMessage(\n        content="test from litellm. tell me why it\'s amazing in 1 sentence"\n    ),\n]\nresponse = chat(messages)\n\nprint(response)\n\n            ')})})]})]})]})})]})}}},function(e){e.O(0,[902,131,777,971,69,744],function(){return e(e.s=33786)}),_N_E=e.O()}]);