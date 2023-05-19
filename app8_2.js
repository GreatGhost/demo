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

app.use(bodyParser())
router.post('/v1/bind/sendSMS', async (ctx) => {
  ctx.body = {
    "Code": 0,
    "Msg": "Ok",
  }
})
router.post('/v1/personal/queryUserBaseInfo', ctx => {
  ctx.body = {
    "Code": 0,
    "msg": "success",
    "success": true,
    NickName: '宋江',
    UserName: '李逵',
    userId: 'fdsf'
  }
})
router.post('/v1/personal/smsLogin', ctx => {
  ctx.body = {
    "Code": '0',
    Data: {
      Userid: 'abac',
      Nickname: 'xiaoqiang '
    }
  }
})
router.get('/activityCenter/pubg/getUserSteamId', ctx => {
  ctx.body = {
    "code": "80303",
    "msg": "success",
    "success": true,
    "data": {
      "steamId": "123456",
      "accountName": "jack"
    }
  }
})
router.post('/activityCenter/pubg/setUserSteamId', ctx => {
  ctx.body = {
    "code": "0",
    "msg": "绑定成功",
    "success": true,
    "data": null
  }
})
router.post('/activityCenter/pubg/receiveActivityAward', ctx => {
  ctx.body = {
    "code": "80312",
    "msg": "success",
    "success": true,
    "data": [{
        "awardRecordId": 2756,
        "awardCategoryNo": "TIP_BOX",
        "awardName": "tip宝箱",
        "exchangeCode": "85IC-L2RH-39MU-W962",
        "awardTime": "2022-11-24 16:32:54",
        "exchangeStatus": 1
      },
      {
        "awardRecordId": 2757,
        "awardCategoryNo": "LUCKY_BOX",
        "awardName": "幸运宝箱",
        "exchangeCode": "WYPC-VU22-BFR9-7028",
        "awardTime": "2022-11-24 16:32:54",
        "exchangeStatus": 1
      },
      {
        "awardRecordId": 2758,
        "awardCategoryNo": "SLEEP_BOX",
        "awardName": "惊蛰宝箱",
        "exchangeCode": "85NC-O2G8-99WG-W882",
        "awardTime": "2022-11-24 16:32:54",
        "exchangeStatus": 1
      }
    ]
  }
})
router.get('/activityCenter/pubg/getAwardRecord', ctx => {
  ctx.body = {
    "code": "0",
    "msg": "success",
    "success": true,
    "data": {
      "pageNo": 1,
      "pageSize": 9999999,
      "total": 18,
      "list": [{
        "awardTime": "2022-12-09 11:15:59",
        "activityName": "击杀成就",
        "awardCategoryNo": "MOON_BOX",
        "awardName": "月圆宝箱",
        "exchangeCodes": "S02744-MM2Q-TCP8-OMQR3"
      }, {
        "awardTime": "2022-12-09 11:15:59",
        "activityName": "击杀成就",
        "awardCategoryNo": "MOON_BOX",
        "awardName": "月圆宝箱",
        "exchangeCodes": "S02744-NOYP-F23B-2Z0YD"
      }, {
        "awardTime": "2022-12-09 11:15:59",
        "activityName": "击杀成就",
        "awardCategoryNo": "ACC_VIP_7_DAY",
        "awardName": "泡泡加速器周卡",
        "exchangeCodes": null
      }, {
        "awardTime": "2022-12-09 11:15:58",
        "activityName": "击杀成就",
        "awardCategoryNo": "BLIND_EYE_GLASSES",
        "awardName": "银色百叶窗眼镜",
        "exchangeCodes": "S02756-PCNY-1LK5-IH8G4"
      }, {
        "awardTime": "2022-12-09 11:15:42",
        "activityName": "击杀成就",
        "awardCategoryNo": "ACC_VIP_24",
        "awardName": "24小时加速时长",
        "exchangeCodes": null
      }, {
        "awardTime": "2022-12-09 11:15:41",
        "activityName": "击杀成就",
        "awardCategoryNo": "CHICKEN_T_7",
        "awardName": "鸡宝宝T恤7天",
        "exchangeCodes": "S02748-S88X-8ROJ-EL8DC"
      }, {
        "awardTime": "2022-12-09 11:15:02",
        "activityName": "吃鸡成就",
        "awardCategoryNo": "CHICKEN_SHORTS",
        "awardName": "鸡警短裤",
        "exchangeCodes": "S02751-M74W-S0TJ-TYN1T"
      }, {
        "awardTime": "2022-12-09 11:15:02",
        "activityName": "吃鸡成就",
        "awardCategoryNo": "RED_T_14",
        "awardName": "大吉大利红T14天",
        "exchangeCodes": "S02747-EZVV-ULYB-GX3X0"
      }, {
        "awardTime": "2022-12-09 11:15:02",
        "activityName": "吃鸡成就",
        "awardCategoryNo": "POLITENESS",
        "awardName": "这厢有礼喷漆",
        "exchangeCodes": "S02758-9W7V-MNWV-8LG05"
      }, {
        "awardTime": "2022-12-09 11:15:02",
        "activityName": "吃鸡成就",
        "awardCategoryNo": "YYDS",
        "awardName": "YYDS喷漆",
        "exchangeCodes": "S02757-6U5S-INLR-IVMS8"
      }, {
        "awardTime": "2022-12-09 11:15:01",
        "activityName": "吃鸡成就",
        "awardCategoryNo": "CHRISTMAS_SWEATER",
        "awardName": "圣诞毛衣",
        "exchangeCodes": "S02759-71OX-V4UO-U02GA"
      }, {
        "awardTime": "2022-12-09 11:15:01",
        "activityName": "吃鸡成就",
        "awardCategoryNo": "CHICKEN_SWEATER",
        "awardName": "鸡警上衣",
        "exchangeCodes": "S02750-PYQS-VRYW-KUYQ3"
      }, {
        "awardTime": "2022-12-09 11:07:31",
        "activityName": "击杀排行",
        "awardCategoryNo": "ALL_CARD_9",
        "awardName": "泡泡加速器199现金抵用券1",
        "exchangeCodes": null
      }, {
        "awardTime": "2022-12-09 11:07:30",
        "activityName": "击杀排行",
        "awardCategoryNo": "BLIND_EYE_GLASSES",
        "awardName": "银色百叶窗眼镜",
        "exchangeCodes": "S02756-GFMI-F8QC-WZ3QA"
      }, {
        "awardTime": "2022-12-09 11:07:30",
        "activityName": "击杀排行",
        "awardCategoryNo": "CHICKEN_SHORTS",
        "awardName": "鸡警短裤",
        "exchangeCodes": "S02751-0L2B-Y0HP-HIC32"
      }, {
        "awardTime": "2022-12-09 10:42:46",
        "activityName": "加速任务",
        "awardCategoryNo": "TIP_BOX",
        "awardName": "T.I.P.宝箱",
        "exchangeCodes": "S02745-PRBS-R8OB-SA5TT"
      }, {
        "awardTime": "2022-12-09 10:42:46",
        "activityName": "加速任务",
        "awardCategoryNo": "CHICKEN_T_7",
        "awardName": "鸡宝宝T恤7天",
        "exchangeCodes": "S02748-2BSB-VAWX-9OPUS"
      }, {
        "awardTime": "2022-12-09 10:42:46",
        "activityName": "加速任务",
        "awardCategoryNo": "LUCKY_BOX",
        "awardName": "幸运空投",
        "exchangeCodes": "S02743-C194-QW4E-ARS7X"
      }]
    }
  }
})
router.get('/activityCenter/pubg/getActivityTaskInfo', ctx => {
  let ctx_query = ctx.query;
  var json = null;
  console.log('查询条件', ctx_query.taskNo)
  if (ctx_query.taskNo == 'KILL_VALUE') {
    json = {
      "code": "0",
      "msg": "success",
      "success": true,
      "data": {
        "taskNo": "KILL_VALUE",
        "taskRemark": 25,
        "awards": [{
            "awardKey": "KILL_VALUE_20221201",
            "remark": "2",
            "taskStatus": 3,
            "awardCategories": [{
                "awardName": "12月2号",
                "awardUrl": "",
                "awardRemark": "3元周卡抵用券<br/>幸运空投*5</br>月圆宝箱*5</br>"
              },
              {
                "awardName": "12月2号",
                "awardUrl": "",
                "awardRemark": "3元周卡抵用券<br/>幸运空投*5</br>月圆宝箱*5</br>"
              },
              {
                "awardName": "12月2号",
                "awardUrl": "",
                "awardRemark": "3元周卡抵用券<br/>幸运空投*5</br>月圆宝箱*5</br>"
              },
              {
                "awardName": "12月2号",
                "awardUrl": "",
                "awardRemark": "3元周卡抵用券<br/>幸运空投*5</br>月圆宝箱*5</br>"
              },
              {
                "awardName": "12月2号",
                "awardUrl": "",
                "awardRemark": "3元周卡抵用券<br/>幸运空投*5</br>月圆宝箱*5</br>"
              },
              {
                "awardName": "12月2号",
                "awardUrl": "",
                "awardRemark": "3元周卡抵用券<br/>幸运空投*5</br>月圆宝箱*5</br>"
              }

            ]
          },
          {
            "awardKey": "KILL_VALUE_20221202",
            "remark": "3",
            "taskStatus": 2,
            "awardCategories": [{
              "awardName": "12月3号",
              "awardUrl": "",
              "awardRemark": "3元周卡抵用券<br/>幸运空投*5</br>月圆宝箱*5</br>"
            }]
          },
          {
            "awardKey": "KILL_VALUE_20221203",
            "remark": "5",
            "taskStatus": 2,
            "awardCategories": [{
              "awardName": "12月4号",
              "awardUrl": "",
              "awardRemark": "3元周卡抵用券<br/>幸运空投*5</br>月圆宝箱*5</br>"
            }]
          },
          {
            "awardKey": "GAME_ONLINE_20221205",
            "remark": "3",
            "taskStatus": 3,
            "awardCategories": [{
              "awardName": "12月5号",
              "awardUrl": "",
              "awardRemark": "幸运空投*5\n月圆宝箱*5\n"
            }]
          },
          {
            "awardKey": "GAME_ONLINE_20221206",
            "remark": "22",
            "taskStatus": 3,
            "awardCategories": [{
              "awardName": "12月6号",
              "awardUrl": "",
              "awardRemark": "威尼斯人宝箱*10\n10元月卡抵用券\n鸡宝宝T-shirt（30天）\n"
            }]
          },
          {
            "awardKey": "GAME_ONLINE_20221207",
            "remark": "11",
            "taskStatus": 1,
            "awardCategories": [{
              "awardName": "12月7号",
              "awardUrl": "",
              "awardRemark": "T.I.P.宝箱*10\n"
            }]
          },
          {
            "awardKey": "GAME_ONLINE_20221208",
            "remark": "11",
            "taskStatus": 1,
            "awardCategories": [{
              "awardName": "12月8号",
              "awardUrl": "",
              "awardRemark": "幸运空投*5\n威尼斯人宝箱*5\n"
            }]
          }
        ]
      }
    };
  }
  if (ctx_query.taskNo == 'CHICKEN_VALUE') {
    json = {
      "code": "0",
      "msg": "success",
      "success": true,
      "data": {
        "taskNo": "CHICKEN_VALUE",
        "taskRemark": 25,
        "awards": [{
            "awardKey": "CHICKEN_VALUE_20221202",
            "remark": "2",
            "taskStatus": 2,
            "awardCategories": [{
                "awardName": "12月2号",
                "awardUrl": "",
                "awardRemark": "3元周卡抵用券<br/>幸运空投*5</br>月圆宝箱*5</br>"
              },
              {
                "awardName": "12月2号",
                "awardUrl": "",
                "awardRemark": "3元周卡抵用券<br/>幸运空投*5</br>月圆宝箱*5</br>"
              },
              {
                "awardName": "12月2号",
                "awardUrl": "",
                "awardRemark": "3元周卡抵用券<br/>幸运空投*5</br>月圆宝箱*5</br>"
              },
              {
                "awardName": "12月2号",
                "awardUrl": "",
                "awardRemark": "3元周卡抵用券<br/>幸运空投*5</br>月圆宝箱*5</br>"
              },
              {
                "awardName": "12月2号",
                "awardUrl": "",
                "awardRemark": "3元周卡抵用券<br/>幸运空投*5</br>月圆宝箱*5</br>"
              },
              {
                "awardName": "12月2号",
                "awardUrl": "",
                "awardRemark": "3元周卡抵用券<br/>幸运空投*5</br>月圆宝箱*5</br>"
              }

            ]
          },
          {
            "awardKey": "GAME_ONLINE_20221203",
            "remark": "3",
            "taskStatus": 2,
            "awardCategories": [{
              "awardName": "12月3号",
              "awardUrl": "",
              "awardRemark": "3元周卡抵用券<br/>幸运空投*5</br>月圆宝箱*5</br>"
            }]
          },
          {
            "awardKey": "GAME_ONLINE_20221204",
            "remark": "5",
            "taskStatus": 3,
            "awardCategories": [{
              "awardName": "12月4号",
              "awardUrl": "",
              "awardRemark": "3元周卡抵用券<br/>幸运空投*5</br>月圆宝箱*5</br>"
            }]
          },
          {
            "awardKey": "GAME_ONLINE_20221205",
            "remark": "3",
            "taskStatus": 4,
            "awardCategories": [{
              "awardName": "12月5号",
              "awardUrl": "",
              "awardRemark": "幸运空投*5\n月圆宝箱*5\n"
            }]
          },
          {
            "awardKey": "GAME_ONLINE_20221206",
            "remark": "22",
            "taskStatus": 5,
            "awardCategories": [{
              "awardName": "12月6号",
              "awardUrl": "",
              "awardRemark": "威尼斯人宝箱*10\n10元月卡抵用券\n鸡宝宝T-shirt（30天）\n"
            }]
          },
          {
            "awardKey": "GAME_ONLINE_20221207",
            "remark": "11",
            "taskStatus": 1,
            "awardCategories": [{
              "awardName": "12月7号",
              "awardUrl": "",
              "awardRemark": "T.I.P.宝箱*10\n"
            }]
          },
          {
            "awardKey": "GAME_ONLINE_20221208",
            "remark": "11",
            "taskStatus": 1,
            "awardCategories": [{
              "awardName": "12月8号",
              "awardUrl": "",
              "awardRemark": "幸运空投*5\n威尼斯人宝箱*5\n"
            }]
          }
        ]
      }
    };
  }
  if (ctx_query.taskNo == 'STEAM_BIND') {
    json = {
      "code": "0",
      "msg": "success",
      "success": true,
      "data": {
        "taskNo": "GAME_ONLINE",
        "awards": [{
            "awardKey": "GAME_ONLINE_20221202",
            "remark": "20221202",
            "taskStatus": 1,
            "awardCategories": [{
                "awardName": "12月2号",
                "awardUrl": "",
                "awardRemark": "3元周卡抵用券<br/>幸运空投*5</br>月圆宝箱*5</br>"
              },
              {
                "awardName": "12月2号",
                "awardUrl": "",
                "awardRemark": "3元周卡抵用券<br/>幸运空投*5</br>月圆宝箱*5</br>"
              },
              {
                "awardName": "12月2号",
                "awardUrl": "",
                "awardRemark": "3元周卡抵用券<br/>幸运空投*5</br>月圆宝箱*5</br>"
              },


            ]
          },
          {
            "awardKey": "GAME_ONLINE_20221203",
            "remark": "20221203",
            "taskStatus": 2,
            "awardCategories": [{
              "awardName": "12月3号",
              "awardUrl": "",
              "awardRemark": "3元周卡抵用券<br/>幸运空投*5</br>月圆宝箱*5</br>"
            }]
          },
          {
            "awardKey": "GAME_ONLINE_20221204",
            "remark": "20221204",
            "taskStatus": 3,
            "awardCategories": [{
              "awardName": "12月4号",
              "awardUrl": "",
              "awardRemark": "3元周卡抵用券<br/>幸运空投*5</br>月圆宝箱*5</br>"
            }]
          },
          {
            "awardKey": "GAME_ONLINE_20221205",
            "remark": "20221205",
            "taskStatus": 4,
            "awardCategories": [{
              "awardName": "12月5号",
              "awardUrl": "",
              "awardRemark": "幸运空投*5\n月圆宝箱*5\n"
            }]
          },
          {
            "awardKey": "GAME_ONLINE_20221206",
            "remark": "20221206",
            "taskStatus": 5,
            "awardCategories": [{
              "awardName": "12月6号",
              "awardUrl": "",
              "awardRemark": "威尼斯人宝箱*10\n10元月卡抵用券\n鸡宝宝T-shirt（30天）\n"
            }]
          },
          {
            "awardKey": "GAME_ONLINE_20221207",
            "remark": "20221207",
            "taskStatus": 1,
            "awardCategories": [{
              "awardName": "12月7号",
              "awardUrl": "",
              "awardRemark": "T.I.P.宝箱*10\n"
            }]
          },
          {
            "awardKey": "GAME_ONLINE_20221208",
            "remark": "20221208",
            "taskStatus": 1,
            "awardCategories": [{
              "awardName": "12月8号",
              "awardUrl": "",
              "awardRemark": "幸运空投*5\n威尼斯人宝箱*5\n"
            }]
          }
        ]
      }
    };
  }
  ctx.body = json;

})
router.get('/activityCenter/pubg/getKillRank', ctx => {
  ctx.body = {
    "code": "0",
    "msg": "success",
    "success": true,
    "data": {
      "killCount": "3",
      "rank": "39",
      "rankList": [{
          "recordUserNickName": "WG-****27806576",
          "killSum": 8,
          "rank": 1,
          "remark": "百叶窗太阳镜（银色）、侠盗猫套装、泡泡加速器199现金抵用券"
        }, {
          "recordUserNickName": "123",
          "killSum": 1,
          "rank": 2,
          "remark": "百叶窗太阳镜（银色）、西部警官套装、泡泡加速器99现金抵用券"
        }, {
          "recordUserNickName": "pao****cc001",
          "killSum": 1,
          "rank": 9,
          "remark": "百叶窗太阳镜（银色）、西部警官套装、泡泡加速器99现金抵用券"
        },
        {
          "recordUserNickName": "WG-****27806576",
          "killSum": 8,
          "rank": 1,
          "remark": "百叶窗太阳镜（银色）、侠盗猫套装、泡泡加速器199现金抵用券"
        }, {
          "recordUserNickName": "123",
          "killSum": 1,
          "rank": 2,
          "remark": "百叶窗太阳镜（银色）、西部警官套装、泡泡加速器99现金抵用券"
        }, {
          "recordUserNickName": "pao****cc001",
          "killSum": 1,
          "rank": 2,
          "remark": "百叶窗太阳镜（银色）、西部警官套装、泡泡加速器99现金抵用券"
        },
        {
          "recordUserNickName": "WG-****27806576",
          "killSum": 8,
          "rank": 1,
          "remark": "百叶窗太阳镜（银色）、侠盗猫套装、泡泡加速器199现金抵用券"
        }, {
          "recordUserNickName": "123",
          "killSum": 1,
          "rank": 2,
          "remark": "百叶窗太阳镜（银色）、西部警官套装、泡泡加速器99现金抵用券"
        },
        {
          "recordUserNickName": "pao****cc001",
          "killSum": 1,
          "rank": 2,
          "remark": "百叶窗太阳镜（银色）、西部警官套装、泡泡加速器99现金抵用券"
        },
        {
          "recordUserNickName": "pao****cc001",
          "killSum": 1,
          "rank": 2,
          "remark": "百叶窗太阳镜（银色）、西部警官套装、泡泡加速器99现金抵用券"
        }
      ]
    }
  }

})
router.get('/activityCenter/pubg/getActivityTaskInfo2', ctx => {
  ctx.body = {
    "code": "0",
    "msg": "success",
    "success": true,
    "data": {
      "taskNo": "GAME_ONLINE",
      "awards": [{
          "awardKey": "GAME_ONLINE_20221202",
          "remark": "20221202",
          "taskStatus": 1,
          "awardCategories": [{
              "awardName": "PUBG宝箱",
              "awardUrl": "",
              "awardRemark": "3元周卡抵用券<br/>幸运空投*5</br>月圆宝箱*5</br>"
            },
            {
              "awardName": "PUBG宝箱",
              "awardUrl": "",
              "awardRemark": "3元周卡抵用券<br/>幸运空投*5</br>月圆宝箱*5</br>"
            },
            {
              "awardName": "PUBG宝箱",
              "awardUrl": "",
              "awardRemark": "3元周卡抵用券<br/>幸运空投*5</br>月圆宝箱*5</br>"
            }
          ]
        },
        {
          "awardKey": "GAME_ONLINE_20221203",
          "remark": "20221203",
          "taskStatus": 2,
          "awardCategories": [{
            "awardName": "PUBG宝箱",
            "awardUrl": "",
            "awardRemark": "3元周卡抵用券<br/>幸运空投*5</br>月圆宝箱*5</br>"
          }]
        },
        {
          "awardKey": "GAME_ONLINE_20221204",
          "remark": "20221204",
          "taskStatus": 3,
          "awardCategories": [{
            "awardName": "12月4号",
            "awardUrl": "",
            "awardRemark": "3元周卡抵用券<br/>幸运空投*5</br>月圆宝箱*5</br>"
          }]
        },
        {
          "awardKey": "GAME_ONLINE_20221205",
          "remark": "20221205",
          "taskStatus": 4,
          "awardCategories": [{
            "awardName": "12月5号",
            "awardUrl": "",
            "awardRemark": "幸运空投*5\n月圆宝箱*5\n"
          }]
        },
        {
          "awardKey": "GAME_ONLINE_20221206",
          "remark": "20221206",
          "taskStatus": 5,
          "awardCategories": [{
            "awardName": "12月6号",
            "awardUrl": "",
            "awardRemark": "威尼斯人宝箱*10\n10元月卡抵用券\n鸡宝宝T-shirt（30天）\n"
          }]
        },
        {
          "awardKey": "GAME_ONLINE_20221207",
          "remark": "20221207",
          "taskStatus": 1,
          "awardCategories": [{
            "awardName": "12月7号",
            "awardUrl": "",
            "awardRemark": "T.I.P.宝箱*10\n"
          }]
        },
        {
          "awardKey": "GAME_ONLINE_20221208",
          "remark": "20221208",
          "taskStatus": 1,
          "awardCategories": [{
            "awardName": "12月8号",
            "awardUrl": "",
            "awardRemark": "幸运空投*5\n威尼斯人宝箱*5\n"
          }]
        }
      ]
    }
  }

})
app.use(router.routes());
app.listen(9000, () => {
  console.log("启动成功");
});