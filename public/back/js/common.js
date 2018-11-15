

// 进度条
// NProgress.start();
// setTimeout(function(){
//   NProgress.done();
// },5000);

// NProgress.start():显示进度条
// NProgress.set(0.4):设置百分比
// NProgress.inc():稍微增加
// NProgress.done():完成进度


// 需求: 在第一个ajax请求时, 开启进度条
//      在所有的ajax请求都回来后, 关闭进度条

$(document).ajaxStart(function(){
  NProgress.start();
});

$(document).ajaxStop(function(){
  setTimeout(function(){
    NProgress.done();
  },500)
});


$(function(){
  // 导航点击切换
  $('.lt_aside .category').click(function(){
    $(this).next().stop().slideToggle();
  });

  // 左侧菜单列表切换功能
  $('.lt_topbar .icon_left').click(function(){
    $('.lt_aside').toggleClass("hidemenu");
    $('.lt_main').toggleClass("hidemenu");
    $('.lt_topbar').toggleClass("hidemenu");

  })

  // 退出功能
  $('.lt_topbar .icon_right').click(function(){
    $('.lt_topbar ,icon_right').click(function(){
      $('#logoutModal').modal("show");
    });

    $('#logoutBtn').click(function(){
      $.ajax({
        type:"get",
        url:"/employee/employeeLogout",
        dataType:"json",
        success:function(info){
          console.log(info);
          if(info.success){
            location.href = "login.html";
          }
          
        }
      });
    })
  })
})
