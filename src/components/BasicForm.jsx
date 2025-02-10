import { useFormik } from "formik";
import React from "react";
import { basicSchema } from "../schemas";

const BasicForm = () => {
    const formik = useFormik({
        initialValues: {
            email: "",
            age: "",
            password: "",
            confirmedPassword: ""
        },
        validationSchema: basicSchema
    })
    console.log("formik==>",formik.values,formik.errors)
    return (
        <div>
            <h1>Basic Form</h1>
            <form onSubmit={formik.handleSubmit} >
                <input 
                    id="email"
                    type="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Enter Your Email" 
                />
                <input 
                    id="age"
                    type="age"
                    value={formik.values.age}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Enter Your Age"
                />
                <input 
                    id="password"
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Enter Your Password"
                />
                <input 
                    id="confirmedPassword"
                    type="password"
                    value={formik.values.confirmedPassword}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Confirmed Password"
                />
                <button type="submit" >submit</button>
            </form>
        </div>
    )
};

export default BasicForm;
