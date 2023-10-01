import { useRef, useState } from "react";
import ThankYou from "./ThankYou";
import emailjs from "@emailjs/browser";

const Form = ({ nameRef }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    message: "",
  });

  const form = useRef();

  const handleNameChange = (e) => {
    setUsername(e.target.value);
    setErrors((prevState) => ({ ...prevState, username: "" }));
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setErrors((prevState) => ({ ...prevState, email: "" }));
  };
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    setErrors((prevState) => ({ ...prevState, message: "" }));
  };

  const sendMail = (e) => {
    e.preventDefault();

    if (!username.trim()) {
      setErrors((prevState) => ({
        ...prevState,
        username: "Name is required !!",
      }));
    }
    if (!email.trim()) {
      setErrors((prevState) => ({
        ...prevState,
        email: "Email is required !!",
      }));
    }
    if (!message.trim()) {
      setErrors((prevState) => ({
        ...prevState,
        message: "Message is required !!",
      }));
    }
    if (!username.trim() || !email.trim() || !message.trim()) {
      setErrors({
        username: "Name is required !!",
        email: "Email is required !!",
        message: "Message is required !!",
      });
      setIsDisabled(true);
      return;
    } 

    emailjs.send("service_xjo2l2v","template_7pquujl",{
      to_name: "Dipesh Yadav",
      from_name: username,
      message: message,
      from_email:email ,
      reply_to: email,
      } , 
      "C4KKtrWEfqXACsNiR")
      .then(
        (result) => {
          console.log(email );
          console.log(result.text);
          console.log("message sent");
          setIsEmailSent(true);
          setIsDisabled(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setEmail("");
    setUsername("");
    setMessage("");
  };

  if (isEmailSent) {
    return (
      <div className="center-div">
        <ThankYou eemail={email}/>
      </div>
    );
  }

  return (
    <form className="my-form" ref={form} onSubmit={sendMail}>
      <div className=" alt-text-yellow Message-me">
          <h1>Contact Me</h1>
      </div>
      <div className="form-div">
        <input
          type="text"
          name="user_name"
          id="name"
          value={username}
          onChange={handleNameChange}
          ref={nameRef}
          required
        />
        <label htmlFor="name"> Name </label>
        {errors.username && (
          <small className="error_message"> {errors.username} </small>
        )}
      </div>
      <div className="form-div">
        <input
          type="email"
          name="user_email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <label htmlFor="email"> Email</label>
        {errors.email && (
          <small className="error_message"> {errors.email} </small>
        )}
      </div>
      <div className="form-div">
        <textarea
          name="message"
          id="message"
          value={message}
          onChange={handleMessageChange}
          spellCheck
          required
        />
        <label htmlFor="message"> Message</label>
        {errors.message && (
          <small className="error_message"> {errors.message} </small>
        )}
      </div>

      <input
        type="submit"
        disabled={isDisabled}
        value="Send"
        className="submit-btn"
      />
    </form>
  );
};

export default Form;
