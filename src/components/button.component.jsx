import React from 'react';
import './button.css';

export const Button=({handleClick})=>{
    return (
        <React.Fragment>
            <button name="(" value="(" onClick = {handleClick}> ( </button>
            <button name="CE" value="CE" onClick = {handleClick}> CE </button>
            <button name=")" value=")" onClick = {handleClick}> ) </button>
            <button name="C" value="C" onClick = {handleClick}> C </button>


            <button name="1" value="1" onClick = {handleClick}> 1 </button>
            <button name="2" value="2" onClick = {handleClick}> 2 </button>
            <button name="3" value="3" onClick = {handleClick}> 3 </button>
            <button name="+" value="+" onClick = {handleClick}> + </button>


            <button name="4" value="4" onClick = {handleClick}> 4 </button>
            <button name="5" value="5" onClick = {handleClick}> 5 </button>
            <button name="6" value="6" onClick = {handleClick}> 6 </button>
            <button name="-" value="-" onClick = {handleClick}> - </button>

            <button name="7" value="7" onClick = {handleClick}> 7 </button>
            <button name="8" value="8" onClick = {handleClick}> 8 </button>
            <button name="9" value="9" onClick = {handleClick}> 9 </button>
            <button name="*" value="*" onClick = {handleClick}> x </button>


            <button name="." value="." onClick = {handleClick}> . </button>
            <button name="0" value="0" onClick = {handleClick}> 0 </button>
            <button name="=" value="=" onClick = {handleClick}> = </button>
            <button name="/" value="/" onClick = {handleClick}> ÷ </button>
        </React.Fragment>
    )
}