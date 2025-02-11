import { useRef, useState } from "react";
import emailjs from "emailjs-com";
// import "../../src/App.css";

const Contact = () => {
  const form = useRef(null);
  const userName = useRef(null);
  const emailAddress = useRef(null);
  const messageRef = useRef(null);
  const [loading, setLoading] = useState(false);

  // const handleChange = (e) => {
  //   setForm({ ...form, [e.target.name]: e.target.value });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm("SERVICE ID", "TEMPLATE ID", form.current, "PUBLIC ID")
      .then(
        // Simulate API request
        setTimeout(() => {
          alert("Message sent successfully!");
          form.current.reset();
          setLoading(false);
        }, 1500)
      )
      .catch((error) => {
        console.log("FAILED...", error.text);
      });
  };

  return (
    <section className="bg-slate-900 text-white py-16 px-4 sm:px-8">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-100">
        Contact Me
      </h2>
      <form
        ref={form}
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-slate-700 p-8 rounded-lg shadow-lg"
      >
        <div className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            ref={userName}
            className="w-full p-3 bg-slate-600 border border-gray-500 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            ref={emailAddress}
            className="w-full p-3 bg-slate-600 border border-gray-500 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            ref={messageRef}
            className="w-full p-3 bg-slate-600 border border-gray-500 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={4}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full mt-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
};

export default Contact;
