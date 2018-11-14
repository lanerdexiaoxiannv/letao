$(function(){
  $("#form").bootstrapValidator({
    feedbackIcons:{
      valid:'glyphicon glyphicon-ok', //校验成功
      invalid:'glyphicon glyphicon-remove',  //校验失败
      validating:'glyphicon glyphicon-refresh'  //校验中
    },
     // 配置校验字段  (需要先在 input 中配置name)
    fields:{
      username:{
        // 进行多个规则配置
        validators:{
            notEmpty:{
              message:"用户名不能为空"
            },
            stringLength:{
              min:2,
              max:6,
              message:"用户名长度必须为2-6位数"
            },
            callback:{
              message:"用户名不存在"
            }
        }
      },
      password:{
        validators:{
          notEmpty:{
            message:"密码不能为空"
          },
          stringLength:{
            min:6,
            max:12,
            message:"密码长度必须为6-12位"
          },
          callback:{
            message:"密码错误"
          }
        }
      }
    }

  });
  

  $('#form').on("success.form.bv",function(e){
    e.preventDefault();
    $.ajax({
      type:'post',
      url:'/employee/employeeLogin',
      data:$('#form').serialize(),
      datatype:"json",
      success:function(info){
        console.log(info);
        
        if(info.success){
          location.href = "index.html";
        }
        if(info.error ===1000){
          // alert("用户名不存在");
          // 调用插件提供的方法, 将用户名input状态 更新成校验失败状态
          // updateStatus
          // 参数1: 校验字段  username/password
          // 参数2: 校验状态  NOT_VALIDATED(未校验), VALIDATING(校验中), INVALID(失败) or VALID(成功)
          // 参数3: 校验规则, 用来配置错误时的提示信息
          $('#form').data("bootstrapValidator").updateStatus("username","INVALID","callback");
        }
        if(info.error ===1001){
          // alert("密码错误");
          $('#form').data("bootstrapValidator").updateStatus("username","INVALID","callback");
        }
      }
    })
  });

  // 重置功能
  $('[type="reset"]').click(function(){
    $('#form').data("bootstrapValidator").resetForm();
  })
});