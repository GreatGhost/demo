// 6.1
// const http=require('http')

// const server=http.createServer((req,res)=>{
//     res.setHeader('Set-Cookie','username=abc');
//     res.end('hello world')
// })

// server.listen(3000,()=>{
//     console.log('启动成功')
// })

// 6.2

const Koa = require("koa");
const KoaSession = require("koa-session");
const app = new Koa();

app.keys = ["some secret"];

const SESS_CONFIG = {
  key: "koa.sess" /** (string) cookie key (default is koa.sess) */,
  /** (number || 'session') maxAge in ms (default is 1 days) */
  /** 'session' will result in a cookie that expires when session/browser is closed */
  /** Warning: If a session cookie is stolen, this cookie will never expire */
  maxAge: 86400000,
  httpOnly: true /** (boolean) httpOnly or not (default true) */,
  signed: false /** (boolean) signed or not (default true) */,
};

app.use(KoaSession(SESS_CONFIG, app));

app.use((ctx) => {
  let count = ctx.session.count || 0;
  ++count;
  ctx.session.count = count;
  ctx.body = "第" + count + "访问";
});

app.listen("3000",()=>{
    console.log('启动成功')
});
