原始程序来源 http://elephstor.com，
这是重构改动后便于演示的版本。

目前主要的重构和改进：

1，wx.request，替换成自封装的common.request，以便于拦截模拟返回数据。

2，将大部分演示数据，从零散于WXML或JS文件中，集中到一个js文件中。

