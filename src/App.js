import React from 'react';
import CardList from './CardList';
import {embroideryInfo} from './embroiderdata';

const App = () =>{
    return(
        <CardList dataArray={embroideryInfo}/>
    )
}

export default App;