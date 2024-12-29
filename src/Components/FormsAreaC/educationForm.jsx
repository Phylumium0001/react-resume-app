import { useState } from "react";

export default function EducationalForm({
  addEducationFunc,
  educationObj,
  setEducationObj,
}) 
{
  const [visibility,setVisibility] = useState(true)
  
  function eduChange(index, value, objKey) {
    // To change the value from the input field change
    const updatedState = educationObj.map((obj, key) => {
      return key === index ? { ...obj, [objKey]: value } : obj;
    });
    console.log(updatedState);
    setEducationObj(updatedState);
  }
  return (
    // Loop through the list of expeirence objects
    <div className="educationFormCont">
      <div id="title">
        <p className="title">Education</p>
        <button onClick={addEducationFunc}>+</button>
      </div>

      <div className="contentCont">
      {educationObj.map((element, key) => {
        return (<>
          {element['title']  && <p className="title">{element['title'] + String(key)}</p>}
          <div className="subFormCont" key={key} >
            {/* Passing key to know which of the objects need modifying */}
            {console.log(element['title'])}
            
            <InputField
              index={key}
              onChangeFunc={eduChange}
              label={"School Name"}
              objKey={"school"}
            />
            <InputField
              index={key}
              onChangeFunc={eduChange}
              label={"Certificate"}
              objKey={"certificate"}
            />
            <InputField
              index={key}
              onChangeFunc={eduChange}
              label={"Year of Completion"}
              objKey={"doc"}
            />
          </div>
          </>);
      })}
      </div>
    </div>
  );
}
function InputField({ index, label, onChangeFunc, objKey }) {
  return (
    <div className="formRow">
      <label>{label}</label>
      <span>
        <input
          type="text"
          onChange={(event) => {
            onChangeFunc(index, event.target.value, objKey);
          }}
        />
      </span>
    </div>
  );
}
