import './weeklycard.css'
import React, { useState } from "react";
import weekly1 from '../../img/weeklyImg/Rectangle 17.png'

function Weeklycard(props){
    

    return(
        <>
            <div className='weeklyCard'>
                <img className='cardImg' src={weekly1} alt="" />
                <h4 className='poppins'>Whatever It Takes</h4>
                <p className='poppins poppins-small'>imagine Dragon</p>
            </div>

        </>
    )
}

export default Weeklycard