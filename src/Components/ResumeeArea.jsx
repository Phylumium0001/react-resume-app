import PersonalDisplay from "./ResumeeAreaC/personalDisplay";
import ExperienceDisplay from "./ResumeeAreaC/experienceDisplay";
import EducationDisplay from "./ResumeeAreaC/educationalDisplay";

export default function ResumeeArea({
  personalObj,
  educationObj,
  experienceObj,
}) {
  return (
    <>
      <div className="personalDisplayCont">
        <PersonalDisplay personalObj={personalObj} />
      </div>
      <div className="experienceDisplayCont">
        <ExperienceDisplay experienceObj={experienceObj} />
      </div>
      <div className="educationDisplayCont">
        <EducationDisplay educationObj={educationObj} />
      </div>
      
      
      
    </>
  );
}
