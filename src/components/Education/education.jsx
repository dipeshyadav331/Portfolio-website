import '../Education/education.css'
import React from 'react';
import educationimg from '../../assets/education.png';

function education() {
    return (
        <section id="education"> 
                <div className="out-in">
                    <div className="flex">
                        <div className="abt-image-div">
                            <img
                            src={educationimg}
                            alt="note book icon"
                            className="about-image"
                            />
                        </div>
                        <div className="ew1">
                            <h1 className="abt-header alt-text">Education Background</h1>
                            <hr className="short-hr" />
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className="notFlex">    
                        <div className="out-left">
                            <p className='st-line'></p>
                            <p className='st-line'></p>
                            <p className='st-line'></p>
                        </div>
                        <div className="edu">                        
                            <div className="university">
                                <p className='text1'>B. Tech Information Technology</p>
                                <p className='text2'>Dec 2021 - May 2025</p>
                                <br />
                                <a href="http://nsut.ac.in/">
                                    <p className='text3'>Netaji Subhash University of Technology , New Delhi , India</p>
                                </a>
                            </div>
                            <br />
                            <br />
                            <div className="university">
                                <div className="flex">
                                    <p className='text1'>Higher Secondary</p>
                                    <a  href=''>
                                    <p className='report-card'>
                                        (Year 12 , CBSE) - <span style={{ textDecoration: 'underline' }}>90</span>%
                                    </p>
                                    </a>
                                </div>
                                {/* <a href=""> */}
                                    <p className='text2'>Apr 2020 - May 2021</p>
                                {/* </a> */}
                                <br />
                                <p className='text3'> Kendriya Vidyalaya , Saket , New Delhi , India</p>
                            </div>
                            <br />
                            <br />
                            <div className="university">
                                <div className="flex">
                                    <p className='text1'>Senior Secondary </p>
                                    <a  href=''>
                                        <p className='report-card'>
                                            (Year 10 , CBSE) - 
                                            <span style={{ textDecoration: 'underline' }}>96</span>%
                                        </p>    
                                    </a>
                                </div>
                                {/* <a href=""> */}
                                    <p className='text2'>Apr 2018 - March 2019</p>
                                {/* </a> */}
                                <br />
                                <p className='text3'> Kendriya Vidyalaya , Saket , New Delhi , India</p>
                            </div>
                        </div>
                    </div>
                 
            </div>

        </section>
    )
}

export default education
