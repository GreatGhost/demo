const path = require('path');
const fs=require('fs');
const EventEmitter = require('events')
const sharp=require('sharp')
const http=require('http')
const url=require('url');
const qs=require('querystring');

var filepath='/src/data/a.txt';
console.log(path.dirname(filepath))
console.log(path.basename(filepath))

// 获取文件的后缀名
console.log(path.extname(filepath))
var filename=path.extname(filepath);
var basePath=path.basename(filepath)
console.log(path.join(basePath,filename))
console.log('打印')
console.log(process.argv)


// fs模块
// 文件的读写
//  文件信息
var utilPath='./src/data/util.js';

fs.open(filepath,(err,fd)=>{
    if(err){

    }else{
        console.log('文件信息',fd);
        fs.fstat(fd,(err,info)=>{
            console.log(info)
        })
    }
})
fs.writeFile('./src/data/a.txt','我爱罗',(err)=>{
    if(err){
        console.log('打印错误uu',err);
    }else{
        console.log('测试内容')
    }
})
fs.writeFileSync('./src/data/vars.js','module.exports={version:"sem"}',(err)=>{
    if(err){
        console.log('修改失败')
    }else{
        console.log('修改成功')
    }
})
// 文件夹的操作

const dirname='./src/less'

if(!fs.existsSync(dirname)){
    fs.mkdir(dirname,err=>{
        if(err){
            console.log(err)
        }
    })
}

fs.readdir(dirname,(err,files)=>{
    console.log(files)
    for(let file of files){
        let filename=`src/less/`+file
        fs.readFile(filename,{encoding: 'utf-8'},(err,data)=>{
            if(err){
                console.log(err)
            }else{
                console.log(data);

            }
        })
    }
})

// fs.rename('./src/less','newName',err=>{
//     if(err){
//         console.log(err)
//     }
// })

// event模块

// 1.创建发射器
const emitter = new EventEmitter()
emitter.on('click',args=>{
    console.log('发生了监听事件',args)
})

console.log('这里触发事件');
setTimeout(()=>{
    emitter.emit('click','宋江')

},1000)


// npm 指令

// 创建自己的脚手架

//Buffer
sharp('./src/images/alipay.png').resize(200,200)
    .toBuffer()
    .then(data=>{
        fs.writeFile('./src/images/alipay_02.png',data,(err)=>{
            if(err){

            }else{
                console.log('创建成功');
            }
        })
    })

// 事件循环和异步IO
const server=http.createServer((req,res)=>{
    console.log(req)
    res.setHeader("Content-type", "text/plain;charset=utf-8")
    const {pathname}=url.parse(req.url);
    const urlVo=url.parse(req.url);

    console.log('路径名称',pathname,urlVo);

    // res.writeHead(200, {
    //     "Content-type": "text/plain;charset=utf-8"
    //   })
    if(req.url==='/login'){
        res.end('登录');
    }else if(req.url==='/home'){
        res.end('home');
    }else{
        res.writeHead(200)

        // res.end('404')
    }
})

server.listen(3000,()=>{
    console.log('服务打开成功')
})
