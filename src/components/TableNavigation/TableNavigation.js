import React from 'react';
import './TableNavigation.css';


// function Card(props){
const TableNavigation = ({ onTableRouteChange}) =>{
      return (
        <div className='index-module--sidebar--1AQzo ml1'>
            <h1>Embroidery Tables</h1>
            <div>
                <ul className="list pl0 measure center">
                    <li className="lh-copy pv1" onClick={() => onTableRouteChange('hoopsize')}>HoopSize</li>
                    <li className="lh-copy pv1" onClick={() => onTableRouteChange('season')}>Seasons</li>
                    <li className="lh-copy pv1" onClick={() => onTableRouteChange('style')}>Style</li>
                    <li className="lh-copy pv1" onClick={() => onTableRouteChange('theme')}>Theme</li>
                    <li className="lh-copy pv1" onClick={() => onTableRouteChange('holiday')}>Holidays</li>
                    <li className="lh-copy pv1" onClick={() => onTableRouteChange('embroidery')}>Embroidery</li>
                </ul>
        </div>
        </div>
    
    );
}

export default TableNavigation;