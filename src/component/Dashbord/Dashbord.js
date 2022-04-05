import React, { useState } from 'react';
import LinChart from '../LineChart/LinChart';

const Dashbord = () => {
    
         
  
    return (
        <div>
            <h1 className='text-5xl'>this is a dashbord</h1>
            {/* <animated.div style={props}>I will fade in</animated.div> */}
            <LinChart></LinChart>
        </div>
    );
};

export default Dashbord;