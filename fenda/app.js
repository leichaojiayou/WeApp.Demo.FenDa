//app.js
App({
    isDebug: true,
    onShow: function() {
        console.log('App Show')
    },
    onHide: function() {
        console.log('App Hide')
    },
    onLaunch: function() {
        try {
            wx.clearStorageSync()
        } catch (e) {}
    },
    getUserInfo: function(cb) {
        var that = this
        if (this.globalData.userInfo) {
            typeof cb == "function" && cb(this.globalData.userInfo)
        } else {
            //调用登录接口
            wx.login({
                success: function() {
                    wx.getUserInfo({
                        success: function(res) {
                            that.globalData.userInfo = res.userInfo
                            typeof cb == "function" && cb(that.globalData.userInfo)
                        }
                    })
                }
            })
        }
    },
    globalData: {
        userInfo: null
    }
})