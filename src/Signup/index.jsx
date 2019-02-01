import React from 'react';
import * as Yup from "yup"
import { Formik } from "formik";
import SignupForm from './SignupForm';
import Signin from '../Signin';
import { BrowserRouter, Route } from 'react-router-dom'



const validationSchema = Yup.object({
    firstname: Yup.string()
        .required("Firstname is required"),
    lastname: Yup.string()
        .required("Lastname is required"),
    email: Yup.string()
        .required("Email is required")
        .email("Enter a valid email"),
    password: Yup.string()
        .required('Password is required field')
        .min(6, 'Password should be minmum 6 character long'),
    confirmPassword: Yup.string()
        .required('Confirm password is required field')
        .oneOf([Yup.ref("password")], "Confirm password does not match with password")
});

const initialValues = { firstname: '',lastname: '', email: "", password: '', confirmPassword: '' };

export default class extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          firstname: '',
          lastname: '',
          email: '',
          password: '',
          redirect: false
        };
      }

    handleSubmit = (values) => {
        this.setState({
            firstname: values.firstname,
            lastname: values.lastname,
            email: values.email, 
            password: values.password, 
            redirect: true
        });

        console.log(this.state);
    } 

    render() {

        if(this.state.redirect){
            return (
                <BrowserRouter>
                        <Route exact path='/' component={Signin} />
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
                >
                    {({ errors }) => (
                        <SignupForm 
                            errors={errors} 
                            classes={classes} 
                        />
                    )}
                </Formik>
            </div>
        );
    }
}