import React from 'react';
import { Button } from '@material-ui/core';

export default ({ children, ...rest }) => (
    <Button 
        style={{width: '100%', height: 60, marginTop: 15, borderRadius: 0, background: 'linear-gradient(to right bottom, #008ED4, #1BC4F3)'}} 
        variant="contained"
        color="primary"
        {...rest}
        >
        {children}
    </Button>
)