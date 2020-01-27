import React from 'react';
import Spinner from './Spinner';

const MySpinner = (props) => {
    return (
        <div className="ui active dimmer">
            <div className='ui big text loader'>{props.message}</div>
        </div>
    );
};

Spinner.defaultProps = {
    message: 'Loading...'
};

export default MySpinner;
