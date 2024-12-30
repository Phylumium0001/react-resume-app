export default function ExperienceDisplay({ experienceObj }) {
  return  <>
  <h3>Experience</h3>

  <div className='experienceItems'>
    {experienceObj.map((_,key)=>{
      return (
        
      // Loop through the list of education items
      
      <div className="experienceItem" key={key}>
        {/* console.log(education[key]) */}
        <div className="itemCont">
          <div className="item">
            <p>{experienceObj[key]['start']} - {experienceObj[key]['end']}</p>
            <p>{experienceObj[key]['location']}</p>
          </div>
          <div className="item">
            <p>{experienceObj[key]['company']}</p>
            <p>{experienceObj[key]['role']}</p>
          </div>
        </div>
        <div className="desc">
          {experienceObj[key]['description']}
        </div>
        

      </div>)  
  })}
  </div>
</>
}
