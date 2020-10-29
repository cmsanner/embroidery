import React, {Component} from 'react';
import FilterData from './components/FilterData/FilterData';
import CardList from './components/CardList/CardList';
import {embroideryInfo} from './embroiderdata';
import Hoopsizes from './Hoopsizes';
import CheckboxesSeason from './CheckboxesSeason';
import HolidayData from './HolidayData';
import ThemeData from './ThemeData';
import StyleData from './StyleData';

import './App.css';

//for database: mssql, dao, axios, 
//https://expressjs.com/en/guide/database-integration.html
//express, pg-promise

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
            dataHolidays: [],
            searchField: '' ,
            zipSearchField: '',
            checkedItems: new Map(),
            selectedOption: 'all'
        }
    }
   
    componentDidMount(){
       // eventually pull data from the database
       // for testing purposes make sure I can connect to the 
       // backend - woot woot this works!
       /*
       fetch('http://localhost:3000/holiday')
         .then(response => response.json())
         .then(data => this.setState({dataHolidays: data}))
        */
          // .then(data => console.log(data))
         //.then(embroideryInfo => this.setState({dataArray: embroideryInfo}));
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
      // I decide when I itterate through each item, to check to see if it met all the 
      // search criteria. Therefore, I'm not itterating through the dataset multiple times
      //  
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
              <FilterData  searchChange={this.onZipSearchChange} searchChange1={this.onSearchChange} 
                  viewOptions={viewOptions} handleOptionChange={this.handleOptionChange} selectedOption={this.state.selectedOption}
                  Hoopsizes={Hoopsizes} checkedItems={this.state.checkedItems} toggleCheckboxChange={this.toggleCheckboxChange}
                  CheckboxesSeason={CheckboxesSeason} StyleData={StyleData} ThemeData={ThemeData} HolidayData={HolidayData}
               />
                <div className='w-100'>
                <CardList dataArray={filteredCatalog}/>
                </div>
            </div>
        )
    }
    
}

export default App;