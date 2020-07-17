import React from 'react';
import './Card.css';
import 'tachyons';

// function Card(props){
const Card = (props) =>{
   const {designer, zipFile, hoopSize, metaTags, image} = props.data;

    return (
    <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
        <img src={require('./images/JuliasNeedleDesigns/'+image)} alt='hat' />
        <div>
            <div>designer: {designer}</div>
            <div>Embroidery Zip file: {zipFile+'.zip'}</div>
            <div>Hoop Size: {hoopSize.join(',')}</div>
            <div>Tags: {metaTags.join(',')}</div>
        </div>
    </div>
    
    );
}

export default Card;