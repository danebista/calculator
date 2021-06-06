import React from 'react';
import './buttonlist.css';
import {Button} from './button.component'

export const ButtonList=({handleClick})=>{
    return (<div className='button-holder'>
                <Button handleClick={handleClick}></Button>
           </div>);
}