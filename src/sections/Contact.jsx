import { useTranslation } from "react-i18next";
import { useMemo, useState } from "react";
import ClassicInput from "../components/ClassicInput";
import "../styles/contact.css";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default function Contact() {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false,
  });
  const [status, setStatus] = useState({ state: "idle", text: "" });

  const errors = useMemo(() => {
    const e = {};
    if (!name.trim()) e.name = "Unesite ime/naziv firme";
    if (!email.trim()) e.email = "Unesite email";
    else if (!/^\S+@\S+\.\S+$/.test(email)) e.email = "Unesite validan email";
    if (!message.trim()) e.message = "Unesite poruku";
    else if (message.trim().length < 10)
      e.message = "Poruka je prekratka (min 10 karaktera)";
    return e;
  }, [name, email, message]);

  const hasErrors = Object.keys(errors).length > 0;

  async function handleSubmit(e) {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });

    if (hasErrors) return;

    try {
      setStatus({ state: "sending", text: "Slanje..." });

      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contact",
          name,
          email,
          message,
          source: "portfolio",
        }),
      });

      setStatus({ state: "success", text: "Hvala! Poruka je poslata." });
      setName("");
      setEmail("");
      setMessage("");
      setTouched({ name: false, email: false, message: false });
    } catch (err) {
      setStatus({
        state: "error",
        text: "Greška pri slanju. Pokušajte ponovo.",
      });
    }
  }

  return (
    <div className="contact_layout">
      <h1>{t("Contact.naslov") ?? "Contact"}</h1>
      <form
        className="contact_form"
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        noValidate
      >
        {/* Netlify hidden input */}
        <input type="hidden" name="form-name" value="contact" />
        <p style={{ display: "none" }}>
          <label>
            Don’t fill this out: <input name="bot-field" />
          </label>
        </p>
        {/* Netlify hidden input */}
        <div className="contact_row_2">
          <ClassicInput
            label="Name"
            name={"name"}
            placeholder="Enter your name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={touched.name && !!errors.name}
            errorMessage={touched.name ? errors.name : ""}
          />

          <ClassicInput
            label="Email"
            placeholder="Enter your email"
            name={"email"}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={touched.email && !!errors.email}
            errorMessage={touched.email ? errors.email : ""}
          />
        </div>

        <ClassicInput
          label="Message"
          placeholder="Write your message..."
          value={message}
          name={"message"}
          onChange={(e) => setMessage(e.target.value)}
          error={touched.message && !!errors.message}
          errorMessage={touched.message ? errors.message : ""}
          multiline
          rows={6}
        />

        <button
          className="contact_button"
          type="submit"
          disabled={status.state === "sending"}
        >
          {status.state === "sending" ? "Sending..." : "Submit"}
        </button>

        {status.state !== "idle" && (
          <p className={`contact_status ${status.state}`}>{status.text}</p>
        )}
      </form>
    </div>
  );
}
