import { UNDEFINED } from "swr/_internal";
import DoughnutChart from "../../charts/DoughnutChart";
// import { academyStats } from "../../data/mockData";
import useAcademystats from "../../hooks/dashboard/useAcademystats";
import React, { useState, useEffect } from 'react';

const Simplify_Academy = (labels, values, ) => {

  // const newlabels = ['創新設計學院', '醫學院', '電機資訊學院' , '理學院' , '工學院' , '管理學院' , '文學與社會科學院']
  var temp_values = [0,0,0,0,0,0,0];
  // if (labels == UNDEFINED){
  //   return  newlabels, [1,2,3,4,5,6,7];
  // }
  //   const label01 = [
  //     "創新領域學士學位學程", 
  //     "物理治療學系",
  //     "電機工程學系", "資訊工程學系",     "生醫電資所",     "資訊工程研究所",
  //     "數學系",     "心理學系",     "物理學系", "心理所一般組",
  //     "工程科學及海洋工程學系", "醫學工程學系", "材料科學與工程學系", "生物機電工程學系",
  //     "工商管理學系 科技管理組", "工商管理學系", "會計學系", "國際企業學系", "資訊管理學系",
  //     "經濟學系", "經濟系", "外國語文學系 / 圖書資訊學系", "外國語文學系/社會學系" , "戲劇學系", "歷史學系", "科際整合法律學研究所", 
  //  ];

  for (let i = 0; i < 26 ; i++ ){
    if(labels[i] == "創新領域學士學位學程") {
       temp_values[0] += values[i];
    }
    else if(labels[i] == "物理治療學系") {
      temp_values[1] += values[i];
    }
    else if(labels[i] == "電機工程學系" || labels[i] == "資訊工程學系" || labels[i] == "生醫電資所" || labels[i] == "資訊工程研究所" ) {
      temp_values[2] += values[i];
    }
    else if(labels[i] == "數學系" || labels[i] == "心理學系" || labels[i] == "物理學系" || labels[i] == "心理所一般組" ) {
      temp_values[3] += values[i];
    }
    else if(labels[i] == "工程科學及海洋工程學系" || labels[i] == "醫學工程學系" || labels[i] == "材料科學與工程學系" || labels[i] == "生物機電工程學系" ) {
      temp_values[4] += values[i];
    }
    else if(labels[i] == "工商管理學系 科技管理組" || labels[i] == "工商管理學系" || labels[i] == "會計學系" || labels[i] == "國際企業學系" || labels[i] == "資訊管理學系" ) {
      temp_values[5] += values[i];
    }
    else{
      temp_values[6] += values[i];
    }
  }
  //console.log(newlabels)
  return   temp_values;
};

function Academy() {
  const { arrays, values } =  useAcademystats();
  const [ newvalues, setnewvalues] = useState(UNDEFINED);
  const [ labels, setlabels] = useState(UNDEFINED);
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i += 1) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  const  chartData = {
    labels,
    datasets: [
      {
        label: "Distribution of colleges",
        data:  newvalues,
        backgroundColor: newvalues?.map(() => getRandomColor()),
        borderWidth: 0
      }
    ]
  }
 
  //const newlabels = ['創新設計學院', '醫學院', '電機資訊學院' , '理學院' , '工學院' , '管理學院' , '文學與社會科學院']
  //const {newlabels, newvalues} = (labels , values );
  // const { labels, values } = academyStats;
  // 生成隨機色碼的函式
  
  // const chartData = {
  //   newlabels,
  //   datasets: [
  //     {
  //       label: "Distribution of colleges",
  //       data:  newvalues,
  //       backgroundColor: newvalues?.map(() => getRandomColor()),
  //       borderWidth: 0
  //     }
  //   ]
  // };
  // console.log(chartData);
  // console.log(newlabels);
  //const { newlabels,newvalues} = Simplify_Academy(labels, values);
  if(arrays != UNDEFINED && newvalues == UNDEFINED){
    setnewvalues(Simplify_Academy(arrays, values));
    setlabels(['創新設計學院', '醫學院', '電機資訊學院' , '理學院' , '工學院' , '管理學院' , '文學與社會科學院']);
  }
  
  // useEffect(() => {
  //   console.log(chartData);
  // })
    return (
      <div className="flex flex-col col-span-full bg-white dark:bg-slate-800 shadow-lg border border-slate-200 dark:border-slate-700">
        <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
          <h2 className="font-semibold text-slate-800 dark:text-slate-100">
            Distribution of colleges
          </h2>
        </header>
        {/* Chart built with Chart.js 3 */}
        {/* Change the height attribute to adjust the chart height */}
        {labels && <DoughnutChart data={chartData} width={389} height={320} />}
      </div>
    );

  
}

export default Academy;
