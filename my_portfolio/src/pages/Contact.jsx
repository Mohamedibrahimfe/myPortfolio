import React from "react";
import "../style/Contact.css";
import { useState } from "react";
import data from "../data/about.json";
const Contact = () => {
  // const [form, setForm] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // });
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  // };
  console.log(data);
  return (
    <section className="contact" id="contact">
      <h1 className="title contact-title"> Contact Me</h1>
      <div class="container my-contact ">
        <div class="my-contact-info">
          <h1 className="contact-link">
            <i className="bi bi-envelope"></i> E-mail:
            {data.data.contact.email}
          </h1>
          <h1 className="contact-link">
            <i className="bi bi-telephone"></i> phone:{data.data.contact.phone}
          </h1>
          <h1>
            <a className="contact-link" href="https://wa.me/201032484997">
              <i className="bi bi-whatsapp"></i> Start A chat with me:WhatsApp
            </a>
          </h1>
        </div>
        <a
          href="https://wa.me/201032484997"
          border="0"
          style={{ cursor: "pointer", display: "block" }}
        >
          <img
            src="https://cdn.me-qr.com/qr/130278136.png?v=1729008130"
            alt=""
          />
        </a>
      </div>
    </section>
  );
};

export default Contact;
