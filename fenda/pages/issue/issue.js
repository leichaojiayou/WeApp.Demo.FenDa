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
            url: urls.urlIssueInfo,
            success: function(res) {
                that.setData(res.data);
            }
        })
    },
    /*    toPerson: function(e) {
            console.log('1:' + e)
            wx.navigateTo({
                url: '../person/person?master=' + e.target.dataset.master
            })
        },
    */
    toPerson: function(e) {
        console.log('2:' + e)
        wx.navigateTo({
            url: '../person/person?master=' + e.currentTarget.dataset.master
        })
    }
})