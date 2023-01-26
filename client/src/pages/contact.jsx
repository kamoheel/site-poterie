import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const[errors, setErrors]=useState("");
  const[email, setEmail]=useState("");
  const[name, setName]=useState("");
  const[message, setMessage]=useState("");
  const[messageSent, setMessageSent]=useState(false);
  const[sendingError, setSendingError]=useState(false);

  const regexEmail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const regexName =
    /^[0-9a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
    const regexMessage =
    /^[0-9a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð .'?!,@$#-_:\n\r]+$/u;

  const handleNameInput = (e) => {
    setName(e.target.value);
    if (regexName.test(e.target.value) || e.target.value.length === 0) {
      setErrors({ name: ""});
    } else {
      setErrors({ ...errors, name: "Veuillez entrer un nom valide"});
    }
  }

  const handleEmailInput = (e) => {
    setEmail(e.target.value);
    if (regexEmail.test(e.target.value) || e.target.value.length === 0) {
      setErrors({ email: ""});
    } else {
      setErrors({ ...errors, email: "Veuillez entrer un email valide"});
    }
  }

  const handleMessageInput = (e) => {
    setMessage(e.target.value);
    if (regexMessage.test(e.target.value) || e.target.value.length === 0) {
      setErrors({ message: ""});
    } else {
      setErrors({ ...errors, message: "Veuillez entrer un message valide"});
    }
  }

  const handleSendForm = (e) => {
    e.preventDefault();
    if (
      !regexName.test(name) ||
            !regexEmail.test(email) ||
            !regexMessage.test(message) 
    ) {
      return;
    } else {
      emailjs.sendForm(`${process.env.REACT_APP_SERVICE_ID}`, `${process.env.REACT_APP_TEMPLATE_ID}`, form.current, `${process.env.REACT_APP_PUBLIC_KEY}`)
        .then(() => {
          setMessageSent(true);
          setName("");
          setEmail("");
          setMessage(""); 
          window.scrollTo(0, 0);
        })
        .catch(() => {
          setSendingError(true);
        });
    } 
  }

  return ( 
    <section className="contact-form">
      <p className={messageSent ? "confirmation-message" : "hidden"}>Votre message a bien été envoyé à notre équipe, nous vous feront un retour dès que possible!</p>
      <p className={sendingError ? "error-message" : "hidden"}>Une erreur est survenue, veuillez réessayer ou bien nous envoyer directement un mail à <a href="mailto:atelier.terre.carbonne22@gmail.com">atelier.terre.carbonne22@gmail.com</a>.</p>
      <h2>Contactez-nous</h2>
      
      <p>Vous pouvez nous envoyer un email à <a href="mailto:atelier.terre.carbonne22@gmail.com">atelier.terre.carbonne22@gmail.com</a> ou remplir ce formulaire de contact:</p>
      
      <form className="form" ref={form} onSubmit={handleSendForm}>
        <label htmlFor="username">Nom</label>
        <input type="text" name="user_name" id="username" value={name} onChange={handleNameInput} required/>
        <div className='name error'>{errors.name}</div>
        <label htmlFor="email">Email</label>
        <input type="email" name="user_email" id="email" value={email} onChange={handleEmailInput} required/>
        <div className='email error'>{errors.email}</div>
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" value={message} onChange={handleMessageInput} required/>
        <div className='message error'>{errors.message}</div>
        <input type="submit" value="Send" className="send-button"/>
      </form>
    </section> 
  );
}
 
export default Contact;