import React from 'react';

//pass searchChange function from parent, 
//use onChange() event to call searchChange
const SearchBox =({searchChange}) => {
    return(
        <div className='di'>
            <input className='pa2 ba b--green bg-lightest-blue' 
                type='search' 
                placeholder='search' 
                onChange={searchChange}/>
        </div>
    )
}

export default SearchBox;