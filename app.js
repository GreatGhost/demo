const Koa = require("koa");
const Router = require("koa-router");
const session = require("koa-session");
const cors = require("koa2-cors");
const bodyParser = require("koa-bodyparser");
const static = require("koa-static");
// const axios =require('axios')
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
router.get("/api/list", async (ctx) => {
  ctx.body = {
    code: "0",
    data: [
      {
        name: "宋江",
      },
      {
        name: "路聚义",
      },
    ],
  };
});
router.get("/api/login", async (ctx) => {
  ctx.body = {
    code: "0",
    message: "登录成功",
  };
});
router.get("/api/smsLogin", async (ctx) => {
  // const res=axios.get('https://chbctop.site/api/login');
  // console.log(res)
  ctx.body = {
    code: "0",
    message: "短信登陆成功",
  };
});
router.get("/api/error", async (ctx) => {
  ctx.body = {
    code: "0",
    data: {
      errorTitle: "a",
      errorText: "b",
      errorTime: "c",
    },
  };
});
router.post("/user/getUserRoles.action", async (ctx) => {
  ctx.body = {
    code: "0",
    data: {
      errorTitle: "a",
      errorText: "b",
      errorTime: "c",
    },
  };
});
router.get("/api/test", async (ctx) => {
  ctx.body = {
    code: "0",
    data: [
      {
        path: "/about",
        name: "about",
        component: "about",
      },
    ],
  };
});
router.get("/getErrorMsg", async (ctx) => {
  ctx.body = {
    traceId: null,
    code: 200,
    message: "",
    data: {
      title: "IP冲突断链",
      obj: "BanGong01",
      address: "烟台-联通-莱山迎春街,LSQ-烟台ESC电竞酒店",
      content:
        "该客户机对应 瘦终端/主机（MAC1）与未知设备（MAC 2) IP冲突，冲突IP为 10.1.9.105，今日已发生2次",
      level: "警告",
      time: "2023-05-01 20:31:36",
      remark: "请尽快处理！",
    },
    success: true,
    error: false,
  };
});
// router.get("/", (ctx) => {
//   ctx.body = "hello abc";
// });
router.post("/api/search", async (ctx) => {
  ctx.body = {
    code: "0",
    data: [
      {
        name: "发财日记",
      },
      {
        name: "反恐特战队",
      },
      {
        name: "爆笑喜剧",
      },
      {
        name: "发财日记",
      },
      {
        name: "反恐特战队",
      },
      {
        name: "爆笑喜剧",
      },
      {
        name: "发财日记",
      },
      {
        name: "反恐特战队",
      },
      {
        name: "爆笑喜剧",
      },
      {
        name: "发财日记",
      },
      {
        name: "反恐特战队",
      },
      {
        name: "爆笑喜剧",
      },
      {
        name: "发财日记",
      },
      {
        name: "反恐特战队",
      },
      {
        name: "爆笑喜剧",
      },
      {
        name: "发财日记",
      },
      {
        name: "反恐特战队",
      },
      {
        name: "爆笑喜剧",
      },
      {
        name: "发财日记",
      },
      {
        name: "反恐特战队",
      },
      {
        name: "爆笑喜剧",
      },
      {
        name: "发财日记",
      },
      {
        name: "反恐特战队",
      },
      {
        name: "爆笑喜剧",
      },
    ],
  };
});

router.post("/api/searchHistory", async (ctx) => {
  ctx.body = {
    code: "0",
    data: {
      historyList: [
        {
          name: "熊出没",
        },
      ],
      hotList: [
        {
          name: "小猪佩奇",
        },
        {
          name: "熊出没",
        },
        {
          name: "小猪佩奇",
        },
        {
          name: "熊出没",
        },
        {
          name: "小猪佩奇",
        },
        {
          name: "熊出没",
        },
      ],
    },
  };
});
// router.post("/users/login", async (ctx) => {
//   const { body } = ctx.request;
//   console.log(ctx.session)
//   console.log(body.username)
//   ctx.session.userinfo=body.username;
//   // ctx.sesseion.userinfo = body.username;
//   ctx.body = {
//     message: "登录成功",
//   };
// });
// router.post("/users/logout", async (ctx) => {
//   delete ctx.session.userinfo;
//   ctx.body={
//     message: "退出"
//   }
// });
// router.get("/users/name", async (ctx) => {
//   ctx.body={
//     message: ctx.session.userinfo
//   }
// });
app.use(router.routes());
app.listen(3001, () => {
  console.log("启动成功");
});
