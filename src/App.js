import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import {embroideryInfo} from './embroiderdata';

class App extends Component {
    constructor(){
        super();
        this.state ={
            dataArray: embroideryInfo,
            searchField: '' 
        }
    }
    render(){
        return(
            <div className='tc'>
                <h1>Embroidery Catalog</h1>
                <SearchBox />
                <CardList dataArray={this.state.dataArray}/>
            </div>
        )
    }
    
}

export default App;