const Koa = require("koa");
const Router = require("koa-router");
const session = require("koa-session");
const cors = require("koa2-cors");
const bodyParser = require("koa-bodyparser");
const static = require("koa-static");
const router = new Router();
const app = new Koa();

app.use(
  cors({
    credentials: true,
  })
);

app.keys = ["some a"];

app.use(static(__dirname + "/"));

app.use(bodyParser());
// app.use(session(app));

// app.use((ctx, next) => {
//   if (ctx.url.indexOf("login") > -1) {
//     next();
//   } else {
//     if (!ctx.session.userinfo) {
//       ctx.body = {
//         message: "登录失败",
//       };
//     } else {
//       next();
//     }
//   }
// });
router.post("/api/login", async (ctx) => {
  ctx.body = {
    code: "0",
    message: "登录成功",
  };
});
router.get("/", (ctx) => {
  ctx.body = "hello Koa";
});
router.get("/test",(ctx)=>{
  ctx.status=204;
})
app.use(router.routes());
app.listen(3001, () => {
  console.log("启动成功");
});
