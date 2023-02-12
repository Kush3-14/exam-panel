import React from 'react'


const Navbar = () => {
  return (
    <>
      <ul className="nav nav-pills" style={{marginLeft: '15px'}}>
        <li className="nav-item" >
          <a style={{backgroundColor: '#6699CC'}}className="nav-link active" aria-current="page" href="#">All Sections</a>
        </li>
        <li className="nav-item">
          <a style={{backgroundColor: '#6699CC', marginLeft : '5px'}}className="nav-link active" aria-current="page" href="#">PHYSICS</a>
        </li>
        <li className="nav-item">
          <a style={{backgroundColor: '#6699CC', marginLeft : '5px'}} className="nav-link active" aria-current="page" href="#">CHEMISTRY</a>
        </li>
        <li className="nav-item">
          <a style={{backgroundColor: '#6699CC', marginLeft : '5px'}} className="nav-link active" aria-current="page" href="#">MATHS</a>
        </li>      
      </ul>
    </>
   
  )
}

export default Navbar
