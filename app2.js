var express=require('express');

var app=new express();
app.get('/getPkgId',(req,res,next)=>{
    var _callback=req.query.callback;
    var _data={
        "code":0,
        msg:'',
        data:{
            list:['西瓜']
        }
    }
    res.type('text/javascript');
    res.send(_callback+'('+JSON.stringify(_data)+')');
})

app.get('/jsonp', (req, res) => {
    res.jsonp({
        name: 'xibing_G',
        age: 20
    })
});
app.listen(3001,()=>{
    console.log('express服务启动成功')
})