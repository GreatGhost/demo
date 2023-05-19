const Koa = require("koa");
const Router = require("koa-router");
const session = require("koa-session");
const cors = require("koa2-cors");
const bodyParser = require("koa-bodyparser");
const static = require("koa-static");
const router = new Router();
const app = new Koa();
const helmet = require("koa-helmet");

app.use(helmet.contentSecurityPolicy({
  useDefaults: false,
  directives:{
    'frame-ancestors':'self https://open.douyin.com',
    // 'frame-src':['https://open.douyin.com'],
    'default-src':helmet.contentSecurityPolicy.dangerouslyDisableDefaultSrc,
  }
 
}));
app.use(
  cors({
    credentials: true,
  })
);

app.keys = ["some a"];

app.use(static(__dirname + "/"));

app.use(bodyParser());

router.get("/v1/gameNews/page", async (ctx) => {
  ctx.body = {
    code: "0",
    message: "成功",
    Data: {
      TotalPage: 2,
      PageNo: 1,
      TotalCount: 11,
      List: [
        {
          Title: "火影忍者",
          Content:
            "《LostLight萤火突击》已经在月初免费上线了steam，这是一款第三人称的多人在线射击游戏，在游戏中，玩家将成为萤火虫特遣小...",
          OperationTime: "2022-09-02 14:54:56",
          IsTop: 0,
          Id: "1",
        },
        {
          Title:
            "百度新闻百度新闻百度新闻百度新闻百度新闻百度新闻百度新闻百度新闻百度新闻百度新闻百度新闻百度新闻百度新闻百度新闻百度新闻百度新闻百度新闻百度新闻百度新闻百度新闻百度新闻百度新闻百度新闻百度新闻百度新闻百度新闻百度新闻百度新闻百度新闻百度新闻百度新闻百度新闻百度新闻百度新闻百度新闻百度新闻百度新闻百度新闻百度新闻百度新闻百度新闻百度新闻百度新闻百度新闻百度新闻百度新闻百度新闻百度新闻百度新闻百度新闻百度新闻百度新闻百度新闻百度新闻百度新闻百度新闻百度新闻百度新闻百度新闻百度新闻",
          Content:
            "《LostLight萤火突击》已经在月初免费上线了steam，这是一款第三人称的多人在线射击游戏，在游戏中，玩家将成为萤火虫特遣小...",
          OperationTime: "2022-09-02 14:54:56",
          IsTop: 1,
          Id: "2",
        },
        {
          Title: "魔神英雄传",
          Content:
            "《LostLight萤火突击》已经在月初免费上线了steam，这是一款第三人称的多人在线射击游戏，在游戏中，玩家将成为萤火虫特遣小...",
          OperationTime: "2022-09-02 14:54:56",
          IsTop: 1,
          Id: "3",
        },
        {
          Title: "全职猎人",
          Content:
            "《LostLight萤火突击》已经在月初免费上线了steam，这是一款第三人称的多人在线射击游戏，在游戏中，玩家将成为萤火虫特遣小...",
          OperationTime: "2022-09-02 14:54:56",
          IsTop: 1,
          Id: "4",
        },
        {
          Title: "灌篮高手",
          Content:
            "《LostLight萤火突击》已经在月初免费上线了steam，这是一款第三人称的多人在线射击游戏，在游戏中，玩家将成为萤火虫特遣小...",
          OperationTime: "2022-09-02 14:54:56",
          IsTop: 1,
          Id: "5",
        },
        {
          Title: "海贼王",
          Content:
            "《LostLight萤火突击》已经在月初免费上线了steam，这是一款第三人称的多人在线射击游戏，在游戏中，玩家将成为萤火虫特遣小...",
          OperationTime: "2022-09-02 14:54:56",
          IsTop: 1,
          Id: "6",
        },
        {
          Title: "火影",
          Content:
            "《LostLight萤火突击》已经在月初免费上线了steam，这是一款第三人称的多人在线射击游戏，在游戏中，玩家将成为萤火虫特遣小...",
          OperationTime: "2022-09-02 14:54:56",
          IsTop: 1,
          Id: "7",
        },
        {
          Title: "死神",
          Content:
            "《LostLight萤火突击》已经在月初免费上线了steam，这是一款第三人称的多人在线射击游戏，在游戏中，玩家将成为萤火虫特遣小...",
          OperationTime: "2022-09-02 14:54:56",
          IsTop: 1,
          Id: "8",
        },
        {
          Title: "网球王子",
          Content:
            "《LostLight萤火突击》已经在月初免费上线了steam，这是一款第三人称的多人在线射击游戏，在游戏中，玩家将成为萤火虫特遣小...",
          OperationTime: "2022-09-02 14:54:56",
          IsTop: 1,
          Id: "9",
        },

        {
          Title: "七龙珠",
          Content:
            "《LostLight萤火突击》已经在月初免费上线了steam，这是一款第三人称的多人在线射击游戏，在游戏中，玩家将成为萤火虫特遣小...",
          OperationTime: "2022-09-02 14:54:56",
          IsTop: 1,
          Id: "10",
        },
      ],
    },
  };
});
router.get("/v1/gameNews/get", (ctx) => {
  ctx.body = {
    code: "0",
    message: "成功",
    Data: {
      Id: 1,
      Title: "放散阀",
      Content: `
        <ul>
        <li style="text-align: left; line-height: 2;"><span style="font-size: 24px; font-family:
                楷体;">载灿烂文明，传承历史文化，维系民族精神，是国家和民族历史发展</span></li>
    </ul>
        <p>《LostLight萤火突击》已在月初免费上线了steam，这是一款第三人称的多人在线射击游戏，在游戏中，玩家将成为萤火虫特遣小队的一员，在LostLight的世界里揭开禁区背后的险恶阴谋。很多玩家下载安装了游戏后，会遇到游戏打不开、有闪退的情况、以及进不去、登录失败的问题，下面分享几个常用的解决方法，需要的</p>
        <img src="https://img1.baidu.com/it/u=163188679,2313809233&fm=253&fmt=auto&app=138&f=JPEG?w=658&h=422">
        <img src="https://img1.baidu.com/it/u=163188679,2313809233&fm=253&fmt=auto&app=138&f=JPEG?w=658&h=422">
        <p>《LostLight萤火突击》已在月初免费上线了steam，这是一款第三人称的多人在线射击游戏，在游戏中，玩家将成为萤火虫特遣小队的一员，在LostLight的世界里揭开禁区背后的险恶阴谋。很多玩家下载安装了游戏后，会遇到游戏打不开、有闪退的情况、以及进不去、登录失败的问题，下面分享几个常用的解决方法，需要的</p>
        `,
      VisitorNum: "8888",
      OperationTime: "2022-09-02 14:54:56",
    },
  };
});
router.get("/webapi/order/fastSubmitOrder", (ctx) => {
  ctx.body = "hello world";
});
router.post("/webapi/order/getScanCode", (ctx) => {
  ctx.body = {
    code: "0",
    msg: "success",
    success: true,
    data: { scanCode: "1565594446056128512", expire: 300 },
  };
});
router.get("/webapi/personal/orderState", (ctx) => {
  ctx.body = 1;
});

router.get("/webapi/order/info", (ctx) => {
  ctx.body = {
    code: "0",

    msg: "success",

    success: true,

    data: {
      orderId: 152403266,

      state: 0,
    },
  };
});
router.post("/activityCenter/sendGift", (ctx) => {
  ctx.body = {
    code: "0",
    data: {
      awardName: "ps4 手办",
      exchangeCode: "E00865-2132-YDZI-BIh322",
    },
  };
});
app.use(router.routes());
app.listen(9000, () => {
  console.log("启动成功");
});
