$(function(){
  var currentPage = 1;  //当前页
  var  pageSize =5;  //每页条数

  var  currentId;  
  var isDelete;

  render();

  function render(){
    $.ajax({
      type:'get',
      url:'/user/queryUser',
      data:{
        page:currentPage,
        pageSize:pageSize
     },
     dataType:'json',
     success:function(info){
      //  console.log(info);
       var htmlStr = template("tmp",info);
       $("tbody").html(htmlStr);
      //  分页初始化
       $("#paginator").bootstrapPaginator({
        //  版本号
        bootstrapMajorVersion:3,
        // 总页数
        totalPages:Math.ceil(info.total/info.size),
       // 当前页
        currentPage:info.page,
        // 点击事件
        onPageClicked:function(a,b,c,page){
          // 根据 page , 请求对应页的数据, 进行渲染
          currentPage = page;
          render();
        }
      })
     }
    });
  }


  $('.lt_content tbody').on("click",".btn",function(){
    // 显示模态框
    $('#userModal').modal("show");
    // 获取用户id
    currentId = $(this).parent().data("id");
    // 获取更改的状态
    isDelete = $(this).hasClass("btn-danger")?0:1;
  });
  
  // 确认按钮被点击, 发送ajax请求, 改变用户状态
  $("#confirmBtn").click(function(){
    $.ajax({
      type:'post',
      url:'/user/updateUser',
      data:{
        id:currentId,
        isDelete:isDelete
      },
      dataType:"json",
      success:function(info){
        // console.log(info);
        if(info.success){
          //关闭模态框
          $("#userModal").modal("hide");
          render();
        }
      }
    })
  })
})