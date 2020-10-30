import React from 'react';
import SearchBox from '../SearchBox/SearchBox';
import Radio from '../Radio/Radio'
import Checkbox from '../Checkbox/Checkbox';


const Navigation = ({searchTagChange, searchZipChange, viewOptions, handleOptionChange, selectedOption, Hoopsizes, 
    checkedItems, toggleCheckboxChange, CheckboxesSeason, StyleData, ThemeData, HolidayData }) => {
    return (
          
            <div className='index-module--sidebar--1AQzo  ml1'>
                <h1>Embroidery Catalog</h1>
                {/* be able to search by zip file name 
                  https://medium.com/@reneecruz/search-bar-in-react-js-in-six-simple-steps-4849118b2134
                  https://dev.to/sage911/how-to-write-a-search-component-with-suggestions-in-react-d20
                  */}
                <div className='dib'><div className='di' >Search Tags: </div><SearchBox searchChange={searchTagChange}/></div>
                <div className='dib'><div className='di' >Search zip file name: </div><SearchBox searchChange={searchZipChange}/></div> 
                <div className=''> <fieldset className='ba b--black-20'><legend >View Options</legend>
                  {
                   viewOptions.map( (item, index) => {
                      return (
                        <Radio  key={item} type='radio' className='mr2' name={item} radioName='view-options1' onChange={handleOptionChange } checked={selectedOption === item.toLowerCase()}/>
                          )
                   } ) 
                  }
                  </fieldset>
                </div>
                <div className='db'>
                  <fieldset className='ba b--black-20'><legend >Hoop Sizes</legend>
                    <span className='ttu f6 index-module--main--Z8889 index-module--mainRow--3cI-7'>
                      {
                        // <label>4x4<input class="mr2" type="checkbox" name="4x4"></label>
                        Hoopsizes.map(item => (
                          <div key={item.key} >
                            <Checkbox name={item.name} shortName={item.key} checked={checkedItems.get(item.name)} onChange={toggleCheckboxChange } />
                          </div>
                        ))
                      }
                    </span>
                  </fieldset>
                  <fieldset className='ba b--black-20'><legend>Seasons</legend>
                    <span className='ttu f6 index-module--main--Z8889 index-module--mainRow--3cI-7'>
                    {
                      CheckboxesSeason.map(item => (
                        <div key={item.key} >
                          <Checkbox name={item.name} shortName={item.key} checked={checkedItems.get(item.name)} onChange={toggleCheckboxChange } />
                      </div>
                      ))
                    }
                    </span>
                  </fieldset>
                  <fieldset className='ba b--black-20'><legend>Sewing Style</legend>
                    <span className='ttu f6 index-module--main--Z8889 index-module--mainRow--3cI-7'>
                    {
                      StyleData.map(item => (
                        <div key={item.key} >
                          <Checkbox name={item.name} shortName={item.key} checked={checkedItems.get(item.name)} onChange={toggleCheckboxChange } />
                      </div>
                      ))
                    }
                    </span>
                  </fieldset>
                  <fieldset className='ba b--black-20'><legend>Themes</legend>
                    <span className='ttu f6 index-module--main--Z8889 index-module--mainRow--3cI-7'>
                    {
                      ThemeData.map(item => (
                        <div key={item.key} >
                          <Checkbox name={item.name}  shortName={item.key} checked={checkedItems.get(item.name)} onChange={toggleCheckboxChange } />
                      </div>
                      ))
                    }
                    </span>
                  </fieldset>
                  <fieldset className='ba b--black-20'><legend >Holidays</legend>
                    <span className='ttu f6 index-module--main--Z8889 index-module--mainRow--3cI-7'>
                      {
                        HolidayData.map(item => (
                          <div key={item.key} >
                            <Checkbox name={item.name}  shortName={item.key} checked={checkedItems.get(item.name)} onChange={toggleCheckboxChange } />
                          </div>
                        ))
                      }
                      </span>
                  </fieldset>
                </div>
                
            </div>

        )
}

export default Navigation;