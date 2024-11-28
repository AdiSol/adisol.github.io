import React from 'react';
import {WindupChildren, Effect} from "windups";

export default function Text(props){
    
    return ( 
        <WindupChildren onFinished={props.proceed}>
            {props.children}
        </WindupChildren>
    );
}