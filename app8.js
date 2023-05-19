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
router.get('/v1/system/oemVersion',async(ctx)=>{
  ctx.body={
    "code": 0,
    "msg": "Ok",
    "data": {
      "version": "21.3.1.1",
      "size": "30.60 MB",
      "date": "2021-04-09",
      "link": "https://ppjumper.dxinzf.com/ppstatic/oem/7/PPSetup_7_22.11.25.1.exe"
    }
  }
})
router.post('/v1/login',async(ctx)=>{
  ctx.body={
    "code": 0,
    "msg": "Ok",
    "data": {
      "userId":"afsdf2234",
      "username":"宋江",
      
    }
  }
})
router.get("/webapi/platform/commodity/list", async (ctx) => {
  ctx.body = {
    code: "0",
    message: "登录成功",
    data:[
      {
        orderId:'afdsfsafsafafaf',
        price:2.01,
        specialPrice:1.99,
        name:'4小时',
        isSpecial:true,
        specialRemainingDays:2,
        description:"送1000小时",
        Id:'2424214',
        vouchers:[
          {
            clientDisplayName:'五元周卡抵用券',
            viewPrice:1.99,
            voucher:'ggfafaf1123'
          }
        ]
      },
      {
        orderId:2,
        price:2.01,
        specialPrice:1.99,
        name:'4小时',
        isSpecial:true,
        specialRemainingDays:2,
        description:"送1000小时",
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
        price:5.79,
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
        description:"增加",
        price:1.79,
        name:'高级会员VIP周卡',
        isSpecial:false,
      },

    ]
  };
});

router.post("/webapi/platform/pay/submitOrder",(ctx)=>{
  ctx.body={
    "code": "3",
    "msg": "错误信息",
    "success": true,
    "data": {
      "orderId": 23,
      "price": 33,
      "payPrice": 33,
      "voucherMoney": 33
    }
  }
})
router.get("/", (ctx) => {
  ctx.body = "hello Koa";
});
router.get("/activityCenter/pubg/getUserSteamId", (ctx) => {
  ctx.body = {
    code:0,
    data:[
      {
        "orderId": 23,
        "price": 33,
        "payPrice": 33,
        "voucherMoney": 33
      },
      {
        "orderId": 23,
        "price": 33,
        "payPrice": 33,
        "voucherMoney": 33
      }
    ]
  };
});
router.post("/v1/personal/personalCardList", async (ctx) => {
  ctx.body = {
    "code": "0",
    "message": "登录成功",
    "PersonalCards": [
      {
        AddTime:12
      }
    ]
}
});
router.get("/webapi/platform/user/giftCardList", async (ctx) => {
  ctx.body = {
    "code": "0",
    "msg": "success",
    "success": true,
    "data": [
      {
        "activationCode": null,
        "addTime": 5,
        "expTime": '2023-12-01 00:00:00',
        "updateTime": '2023-12-01 00:00:00'
      }
    ]
  }
});
router.post("/webapi/platform/user/exchangeCard", async (ctx) => {
  ctx.body = {
    "code": "0",
    "msg": "success",
    "success": true,
    "data": 5
  }
});



router.get("/webapi/platform/user/voucherList", async (ctx) => {
  ctx.body = {
    "code": "0",
    "msg": "success",
    "success": true,
    "data": [
      {
        "id": null,
        "voucher": 'D1234',
        "validTime": null,
        "money": 5,
        "scopeDescription": '王者荣耀',
        "commodityIds": null,
        "isUsed": null,
        "validEndTime": '2023-12-01 00:00:00',
        "endTime": null,
        "status": 1,
        "updateTime": '2023-12-01 00:00:00'
      }
    ]
  }
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
router.get("/webapi/platform/pay/info",(ctx)=>{
  ctx.body={
    "code": "0",
    "msg": "success",
    "success": true,
    "data": 3
  }
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
router.post('/activityCenter/sendGift',(ctx)=>{
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
