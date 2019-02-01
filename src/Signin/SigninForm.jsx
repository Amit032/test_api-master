import React from 'react';
import { Field, Form } from "formik";
import { Paper, Grid } from '@material-ui/core';

import TextInput from '../Components/TextInput';
import PrimaryButton from '../Components/PrimaryButton';



export default ({ errors, classes }) => (
    <Paper elevation={1} className={classes.paper}>
        <Form>
            <Paper style={{border: '1px solid black', width: 600, height: 400, backgroundColor: '#EDF6FF'}}>
                <Grid container justify = "center" style={{ paddingLeft: 48, paddingRight: 48 }}>
                    <p style={{fontSize: 40, marginBottom: 15, marginTop: 10, fontFamily: 'sans-serif'}}><b>Sign in</b></p>
                                      
                    <Field 
                        name="email"
                        render={({ field }) => (
                            <TextInput error={errors.email} {...field} label="Email" />
                        )} 
                    />

                    <Field 
                        name="password"
                        render={({ field }) => (
                            <TextInput error={errors.password} type="password" {...field} label="Password" />
                        )} 
                    />

                    <PrimaryButton type="submit">
                        SIGN IN
                    </PrimaryButton>
                </Grid>
            </Paper>
        </Form>
    </Paper>
)