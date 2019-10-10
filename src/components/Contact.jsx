import React from 'react';
import axios from 'axios';
import './Contact.css';
import Button from 'react-bootstrap/Button';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "" };
  }
  handleForm = e => {
    axios.post(
      "https://formcarry.com/s/SSb8VgBqK1e",
      this.state,
      { headers: { "Accept": "application/json" } }
    )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error)
      });
    // e.preventDefault();
    // alert("Message Sent")
  }
  handleFields = e => this.setState({
    [e.target.name]: e.target.value
  })

  render() {
    return (

      <div className="form-address" id="contact">
        <form className="contact-form" onSubmit={this.handleForm}><p className="contact-us">Contact Us</p>
          <input className="input" type="text" name="name" onChange={this.handleFields} placeholder="Name" />
          <input className="input" type="text" name="email" onChange={this.handleFields}
            placeholder="Email" />
          <input className="input" type="" name="message" onChange={this.handleFields} placeholder="What's on your mind?" />
          <Button type="submit">SUMBIT</Button>
        </form>
        <div className="address">
          <h4>Contact us about designing favors for your next party.</h4>
          <p>events@Bourne.com</p>
          <p className="bold">Bourne is located in
            <br />Brooklyn, NY 11238,
            <br />(718) 000-0000
            </p></div>
      </div>

    )
  }
}
export default ContactForm