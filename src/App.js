import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import {embroideryInfo} from './embroiderdata';
import Hoopsizes from './Hoopsizes';
import CheckboxesSeason from './CheckboxesSeason';
import HolidayData from './HolidayData';
import ThemeData from './ThemeData';
import StyleData from './StyleData';
import Checkbox from './Checkbox';
import Radio from './Radio';
import './App.css';

// let checkboxArray = [Hoopsizes,CheckboxesSeason ] ;
const allHoops = Hoopsizes.map(item => (item.name )) //["4x4", "5x7", "6x10"]
const allSeasons = CheckboxesSeason.map(item => (item.name )); //["spring", "summer", "winter", "fall"]
const allHolidays = HolidayData.map(item => (item.name)); //["christmas", "birthday"]
const viewOptions = ['All','Collections','Singles'];
const sewingStyle = StyleData.map(item => (item.name));//['Continuous Line','Pocket Peekers','Mask','Coasters','Mug Rugs','Applique'];
const allThemes =  ThemeData.map(item => (item.name));

class App extends Component {
    constructor(){
        super();
        this.state ={
            dataArray: embroideryInfo,
            searchField: '' ,
            zipSearchField: '',
            checkedItems: new Map(),
            selectedOption: 'all'
        }
    }
   
    componentDidMount(){
   
      // // eventually pull data from the database
      // fetch('URL here')
      //   .then(response => response.json())
      //   .then(embroideryInfo => this.setState({dataArray: embroideryInfo}));
    }

    toggleCheckboxChange  = (event) =>  {
        const item = event.target.name;
        const isChecked = event.target.checked;
        this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));
        }

    //Note: when creating your own methods, use arrow functions to make sure 'this' refers to the App  
    onSearchChange = (event) => {
        console.log('onSearchChange event: ', event.target.value);
        this.setState({searchField: event.target.value.toLowerCase()});
        // const filteredCatalog = this.state.dataArray.filter(eachItem => {
        //     return eachItem.metaTags.includes(event.target.value.toLowerCase()) ; 
        // })
        // console.log('filtered catalog: ', filteredCatalog);
    }
    onZipSearchChange = (event) => {
      console.log('onZipSearchChange event: ', event.target.value );
      this.setState({zipSearchField: event.target.value.toLowerCase()});
      //test the new zip search field
      //const filterByZip = this.state.dataArray.filter(embfiles => {
      //  return embfiles.zipFile.toLocaleLowerCase().includes(this.state.zipSearchField.toLowerCase());
      //})
      //console.log(filterByZip);
    }
    isAlphabet = (event) => {
        console.log('isAlphabet: ', event);
    }
    
    handleOptionChange = (changeEvent) => {
      this.setState({
        selectedOption: changeEvent.target.value
      });
    }



    isFound = (checkedArray, arrArray) => {
      if(checkedArray.length === 0 ){
        return true;
      }
      return arrArray.some(function (v) {
        return checkedArray.indexOf(v) >= 0;
      }); 
    }
    isItemFound = (checkedArray, arr) => {
      if(checkedArray.length === 0 ){
        return true;
      }else{
        if(arr === ''){return false;}
      }

      return checkedArray.toString().includes(arr); 
    }

    // http://react.tips/checkboxes-in-react-16/   rewrite checkboxes
    // https://womenwho.design/  look for more inspiration for design  https://tachyons.io/gallery/

    render(){
      
      //  console.log('#39 which: ',this.state.checkedItems.size)
      // console.log('spread array: ',[...this.state.checkedItems]);
      // console.log('spread: ',...this.state.checkedItems);
     // console.log('this.state.seaarchField',this.state.searchField);

        let checkedHoopSizes = [];
        let checkedSeasons =[];
        let checkedHoliday =[];
        let checkSewingStyle = [];
        let checkTheme = [];
        for(var i = 0;i<allHoops.length;i++){
          if(this.state.checkedItems.get(allHoops[i]) !== 'undefined' && this.state.checkedItems.get(allHoops[i])){
            checkedHoopSizes[checkedHoopSizes.length] =allHoops[i] 
          }
          
        }
        for(var y = 0;y<allSeasons.length;y++){
          if(this.state.checkedItems.get(allSeasons[y]) !== 'undefined' && this.state.checkedItems.get(allSeasons[y])){
            checkedSeasons[checkedSeasons.length] =allSeasons[y] 
          }
        }
        for(var z=0;z<allHolidays.length;z++){
          if(this.state.checkedItems.get(allHolidays[z]) !== 'undefined' && this.state.checkedItems.get(allHolidays[z])){
            checkedHoliday[checkedHoliday.length] =allHolidays[z] 
          }
        }
        for(var x=0;x<sewingStyle.length;x++){
          if(this.state.checkedItems.get(sewingStyle[x]) !== 'undefined' && this.state.checkedItems.get(sewingStyle[x])){
            checkSewingStyle[checkSewingStyle.length] =sewingStyle[x].toLowerCase() ;
          }
        }
        for(var m=0;m<allThemes.length;m++){
          if(this.state.checkedItems.get(allThemes[m]) !== 'undefined' && this.state.checkedItems.get(allThemes[m])){
            console.log('add theme to checkTheme array ', allThemes[m]);
            checkTheme[checkTheme.length] =allThemes[m].toLowerCase() ;
            console.log('checkTheme array: ',  checkTheme);
          }
        }
       
        const filteredCatalog = this.state.dataArray.filter(eachItem => {
            let isSingle = '';
            // let zipName='';
            if(this.state.selectedOption !== 'all'){
              this.state.selectedOption === 'collections'? isSingle = false: isSingle = true;
            }

            return eachItem.metaTags.includes(this.state.searchField) && 
                eachItem.zipFile.toLocaleLowerCase().includes(this.state.zipSearchField.toLowerCase()) &&
                (this.isFound(checkedHoopSizes, eachItem.hoopSize)) &&
                (this.isItemFound(checkedSeasons, eachItem.season.toLowerCase())) &&
                (this.isItemFound(checkedHoliday, eachItem.holiday.toLowerCase())) &&
                (isSingle !== ''? eachItem.single === isSingle: isSingle==='') &&
                (this.isItemFound(checkSewingStyle, eachItem.sewingStyle.toLowerCase())) &&
                (this.isItemFound(checkTheme, eachItem.theme.toLowerCase())) 

        })
// console.log('checkedHoliday: ',checkedHoliday)
// console.log('checkedSeasons: ',checkedSeasons)
// console.log('checkedHoopSizes: ',checkedHoopSizes)
// console.log('selectedOption: ',this.state.selectedOption);
// console.log('sewing style',this.state.checkSewingStyle )
// console.log('this.state.checkedItems: ',this.state.checkedItems);
// console.log('this.state.checkedItems: ',this.state.checkedItems);
// console.log('theme',checkTheme )
   
        
        return(
            <div className='flex'>
              <div className='index-module--sidebar--1AQzo  ml1'>
                <h1>Embroidery Catalog</h1>
                <div className='dib'><div className='di' >Search Tags: </div><SearchBox searchChange={this.onSearchChange}/></div>
                <div className='dib'><div className='di' >Search zip file name: </div><SearchBox searchChange={this.onZipSearchChange}/></div>
                <div className=''> <fieldset className='ba b--black-20'><legend >View Options</legend>
                  {
                   viewOptions.map( (item, index) => {
                      return (
                        <Radio  key={item} type='radio' className='mr2' name={item} radioName='view-options' onChange={this.handleOptionChange } checked={this.state.selectedOption === item.toLowerCase()}/>
                          )
                   } ) 
                  }
                  {/* be able to search by zip file name 
                  https://medium.com/@reneecruz/search-bar-in-react-js-in-six-simple-steps-4849118b2134
                  https://dev.to/sage911/how-to-write-a-search-component-with-suggestions-in-react-d20
                  */}
                 {/* <input type='text' placeholder='enter zip file name here'></input>*/} 
                  </fieldset>
                </div>

                <div className='db'>
                <fieldset className='ba b--black-20'><legend >Hoop Sizes</legend>
                <span className='ttu f6 index-module--main--Z8889 index-module--mainRow--3cI-7'>
                  {
                    // <label>4x4<input class="mr2" type="checkbox" name="4x4"></label>
                    Hoopsizes.map(item => (
                      <div key={item.key} >
                        <Checkbox name={item.name} shortName={item.key} checked={this.state.checkedItems.get(item.name)} onChange={this.toggleCheckboxChange } />
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
                        <Checkbox name={item.name} shortName={item.key} checked={this.state.checkedItems.get(item.name)} onChange={this.toggleCheckboxChange } />
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
                        <Checkbox name={item.name} shortName={item.key} checked={this.state.checkedItems.get(item.name)} onChange={this.toggleCheckboxChange } />
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
                        <Checkbox name={item.name}  shortName={item.key} checked={this.state.checkedItems.get(item.name)} onChange={this.toggleCheckboxChange } />
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
                        <Checkbox name={item.name}  shortName={item.key} checked={this.state.checkedItems.get(item.name)} onChange={this.toggleCheckboxChange } />
                      </div>
                    ))
                  }
                  </span>
                  </fieldset>
                  </div>
              </div>

                <div className='w-100'>
                <CardList dataArray={filteredCatalog}/>
                </div>
            </div>
        )
    }
    
}

export default App;