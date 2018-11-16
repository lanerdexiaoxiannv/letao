$(function(){
  // 基于准备好的dom,初始化echarts实例
  var echarts_left = echarts.init(document.querySelector('.echarts_left'));
  var option1 = {
    // 大标题
    title:{
      text:'2018年注册人数'
    },
    // 提示框组件
    tooltip:{
      trigger:'item'
    },
    // 图例
    legend:{
      data:['人数','销量']
    },
    // x轴数据
    xAxis: {
        data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月']
    },
    // y轴刻度不进行设置, y轴会自动根据数据最大值生成合适的刻度
    yAxis: {},
    // 数据
    series: [{
        name:'人数',
        data: [120, 200, 150, 80, 70, 110, 130],
        // bar 表示柱状图,  line 表示折线图,  pie 表示饼图
        type: 'bar'
    },{
      name:'销量',
      type:'bar',
      data:[345,424,25,34,435,456]
    }]
};

echarts_left.setOption(option1);

var echarts_right = echarts.init(document.querySelector('.echarts_right'));
option2 = {
  title : {
      text: '热门品牌销售',
      subtext: '2018年11月',
      // 位置
      x:'center',
      // 文本样式
      textStyle:{
        color:"#000",
        fontSize:25
      }
  },
  tooltip : {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)"
  },
  legend: {
      orient: 'vertical',
      left: 'left',
      data: ['玉泽','至本','诺薇娜','悦诗风吟','资生堂']
  },
  series : [
      {
          name: '品牌销售',
          type: 'pie',
          radius : '55%',
          center: ['50%', '60%'],
          data:[
              {value:335, name:'玉泽'},
              {value:310, name:'至本'},
              {value:234, name:'诺薇娜'},
              {value:135, name:'悦诗风吟'},
              {value:1548, name:'资生堂'}
          ],
          itemStyle: {
              emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'yellow'
              }
          }
      }
  ]
};

echarts_right.setOption(option2);

})