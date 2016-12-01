function init(global) {
    var urlBasePath = "http://127.0.0.1/wxtest1/";
    var urlList = {
        urlFeedsInit: urlBasePath + "feeds-init.json",
        urlFeeds1206: urlBasePath + "stamp1206.json",
        urlSearch: urlBasePath + "search.json",
        urlPersonInfo: urlBasePath + "personInfo",
        urlIssueInfo: urlBasePath + "issueInfo",
        urlMyProfile: urlBasePath + "myProfile",
        urlQuest: urlBasePath + "postQuestion"
    }

    var urlDebugMap = {
        urlFeedsInit: "FeedsInit",
        urlFeeds1206: "stamp1206",
        urlSearch: "searchResult",
        urlPersonInfo: "personInfo",
        urlIssueInfo: "issueInfo",
        urlMyProfile: "myInfo",
        urlQuest: "quest"
    }

    var debugData = require("./demo_data.js");
    var app = getApp();

    var request = function(obj) {

        function getkey(url) {
            console.log(url);
            for (var name in urlList) {
                if (url.indexOf(urlList[name]) >= 0) { //这儿比较是区分了大小写。。
                    //console.log('find');
                    var debugItem = urlDebugMap[name];
                    return debugItem;
                }
            }
            return null;
        }

        console.log('request in..');
        if (app.isDebug) {
            var key = getkey(obj.url);
            console.log('key=' + key);
            var res = {};
            if (key) {
                res.data = debugData[key];
                obj.success && obj.success(res);
            }
        } else {
            return wx.request(obj);
        }
    }

    module.exports = { request, urlList }

}

init(this);