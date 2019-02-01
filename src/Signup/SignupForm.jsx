import React from 'react';
import { Field, Form } from "formik";
import { Paper, Grid } from '@material-ui/core';
import TextInput from '../Components/TextInput';
import PrimaryButton from '../Components/PrimaryButton';



export default ({ errors, classes }) => (
    <Paper elevation={1} className={classes.paper}>
        <Form>
            <Paper style={{border: '1px solid black', width: 600, height: 630, backgroundColor: '#EDF6FF'}}>
                <Grid container justify = "center" style={{ paddingLeft: 48, paddingRight: 48 }}>
                    <p style={{fontSize: 40, marginBottom: 15, marginTop: 10, fontFamily: 'sans-serif'}}><b>Sign up</b></p>
                    
                    <Field 
                        name="firstname"
                        render={({ field }) => (
                            <TextInput error={errors.firstname} {...field} label="Firstname" />
                        )} 
                    />

                    <Field 
                        name="lastname"
                        render={({ field }) => (
                            <TextInput error={errors.lastname} {...field} label="Lastname" />
                        )} 
                    />

                    <Field 
                        name="username"
                        render={({ field }) => (
                            <TextInput error={errors.username} {...field} label="Username" />
                        )} 
                    />

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

                    <Field 
                        name="confirmPassword"
                        render={({ field }) => (
                            <TextInput error={errors.confirmPassword} type="password" {...field} label="Confirm Password" />
                        )} 
                    />

                    <PrimaryButton type="submit">
                        SIGN UP
                    </PrimaryButton>
                </Grid>
            </Paper>
        </Form>
    </Paper>
)