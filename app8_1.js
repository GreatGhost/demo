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
router.get('/v1/games',async(ctx)=>{
  ctx.body={
    "Code": 0,
    "Msg": "Ok",
  }
})
router.get('/api/datasource',async(ctx)=>{
  ctx.body={
    "code": 0,
    "data": [
      1,
      2,
      3,
      3,
      4,4,4,4,4,4,4,4,4,4,4,
    ],
  }
})
router.get('/api/abc',async(ctx)=>{
  ctx.body={
    "code": 0,
    "data": [
      1,
      2,
      3,
      3,
      4,4,4,4,4,4,4,4,4,4,4,
    ],
  }
})
router.get('/v1/bind/sendSMS',async(ctx)=>{
  function foo(){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        reject(5)
      },3000)
    })
  }
  try{
    await foo()
    ctx.body={
      "Code": 0,
      "Msg": "Ok",
    }
  }catch(err){
    ctx.body={
      "Code": 101,
      "Msg": err,
    }
  }
 
 
})
router.get('/activityCenter/award/pageUserOrders',ctx=>{
  ctx.body={
    "code": "0",
    "msg": "1",
    "success": true,
    "data": {
      "pageNo": 1,
      "pageSize": 10,
      "total": 16,
      "list": [
        {
          "commodityName": "高级会员VIP月卡",
          "orderState": 1,
          "exchangeCode": "85IC-L2RH-39MU-W962",
          "orderTime": "2022-07-26 16:52:41",
          "gcoinName": "100G-COIN币"
        },
        {
          "commodityName": "高级会员VIP月卡",
          "orderState": 1,
          "exchangeCode": "3CSX-8X52-E1D9-L2ZD",
          "orderTime": "2022-07-26 16:52:41",
          "gcoinName": "100G-COIN币"
        },
        {
          "commodityName": "高级会员VIP月卡",
          "orderState": 1,
          "exchangeCode": "K8FC-320M-WF99-O2M9",
          "orderTime": "2022-07-26 16:52:41",
          "gcoinName": "100G-COIN币"
        },
        {
          "commodityName": null,
          "orderState": 1,
          "exchangeCode": "UC3V-7K2P-TGM9-G521",
          "orderTime": null,
          "gcoinName": "100G-COIN币"
        },
        {
          "commodityName": null,
          "orderState": 1,
          "exchangeCode": "PKCI-ENC2-VG9Z-7724",
          "orderTime": null,
          "gcoinName": "100G-COIN币"
        },
        {
          "commodityName": null,
          "orderState": 1,
          "exchangeCode": "LC5U-DW2E-U9B9-625U",
          "orderTime": null,
          "gcoinName": "100G-COIN币"
        },
        {
          "commodityName": null,
          "orderState": 1,
          "exchangeCode": "0CJ0-1B2U-F96Z-C2KN",
          "orderTime": null,
          "gcoinName": "100G-COIN币"
        },
        {
          "commodityName": null,
          "orderState": 1,
          "exchangeCode": "LCT5-4L29-ECU9-DE2C",
          "orderTime": null,
          "gcoinName": "100G-COIN币"
        },
        {
          "commodityName": null,
          "orderState": 1,
          "exchangeCode": "WDXC-N2V2-AZ9D-02I6",
          "orderTime": null,
          "gcoinName": "100G-COIN币"
        },
        {
          "commodityName": null,
          "orderState": 1,
          "exchangeCode": "DSC2-BM52-NNG9-2682",
          "orderTime": null,
          "gcoinName": "100G-COIN币"
        }
      ]
    }
  }
})
router.post('/v1/personal/smsLogin',async(ctx)=>{
  ctx.body=
  {
    "Code": 0,
    "Msg": "ok",
    "Data": {
      "Userid": "wx_oZjbMwqJ5JJtl130840",     //用户账号
      "Nickname": "%1.85",     // 昵称
      "Headimg": "",   //头像，预留字段，未被使用
      "Hasbind": true,      // true 该手机号已绑定微信    false 未绑定
      "UserType": 0         //0老用户  1新用户
    }
  }
})
router.get("/v1/store/CommodityList", async (ctx) => {
  ctx.body = {
    code: "0",
    message: "登录成功",
    data:[
      {
        orderId:3,
        isSpecial:false,
        price:2.01,
        name:'4小时',
        isSpecial:false,
        Id:'2424214',
        vouchers:[
          {
            clientDisplayname:'五元周卡抵用券',
            viewPrice:5,
            voucher:'ggfafaf1123',
            money:'5'
          }
        ]
      },
      {
        orderId:4,
        isSpecial:false,
        price:2.79,
        name:'7小时',
        isSpecial:false,
      },
      {
        orderId:4,
        isSpecial:false,
        price:2.79,
        name:'季卡（无赠送）',
        isSpecial:false,
      },
      {
        orderId:11,
        isSpecial:false,
        price:2.79,
        name:'高级会员VIP周卡',
        isSpecial:false,
        description:'1.43/天'
      },
      {
        orderId:11,
        isSpecial:false,
        price:2.79,
        name:'高级会员VIP周卡',
        isSpecial:false,
        description:'1.43/天'
      },
      {
        orderId:11,
        isSpecial:false,
        price:2.79,
        name:'高级会员VIP周卡',
        isSpecial:false,
        description:'1.43/天'
      },
      {
        orderId:11,
        isSpecial:false,
        price:2.79,
        name:'高级会员VIP周卡',
        isSpecial:false,
        description:'1.43/天'
      },

    ]
  };
});
router.get("/webapi/platform/commodity/list", async (ctx) => {
  ctx.body = {
    code: "0",
    message: "登录成功",
    data:[
      {
        orderId:3,
        isSpecial:false,
        price:2.01,
        name:'4小时',
        isSpecial:false,
        Id:'2424214',
        vouchers:[
          {
            clientDisplayName:'五元周卡抵用券',
            viewPrice:2.01,
            voucher:'ggfafaf1123'
          }
        ]
      },
      {
        orderId:4,
        isSpecial:false,
        price:2.79,
        name:'7小时',
        isSpecial:false,
      },
      {
        orderId:4,
        isSpecial:false,
        price:2.79,
        name:'季卡（无赠送）',
        isSpecial:false,
      },
      {
        orderId:11,
        isSpecial:false,
        price:0.79,
        name:'高级会员VIP周卡',
        isSpecial:false,
        description:'1.43/天'
      },
      {
        orderId:11,
        isSpecial:false,
        price:1.79,
        name:'高级会员VIP周卡',
        isSpecial:false,
        description:'1.43/天'
      },
      {
        orderId:11,
        isSpecial:false,
        price:3.79,
        name:'高级会员VIP周卡',
        isSpecial:false,
        description:'1.43/天'
      },
      {
        orderId:11,
        isSpecial:false,
        price:4.79,
        name:'高级会员VIP周卡',
        isSpecial:false,
        description:'1.43/天'
      },

    ]
  };
});

router.get("/", (ctx) => {
  ctx.body = "hello Koa";
});
router.get("/webapi/order/fastSubmitOrder",(ctx)=>{
  ctx.body='hello world'
})
router.post("/webapi/order/getScanCode",(ctx)=>{
  ctx.body={"code":"0","msg":"success","success":true,"data":{"scanCode":"1565594446056128512","expire":300}}
})
router.get("/webapi/personal/orderState",(ctx)=>{
  ctx.body=1
})

router.get("/webapi/order/info",(ctx)=>{
  ctx.body={
    "code": "0", 
     
    "msg": "success", 
     
    "success": true, 
     
    "data": {
    "orderId": 152403266, 
     
    "state": 0 
     
    } 
     
    }
})
router.get('/activityCenter/sendGift',(ctx)=>{
  ctx.body={
    code:'0',
    data:{
      awardName:'ps4 手办',
      exchangeCode:'E00865-2132-YDZI-BIh322'
    }
  }
})
app.use(router.routes());
app.listen(9000, () => {
  console.log("启动成功");
});
