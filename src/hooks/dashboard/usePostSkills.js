import axios from "axios";
import { useCookies } from "react-cookie";

const usePostSkills = () => {
  const [ , setCookie] = useCookies(["studentId"]);
  return async (studentId, skills) => {
    try {
      // console.log(studentId);
      // console.log(Object.values(skills)[0]);

      await axios.post(`https://api.projectszero.tech/skills/${studentId}`, {
        // skill: skills,
        // thisIsDefinitelyWrong: true
        "UIUX" : Object.values(skills)[0],
        "backend" : Object.values(skills)[1],
        "business analysis" : Object.values(skills)[2],
        "design thinking" : Object.values(skills)[3],
        "frontend" : Object.values(skills)[4]
      });
      setCookie("studentId", studentId);
      alert("送出成功");
    } catch (error) {
      alert(error);
    }
  };
};

export default usePostSkills;
