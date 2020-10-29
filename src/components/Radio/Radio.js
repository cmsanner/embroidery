import React from 'react';

const Radio = (props) => {
    const {className, type, radioName, name, onChange, checked} = props;
    return (
        <div>
             <label>
             <input  className={className} type={type} name={radioName}  value={name.toLowerCase()} onChange={onChange} checked={checked} />
             {name}
             </label>
        </div>
    )
}
   
export default Radio;

