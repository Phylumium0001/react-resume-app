export default function PersonalDisplay({ personalObj }) {
  return (<>
    <div className="image"></div>
    <div>
        <p className="name">{personalObj.name}</p>
        <p>{personalObj.email}</p>
        <p>{personalObj.phone}</p>
        <p>{personalObj.address}</p>
    </div>
  </>)
}