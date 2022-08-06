import React, { useEffect, useRef, useState } from 'react';
import './Contact.scss';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import emailjs from '@emailjs/browser';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { FallingLines } from 'react-loader-spinner';

const Contact = () => {
  const [lettersClass, setLettersClass] = useState('text-animate');

  const nameArray = ['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e'];

  useEffect(() => {
    setTimeout(() => {
      setLettersClass('text-animate-hover');
    }, 3000);
  }, []);

  // Email js
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_0jpeado',
        'template_n5eucjn',
        form.current,
        'TMRDbiqAgqw8f822U'
      )
      .then(
        () => {
          alert('Message successfully sent!');
          window.location.reload(false);
        },
        () => {
          alert('Failed to send the message, please try again');
        }
      );
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              lettersClass={lettersClass}
              strArray={nameArray}
              idx={15}
            />
          </h1>
          <p>
            I am interested in freelance opportunities – especially ambitious or
            large projects. However, if you have other request or question,
            don’t hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    name="message"
                    placeholder="Message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="btn" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>

        <div className="info-map">
          Keroles Nabil
          <br />
          Egypt,
          <br />
          El-Minya
          <br />
          <span>+20 1069597559</span>
        </div>

        <div className="map-wrap">
          <MapContainer
            center={[28.092634578005324, 30.754476785659794]}
            zoom={14}
            scrollWheelZoom={false}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[28.092634578005324, 30.754476785659794]}>
              <Popup>
                <p className="popup">
                  Keroles lives here, come over for a cup of coffee 😊
                </p>
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <div className="space"></div>
      <div class="loader-active">
        <FallingLines
          color="#ffa500"
          width="100"
          visible={true}
          ariaLabel="falling-lines-loading"
        />
      </div>
    </>
  );
};

export default Contact;
