import React, { PropTypes } from 'react'
import echarts from 'echarts';
let myData=[
  'html','css','js','react','node','mongodb'
]
class Work extends React.Component {
  componentDidMount(){
    var myChart = echarts.init(document.getElementById('main'));
    // 绘制图表
    myChart.setOption({
        title: {
          text: '我的技能展示',
          textStyle:{
            color:"teal",
          },
          left:'center',
        },
        tooltip: {},
        xAxis: {
            data: myData
        },
        yAxis: {},
        series: [{
            name: '熟练度',
            type: 'bar',
            data: [85, 89, 86, 70, 60, 50]
        }]
    });

  }
  render () {

    return(
      <div id='main' style={{width:'100%',height:'auto',maxWidth:"600px"}}>
        Work
      </div>
    )
  }
}

export default Work;
