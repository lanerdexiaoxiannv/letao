$.ajax({
  type:"get",
  url:'/employee/checkRootLogin',
  dataType:'json',
  success:function(info){
    // console.log(info);\
    if(info.success){

    }
    if(info.error ===400){
      location.href = "login.html"
    }
    
  }
})