import { useState } from "react";
import "./App.css";
import FormsArea from "./Components/FormsArea";
import ResumeeArea from "./Components/ResumeeArea";
function App() {
  const [personalObj, setPersonalObj] = useState({
    name: "Name",
    email: "Email",
    phone: "Phone",
    address:'Address'
  });

  const [experienceObj, setExperienceObj] = useState([
    {
      company: "Company",
      role: "Role",
      location:'Location',
      start: "Start",
      end:"End",
      description:'Description'
    },
  ]);

  const [educationObj, setEducationObj] = useState([
    {
      school: "School",
      certificate: "Certificate",
      location:'Location',
      start: "Start",
      end:"End"
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
