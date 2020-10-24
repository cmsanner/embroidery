import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({type='checkbox', name, checked=false, onChange}) => {
    return (
        <label className='index-module--label--8T5jd index-module--labelRow--2jwoO'>
        <input className='mr2' type={type} name={name} checked={checked} onChange={onChange} value={name} />
        {name}
        </label>
    )
}

Checkbox.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
}

export default Checkbox;
