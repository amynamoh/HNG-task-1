import React from 'react'
import './contact.css'
import { useState } from "react";
import Form from "../forms/form";


const Contact = () => {
    const [values, setValues] = useState({
    Firstname: "",
    Lastname: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: "first_name",
      name: "First Name",
      className:"username",
      type: "text",
      placeholder: "Enter your first name",
      errorMessage: "First Name should be 3-16 characters and shouldn't include any special character!",
      label: "First Name",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: "last_name",
      name: "Last Name",
      className:"username",
      type: "text",
      placeholder: "Enter your last name",
      errorMessage: "Last Name should be 3-16 characters and shouldn't include any special character!",
      label: "Last Name",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: "email",
      name: "email",
      type: "email",
      placeholder: "yourname@email.com",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },   
    // {
    //   id: "message",
    //   className:"textarea",
    //   type: "textarea",
    //   placeholder: "Send me a message and I'll reply you as soon as possible...",
    //   errorMessage: "Please enter a mesage!",
    //   required: true,
    // },

  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
    
  return (
    <section id='contacts'>
        <div className="contactSection">

        
        <div className="contactHeader">
            <h4>Contact Me</h4>
            <h5>Hi there, contact me to ask me about anything you have in mind.</h5>
        </div>
            <form onSubmit={handleSubmit}>
                
                {inputs.map((input) => (
                <Form
                key={input.id}
                 {...input}
                value={values[input.name]}
                onChange={onChange}
                />
               ))}
                            
                {/* <div className="username">
                    <div>
                      <label>First Name</label>
                      <input type="text" id="first_name" name="firstname" placeholder="Enter your first name" errorMessage="First Name should be 3-16 characters and shouldn't include any special character!" pattern= "^[A-Za-z0-9]{3,16}$" required />
                    </div>
                    <div>
                      <label>Last Name</label>
                      <input type="text" id="last_name" name="lastname" placeholder="Enter your last name" errorMessage="Last Name should be 3-16 characters and shouldn't include any special character!" pattern= "^[A-Za-z0-9]{3,16}$" required />
                    </div>
                </div>
                <div>
                      <label>Email</label>
                      <input type="email" id="email" name="email" placeholder="yourname@email.com" errorMessage="It should be a valid email address!" required />
                </div> */}

                <div>
                    <textarea name="" id="message" errorMessage="please enter a message!" required placeholder="Send me a message and I'll reply you as soon as possible..." ></textarea>
                </div>
               
                <div className='checkbox'>
                  <input type="checkbox" required name="checkbox" id="" errorMessage="It should be a valid email address!"/>
                  <label for="message"><h3>You agree to providing your data to Amina who may contact you.</h3></label>
                </div>
                <button id='btn__submit'>Submit</button>             
            </form>
            </div> 
    </section>
  )
}

export default Contact