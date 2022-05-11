import React, { Component } from "react";
import {
  VideoBg,
  ContContainer,
  FormWrap,
  Form,
  ContBg,
  FormInput,
  FormLabel,
  ContH1,
  ContContent,
  FormButton,
  FormMessage,
  SpanErr,
  ContWrap,
  ContCard,
} from "./ContactElems";
import Video from "../../videos/video1.mp4";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

// Form validation
const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // Validate form errors being empty
  Object.values(formErrors).forEach((val) => {
    val.length > 0 && (valid = false);
  });

  // Validate the form was filled out
  Object.values(rest).forEach((val) => {
    val === "" && (valid = false);
  });

  return valid;
};

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
      formErrors: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
    };
  }

  toastifySuccess() {
    toast.success("Form sent!", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: "submit-feedback success",
    });
  }

  toastifyFail() {
    toast.error("Form failed to send!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: "submit-feedback fail",
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if (formValid(this.state)) {
      // Handle form validation success
      const { name, email, subject, message } = this.state;

      // Set template params
      let templateParams = {
        name: name,
        email: email,
        subject: subject,
        message: message,
      };

      emailjs.send(
        "service_an6saca",
        "template_ygy2v3q",
        templateParams,
        "X2YVo6cYtlFRi3Vur"
      );

      this.toastifySuccess();
      this.resetForm();
    } else {
      // Handle form validation failure
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
      this.toastifyFail();
    }
  };

  // Function to reset form
  resetForm() {
    this.setState({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  }

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "name":
        formErrors.name = value.length < 1 ? "Please enter your name." : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "Please enter a valid email address.";
        break;
      case "subject":
        formErrors.subject = value.length < 1 ? "Please enter a subject." : "";
        break;
      case "message":
        formErrors.message = value.length < 1 ? "Please enter a message." : "";
        break;
      default:
        break;
    }
    this.setState({ formErrors, [name]: value });
  };

  render() {
    const { formErrors } = this.state;

    return (
      <ContContainer id={this.props.id}>
        <ContBg>
          <VideoBg
            playsInline
            autoPlay
            loop
            muted
            src={Video}
            type="video1/mp4"
          />
        </ContBg>
        <ContContent>
          <FormWrap>
            <Form id="contact-form" onSubmit={this.handleSubmit} noValidate>
              <ContH1>Contact Me</ContH1>
              <ContWrap>
                <ContCard>avianikova@gmail.com</ContCard>
              </ContWrap>
              <FormLabel>Name</FormLabel>
              <FormInput
                type="text"
                name="name"
                value={this.state.name}
                className={`form-control formInput ${
                  formErrors.name.length > 0 ? "error" : null
                }`}
                onChange={this.handleChange}
                placeholder="Name"
                noValidate
              ></FormInput>
              {formErrors.name.length > 0 && (
                <SpanErr className="errorMessage">{formErrors.name}</SpanErr>
              )}
              <FormLabel>Email</FormLabel>
              <FormInput
                type="email"
                name="email"
                value={this.state.email}
                className={`form-control formInput ${
                  formErrors.email.length > 0 ? "error" : null
                }`}
                onChange={this.handleChange}
                placeholder="Email"
                noValidate
              ></FormInput>
              {formErrors.email.length > 0 && (
                <SpanErr className="errorMessage">{formErrors.email}</SpanErr>
              )}
              <FormLabel>Subject</FormLabel>
              <FormInput
                type="subject"
                name="subject"
                value={this.state.subject}
                className={`form-control formInput ${
                  formErrors.subject.length > 0 ? "error" : null
                }`}
                onChange={this.handleChange}
                placeholder="Subject"
                noValidate
              ></FormInput>
              {formErrors.subject.length > 0 && (
                <SpanErr className="errorMessage">{formErrors.subject}</SpanErr>
              )}
              <FormLabel>Message</FormLabel>
              <FormMessage
                name="message"
                value={this.state.message}
                className={`form-control formInput ${
                  formErrors.message.length > 0 ? "error" : null
                }`}
                onChange={this.handleChange}
                placeholder="Message"
                noValidate
              ></FormMessage>
              {formErrors.message.length > 0 && (
                <SpanErr className="errorMessage">{formErrors.message}</SpanErr>
              )}
              <FormButton onSubmit={this.handleSubmit}>Send Message</FormButton>
            </Form>
          </FormWrap>
          <ToastContainer />
        </ContContent>
      </ContContainer>
    );
  }
}

export default Contact;
