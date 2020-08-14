// pages/home/home.js
//getApp()获取App()产生的实例对象
// const app = getApp()

// const name =  app.globalData.name
// const age =  app.globalData.age

//注册一个页面
//页面也有自己的生命周期函数
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message: '哈哈哈',
    list: []
  },


  //监听wxml中相关的一些事件
  handleGetUserInfo(event) {
    console.log(event)
  },
  handleViewClick() {
    console.log('哈哈哈被点击了')
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('onLoad')
    wx.request({
      url: 'http://152.136.185.210:8000/api/z8/recommend',
      success: (res) => {
        console.log(res)
        const data = res.data.data.list
        this.setData({
          list: data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('onReady')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('onShow')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('onHide')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('onUnload')
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log('onPullDownRefresh')
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('onReachBottom')
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log('onShareAppMessage')
  },

  //监听页面滚动
  onPageScroll(obj) {
    // console.log(obj)
  }
})