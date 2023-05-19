const Koa = require("koa");
const Router = require("koa-router");
const session = require("koa-session");
const cors = require("koa2-cors");
const bodyParser = require("koa-bodyparser");
const static = require("koa-static");
const axios = require('axios');
const router = new Router();
const app = new Koa();
const appid = 'wx0d76a67ef4e1cae4';
const appsecret = 'b11cdd7a6869b2e24f51d4c6ba79b255';

app.use(
  cors({
    credentials: true,
  })
);

app.keys = ["some a"];

app.use(static(__dirname + "/"));

app.use(bodyParser());

router.get('/v1/system/oemVersion', async (ctx) => {
  ctx.body = {
    "Code": 0,
    "Msg": "Ok",
    "Data": {
      "version": "21.3.1.1",
      "size": "30.60 MB",
      "date": "2021-04-09",
      "link": "https://ppjumper.dxinzf.com/ppstatic/oem/7/PPSetup_7_22.11.25.1.exe"
    }
  }
})
router.get('/v1/loginByWeixin', async (ctx) => {
  const { code } = ctx.query;
  const result = await axios.get('https://api.weixin.qq.com/sns/jscode2session', {
    params: {
      appid,
      secret: appsecret,
      grant_type: 'authorization_code',
      js_code: code
    }
  })
  const tokenInfo = await axios.get('https://api.weixin.qq.com/cgi-bin/token',{
   params:{
    secret: 'b11cdd7a6869b2e24f51d4c6ba79b255',
    grant_type: 'client_credential',
    appid:'wx0d76a67ef4e1cae4'
   }
  })
  console.log(result.data);
  console.log(tokenInfo.data)
  ctx.body = {
    session_key:result.data.session_key,
    openid:result.data.openid,
    access_token:tokenInfo.data.access_token,
    expires_in:tokenInfo.data.expires_in
  };
})

app.use(router.routes());
app.listen(9001, () => {
  console.log("启动成功");
});
