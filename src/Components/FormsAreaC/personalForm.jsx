export default function PersonalForm({ onChangeFunc }) {
  return (
    <div className="personalFormCont">
      <p className="title">Personal Information</p>
      <div className="contentCont">
        <div className="subFormCont">
          <InputField
            label={"First Name"}
            onChangeFunc={onChangeFunc}
            objKey={"firstName"}
          />
          <InputField
            label={"Last Name"}
            onChangeFunc={onChangeFunc}
            objKey={"lastName"}
          />
          <InputField
            label={"Email"}
            onChangeFunc={onChangeFunc}
            objKey={"email"}
          />
          <InputField
            label={"Phone"}
            onChangeFunc={onChangeFunc}
            objKey={"phone"}
          />
        </div>
      </div>
    </div>
  );
}

function InputField({ label, onChangeFunc, objKey }) {
  return (
    <div className="formRow">
      <label>{label}</label>
      <span>
        <input
          type="text"
          onChange={(event) => {
            onChangeFunc(objKey, event.target.value);
          }}
        />
      </span>
    </div>
  );
}
