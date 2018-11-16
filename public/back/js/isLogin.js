$.ajax({
  type:"get",
  url:'/employee/checkRootLogin',
  datatype:"json",
  success:function(info){
    // console.log(info);
    if(info.success){
      console.log("用户已登录,可继续访问");
      
    }
    if(info.error == 400){
      location.href="login.html";
    }
    
  }
})