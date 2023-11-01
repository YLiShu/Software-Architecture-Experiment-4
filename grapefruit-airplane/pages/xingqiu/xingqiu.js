// pages/gouwu/gouwu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 天气数据
    update: '',
    basic:{},
    today:{},
    tomorrow:{},
    afterTomor:{},
    todyIcon:'../../image/天气.png',
    tomorrowIcon:'../../image/天气.png',
    afterTomorIcon:'../../image/天气.png',
    autoplay: true,
    interval: 2000,
    imagee:
    [{ imagess: 'https://img.cdn.sugarat.top/mdImg/MTY0MzM3MDAwMTM2Mw==u=2629420168,2116224141&fm=253&fmt=auto&app=138&f=JPEG.webp' }, 
      { imagess: 'https://img.cdn.sugarat.top/mdImg/MTY0MzM3MDAyNjQ3Nw==src=http___nimg.ws.126.net__url=http___dingyue.ws.126.net_2021_0623_af3bfc8aj00qv4svd007fc000w600g3m.jpg&thumbnail=650x2147483647&quality=80&type=jpg&refer=http___nimg.ws.126.jfif' }, 
      { imagess: 'https://img.cdn.sugarat.top/mdImg/MTY0MzM3MDA3MjIxMA==src=http___nimg.ws.126.net__url=http___dingyue.ws.126.net_2021_0701_a88ada79j00qvjkup001mc000ht00azm.jpg&thumbnail=650x2147483647&quality=80&type=jpg&refer=http___nimg.ws.126.jfif' } 
    ], 
    user: [
      {
        id:1,
        name: '意见收集',
        avatar: 'https://mmbiz.qpic.cn/mmbiz_png/JZxArCU6LRrr40fBkRJzuzFsqiboSibyyvmx0AabDUuSlsXQqYuzYLrm922iaupzC51ACg3iaXTT63MhpeGYbRH6Xw/0?wx_fmt=png',
        status: '待撩',
        qian: '有什么建议可以告诉我们哦~',
      },
      {
        id:2,
        name: '系统通知',
        avatar: 'https://mmbiz.qpic.cn/mmbiz_png/JZxArCU6LRrr40fBkRJzuzFsqiboSibyyvcApcWFL3jax0fKTibG2EicEK5WzxatXKMU6MC5cQJ4XibU71ejahElL2A/0?wx_fmt=png',
        status: '注意休息',
        qian: '更新学校最新通知~',
      },
    ],
  },
  swiperChange:function(){

  },
  communicate:function(res){
    var index = res.currentTarget.dataset.id;
    if(index === 1){
      wx.navigateTo({
        url: '../communicate/communicate',
      })
    }else if(index === 2){
      wx.showLoading({
        title: '开发ing',
        duration: 500
      })
    }else if(index === 3){
      wx.showLoading({
        title: '开发ing',
        duration: 500
      })
    }else{
      wx.showLoading({
        title: '开发ing',
        duration: 500
      })
    }
  },
  shangchang:function(){
    const key = 'LM6BZ-WVQKQ-BFH5Z-GJLKI-4YHNK-NAFM5'; //使用在腾讯位置服务申请的key
    const referer = 'cugerguider'; //调用插件的app的名称
    wx.getLocation({
		type:'gcj02',
      isHighAccuracy:true,
      success:function(res)
      {
        var nowlatitude = res.latitude;
        var nowlongitude = res.longitude;
        const location = JSON.stringify({
          latitude: nowlatitude,
          longitude: nowlongitude
        });
        const category = '生活服务,娱乐休闲';
        wx.navigateTo({
          url: 'plugin://chooseLocation/index?key=' + key + '&referer=' + referer + '&location=' + location + '&category=' + category
        });
      }
    })


  },
  ditie:function(){
    let plugin = requirePlugin("subway");
    let key = 'LM6BZ-WVQKQ-BFH5Z-GJLKI-4YHNK-NAFM5';//使用在腾讯位置服务申请的key;
    let referer = 'cugerguider'; //调用插件的app的名称
    wx.navigateTo({
     url: 'plugin://subway/index?key=' + key + '&referer=' + referer
    });
  },
  xueshenghui:function(){

    wx.navigateTo({
      url: '../../pages/iBeiKe/iBeiKe',
    })
  },
  shetuanlian:function(){
    wx.previewImage({
      urls: ['https://mmbiz.qpic.cn/mmbiz_jpg/JZxArCU6LRrr40fBkRJzuzFsqiboSibyyvSACCUt1D3TPVPnQzwyU8pRdJwHMTj5fkrOMpbEyaWNZKLZqGyPQ5eA/0?wx_fmt=jpeg'],
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getLocation();
  },
  onShow: function () {
    this.getLocation();
    },
  getLocation:function(){
    var that = this;
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
      var latitude = res.latitude
      var longitude = res.longitude
      that.getWeatherInfo(latitude, longitude);
      that.getcityname(latitude, longitude);
    }
    })
  },
  getWeatherInfo: function (latitude, longitude){
    var _this = this;
    var key = '37155a10aa944bf0a338c878f6af2333';
    //需要在微信公众号的设置-开发设置中配置服务器域名
    var url = 'https://devapi.qweather.com/v7/weather/3d?key='+key+'&location=' + longitude + ',' + latitude;
       wx.request({
         url: url, 
         data: {},
         method: 'GET',
         success: function (res) {
           var daily_forecast_today = res.data.daily[0];//今天预报
           var update = res.data.daily[0].fxDate;//更新时间
            _this.setData({
                update:update,
              today: daily_forecast_today,
              todyIcon: '../../image/color-64/' + daily_forecast_today.iconDay+'.png', //在和风天气中下载天气的icon图标，根据cond_code_d显示相应的图标
     });
    }
    })
    },
  getcityname:function(latitude, longitude){
    var _this = this;
    var key = '37155a10aa944bf0a338c878f6af2333';
    var url = 'https://geoapi.qweather.com/v2/city/lookup?key='+key+'&location=' + longitude + ',' + latitude;
       wx.request({
         url: url, 
         data: {},
         method: 'GET',
         success: function (res) {
           var basic = res.data.location[0];
             _this.setData({
               basic:basic
      });
    }
    })
  }
})