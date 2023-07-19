import{d as $,r as n,o as ee,a as V,h as t,b as U,i as E,l as c,f as o,w as m,u as d,q as p,F,e as k,j as L,g as j,m as G,n as R,p as ae,k as le,c as S,_ as te}from"./index-c1d11df5.js";const T=D=>(ae("data-v-54de516a"),D=D(),le(),D),oe={id:"brand"},re=T(()=>c("h1",null,"品牌管理",-1)),de={class:"buttons"},ne={id:"module"},se=T(()=>c("h1",null,"型号管理",-1)),ue={id:"add"},ie=T(()=>c("h2",null,"添加车辆",-1)),me={id:"addCar"},pe={id:"jntm"},ce=$({__name:"manager",props:{message:Object,carCompare:Array},emits:["addComCar"],setup(D,{emit:ve}){D.message;var q=n(!1),N=n([{id:-1,name:"no",brand_name:"no"}]),v=n(),I=n(),b=n(),Y=n(),g=n(),y=n(),x=n(""),C=n(""),_=n(""),w=n(""),f=n(""),B=n(""),M=n("");ee(()=>{O(),A()});const O=async()=>{try{let l=await V.post("http://localhost:8080/getAllBrand");v.value=l.data}catch(l){t.error(l)}},A=async()=>{try{let l=await V.post("http://localhost:8080/getAllModel"),a=l.data;for(let r=0;r<a.length;r++){let i=a[r];for(let u=0;u<v.value.length;u++){let h=v.value[u];if(h.id==i.brand_id){a[r].brand_name=h.name;break}}}I.value=l.data}catch(l){t.error(l)}},H=async()=>{if(b.value==""||b.value==null){t.info("请填写品牌名字!");return}try{let l=await V.post("http://localhost:8080/addBrand",{name:b.value,remark:Y.value});l.data==-1?t.info("品牌已经存在!"):l.data==0?t.error("插入失败!"):(O(),t.success("插入成功!"))}catch(l){t.error(l)}},J=async()=>{if(console.log(g.value),g.value==null){t.info("请选择品牌!");return}if(y.value===""||y.value==null){t.info("请输入型号!");return}try{let l;for(let r=0;r<v.value.length;r++){let i=v.value[r];if(i.name===g.value){l=i.id;break}}let a=await V.post("http://localhost:8080/addModel",{name:y.value,brand_id:l});a.data==-1?t.info("车型已经存在!"):a.data==0?t.error("插入失败!"):(A(),t.success("插入成功!"))}catch(l){t.error(l)}},K=async()=>{const l=[x,C,_,w,f,B,M];for(let s of l)if(s.value===null||s.value===""||s.value===void 0){t.error("请填写数据！");return}var a=new Date,r=a.getFullYear(),i=a.getMonth()+1,u=a.getDate(),h=r+"-"+i+"-"+u;try{let s=await V.post("http://localhost:8080/addCars",{price:w.value,brand_name:x.value,model_name:C.value,mileage:f.value,type_of_clutch:B.value,registration_date:M.value,displacement:_.value,release_date:h});s.data==-1?t.error("插入信息为空!"):s.data==1?t.success("插入成功!"):t.error("插入失败!")}catch(s){t.error(s)}for(let s of l)s.value=""},z=l=>{f.value=f.value.replace(/[^\d.]/g,""),_.value=_.value.replace(/[^\d.]/g,"")},P=l=>{if(l&&l!=null){q.value=!0,N.value.length=0;for(let a=0;a<I.value.length;a++){let r=I.value[a];l===r.brand_name&&N.value.push(r)}}},Q=async l=>{try{let a=await V.post("http://localhost:8080/delBrand",{name:l.name,id:l.id});a.data==-1?t.error("需要删除的信息为空!"):a.data==1?(O(),A(),t.success("删除成功!")):t.error("删除失败!")}catch(a){t.error(a)}},W=async l=>{console.log(l.id);try{let a=await V.post("http://localhost:8080/delModel",{id:l.id});a.data==-1?t.error("需要删除的信息为空!"):a.data==1?(A(),t.success("删除成功!")):t.error("删除失败!")}catch(a){t.error(a)}};return(l,a)=>{const r=U("el-table-column"),i=U("el-button"),u=U("el-input"),h=U("el-option"),s=U("el-select"),X=U("el-date-picker");return k(),E(F,null,[c("div",oe,[re,o(d(G),{data:d(v),style:{width:"100%"},"max-height":"400px"},{default:m(()=>[o(r,{fixed:"",prop:"id",label:"id",width:"140px"}),o(r,{prop:"name",label:"品牌"}),o(r,{prop:"remark",label:"备注"}),o(r,{fixed:"right",label:"Operations"},{default:m(e=>[o(i,{link:"",type:"primary",size:"small",onClick:L(Z=>Q(e.row),["prevent"])},{default:m(()=>[j(" Remove ")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),c("div",de,[o(u,{placeholder:"品牌名",modelValue:d(b),"onUpdate:modelValue":a[0]||(a[0]=e=>p(b)?b.value=e:b=e)},null,8,["modelValue"]),o(u,{placeholder:"备注",modelValue:d(Y),"onUpdate:modelValue":a[1]||(a[1]=e=>p(Y)?Y.value=e:Y=e)},null,8,["modelValue"]),o(i,{class:"mt-4",style:{width:"100%"},type:"primary",onClick:H},{default:m(()=>[j("添加品牌")]),_:1})])]),c("div",ne,[se,o(d(G),{data:d(I),style:{width:"100%"},"max-height":"400"},{default:m(()=>[o(r,{fixed:"",prop:"id",label:"id",width:"140px"}),o(r,{prop:"brand_name",label:"品牌"}),o(r,{prop:"name",label:"型号"}),o(r,{fixed:"right",label:"Operations"},{default:m(e=>[o(i,{link:"",type:"primary",onClick:L(Z=>W(e.row),["prevent"])},{default:m(()=>[j(" Remove ")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),c("div",ue,[o(s,{modelValue:d(g),"onUpdate:modelValue":a[2]||(a[2]=e=>p(g)?g.value=e:g=e),placeholder:"品牌"},{default:m(()=>[(k(!0),E(F,null,R(d(v),e=>(k(),S(h,{key:e.id,label:e.name,value:e.name},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),o(u,{placeholder:"车型",modelValue:d(y),"onUpdate:modelValue":a[3]||(a[3]=e=>p(y)?y.value=e:y=e)},null,8,["modelValue"]),o(i,{class:"mt-4",style:{width:"100%"},type:"primary",onClick:J},{default:m(()=>[j("添加车型")]),_:1})]),ie,c("div",me,[o(s,{modelValue:d(x),"onUpdate:modelValue":a[4]||(a[4]=e=>p(x)?x.value=e:x=e),placeholder:"品牌",onChange:P},{default:m(()=>[(k(!0),E(F,null,R(d(v),e=>(k(),S(h,{key:e.id,label:e.name,value:e.name,placement:"top"},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),o(s,{modelValue:d(C),"onUpdate:modelValue":a[5]||(a[5]=e=>p(C)?C.value=e:C=e),placeholder:"型号",disabled:!d(q)},{default:m(()=>[(k(!0),E(F,null,R(d(N),e=>(k(),S(h,{key:e.id,label:e.name,value:e.name},null,8,["label","value"]))),128))]),_:1},8,["modelValue","disabled"]),o(u,{placeholder:"里程",onChange:z,modelValue:d(_),"onUpdate:modelValue":a[6]||(a[6]=e=>p(_)?_.value=e:_=e),maxlength:"15"},null,8,["modelValue"]),o(u,{placeholder:"价格",modelValue:d(w),"onUpdate:modelValue":a[7]||(a[7]=e=>p(w)?w.value=e:w=e),maxlength:"15",type:"number"},null,8,["modelValue"]),o(u,{placeholder:"排量",onChange:z,modelValue:d(f),"onUpdate:modelValue":a[8]||(a[8]=e=>p(f)?f.value=e:f=e),maxlength:"3"},null,8,["modelValue"]),o(u,{placeholder:"离合器类型",modelValue:d(B),"onUpdate:modelValue":a[9]||(a[9]=e=>p(B)?B.value=e:B=e),maxlength:"6"},null,8,["modelValue"])]),c("div",pe,[o(X,{modelValue:d(M),"onUpdate:modelValue":a[10]||(a[10]=e=>p(M)?M.value=e:M=e),type:"date","value-format":"YYYY-MM-DD",placeholder:"上牌日期",clearable:""},null,8,["modelValue"]),o(i,{class:"mt-4",style:{width:"100%"},type:"primary",onClick:K},{default:m(()=>[j("添加车型")]),_:1})])],64)}}});const he=te(ce,[["__scopeId","data-v-54de516a"]]);export{he as default};