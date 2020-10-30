import React from 'react';

function updateHoliday(id,shortName, name){
    console.log('UPDATE - Holiday id: '+ id + '  Holiday Name: ' + name + ' Holiday ShortName: ' + shortName);
}
function deleteHoliday(id, shortName, name){
    console.log('DELETE - Holiday id: '+ id + '  Holiday Name: ' + name + ' Holiday ShortName: ' + shortName);
}

//https://stackoverflow.com/questions/45427163/map-over-an-array-of-objects-to-create-a-table-in-reactjs
//https://github.com/adazzle/react-data-grid
//https://www.npmjs.com/package/react-data-grid 
//https://adazzle.github.io/react-data-grid/


const HolidayUpdateForm = ({data, tableName} ) =>{
    console.log(data.length)
   const theRows =  data.map((item,i) => (
        <tr key={i}>
            <td  key={item.id}>{item.id}</td>
            <td  key={'name'+i}>{item.name}</td>
            <td  key={'shortname'+i}>{item.key}</td>
            <td  key={'save'+i}><button onClick={() => updateHoliday(item.id, item.key, item.name)} className='white bg-light-purple' >Save</button></td>
            <td key={'delete'+i}><button onClick={() => deleteHoliday(item.id, item.key, item.name)} className='white bg-light-purple' >Delete</button></td>
        </tr>          
        ))
    return (
        <div>
        <p className='f3 canter'>
            {'Update: '} {tableName}
        </p>
         <div >
             <table >
                 <thead>
                <tr>
                    <th>{'id'}</th>
                    <th>{'name'}</th>
                    <th>{'shortName'}</th>
                    <th>{'Update'}</th>
                    <th>{'Delete'}</th>
                </tr>
                </thead>
                <tbody>
                {theRows}
               
                </tbody>
                <tfoot>
                    <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><button className='white bg-light-purple' >Add</button></td>
                    <td></td>
                    </tr>
                </tfoot>
            </table>
         </div>
    </div> 
    );
}

export default HolidayUpdateForm;