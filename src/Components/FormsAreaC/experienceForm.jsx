export default function ExperienceForm({
  addExperienceFunc,
  experienceObj,
  setExperienceObj,
}) {
  // Function for the input field
  function expChange(index, value, objKey) {
    const updatedState = experienceObj.map((obj, key) => {
      return key === index ? { ...obj, [objKey]: value } : obj;
    });
    console.log(updatedState);
    setExperienceObj(updatedState);
  }
  return (
    // Loop through the list of expeirence objects
    <div className="experienceFormCont">
      <div id="title">
        <p className="title">Experience</p>
        <button onClick={addExperienceFunc}>+</button>
      </div>
      {experienceObj.map((element, key) => {
        return (
          <div className="subFormCont" key={key}>
            {/* Passing key to know which of the objects need modifying */}
            {element['title']  && <p className="title">{element['title'] + String(key)}</p> }
            <InputField
              index={key}
              onChangeFunc={expChange}
              label={"Company"}
              objKey={"company"}
            />
            <InputField
              index={key}
              onChangeFunc={expChange}
              label={"Role"}
              objKey={"role"}
            />
            <InputField
              index={key}
              onChangeFunc={expChange}
              label={"Duration"}
              objKey={"duration"}
            />
          </div>
        );
      })}
      
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
