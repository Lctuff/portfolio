import React, { Component } from "react";
import emailjs from "emailjs-com";

class Contact extends Component {
  state = {};

  sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_6gbku59",
        "template_8fkl218",
        e.target,
        "qmiGoYUiF7GdQHtxs"
      )
      .then(
        (result) => {
          window.location.reload();
          console.log(e.target);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  render() {
    return (
      <div className="row">
        <div className="col-3"></div>
        <form className="contact-form row col-6 py-5" onSubmit={this.sendEmail}>
          <input type="hidden" name="contact_number" className="form-control" />
          <div className="col-6">
            <label className="text-warning">Name</label>
            <input
              type="text"
              name="from_name"
              required
              className="form-control text-bg-dark"
            />
          </div>
          <div className="col-6">
            <label className="text-warning">Email</label>
            <input
              type="email"
              name="from_email"
              required
              className="form-control  text-bg-dark"
            />
          </div>
          <div>
            <label className="text-warning">Message</label>
            <textarea
              name="html_message"
              required
              className="form-control text-bg-dark"
            />{" "}
            <button className="btn btn-warning my-3" type="submit">
              Send
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Contact;
