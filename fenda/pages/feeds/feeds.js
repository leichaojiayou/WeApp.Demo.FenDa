//feeds.js
//获取应用实例
var common = require("../../common/common.js");
var app = getApp();
var config = common.urlList;
Page({
    data: {
        hidden: true,
        motto: 'Hello World',
        userInfo: {},
        feedList: []
    },
    //事件处理函数
    bindViewTap: function() {
        wx.navigateTo({
            url: '../logs/logs'
        })
    },
    onLoad: function() {
        var that = this
        console.log('onLoad');
        common.request({
            url: config.urlFeedsInit,
            header: {
                'Content-Type': 'application/json'
            },
            success: function(res) {
                that.setData({
                    feedList: res.data
                })
                try {
                    wx.setStorageSync('feeds', res.data)
                } catch (e) {}
            }
        })
    },
    onPullDownRefresh: function() {
        console.info("被拉下了")
    },
    toPerson: function(e) {
        console.log(e)
        wx.navigateTo({
            url: '../person/person?master=' + e.target.dataset.master
        })
    },
    upper: function() {

    },
    lower: function() {
        console.log("到底啦")
        var that = this;
        if (this.requestFlag === false) {
            this.requestFlag = true
            this.setData({
                hidden: false
            })

            setTimeout(that.getFeeds, 1000);
        }
    },
    requestFlag: false,
    getFeeds: function() {
        var that = this;
        console.log('getfeeds..');
        common.request({
            url: config.urlFeeds1206,
            header: {
                'Content-Type': 'application/json'
            },
            success: function(res) {
                that.setData({
                    hidden: true
                });
                that.requestFlag = false
                console.log('urlFeeds1206 success..');

                var feedsStorage = wx.getStorageSync('feeds') || [];
                console.log('res.data--->')
                console.log(res.data);
                feedsStorage = feedsStorage.concat(res.data);

                console.log(feedsStorage);
                that.setData({
                    feedList: feedsStorage
                })

                try {
                  wx.setStorageSync('feeds', feedsStrorage) 
                } catch (e) {}
                console.log("同步成功啦");

            }
        })

    }
})