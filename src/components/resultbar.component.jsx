import React from 'react';
import './resultbar.css'

export const ResultBar =({finalValue})=>{
    return (<div className='result'>
           <p> {finalValue} </p>
          </div>)
    }
