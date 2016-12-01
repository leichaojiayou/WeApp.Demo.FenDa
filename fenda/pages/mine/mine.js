var common = require("../../common/common.js");
var urls = common.urlList;

// mine.js
var app = getApp()
Page({
    data: {
        userInfo: {}
        /*        myProfile: [
                    { "desc": "我的分币", "id": "coin" },
                    { "desc": "我问", "id": "myQues" },
                    { "desc": "我听", "id": "myHeared" }
                ],
                myAccount: ["手机号码", "帮助", "结算说明", "关于分答"]
        */
    },
    onLoad: function() {
        console.log('onLoad')
        var that = this
            //调用应用实例的方法获取全局数据
        app.getUserInfo(function(userInfo) {
            //更新数据
            console.log(userInfo);
            that.setData({
                userInfo: userInfo
            })
        });

        common.request({
            url: urls.urlMyProfile,
            success: function(res) {
                that.setData(res.data);
            }
        });


    },
    onShow: function() {
        console.info("show")
    },
    loadProfile: function(e) {
        console.log(e.target)
    }
})