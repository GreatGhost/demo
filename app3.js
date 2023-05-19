var http=require("http");
const fs=require('fs');

http.createServer((req,res)=>{
    res.setHeader("Content-Type","text/html;charset='utf-8'");

    //直接在页面中打印出来的内容
    //res.write("response write content.");

    //读文件
     fs.readFile("./index.html","utf-8",function(err,data){
         if(err) {
           console.log("index.html loading is failed :"+err);
         }
         else{
             //返回index.html页面
             res.end(data);
         }

     });

    //监听端口，注：一个程序只能监听一个端口
}).listen(8888,()=>{
    console.log('启动成功')
});
