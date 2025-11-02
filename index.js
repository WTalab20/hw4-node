const express=require('express');const app=express();
app.get('/',(r,s)=>s.json({ok:true,msg:'HW4 Jenkins + GitHub OK'}));
const port=process.env.PORT||3000;app.listen(port,()=>console.log(`running on ${port}`));
module.exports=app;
