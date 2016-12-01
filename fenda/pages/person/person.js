var common = require("../../common/common.js");
var urls = common.urlList;

//index.js
//获取应用实例
var app = getApp()
Page({
    data: {},
    onLoad: function(e) {
        var that = this;
        console.log(e);
        common.request({
            url: urls.urlPersonInfo,
            success: function(res) {
                that.setData(res.data);
            }
        })
    },
    toIssue: function(e) {
        console.log(e)
        wx.navigateTo({
            url: '../issue/issue?master=' + e.target.dataset.master
        })
    },
    quizSubmit: function(e) {
        var that = this;
        common.request({
            url: urls.urlQuest,
            success: function(res) {
                //that.setData
                console.log(res);
            }
        })
    }
})