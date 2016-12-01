var common = require("../../common/common.js");
var urls = common.urlList;

Page({
    data: {},
    onLoad: function(obj) {
        var that = this;
        common.request({
            url: urls.urlSearch,
            success: function(res) {
                that.setData(res.data);
            }
        })

    },
    inputstr: "",
    bindKeyInput: function(e) {
        console.log(e.detail.value);
        this.inputstr = e.detail.value;
    },
    btnClick: function(e) {
        console.log('search button click');
    },
    toPerson: function() {
        console.log('toPerson');
        wx.navigateTo({ url: "../person/person" });
    }
})