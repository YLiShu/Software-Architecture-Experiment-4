// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null,
    avatarUrl:'',
    map : [
      {
        "name": "游在西柚",
        "scale": 16,
        "data": [
          {
            latitude: 30.819734511880107,
            longitude:104.17677988026426,
            name:'苏宁易购广场',
            address: '四川省成都市新都区',
          },
          {
            latitude: 30.821006000575476,
            longitude:104.17351294968412,
            name:'七一国际广场',
            address: '四川省成都市新都区',
          },
          {
            latitude: 30.826805802504914,
            longitude:104.18556411478804,
            name:'院士林',
            address: '西南石油大学校内',
          }
        ]
      },
      {
        "name": "学在西柚",
        "scale": 16,
        "data": [
          {
            latitude: 30.821899718067844,
            longitude:104.18278266403959,
            name:'一期图书馆',
            adderss: '西南石油大学校内',
          },
          { latitude: 30.832215, 
            longitude:104.185687, 
            name:'二期图书馆', 
            adderss: '西南石油大学校内', 
          }, 
          { 
            latitude: 30.827962035659564,
            longitude:104.18666650269316,
            name:'创新创业学院',
            address: '西南石油大学校内',
          },
          {
            latitude: 30.834862293033286,
            longitude:104.18846358273314,
            name:'工程训练中心',
            address: '西南石油大学校内',
          },
          { 
            latitude: 30.830150, 
            longitude:104.184099, 
            name:'四大明楼-明理楼', 
            address: '西南石油大学校内', 
          }, 
          { 
            latitude: 30.831991, 
            longitude:104.183408, 
            name:'四大明楼-明德楼', 
            address: '西南石油大学校内', 
          }, 
          { 
            latitude: 30.832215, 
            longitude:104.184687, 
            name:'四大明楼-明辨楼', 
            address: '西南石油大学校内', 
          }, 
          { 
            latitude: 30.830711, 
            longitude:104.183234, 
            name:'四大明楼-明志楼', 
            address: '西南石油大学校内', 
          }, 
          { 
            latitude: 30.821245554543147, 
            longitude:104.1848721048622, 
            name:'思学楼', 
            address: '西南石油大学校内', 
          }, 
          { 
            latitude: 30.821337, 
            longitude:104.181532, 
            name:'油气藏地质及开发共程国家重点实验室', 
            address: '西南石油大学校内', 
          }, 
          {
            latitude: 30.8310,
            longitude:104.18380190346525,
            name:'四大明楼-教学区',
            address: '西南石油大学校内',
          },
          {
            latitude: 30.821245554543147,
            longitude:104.1848721048622,
            name:'思学楼',
            address: '西南石油大学校内',
          },
          {
            latitude: 30.82258612430983,
            longitude:104.18595035288618,
            name:'博学楼',
            address: '西南石油大学校内',
          }
        ]
      },
      {
        "name": "吃在西柚",
        "scale": 16,
        "data": [
          {
            latitude: 30.82559427632501,
            longitude:104.18604691241072,
            name:'学生一食堂',
            adderss: '西南石油大学校内',
          },
          {
            latitude: 30.829993471364144,
            longitude:104.18785740349577,
            name:'学生二食堂',
            address: '西南石油大学校内',
          },
          {
            latitude: 30.830997657260088,
            longitude:104.18820072624968,
            name:'学生三食堂',
            address: '西南石油大学校内',
          },
          {
            latitude: 30.826980850653936,
            longitude:104.18817122195051,
            name:'蜜雪冰城',
            address: '西南石油大学校内',
          },
          {
            latitude: 30.824866431956877,
            longitude:104.18556947920607,
            name:'舞茗酸奶',
            address: '西南石油大学校内',
          },
          { 
            latitude: 30.825034, 
            longitude:104.188341, 
            name:'正因小吃街', 
            address: '西南石油大学校内', 
          }, 
          { 
            latitude: 30.826980850653936, 
            longitude:104.18827122195051, 
            name:'瑞幸咖啡', 
            address: '西南石油大学校内', 
          },
          {
            latitude: 30.82735858504067,
            longitude:104.18822486613081,
            name:'书亦烧仙草',
            address: '西南石油大学校内',
          }
        ]
      },
      {
        "scale": 16,
        "name": "运动西柚",
        "data": [
          {
            latitude: 30.823770048363883,
            longitude:104.18505181286619,
            name:'一期体育馆',
            address: '西南石油大学校内',
          },
          {
            latitude: 30.824599247184803,
            longitude:104.18489356253431,
            name:'一期篮球场',
            address: '西南石油大学校内',
          },
          {
            latitude: 30.824120155406607,
            longitude:104.1856284878044,
            name:'基础领航健身馆',
            address: '西南石油大学校内',
          },
          {
            latitude: 30.825810785920723,
            longitude:104.18524224970625,
            name:'一期田径场',
            address: '西南石油大学校内',
          },
          {
            latitude: 30.830163907317164,
            longitude:104.1887639901428,
            name:'二期田径场',
            address: '西南石油大学校内',
          },
          {
            latitude: 30.831688604752014,
            longitude:104.1889973423271,
            name:'羽毛球&健身馆',
            address: '西南石油大学校内',
          },
          {
            latitude: 30.829072190655893,
            longitude:104.1884206673889,
            name:'二期篮球场',
            address: '西南石油大学校内',
          },
        ]
      },
      {
        "scale": 16,
        "name": "交通服务",
        "data": [
          {
            latitude: 30.818757849732116,
            longitude:104.18655116770552,
            name:'石油大学地铁站',
            address: '四川省成都市新都区',
          },
          {
            latitude: 30.820913864298955,
            longitude:104.17527784321592,
            name:'钟楼地铁站',
            address: '四川省成都市新都区',
          }
        ]
      },
      {
        "name": "生活服务",
        "scale": 16,
        "data": [
          {
            latitude: 30.829192850653936,
            longitude:104.18307122195051,
            name:'驾了么驾校',
            adderss: '西南石油大学校内',
          },
          {
            latitude: 30.826791982909153,
            longitude:104.18811757777021,
            name:'大榕华超市',
            address: '西南石油大学校内',
          },
          {
            latitude: 30.826308295513552,
            longitude:104.18755967829512,
            name:'钰妍佳发艺',
            address: '西南石油大学校内',
          },
          {
            latitude: 30.82494935121964,
            longitude:104.18554265711592,
            name:'嘉新水站',
            address: '西南石油大学校内',
          },
          {
            latitude: 30.82676895023329,
            longitude:104.18735046599195,
            name:'印通图文社',
            address: '西南石油大学校内',
          },
          {
            latitude: 30.825193501951365,
            longitude:104.18564994547651,
            name:'中国移动',
            address: '西南石油大学校内',
          },
          {
            latitude: 30.82660772133256,
            longitude:104.18818195078657,
            name:'西-南眼镜店',
            address: '西南石油大学校内',
          },
          { 
            latitude: 30.828590850653936, 
            longitude:104.18717122195051, 
            name:'二区菜鸟驿站', 
            address: '西南石油大学校内', 
          }, 
          { 
            latitude: 30.826980850653936, 
            longitude:104.18817122195051, 
            name:'顺丰快递', 
            address: '西南石油大学校内', 
          }, 
          { 
            latitude: 30.826980850653936, 
            longitude:104.18817122195051, 
            name:'京东派', 
            address: '西南石油大学校内', 
          }, 
          { 
            latitude: 30.828990850653936, 
            longitude:104.18317122195051, 
            name:'教工区快递中心', 
            address: '西南石油大学校内', 
          } 
        ]
      },
      {
        "scale": 16,
        "name": "行政大楼",
        "data": [
          {
            latitude: 30.82137915169765,
            longitude:104.18448854897306,
            name:'外语学院',
            adderss: '西南石油大学校内',
          },
          {
            latitude: 30.82944991682911,
            longitude:104.18369461510466,
            name:'理学院',
            address: '西南石油大学校内',
          },
          {
            latitude: 30.83000268413782,
            longitude:104.18387164089964,
            name:'电气信息学院',
            address: '西南石油大学校内',
          },
          {
            latitude: 30.83035276845329,
            longitude:104.18400038693235,
            name:'计算机科学学院',
            address: '西南石油大学校内',
          },
          {
            latitude: 30.523346,
            longitude:114.398372,
            name:'机械与电子学院',
            address: '西南石油大学校内',
          },
          {
            latitude: 30.8307120641864,
            longitude:104.18347467396543,
            name:'机电工程学院',
            address: '西南石油大学校内',
          },
          {
            latitude: 30.83089631788682,
            longitude:104.18308843586729,
            name:'土木工程与建筑学院',
            address: '西南石油大学校内',
          },
          {
            latitude: 30.831780730726337,
            longitude:104.18349613163755,
            name:'化学化工学院',
            address: '西南石油大学校内',
          },
          {
            latitude: 30.83186364401248,
            longitude:104.18389309857176,
            name:'材料科学与工程学院',
            address: '西南石油大学校内',
          },
          {
            latitude: 30.83233348461354,
            longitude:104.18481577847288,
            name:'石油工程学院',
            address: '西南石油大学校内',
          },
          {
            latitude: 30.527909,
            longitude:114.400249,
            name:'外国语学院',
            address: '西南石油大学校内',
          },
          {
            latitude: 30.831670179567507,
            longitude:104.18551315281675,
            name:'地球科学与技术学院',
            address: '西南石油大学校内',
          },
          {
            latitude:30.827943609764034,
            longitude:104.18667723152922,
            name:'艺术学院',
            address: '西南石油大学校内',
          },
          {
            latitude: 30.82353050072758,
            longitude:104.1850705883293,
            name:'体育学院',
            address: '西南石油大学校内',
          },
          {
            latitude: 30.82242949514835,
            longitude:104.18617297623442,
            name:'法学院',
            address: '西南石油大学校内',
          }
        ]
      },
      {
        "scale": 16,
        "name": "学生宿舍",
        "data": [
          {
            latitude: 30.823631847857456,
            longitude:104.18586988661573,
            name:'1号楼',
            adderss: '西南石油大学校内',
          },
          { 
            latitude: 30.829786, 
            longitude:104.193341, 
            name:'4号楼', 
            adderss: '西南石油大学校内', 
          }, 
          { 
            latitude: 30.830864, 
            longitude:104.192349, 
            name:'9号楼', 
            adderss: '西南石油大学校内', 
          }, 
          { 
            latitude: 30.831608, 
            longitude:104.193323, 
            name:'11号楼', 
            adderss: '西南石油大学校内', 
          }, 
          { 
            latitude: 30.832267, 
            longitude:104.194159, 
            name:'16号楼', 
            adderss: '西南石油大学校内', 
          }, 
          { 
            latitude: 30.833414, 
            longitude:104.194424, 
            name:'19号楼', 
            adderss: '西南石油大学校内', 
          }, 
          { 
            latitude: 30.835372, 
            longitude:104.193314, 
            name:'20号楼', 
            adderss: '西南石油大学校内', 
          }, 
          { 
            latitude: 30.829182, 
            longitude:104.186307, 
            name:'教工宿舍', 
            adderss: '西南石油大学校内', 
          }, 
          { 
            latitude: 30.832267, 
            longitude:104.194159, 
            name:'16号楼', 
            adderss: '西南石油大学校内', 
          }, 
          {
            latitude: 30.828040345761636,
            longitude:104.18769378874586,
            name:'24栋',
            address: '西南石油大学校内',
          },
        ]
      }
    ]
  }
})
