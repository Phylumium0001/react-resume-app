export default function PersonalDisplay({ personalObj }) {
  return (
    <>
      <DispPersonal
        label={"First Name"}
        objKey={"firstName"}
        personalObj={personalObj}
      />
      <DispPersonal
        label={"Last Name"}
        objKey={"lastName"}
        personalObj={personalObj}
      />
      <DispPersonal
        label={"Email"}
        objKey={"email"}
        personalObj={personalObj}
      />
      <DispPersonal
        label={"Contact"}
        objKey={"phone"}
        personalObj={personalObj}
      />
    </>
  );
}
function DispPersonal({ label, objKey, personalObj }) {
  return (
    <div>
      <p>
        {label} : {personalObj[objKey]}
      </p>
    </div>
  );
}
