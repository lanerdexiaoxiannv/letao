$(function(){
  var echarts_left = echarts.init(document.querySelector('.echarts_left'));

  option1 = {
    title:{
      text:'2018小猪佩奇数'
    },
    tooltip:{
      trigger:"item"
    },
    legend:{
      data:["人数","销量"]
    },

    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
    },
    series: [{
      name:'人数',
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar'
    }]
};
echarts_left.setOption(option1);

var echarts_right = echarts.init(document.querySelector('.echarts_right'));
option2 = {
  title : {
      text: '某站点用户访问来源',
      subtext: '纯属虚构',
      x:'center'
  },
  tooltip : {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)"
  },
  legend: {
      orient: 'vertical',
      left: 'left',
      data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
  },
  series : [
      {
          name: '访问来源',
          type: 'pie',
          radius : '55%',
          center: ['50%', '60%'],
          data:[
              {value:335, name:'直接访问'},
              {value:310, name:'邮件营销'},
              {value:234, name:'联盟广告'},
              {value:135, name:'视频广告'},
              {value:1548, name:'搜索引擎'}
          ],
          itemStyle: {
              emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
          }
      }
  ]
};
echarts_right.setOption(option2);

})