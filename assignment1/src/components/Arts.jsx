import React,{useState} from 'react';
import {sculptureList} from '../assets/data/data';

export default function Arts(){
    const [index,setIndex]=useState(0);
    const previous=()=>{
        if(index<1){
            alert('Out of range');
        } else {
            setIndex(index-1);
        }
    }
    const next=()=>{
        if (index>sculptureList.length-2) {
            alert('Out of range');            
        } else {
            setIndex(index+1);
        }
    }
    const first=()=>{
        setIndex(0);
    }
    const last=()=>{
        setIndex(sculptureList.length-1);
    }
    return(
        <div>
            <div>
                <h1>{sculptureList[index].name}</h1>
            </div>
            <div>
                <img src={sculptureList[index].url} alt={sculptureList[index].alt}/>
            </div>
            <div>
                <p>Artist Name: {sculptureList[index].artist}</p>
                <p>{sculptureList[index].description}</p>
            </div>    
            <div>
                <button onClick={previous}>Previous</button>
                <button onClick={first}>First</button>
                <button onClick={last}>Last</button>
                <button onClick={next}>Next</button>
            </div>        
        </div>
    );
}