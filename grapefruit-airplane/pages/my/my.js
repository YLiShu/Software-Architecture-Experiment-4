// pages/a/a.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUseGetUserProfile: false,
    userName: '',
    autoplay: true,
    interval: 2000,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认
    // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
        app.globalData.avatarUrl = res.userInfo.avatarUrl;
        console.log(app.globalData.avatarUrl)
        wx.setStorage({
          key: 'userName',
          data: res.userInfo.nickName,
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {


  },
we:function(){

},
  wee: function () {

  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  gofabu:function(){
    wx.showLoading({
      title: '开发ing',
      duration:500
    })
  },
  xiaohui:function(){ 
    wx.previewImage({ 
      urls: ['https://img.cdn.sugarat.top/mdImg/MTY0MzM2OTM5MTkyMA==QRcode_A1%20(1).jpg'], 
    }) 
  }, 
  xueshenghui:function(){ 
    wx.previewImage({ 
      urls: ['https://img.cdn.sugarat.top/mdImg/MTY0MzM2OTQ0MjU4NQ==150d9e25a462d5d3b318d95b3beb390.png'], 
    }) 
  }, 
  shetuanlian:function(){ 
    wx.previewImage({ 
      urls: ['https://img.cdn.sugarat.top/mdImg/MTY0MzM2OTQ3Mzg3NQ==ba1d1596da3268318f75f64680a18a3.png'], 
    }) 
  }, 
  disiji:function(){ 
    wx.previewImage({ 
      urls: ['https://img.cdn.sugarat.top/mdImg/MTY0MzM2OTQ5NjI4Mw==%E5%90%8E%E5%8B%A4.png'], 
    }) 
  }, 
  invest:function() 
  { 
    wx.showModal({ 
      title:'声明', 
      content:'本软件为西南石油大学个人开发者所有，若要参考使用，请联系开发者', 
    }) 
  }, 
  contact:function() 
  { 
    wx.showModal({ 
      content:'详情联系西南石油大学计科院', 
    }) 
  }, 
  we:function() 
  { 
    wx.showModal({ 
      title:'西柚计科院', 
      content:'2020级', 
    }) 
  } 
  



})