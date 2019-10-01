import './Contact.css'
import React from 'react'
import Button from 'react-bootstrap/Button'
const ContactForm = (props) => {
  return (

    <div className="form-address" id="contact">
      <form className="contact-form" onSubmit={props.handleSubmit}><p className="contact-us">Contact Us</p>
        <input className="input" type="text" name="name" onChange={props.handleChange} placeholder="Name" />
        <input className="input" type="text" name="Email" onChange={props.handleChange}
          placeholder="Email" />
        <input className="input" type="text" name="" onChange={props.handleChange} placeholder="What's on your mind?" />
        <Button variant="outline-dark">SUMBIT</Button>
      </form>
      <div className="address">
        <p className="bold">Bourne is located in
            <br />Brooklyn, NY 11238,
            <br />(718) 000-0000
            </p></div>
    </div>

  )
}

export default ContactForm