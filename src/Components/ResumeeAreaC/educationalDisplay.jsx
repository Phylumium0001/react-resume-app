export default function EducationDisplay({ educationObj }) {
  
  return <>
    <h3>Education</h3>

    <div className='educationItems'>
      {educationObj.map((_,key)=>{
        return (
          
        // Loop through the list of education items
        
        <div className="educationItem" key={key}>
          {/* console.log(education[key]) */}
          <div className="item">
            <p>{educationObj[key]['start']} - {educationObj[key]['end']}</p>
            <p>{educationObj[key]['location']}</p>
          </div>
          <div className="item">
            <p>{educationObj[key]['school']}</p>
            <p>{educationObj[key]['certificate']}</p>
          </div>

        </div>)  
    })}
    </div>
  </>
}
