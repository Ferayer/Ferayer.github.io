import useSWRFetch from "../useSWRFetch";

const useAcademystats = () => {
  const { data } = useSWRFetch("https://api.projectszero.tech/getAcademyStats");
  // const newlabels = ["創新設計學院", "醫學院", "電機資訊學院" , "理學院" , "工學院" , "管理學院" , "文學與社會科學院"];
  // const labels = data && Object.keys(data);
  // const values = data && Object.values(data);
  // var temp_values = [0,0,0,0,0,0,0];

  // for (let i = 0; i < 26 ; i++ ){
  //   if(labels[i] == "創新領域學士學位學程"){
  //      temp_values[0] += values[i];
  //   }
  //   else if(labels[i] == "物理治療學系"){
  //     temp_values[1] += values[i];
  //   }
  //   else if(labels[i] == "電機工程學系" || labels[i] == "資訊工程學系" || labels[i] == "生醫電資所" || labels[i] == "資訊工程研究所" ) {
  //     temp_values[2] += values[i];
  //   }
  //   else if(labels[i] == "數學系" || labels[i] == "心理學系" || labels[i] == "物理學系" || labels[i] == "心理所一般組" ) {
  //     temp_values[3] += values[i];
  //   }
  //   else if(labels[i] == "工程科學及海洋工程學系" || labels[i] == "醫學工程學系" || labels[i] == "材料科學與工程學系" || labels[i] == "生物機電工程學系" ) {
  //     temp_values[4] += values[i];
  //   }
  //   else if(labels[i] == "工商管理學系 科技管理組" || labels[i] == "工商管理學系" || labels[i] == "會計學系" || labels[i] == "國際企業學系" || labels[i] == "資訊管理學系" ) {
  //     temp_values[5] += values[i];
  //   }
  //   else{
  //     temp_values[6] += values[i];
  //   }
  // }
  //console.log(data);

  return {
    arrays: data && Object.keys(data),
    values: data && Object.values(data)
  };
};

export default useAcademystats;
