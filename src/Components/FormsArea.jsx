import PersonalForm from "./FormsAreaC/personalForm";
import ExperienceForm from "./FormsAreaC/experienceForm";
import EducationalForm from "./FormsAreaC/educationForm";

export default function FormsArea({
  personalObj,
  setPersonalObj,
  experienceObj,
  setExperienceObj,
  educationObj,
  setEducationObj,
}) {
  function personalFormFunc(key, value) {
    // Function to change the value when there is input
    setPersonalObj({ ...personalObj, [key]: value });
  }
  function addExperience() {
    // Add a new Experience instance for a button
    setExperienceObj([
      ...experienceObj,
      {title:'Experience', company: "", role: "", duration: "" },
    ]);
  }
  function addEducation() {
    // Add a new education instance for a button
    setEducationObj([
      ...educationObj,
      { title:"Education ",school: "", certificate: "", doc: "" },
    ]);
  }

  return (
    <>
      <PersonalForm onChangeFunc={personalFormFunc} />
      <ExperienceForm
        addExperienceFunc={addExperience}
        experienceObj={experienceObj}
        setExperienceObj={setExperienceObj}
      />
      <EducationalForm
        addEducationFunc={addEducation}
        educationObj={educationObj}
        setEducationObj={setEducationObj}
      />
    </>
  );
}
