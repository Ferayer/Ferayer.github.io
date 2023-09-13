import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from "chart.js";
import { Radar } from "react-chartjs-2";
import useSkills from "../../hooks/dashboard/useSkills";
// import React, { useState, useEffect } from 'react';


// Import utilities
import { useCookies } from "react-cookie";
import { tailwindConfig } from "../../utils/Utils";
//import { skills } from "../../data/mockData";
import React, { useState, useEffect } from 'react';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

function Skills() {

  const [ values, setvalues] = useState([]);
  const [ labels, setlabels] = useState([]);
  const [cookies] = useCookies(["studentId"]);
  const { studentId } = cookies;
  const [ currentID, setcurrentID] = useState(studentId);
  // const studentId = "B11000000";
  //const { labels, values } = skills;
  //  console.log("start");
  //console.log(labels)
  useSkills(studentId)
    .then((resolvedObject) => {
      if(resolvedObject.values[0] != values[0] || resolvedObject.values[1] != values[1] || resolvedObject.values[2] != values[2] || 
        resolvedObject.values[3] != values[3] || resolvedObject.values[4] != values[4] )
        {
        setlabels(resolvedObject.labels);
        setvalues(resolvedObject.values);
      }
    });
  if(currentID != studentId){
    setcurrentID(studentId);
    useSkills(studentId)
    .then((resolvedObject) => {
      if(resolvedObject.values[0] != values[0] || resolvedObject.values[1] != values[1] || resolvedObject.values[2] != values[2] || 
        resolvedObject.values[3] != values[3] || resolvedObject.values[4] != values[4] )
        {
        setlabels(resolvedObject.labels);
        setvalues(resolvedObject.values);
      }
    });
    }

  //const  {result} = (useSkills(studentId));
  //console.log(result)

  const chartData = {
    labels,
    datasets: [
      { 
        label: "能力值",
        data: values,
        backgroundColor: tailwindConfig().theme.colors.orange[500],
        borderColor: tailwindConfig().theme.colors.orange[500],
        borderWidth: 2
      }
    ]
  };

  return (
    <div className = "col-span-12 xl:col-span-6 bg-white dark:bg-slate-800 rounded-sm border border-slate-200 dark:border-slate-700">
      <div className = "px-5 pt-5">
      <header className = "">
        <h2 className = "text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2">
          Skills
        </h2>
      </header>
      {studentId ? (
        <div className = "flex align-center flex-col px-28" >
          <div className = "text-center my-4" >學號：{studentId}</div>
          <Radar data={chartData} />
        </div>
      ) : (
        <div className = "pt-20 text-center" > 尚未輸入數值，請先送出右方表單 </div>
      )}
      </div>
    </div>
  );
}

export default Skills;
