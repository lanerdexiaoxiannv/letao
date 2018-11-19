mui(".mui-scroll-wrapper").scroll({
  deceleration:0.0005,
  indicators:false
});

// 此方法专门用于解析获取地址栏参数
function getSearch(k){
  var str =location.search;
  str = decodeURI(str);
  str= str.slice(1); // 去掉问号  str.slice(start, end); 包括start, 不包括end
  //          str.slice(start) 表示从start开始截取到最后
  
   // str.split( 字符 ); 可以将字符串切割成数组
  var arr  = str.split("&");
  var obj ={};
  arr.forEach(function(v,i){
    var key = v.split("=")[0];
    var value = v.split("=")[1];
    obj[key] = value;

  })
  return obj[k];
}