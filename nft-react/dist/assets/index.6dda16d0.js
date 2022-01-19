var G=Object.defineProperty,H=Object.defineProperties;var U=Object.getOwnPropertyDescriptors;var B=Object.getOwnPropertySymbols;var K=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable;var $=(t,e,s)=>e in t?G(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,w=(t,e)=>{for(var s in e||(e={}))K.call(e,s)&&$(t,s,e[s]);if(B)for(var s of B(e))J.call(e,s)&&$(t,s,e[s]);return t},j=(t,e)=>H(t,U(e));import{j as C,r as i,A as W,H as X,B as F,a as Y,p as Q,W as V,C as Z,S as f0,b as e0,R as t0,c as a0}from"./vendor.d9963a77.js";const s0=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))c(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function s(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerpolicy&&(r.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?r.credentials="include":a.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(a){if(a.ep)return;a.ep=!0;const r=s(a);fetch(a.href,r)}};s0();const f=C.exports.jsx,n=C.exports.jsxs,n0=C.exports.Fragment,r0=()=>f("div",{className:"flex justify-center items-center py-3",children:f("div",{className:"animate-spin rounded-full h-16 w-14 border-b-2 border-red-700"})});var _="/assets/logo.60ecbcf0.png";const c0=()=>n("div",{className:"w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer",children:[n("div",{className:"w-full flex sm:flex-row flex-col justify-between items-center my-4",children:[f("div",{className:"flex flex-[0.5] justify-center items-center",children:f("img",{src:_,alt:"logo",className:"w-32"})}),n("div",{className:"flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full",children:[f("p",{className:"text-white text-base text-center mx-2 cursor-pointer",children:"Market"}),f("p",{className:"text-white text-base text-center mx-2 cursor-pointer",children:"Exchange"}),f("p",{className:"text-white text-base text-center mx-2 cursor-pointer",children:"Tutorial"}),f("p",{className:"text-white text-base text-center mx-2 cursor-pointer",children:"Wallets"})]})]}),n("div",{className:"flex justify-center items-center flex-col mt-5",children:[f("p",{className:"text-white text-sm text-center",children:"Come and Join us"}),f("p",{className:"text-white text-sm text-center",children:"info.punkies@fakemail.com"})]}),f("div",{className:"sm:w-[90%] w-full h-[0.25] bg-gray-49 mt-5"}),n("div",{className:"sm:w-[90%] w-full flex justify-between items-center mt-3",children:[f("p",{className:"text-white text-sm text-center",children:"@punkies 2022"}),f("p",{className:"text-white text-sm text-center",children:"All Rights Reserved."})]})]}),I=({title:t,classProps:e})=>f("li",{className:`mx-4 cursor-pointer ${e}`,children:t}),l0=()=>{const[t,e]=i.exports.useState({toggleMenu:!1}),{toggleMenu:s}=t;function c(a,r){e(o=>j(w({},o),{[a]:r}))}return n("nav",{className:"w-full flex md:justify-center justify-between items-center p-4",children:[f("div",{className:"md:flex-[0.5] flex-initial justify-center item-center",children:f("img",{src:_,alt:"logo"})}),n("ul",{className:"text-white md:flex hidden list-none flex-row justify-between items-center flex-intial",children:[["Market","Exchange","Tutorials","Wallets"].map((a,r)=>f(I,{title:a},a+r)),f("li",{className:"bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]",children:"Login"})]}),n("div",{className:"flex relative",children:[s?f(W,{fontSize:28,className:"text-white md:hidden cursor-pointer",onClick:()=>c("toggleMenu",!1)}):f(X,{fontSize:28,className:"text-white md:hidden cursor-pointer",onClick:()=>c("toggleMenu",!0)}),s&&n("ul",{className:"z-10 fixed -right-2 top-0 right-2 p-3  w-[70vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in",children:[f("li",{className:"text-xl w-full my-2",children:f(W,{onClick:()=>c("toggleMenu",!1),classProps:!0})}),["Market","Exchange","Tutorials","Wallets"].map((a,r)=>f(I,{title:a,classProps:"my-2 text-lg"},a+r))]})]})]})},S=({color:t,title:e,subTitle:s,icon:c})=>n("div",{className:"flex flex-row justify-start items-center white-glassmorphism p-3 m-2 crsor-pointer hover:shadow-xl",children:[f("div",{className:`w-10 h-10 rounded-full flex justify-center items-center ${t}`,children:c}),n("div",{className:"ml-5 flex flex-col flex-1",children:[f("h1",{className:"mt-2 text-white text-lg",children:e}),f("p",{className:"mt-2 text-white text-sm md:w-9/12",children:s})]})]}),o0=()=>f("div",{className:"flex flex-col md:flex-row w-full justify-center items-center gradient-bg-services",children:n("div",{className:"flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4",children:[f("div",{className:"flex-1 flex flex-col justify-start items-start",children:n("h1",{className:"text-white text-3xl sm:text-5xl py-2 text-gradient",children:["Services that we",f("br",{}),"continue to improve"]})}),n("div",{className:"flex-1 flex flex-col justify-start items-center",children:[f(S,{color:"bg-[#2952E3]",title:"Security Guaranteed",subTitle:"Security is guaranted. We always maintain privacy and quality of products.",icon:f(F,{fontSize:21,className:"text-white"})}),f(S,{color:"bg-[#8945F8]",title:"Best exhange rates",subTitle:"We promise to use most reliable and fast technology for better User experience.",icon:f(Y,{fontSize:21,className:"text-white"})}),f(S,{color:"bg-[#F84550]",title:"Fastest transactions",subTitle:"We promise to use most reliable and fast technology for better User experience.",icon:f(F,{fontSize:21,className:"text-white"})})]})]})}),i0="hh-sol-artifact-1",b0="Transactions",d0="contracts/Transaction.sol",m0=[{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"from",type:"address"},{indexed:!1,internalType:"address",name:"receiver",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"},{indexed:!1,internalType:"string",name:"message",type:"string"},{indexed:!1,internalType:"uint256",name:"timestamp",type:"uint256"},{indexed:!1,internalType:"string",name:"keyword",type:"string"}],name:"Tranfer",type:"event"},{inputs:[{internalType:"address payable",name:"receiver",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"string",name:"message",type:"string"},{internalType:"string",name:"keyword",type:"string"}],name:"addToBlockchain",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"getAllTransaction",outputs:[{components:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"receiver",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"string",name:"message",type:"string"},{internalType:"uint256",name:"timestamp",type:"uint256"},{internalType:"string",name:"keyword",type:"string"}],internalType:"struct Transactions.TransferStruct[]",name:"",type:"tuple[]"}],stateMutability:"view",type:"function"},{inputs:[],name:"getTransactionCount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"}],u0="0x608060405234801561001057600080fd5b50610c0d806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80632e7700f014610046578063add6415d14610064578063cc2d7ead14610082575b600080fd5b61004e61009e565b60405161005b91906108db565b60405180910390f35b61006c6100a7565b60405161007991906108b9565b60405180910390f35b61009c600480360381019061009791906105e1565b6102ea565b005b60008054905090565b60606001805480602002602001604051908101604052809291908181526020016000905b828210156102e157838290600052602060002090600602016040518060c00160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600282015481526020016003820180546101b490610ad9565b80601f01602080910402602001604051908101604052809291908181526020018280546101e090610ad9565b801561022d5780601f106102025761010080835404028352916020019161022d565b820191906000526020600020905b81548152906001019060200180831161021057829003601f168201915b505050505081526020016004820154815260200160058201805461025090610ad9565b80601f016020809104026020016040519081016040528092919081815260200182805461027c90610ad9565b80156102c95780601f1061029e576101008083540402835291602001916102c9565b820191906000526020600020905b8154815290600101906020018083116102ac57829003601f168201915b505050505081525050815260200190600101906100cb565b50505050905090565b60016000808282546102fc91906109bd565b9250508190555060016040518060c001604052803373ffffffffffffffffffffffffffffffffffffffff1681526020018673ffffffffffffffffffffffffffffffffffffffff16815260200185815260200184815260200142815260200183815250908060018154018082558091505060019003906000526020600020906006020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020155606082015181600301908051906020019061043b9291906104ac565b506080820151816004015560a08201518160050190805190602001906104629291906104ac565b5050507f0223fa3e881abb2c01cea41bc2ae1ca85aee5730afbab7debaf625f7c787c5c633858585428660405161049e9695949392919061084a565b60405180910390a150505050565b8280546104b890610ad9565b90600052602060002090601f0160209004810192826104da5760008555610521565b82601f106104f357805160ff1916838001178555610521565b82800160010185558215610521579182015b82811115610520578251825591602001919060010190610505565b5b50905061052e9190610532565b5090565b5b8082111561054b576000816000905550600101610533565b5090565b600061056261055d84610927565b6108f6565b90508281526020810184848401111561057a57600080fd5b610585848285610a97565b509392505050565b60008135905061059c81610ba9565b92915050565b600082601f8301126105b357600080fd5b81356105c384826020860161054f565b91505092915050565b6000813590506105db81610bc0565b92915050565b600080600080608085870312156105f757600080fd5b60006106058782880161058d565b9450506020610616878288016105cc565b935050604085013567ffffffffffffffff81111561063357600080fd5b61063f878288016105a2565b925050606085013567ffffffffffffffff81111561065c57600080fd5b610668878288016105a2565b91505092959194509250565b6000610680838361079c565b905092915050565b61069181610a61565b82525050565b6106a081610a13565b82525050565b6106af81610a13565b82525050565b60006106c082610967565b6106ca818561098a565b9350836020820285016106dc85610957565b8060005b8581101561071857848403895281516106f98582610674565b94506107048361097d565b925060208a019950506001810190506106e0565b50829750879550505050505092915050565b600061073582610972565b61073f818561099b565b935061074f818560208601610aa6565b61075881610b98565b840191505092915050565b600061076e82610972565b61077881856109ac565b9350610788818560208601610aa6565b61079181610b98565b840191505092915050565b600060c0830160008301516107b46000860182610697565b5060208301516107c76020860182610697565b5060408301516107da604086018261082c565b50606083015184820360608601526107f2828261072a565b9150506080830151610807608086018261082c565b5060a083015184820360a086015261081f828261072a565b9150508091505092915050565b61083581610a57565b82525050565b61084481610a57565b82525050565b600060c08201905061085f60008301896106a6565b61086c6020830188610688565b610879604083018761083b565b818103606083015261088b8186610763565b905061089a608083018561083b565b81810360a08301526108ac8184610763565b9050979650505050505050565b600060208201905081810360008301526108d381846106b5565b905092915050565b60006020820190506108f0600083018461083b565b92915050565b6000604051905081810181811067ffffffffffffffff8211171561091d5761091c610b69565b5b8060405250919050565b600067ffffffffffffffff82111561094257610941610b69565b5b601f19601f8301169050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b60006109c882610a57565b91506109d383610a57565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610a0857610a07610b0b565b5b828201905092915050565b6000610a1e82610a37565b9050919050565b6000610a3082610a37565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000610a6c82610a73565b9050919050565b6000610a7e82610a85565b9050919050565b6000610a9082610a37565b9050919050565b82818337600083830152505050565b60005b83811015610ac4578082015181840152602081019050610aa9565b83811115610ad3576000848401525b50505050565b60006002820490506001821680610af157607f821691505b60208210811415610b0557610b04610b3a565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b610bb281610a25565b8114610bbd57600080fd5b50565b610bc981610a57565b8114610bd457600080fd5b5056fea26469706673582212205a20e854459a2f187947d36ca5859a5d34e0947d74548a6e45278e242fc15c8b64736f6c63430008000033",h0="0x608060405234801561001057600080fd5b50600436106100415760003560e01c80632e7700f014610046578063add6415d14610064578063cc2d7ead14610082575b600080fd5b61004e61009e565b60405161005b91906108db565b60405180910390f35b61006c6100a7565b60405161007991906108b9565b60405180910390f35b61009c600480360381019061009791906105e1565b6102ea565b005b60008054905090565b60606001805480602002602001604051908101604052809291908181526020016000905b828210156102e157838290600052602060002090600602016040518060c00160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600282015481526020016003820180546101b490610ad9565b80601f01602080910402602001604051908101604052809291908181526020018280546101e090610ad9565b801561022d5780601f106102025761010080835404028352916020019161022d565b820191906000526020600020905b81548152906001019060200180831161021057829003601f168201915b505050505081526020016004820154815260200160058201805461025090610ad9565b80601f016020809104026020016040519081016040528092919081815260200182805461027c90610ad9565b80156102c95780601f1061029e576101008083540402835291602001916102c9565b820191906000526020600020905b8154815290600101906020018083116102ac57829003601f168201915b505050505081525050815260200190600101906100cb565b50505050905090565b60016000808282546102fc91906109bd565b9250508190555060016040518060c001604052803373ffffffffffffffffffffffffffffffffffffffff1681526020018673ffffffffffffffffffffffffffffffffffffffff16815260200185815260200184815260200142815260200183815250908060018154018082558091505060019003906000526020600020906006020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020155606082015181600301908051906020019061043b9291906104ac565b506080820151816004015560a08201518160050190805190602001906104629291906104ac565b5050507f0223fa3e881abb2c01cea41bc2ae1ca85aee5730afbab7debaf625f7c787c5c633858585428660405161049e9695949392919061084a565b60405180910390a150505050565b8280546104b890610ad9565b90600052602060002090601f0160209004810192826104da5760008555610521565b82601f106104f357805160ff1916838001178555610521565b82800160010185558215610521579182015b82811115610520578251825591602001919060010190610505565b5b50905061052e9190610532565b5090565b5b8082111561054b576000816000905550600101610533565b5090565b600061056261055d84610927565b6108f6565b90508281526020810184848401111561057a57600080fd5b610585848285610a97565b509392505050565b60008135905061059c81610ba9565b92915050565b600082601f8301126105b357600080fd5b81356105c384826020860161054f565b91505092915050565b6000813590506105db81610bc0565b92915050565b600080600080608085870312156105f757600080fd5b60006106058782880161058d565b9450506020610616878288016105cc565b935050604085013567ffffffffffffffff81111561063357600080fd5b61063f878288016105a2565b925050606085013567ffffffffffffffff81111561065c57600080fd5b610668878288016105a2565b91505092959194509250565b6000610680838361079c565b905092915050565b61069181610a61565b82525050565b6106a081610a13565b82525050565b6106af81610a13565b82525050565b60006106c082610967565b6106ca818561098a565b9350836020820285016106dc85610957565b8060005b8581101561071857848403895281516106f98582610674565b94506107048361097d565b925060208a019950506001810190506106e0565b50829750879550505050505092915050565b600061073582610972565b61073f818561099b565b935061074f818560208601610aa6565b61075881610b98565b840191505092915050565b600061076e82610972565b61077881856109ac565b9350610788818560208601610aa6565b61079181610b98565b840191505092915050565b600060c0830160008301516107b46000860182610697565b5060208301516107c76020860182610697565b5060408301516107da604086018261082c565b50606083015184820360608601526107f2828261072a565b9150506080830151610807608086018261082c565b5060a083015184820360a086015261081f828261072a565b9150508091505092915050565b61083581610a57565b82525050565b61084481610a57565b82525050565b600060c08201905061085f60008301896106a6565b61086c6020830188610688565b610879604083018761083b565b818103606083015261088b8186610763565b905061089a608083018561083b565b81810360a08301526108ac8184610763565b9050979650505050505050565b600060208201905081810360008301526108d381846106b5565b905092915050565b60006020820190506108f0600083018461083b565b92915050565b6000604051905081810181811067ffffffffffffffff8211171561091d5761091c610b69565b5b8060405250919050565b600067ffffffffffffffff82111561094257610941610b69565b5b601f19601f8301169050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b60006109c882610a57565b91506109d383610a57565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610a0857610a07610b0b565b5b828201905092915050565b6000610a1e82610a37565b9050919050565b6000610a3082610a37565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000610a6c82610a73565b9050919050565b6000610a7e82610a85565b9050919050565b6000610a9082610a37565b9050919050565b82818337600083830152505050565b60005b83811015610ac4578082015181840152602081019050610aa9565b83811115610ad3576000848401525b50505050565b60006002820490506001821680610af157607f821691505b60208210811415610b0557610b04610b3a565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b610bb281610a25565b8114610bbd57600080fd5b50565b610bc981610a57565b8114610bd457600080fd5b5056fea26469706673582212205a20e854459a2f187947d36ca5859a5d34e0947d74548a6e45278e242fc15c8b64736f6c63430008000033",x0={},p0={};var y0={_format:i0,contractName:b0,sourceName:d0,abi:m0,bytecode:u0,deployedBytecode:h0,linkReferences:x0,deployedLinkReferences:p0};const g0=y0.abi,w0="0x4abBD3aa3BDB256988D3C4De27a49889F051052e",k=i.exports.createContext(),{ethereum:u}=window,E=()=>{const e=new V(u).getSigner();return new Z(w0,g0,e)},N0=({children:t})=>{const[e,s]=i.exports.useState(!1),[c,a]=i.exports.useState(localStorage.getItem("transactionCount")),[r,o]=i.exports.useState([]),[b,p]=i.exports.useState(""),[y,g]=i.exports.useState({addressTo:"",amount:"",keyword:"",message:""}),v=(l,d)=>{g(h=>j(w({},h),{[d]:l.target.value}))},P=async()=>{try{if(!u)return alert("Please install Metamask.");const d=await E().getAllTransaction();console.log(d);const h=d.map(m=>({addressTo:m.receiver,addressFrom:m.sender,timestamp:new Date(m.timestamp.toNumber()*1e3).toLocaleString(),message:m.message,keyword:m.keyword,amount:parseInt(m.amount._hex)/10**18}));console.log(h),o(h)}catch(l){throw console.log("Error ",l.message),new Error("No Etherum object.")}},R=async()=>{try{if(!u)return alert("Please install Metamask.");const l=await u.request({method:"eth_accounts"});l.length?(p(l[0]),P()):console.log("No Account found.")}catch(l){throw console.log("Error ",l.message),new Error("No Etherum object.")}},z=async()=>{try{const d=await E().getTransactionCount();window.localStorage.setItem("transactionCount",d)}catch(l){throw console.log("Error ",l.message),new Error("No Etherum object.")}},D=async()=>{try{if(!u)return alert("Please install Metamask.");const l=await u.request({method:"eth_requestAccounts"});p(l[0])}catch(l){throw console.log("Error ",l.message),new Error("No Etherum object.")}},q=async()=>{try{if(!u)return alert("Please install Metamask.");const{addressTo:l,amount:d,keyword:h,message:m}=y,M=Q(d),L=E();await u.request({method:"eth_sendTransaction",params:[{from:b,to:l,gas:"0x5208",value:M._hex}]});const T=await L.addToBlockchain(l,M,m,h);s(!0),console.log(`Loading - ${T.hash}`),await T.wait(),s(!1),console.log(`Success - ${T.hash}`);const O=await L.getTransactionCount();a(O)}catch(l){throw console.log("Error ",l.message),new Error("No Etherum object.")}};return i.exports.useEffect(()=>{R(),z()},[c]),f(k.Provider,{value:{connectWallet:D,currentAccount:b,handleChange:v,formData:y,setFormData:g,sendTransaction:q,transactions:r,isLoading:e},children:t})},A=t=>`${t.slice(0,5)}...${t.slice(t.length-4)}`,v0="XqBA4LrslNJOg49G7xSzsnGwxNtmcX9M",T0=({keyword:t})=>{const[e,s]=i.exports.useState(""),c=async()=>{var a,r;try{const o=await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${v0}&q=${t.split(" ").join("")}&limit=1`),{data:b}=await o.json();s((r=(a=b[0])==null?void 0:a.images)==null?void 0:r.downsized_medium.url)}catch{s("https://cdn.dribbble.com/users/1373100/screenshots/5521407/eth_drib_v1.gif")}};return i.exports.useEffect(()=>{t&&c()},[t]),e},j0=({addressTo:t,addressFrom:e,timestamp:s,message:c,keyword:a,amount:r,url:o})=>{const b=T0({keyword:a});return f("div",{className:"bg-[#181918] m-4 flex flex-1\r 2xl:min-w-[450px]\r 2xl:max-w-[500px]\r sm:min-w-[27px]\r sm:max-w-[300px]\r flex-col p-3 rounded-md hover:shadow-2xl\r ",children:n("div",{className:"flex flex-col items-center w-full mt-3",children:[n("div",{className:"w-full mb-6 p-2",children:[f("a",{href:`https://ropsten.etherscan.io/address/${e}`,target:"_blank",rel:"noopener noreferrer",children:n("p",{className:"text-white text-base ",children:["From: ",A(e)]})}),f("a",{href:`https://ropsten.etherscan.io/address/${t}`,target:"_blank",rel:"noopener noreferrer",children:n("p",{className:"text-white text-base ",children:["To: ",A(t)]})}),n("p",{className:"text-white text-base ",children:["Amount: ",r,"ETH"]}),c&&n(n0,{children:[f("br",{}),f("p",{className:"text-white text-base ",children:c})]})]}),f("img",{src:b||o,alt:"gif",className:"w-full h-64 2x:h-96 rounded-md shadow-lg object-cover"}),f("div",{className:"bg-black p-3 px-5 rounded-3xl -mt-5 shadow-2xl",children:f("p",{className:"text-[#37c7da] font-bold ",children:s})})]})})},C0=()=>{const{currentAccount:t,transactions:e,isLoading:s}=i.exports.useContext(k);return f("div",{className:"flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions",children:n("div",{className:"flex flex-col md:p-12 py-12 px-4",children:[t?f("h3",{className:"text-white text-3xl text-center my-2",children:"Latest Transactions"}):f("h3",{className:"text-white text-3xl text-center my-2",children:"Connect your account to see the changes"}),f("div",{className:"flex flex-wrap justify-center items-center mt-10",children:e.reverse().map((c,a)=>f(j0,w({},c),a))})]})})},x="min-h-[70px] sm:px-0 px-2 flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white",N=({placeholder:t,type:e,name:s,value:c,handleChange:a})=>f("input",{placeholder:t,type:e,name:s,value:c,onChange:r=>a(r,s),step:"0.0001",className:`my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism ${e==="number"?"appearance-none":""}`}),S0=()=>{const{connectWallet:t,currentAccount:e,handleChange:s,formData:c,isLoading:a,sendTransaction:r}=i.exports.useContext(k);function o(b){const{addressTo:p,amount:y,keyword:g,message:v}=c;b.preventDefault(),!(!p||!y||!g||!v)&&r()}return f("div",{className:"flex w-full justify-center items-center",children:n("div",{className:"flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4",children:[n("div",{className:"flex flex-1 justify-start flex-col mf:mr-10",children:[n("h1",{className:"text-3xl sm:text-5xl text-white text-gradient py-1",children:["Send Crypto ",f("br",{})," across the world"]}),f("p",{className:"text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base",children:"Explore Crypto world. Buy and sell crypto."}),!e&&f("button",{type:"button",onClick:t,className:"flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]",children:f("p",{className:"text-white text-base font-semibold",children:"Connect Wallet"})}),n("div",{className:"grid sm:grid-cols-3 grid-cols-2 w-full mt-10",children:[f("div",{className:`rounded-tl-2xl ${x}`,children:"Reliabilty"}),f("div",{className:x,children:"Secuity"}),f("div",{className:`rounded-tr-2xl ${x}`,children:"Ethereum"}),f("div",{className:`rounded-bl-2xl ${x}`,children:"Web 3.0"}),f("div",{className:x,children:"Low Fee"}),f("div",{className:`rounded-br-2xl ${x}`,children:"Blockchain"})]})]}),n("div",{className:"flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10",children:[f("div",{className:"p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorpism",children:n("div",{className:"flex justify-between flex-col w-full h-full",children:[n("div",{className:"flex justify-between items-start",children:[f("div",{className:"w-10 h-10 rounded-full border-2 border-white flex justify-center items-center",children:f(f0,{fontSize:21,color:"#fff"})}),f(e0,{fontSize:17,color:"#fff"})]}),n("div",{children:[f("p",{className:"text-white font-light text-sm",children:A(e)}),f("p",{className:"text-white font-light text-lg mt-1",children:"Ethereum"})]})]})}),n("div",{className:"p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism",children:[f(N,{placeholder:"Address To",name:"addressTo",type:"text",handleChange:s}),f(N,{placeholder:"Amount (ETH)",name:"amount",type:"number",handleChange:s}),f(N,{placeholder:"Keyword (Gif)",name:"keyword",type:"text",handleChange:s}),f(N,{placeholder:"Enter Message",name:"message",type:"text",handleChange:s}),f("div",{className:"h-[1px] w-full bg-gray-400 my-2"}),a?f(r0,{}):f("button",{type:"button",onClick:o,className:"text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer",children:"Send Now"})]})]})]})})},k0=()=>n("div",{className:"min-h-screen",children:[n("div",{className:"gradient-bg-welcome",children:[f(l0,{}),f(S0,{})]}),f(o0,{}),f(C0,{}),f(c0,{})]});t0.render(f(N0,{children:f(a0.StrictMode,{children:f(k0,{})})}),document.getElementById("root"));
