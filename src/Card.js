import React from 'react';
import './Card.css';
import 'tachyons';

// function Card(props){
const Card = (props) =>{
   const {designer, zipFile, hoopSize, metaTags, image, item, season, holiday, theme, sewingStyle} = props.data;

    return (
    <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 w-30 v-top card'>
        <img src={require(`./images/${image}`)} alt='hat' />
        <div className='tl mt2 f7'>
            <div><span className='b'>Designer:</span> {designer}</div>
            <div><span className='b'>Name:</span>{item} </div>
            <div><span className='b'>Zip file:</span> {`${zipFile}.zip`}</div>
            <div><span className='b'>Hoop Size:</span> {hoopSize.join(',')}</div>
            <div><span className='b'>Tags:</span> {metaTags.split(' ').join(', ')}</div>
            <div><span className='b'>Season:</span> {season}</div>
            <div><span className='b'>Holiday:</span> {holiday}</div>
            <div><span className='b'>Sewing Style:</span> {sewingStyle}</div>
            <div><span className='b'>Theme:</span> {theme}</div>
        </div>
    </div>
    
    );
}

export default Card;