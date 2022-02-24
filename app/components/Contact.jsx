import Joi from "joi";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "emailjs-com";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useRef } from "react";

import Loader from "./Loader";

const Contact = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [isCheckedArgeement, setIsCheckedArgeement] = useState(false);

  const [isInCorrectName, setIsInCorrectName] = useState(false);
  const [isInCorrectEmail, setIsInCorrectEmail] = useState(false);
  const [isInCorrectMessage, setIsInCorrectMessage] = useState(false);
  const [isInCorrectVerified, setIsInCorrectVerified] = useState(false);
  const [isInCorrectArgeement, setIsInCorrectArgeement] = useState(false);

  const [isLoaderVisible, setIsLoaderVisible] = useState(false);
  const [isFormSent, setIsFormSent] = useState(false);
  const [isFormSentCorrect, setIsFormSentCorrect] = useState();

  const reRef = useRef();

  const schemaEmail = Joi.object({
    email: Joi.string()
      .min(4)
      .required()
      .email({ tlds: { allow: false } }),
  });

  const handleInput = (value, type) => {
    switch (type) {
      case "name":
        setName(value);
        setIsInCorrectName(false);
        break;
      case "email":
        setEmail(value);
        setIsInCorrectEmail(false);
        break;
      case "number":
        setNumber(value);
        break;
      case "message":
        setMessage(value);
        setIsInCorrectMessage(false);
        break;
      case "argeement":
        setIsCheckedArgeement(value);
        setIsInCorrectArgeement(false);
        break;
    }
  };

  const handleCorrectVerified = (value) => {
    if (value) {
      setIsInCorrectVerified(false);
    }
  };

  const checkCorrectForm = () => {
    let isCorrectForm = true;
    if (name.length < 1) {
      setIsInCorrectName(true);
      isCorrectForm = false;
    }
    const { error: errorEmail } = schemaEmail.validate({ email: email });
    if (email.length < 1) {
      setIsInCorrectEmail(true);
      isCorrectForm = false;
    } else if (errorEmail !== undefined) {
      setIsInCorrectEmail("E-mail jest nieprawidłowy.");
      isCorrectForm = false;
    }
    if (message.length < 1) {
      setIsInCorrectMessage(true);
      isCorrectForm = false;
    }
    const verifiedValue = reRef.current.getValue();
    if (!verifiedValue) {
      setIsInCorrectVerified(true);
      isCorrectForm = false;
    }
    if (!isCheckedArgeement) {
      setIsInCorrectArgeement(true);
      isCorrectForm = false;
    }
    return isCorrectForm;
  };

  const sendForm = async (e) => {
    e.preventDefault();
    if (!checkCorrectForm()) {
      return;
    }
    const templateParams = {
      from_name: name,
      from_email: email,
      from_number: number,
      message,
    };
    setIsLoaderVisible(true);
    await emailjs
      .send(
        "gmail",
        process.env.EMAILJS_TEMPLATE,
        templateParams,
        process.env.EMAILJS_USER_ID
      )
      .then(
        (response) => {
          setIsFormSentCorrect(true);
        },
        (err) => {
          setIsFormSentCorrect(false);
        }
      );
    reRef.current.reset();
    setIsLoaderVisible(false);
    setIsFormSent(true);
    setName("");
    setEmail("");
    setNumber("");
    setMessage("");
    setIsCheckedArgeement(false);
  };

  return (
    <section className="contact">
      <header className="contact__header">
        <h2>Skontaktuj się z nami!</h2>
        <p>Masz jakieś pytania?</p>
      </header>
      <div className="contact__form form">
        {!isFormSent && (
          <form onSubmit={(e) => sendForm(e)}>
            <label>
              <input
                onInput={(e) => handleInput(e.target.value, e.target.name)}
                style={{
                  color: isInCorrectName ? "rgb(230, 0, 0)" : null,
                  borderBottom: isInCorrectName
                    ? "1px solid rgb(230, 0, 0)"
                    : null,
                }}
                name="name"
                placeholder=" "
                type="text"
                value={name}
                autoCorrect="off"
              ></input>
              <span
                style={{ color: isInCorrectName ? "rgb(230, 0, 0)" : null }}
              >
                Imię
              </span>
              {isInCorrectName && (
                <div className="form__info">Imie jest wymagane.</div>
              )}
            </label>
            <label>
              <input
                onInput={(e) => handleInput(e.target.value, e.target.name)}
                style={{
                  color: isInCorrectEmail ? "rgb(230, 0, 0)" : null,
                  borderBottom: isInCorrectEmail
                    ? "1px solid rgb(230, 0, 0)"
                    : null,
                }}
                name="email"
                placeholder=" "
                type="text"
                value={email}
                autoCorrect="off"
              ></input>
              <span
                style={{ color: isInCorrectEmail ? "rgb(230, 0, 0)" : null }}
              >
                E-mail
              </span>
              {isInCorrectEmail && (
                <div className="form__info">
                  {typeof isInCorrectEmail === "string"
                    ? `${isInCorrectEmail}`
                    : "E-mail jest wymagany."}
                </div>
              )}
            </label>
            <label>
              <input
                onInput={(e) => handleInput(e.target.value, e.target.name)}
                name="number"
                placeholder=" "
                type="text"
                value={number}
                autoCorrect="off"
              ></input>
              <span>Numer telefonu</span>
            </label>
            <label>
              <input
                onInput={(e) => handleInput(e.target.value, e.target.name)}
                style={{
                  color: isInCorrectMessage ? "rgb(230, 0, 0)" : null,
                  borderBottom: isInCorrectMessage
                    ? "1px solid rgb(230, 0, 0)"
                    : null,
                }}
                name="message"
                placeholder=" "
                type="text"
                value={message}
                autoCorrect="off"
              ></input>
              <span
                style={{ color: isInCorrectMessage ? "rgb(230, 0, 0)" : null }}
              >
                Wiadomość
              </span>
              {isInCorrectMessage && (
                <div className="form__info">Napisz wiadomość.</div>
              )}
            </label>
            <div className="form__captcha">
              <div>
                <ReCAPTCHA
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                  ref={reRef}
                  onChange={handleCorrectVerified}
                />
              </div>
              {isInCorrectVerified && (
                <div className="form__info">
                  Potwierdź, że nie jesteś robotem.
                </div>
              )}
            </div>
            <div className="form__bottom">
              <div className="form__argeement">
                <label>
                  <div>
                    <input
                      onChange={(e) =>
                        handleInput(e.target.checked, e.target.name)
                      }
                      name="argeement"
                      type="checkbox"
                      checked={isCheckedArgeement}
                      autoCorrect="off"
                    ></input>
                    <span>
                      <FontAwesomeIcon icon={faCheck} />
                    </span>
                  </div>
                  <div>
                    Wyrażam zgodę na przetwarzanie moich danych osobowych
                    zgodnie z ustawą o ochronie danych osobowych w związku z
                    wysłaniem zapytania przez formularz kontaktowy. Podanie
                    danych jest dobrowolne, ale niezbędne do przetworzenia
                    zapytania
                  </div>
                </label>
                {isInCorrectArgeement && (
                  <div className="form__info">Zgoda jest wymagana.</div>
                )}
              </div>
              <button className="form__submit" type="submit">
                Wyślij
              </button>
            </div>
            {isLoaderVisible && <Loader className="form__loader"></Loader>}
          </form>
        )}
        {isFormSentCorrect && (
          <div className="form__score form__score--correct">
            Wiadomość została poprawnie wysłana!
          </div>
        )}
        {isFormSentCorrect === false && (
          <div className="form__score--wrong">
            Wystąpił nieoczekiwany błąd. Spróbuj ponownie później.
          </div>
        )}
        <div className="form__contact">
          <a>
            <FontAwesomeIcon icon={faPhone} />
            tel. +48 811 170 170
          </a>
          <a>
            <FontAwesomeIcon icon={faEnvelope} />
            kontakt@nowa-farma.pl
          </a>
          <a>
            <FontAwesomeIcon icon={faLocationDot} />
            ul. Połczyńska 53,<br></br>01-336 Warszawa
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
