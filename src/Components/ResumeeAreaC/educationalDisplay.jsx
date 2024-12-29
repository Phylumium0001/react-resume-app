export default function EducationDisplay({ educationObj }) {
  return (
    <div className="educationDisplayCont">
      {educationObj.map((obj) => {
        return (
          <div className="eduInstance">
            <DispEdu element={obj} label={"School Name"} objKey={"school"} />
            <DispEdu
              element={obj}
              label={"Certificate"}
              objKey={"certificate"}
            />
            <DispEdu
              element={obj}
              label={"Date of Completion"}
              objKey={"doc"}
            />
          </div>
        );
      })}
    </div>
  );
}
function DispEdu({ element, label, objKey }) {
  return (
    <div>
      <p>
        {label} : {element[objKey]}
      </p>
    </div>
  );
}
