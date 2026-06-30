import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    emailjs
      .sendForm(
        "service_wg5mjba", // e.g. service_xxxxxxx
        "template_4jcnwer", // e.g. template_xxxxxxx
        form.current,
        {
          publicKey: "emZRRpc_3TNMo6VIx",
        }
      )
      .then(
        () => {
          setStatus("✅ Email sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error(error);
          setStatus("❌ Failed to send email.");
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section className="max-w-2xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold mb-6">Contact Us</h2>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="space-y-5 bg-white shadow-lg rounded-xl p-6"
      >
        {/* Hidden Time Field */}
        <input
          type="hidden"
          name="time"
          value={new Date().toLocaleString()}
        />

        <div>
          <label className="block mb-2 font-medium">Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">Subject</label>
          <input
            type="text"
            name="title"
            required
            className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Subject"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">Message</label>
          <textarea
            name="message"
            rows="6"
            required
            className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Write your message..."
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition disabled:opacity-50"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {status && (
          <p className="text-center font-medium mt-2">{status}</p>
        )}
      </form>
    </section>
  );
};

export default ContactUs;