import React from 'react';
import Card from './Card';

//1) code below can either be run as arrow function or an actual function
//2) again code is interchangable, run as arrow function using map or a javascript loop

//1) arrow function
// const CardList = ({dataArray}) => {

//1) actual function
function CardList({dataArray}){
    //2) arrow function 
    const cardArray = dataArray.map((embroideryInfo, i) => {
        return <Card key={dataArray[i].id} data={dataArray[i]} />
    });

    //2) javascript loop
    // let cardArray = [];
    // for(var i=0;i<dataArray.length;i++){
    //     cardArray.push(<Card key={dataArray[i].id} data={dataArray[i]} />) 
    // }
    
    return (
        <div className=''>{cardArray} </div>
    )
}

export default CardList;