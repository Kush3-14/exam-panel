import Image from 'next/image'
import ques from 'public/question.png'
import prof from 'public/profile.jpg'
import React, { useState, useEffect } from 'react';

const updateColorArray = (index, color, colorArray) => {
    switch(index) {
      case 1:
        colorArray[1] = color;
        break;
      case 2:
        colorArray[2] = color;
        break;
      case 3:
        colorArray[3] = color;
        break;
      case 4:
        colorArray[4] = color;
        break;
      case 5:
        colorArray[5] = color;
        break;
      case 6:
        colorArray[6] = color;
        break;
      case 7:
        colorArray[7] = color;
        break;
      case 8:
        colorArray[8] = color;
        break;
      case 9:
        colorArray[9] = color;
        break;
      case 10:
        colorArray[10] = color;
        break;    
      default:
        break;
    }
    return colorArray;
  };

const Layout = (props) => {

    const [colorArray, setColorArray] = useState(Array(11).fill("grey"));

    useEffect(() => {
        setColorArray(updateColorArray(props.index, props.color, colorArray));
      }, [props.index, props.color]);

  return (
    <>
    <div className="d-flex flex-row">
        <div className='d-flex flex-column my-2 mb-1' style={{float:'left', width:'150%'}}>
            <div className="row border border-dark shadow p-3 mb-5 bg-white rounded" style={{height:'100%'}}>
                <div className="container" style={{display:'inline-block', width:'100%'}}>
                    <div className="col">                
                        <div className='rounded text-left d-flex justify-content-between my-3' style={{backgroundColor: '#6699CC', color:'white', width:'100%'}}>
                            <p style={{margin:'5px'}}><strong>QNo.: 1</strong></p>
                            <div className="dropdown d-flex justify-content-between">
                                <p style={{margin:'5px'}}><strong>View in:</strong></p>
                                <button className="btn btn-secondary btn-sm dropdown-toggle" style={{margin:'5px', backgroundColor: 'white', color:'black'}} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    English
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a className="dropdown-item" href="#">Hindi</a></li>
                                    <li><a className="dropdown-item" href="#">Maithili</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='container'>
                        <div className = "row">
                            <div className="col mx-2 my-2">                    
                                    <p style={{color:'#6699CC'}}><strong>QUESTION INSTRUCTION</strong></p>               
                            </div>
                            <div className='col mx-2 my-2'>
                                <p style={{color:'#6699CC'}}><strong>QUESTION</strong></p>
                            </div> 
                            <div className="w-100"></div>
                            <div className='col'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
                                Deserunt magni eius voluptatibus? Possimus repudiandae fugiat,<br/>
                                ea vero delectus nostrum nesciunt nam facilis,<br/>
                                ipsam ab sit perferendis omnis consequuntur facere cupiditate?<br/>
                            </div>
                            <div className="col mt5">
                                <Image
                                    src={ques}
                                    alt="Question"
                                    width={500}
                                    
                                />
                                <div className="form-check my-2">
                                    <input className="form-check-input" type="radio" name="q1" id="q1_r1" value="r2"/>
                                    <label className="form-check-label" htmlFor="q1_r1">
                                        Lambert's Law
                                    </label>
                                </div>
                                <div className="form-check my-2">
                                    <input className="form-check-input" type="radio" name="q1" id="q1_r2" value="r2"/>
                                    <label className="form-check-label" htmlFor="q1_r2">
                                        Law of superposition
                                    </label>
                                </div>
                                <div className="form-check my-2">
                                    <input className="form-check-input" type="radio" name="q1" id="q1_r3" value="r3"/>
                                    <label className="form-check-label" htmlFor="q1_r3">
                                        Lamis's Theorem
                                    </label>
                                </div>
                                <div className="form-check my-2">
                                    <input className="form-check-input" type="radio" name="q1" id="q1_r3" value="r3"/>
                                    <label className="form-check-label" htmlFor="q1_r3">
                                        Equilibrium Law
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>     
                </div>        
            </div>
        </div>
        <div className="d-flex flex-column">
            <div className="container border border-dark mx-5 shadow p-3 mb-3" style={{backgroundColor:"#96DED1", width:"70%", height:'auto'}}>
                <Image
                src={prof}
                 alt="Profile Pic"
                 width={90}
                 height={100}
                />
                <p style={{float:'right'}}><strong> Time Left: <br/> Name: {props.name} </strong></p>
            </div>
            <div className="container border border-dark mx-5 my4 shadow p-3 mb-3" style={{backgroundColor:"#96DED1", width:"70%", height:'250px'}}>
                <div className='text-left d-flex justify-content-between' style={{backgroundColor: '#6699CC', color:'white', width:'auto'}}> <h5 className="mx-2">Question Pallete</h5></div>
                <div className="row my-2">
                    <div className="btn" role="group">
                        <button type="button" className="btn  border border-dark mx-2" style={{backgroundColor: props.index == 1 ? props.color : colorArray[1]}}>1</button>
                        <button type="button" className="btn  border border-dark mx-2" style={{backgroundColor: props.index == 2 ? props.color : colorArray[2]}}>2</button>
                        <button type="button" className="btn  border border-dark mx-2" style={{backgroundColor: props.index == 3 ? props.color : colorArray[3]}}>3</button>
                        <button type="button" className="btn  border border-dark mx-2" style={{backgroundColor: props.index == 4 ? props.color : colorArray[4]}}>4</button>
                        <button type="button" className="btn  border border-dark my-2" style={{backgroundColor: props.index == 5 ? props.color : colorArray[5]}}>5</button>
                        <button type="button" className="btn  border border-dark mx-2" style={{backgroundColor: props.index == 6 ? props.color : colorArray[6]}}>6</button>
                        <button type="button" className="btn  border border-dark mx-2" style={{backgroundColor: props.index == 7 ? props.color : colorArray[7]}}>7</button>
                        <button type="button" className="btn  border border-dark mx-2" style={{backgroundColor: props.index == 8 ? props.color : colorArray[8]}}>8</button>
                        <button type="button" className="btn  border border-dark mx-2" style={{backgroundColor: props.index == 9 ? props.color : colorArray[9]}}>9</button>
                        <button type="button" className="btn  border border-dark mx-2" style={{backgroundColor: props.index == 10 ? props.color : colorArray[10]}}>10</button>
                    </div>
                </div>
            </div>
            <div className='container border border-dark mx-5 shadow p-3 mb-3' style={{backgroundColor:"#96DED1", width:'70%', height:'auto'}}>
            
                <span className="row">
                    <span className="rounded-top text-left" style={{backgroundColor:'#6699CC', color:'white'}}><strong>Legend(Click to View)</strong></span>
                    <div className="col" style={{backgroundColor:'green'}}>Answer</div>
                    <div className="col" style={{backgroundColor:'red'}}>No Answer</div>
                    <div className="w-100"></div>
                    <div className="col" style={{backgroundColor:'purple'}}>Review + Ans</div>
                    <div className="col" style={{backgroundColor:'yellow'}}>Review - Ans</div>
                    <div className="w-100"></div>
                    <div className="col" style={{backgroundColor:'grey'}}>Dump</div>
                    <div className="col" style={{backgroundColor:'white'}}>No Visit</div>
                    <span className="rounded-bottom text-center" style={{backgroundColor:'#6699CC'}}><strong>SOME POPUP MESSAGE</strong></span>
                </span>
               
            </div>
            <div className="border border-dark mx-5 shadow p-3 mb-3" style={{backgroundColor:"#96DED1", width:"70%", height:'auto'}}>                
                <div className='buttons d-flex justify-content-between' style={{margin: '0'}}>
                    <button type="button" className="btn btn-primary btn-sm">Profile</button>
                    <button type="button" className="btn btn-primary btn-sm mx-1">Insrt</button>
                    <button type="button" className="btn btn-primary btn-sm my-1">Questions</button>
                    <button type="button" className="btn btn-primary btn-sm mx-1">Submit</button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Layout
