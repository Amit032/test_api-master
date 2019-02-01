import React from 'react';
import { TextField } from '@material-ui/core';
import { ErrorMessage } from 'formik';

export default (props) => (
    <React.Fragment>
        <TextField
            margin="dense"
            style = {{width: '100%'}}
            variant="outlined"
            {...props}
        />
        <ErrorMessage name={props.name} render={(msg) =>
            <div style={{ color: 'red', width: '100%' }}>{msg}</div>
        }/>
    </React.Fragment>
);
