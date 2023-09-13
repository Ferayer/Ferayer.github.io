import axios from "axios";

const useSkills = async(studentId) => {
  const  {data} = await axios.get(`https://api.projectszero.tech/skills/${studentId}`)
  return {
    labels: Object.keys(data),
    values: Object.values(data)
  };
  //return data;
};

export default useSkills;
