import React from 'react';

import './form-input.styles.scss'

const FormInput = ({ hanldeChange, label, ...otherProps }) => {
    return (
        <div className="group">
            <input className="form-input" onChange={hanldeChange} {...otherProps} />

            {
                label ?
                    (<label
                        className={`${otherProps.value.lenght ? 'shrink' : ''} form-input-label`}
                    >
                        {label}
                    </label>)
                    : null
            }
        </div>
    )
}

export default FormInput