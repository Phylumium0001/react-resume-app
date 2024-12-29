export default function ExperienceDisplay({ experienceObj }) {
  return (
    <div className="experienceDisplayCont">
      {experienceObj.map((obj) => {
        return (
          <div className="expInstance">
            <DispExp element={obj} label={"Company"} objKey={"company"} />
            <DispExp element={obj} label={"Role"} objKey={"role"} />
            <DispExp element={obj} label={"Duration"} objKey={"duration"} />
          </div>
        );
      })}
    </div>
  );
}
function DispExp({ element, label, objKey }) {
  return (
    <div>
      <p>
        {label} : {element[objKey]}
      </p>
    </div>
  );
}
