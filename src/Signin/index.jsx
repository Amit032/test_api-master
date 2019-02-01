import React from 'react';
import * as Yup from "yup"
import { Formik } from "formik";
import { BrowserRouter, Route } from 'react-router-dom'

import DetailedTable from '../DetailedTable'
import AuthService from '../services/AuthService'
import SigninForm from './SigninForm';


const validationSchema = Yup.object({
    email: Yup.string()
        .required("Email is required"),
    password: Yup.string()
        .required('Password is required field')
});

const initialValues = { 
    email: "", 
    password: '' 
};

export default class extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          email: '',
          password: '',
          redirect: false
        };

        this.Auth = new AuthService();
      }

    handleSubmit = (values) => {
         this.setState({email: values.email, password: values.password });
         this.Auth.login("password",this.state.email,this.state.password)
            .then(res => {
                if(res.access_token){
                    this.setState({redirect: true});
                }
                else{
                    alert(res.error)
                }
  
            })
            .catch(err => {
                alert("this is catch block error");
            })
         console.log(this.state);
         
    }

    render() {

        if(this.state.redirect){
            return (
                <BrowserRouter>
                        <Route exact path='/' component={DetailedTable} />
                </BrowserRouter>
            )
        }
        const classes = this.props;
        
        return (
            <div className={classes.container}>
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={this.handleSubmit}
                  onChange={this.handleChange}
                >
                    {({ errors }) => (
                        <SigninForm 
                            errors={errors} 
                            classes={classes} 
                        />
                    )}
                </Formik>
            </div>
        );
    }
}