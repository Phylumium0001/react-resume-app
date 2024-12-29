import { useState } from "react";
import "./App.css";
import FormsArea from "./Components/FormsArea";
import ResumeeArea from "./Components/ResumeeArea";
function App() {
  const [personalObj, setPersonalObj] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  const [experienceObj, setExperienceObj] = useState([
    {
      company: "",
      role: "",
      duration: "",
    },
  ]);

  const [educationObj, setEducationObj] = useState([
    {
      school: "",
      certificate: "",
      doc: "",
    },
  ]);

  return (
    <>
      <div className="formsArea">
        <FormsArea
          personalObj={personalObj}
          setPersonalObj={setPersonalObj}
          experienceObj={experienceObj}
          setExperienceObj={setExperienceObj}
          educationObj={educationObj}
          setEducationObj={setEducationObj}
        />
      </div>
      <div className="resumeeArea">
        <ResumeeArea
          personalObj={personalObj}
          experienceObj={experienceObj}
          educationObj={educationObj}
        />
      </div>
    </>
  );
}

export default App;
