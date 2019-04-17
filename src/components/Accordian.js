import React from 'react'


const Accordian=({handleClick, allSections, selectedSection})=>{

  const findSection= selectedSectionName =>{
    const section = allSections.find(section=> section.title === selectedSectionName);
    return <li><p>{section.content}</p></li>
  }



  return(
    <React.Fragment>
      <div>
        <button onClick={handleClick}>Section 1</button>
        <button onClick={handleClick}>Section 2</button>
        <button onClick={handleClick}>Section 3</button>
      </div>
      <ul>
        {selectedSection !== null && findSection(selectedSection)}
      </ul>
      </React.Fragment>
    
    
  )

}

export default Accordian;