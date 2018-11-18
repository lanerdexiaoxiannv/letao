$(function(){
  var currentPage =1;
  var pageSize =5;
  render();

  // 渲染页面
  function render(){
    $.ajax({
      type:"get",
      url:"/category/querySecondCategoryPaging",
      data:{
        page:currentPage,
        pageSize:pageSize
      },
      dataType:"json",
      success:function(info){
        console.log(info);
        var htmlStr = template("secondTpl",info);
        $('tbody').html(htmlStr);

        $('#paginator').bootstrapPaginator({
          bootstrapMajorVersion:3,
          totalPages:Math.ceil(info.total/info.size),
          currentPage:info.page,
          onPageClicked:function(a,b,c,page){
            currentPage =page;
            render();
          }
        })
      }
    })
  }

  // 显示模态框,获取下拉菜单数据
  $('#addBtn').click(function(){
    $('#addModal').modal("show");
    $.ajax({
      type:"get",
      url:"/category/queryTopCategoryPaging",
      data:{
        page:1,
        pageSize:100
      },
      dataType:"json",
      success:function(info){
        console.log(info);
        var htmlStr = template("dropdownTpl",info);
        $('.dropdown-menu').html(htmlStr);
      }
    })
  })

  // 设置下拉菜单点击事件
  $('.dropdown-menu').on("click","a",function(){
    var txt = $(this).text();
    $('#dropdownText').text(txt);
    var id = $(this).data("id");
    $('[name="categoryId"]').val(id);
    // $('#form').data("bootstrapValidator").updateStatus("categoryId","VALID")
  });

  // 文件上传
  $('#fileupload').fileupload({
    dataType:"json",
    done:function(e,data){
      console.log(data);
      var result = data.result;
      var picUrl = result.picAddr;
      $('#imgBox img').attr('src',picUrl);
      $('[name = "brandLogo"]').val(picUrl);
      $('#form').data("bootstrapValidator").updateStatus("brandLogo","VALID");

    }
  });

  // 表单校验
  $('#form').bootstrapValidator({
    excluded:[],
    // 校验图标
    feedbackIcons:{
      valid:'glyphicon glyphicon-ok',
      invalid:'glyphicon glyphicon-remove',
      validating:'glyphicon glyphicon-refresh'
    },
    // 校验字段
    fields:{
      categoryId:{
        validators:{
          notEmpty:{
            message:"请选择一级分类"
          }
        }
      },
      brandName:{
        validators:{
          notEmpty:{
            message:"请输入二级分类名称"
          }
        }
      },
      brandLogo:{
        validators:{
          notEmpty:{
            message:"请选择图片"
          }
        }
      }
    }
  })
  

})