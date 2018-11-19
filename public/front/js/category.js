// import { template } from "handlebars";

$(function(){
  // 左侧渲染
  $.ajax({
    type:"get",
    url:"/category/queryTopCategory",
    dataType:'json',
    success:function(info){
      console.log(info);
     var htmlStr = template("left_tpl",info);
     $(".lt_category_left ul").html(htmlStr); 
     renderById(info.rows[0].id);
    }
  });

  // 左侧点击事件
  $(".lt_category_left").on("click","a",function(){
    $(this).addClass("current").parent().siblings().find("a").removeClass("current");
    var id = $(this).data("id");
    renderById(id);
  })


  // 右侧二级渲染
  function renderById(id){
   
    $.ajax({
      type:"get",
      url:'/category/querySecondCategory',
      data:{
        id:id
      },
      dataType:"json",
      success:function(info){
        console.log(info);
        var htmlStr= template("right_tpl",info);
        $(".lt_category_right ul").html(htmlStr);
      }
    })
  }
})