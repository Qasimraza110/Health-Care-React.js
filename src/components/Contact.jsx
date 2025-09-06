import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false); 

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSuccess(false);

    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      setForm({ name: "", email: "", message: "" });

      setTimeout(() => setSuccess(false), 3000);
    }, 2000);
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-primary-light to-primary/50 p-6"
    >
      <div className="w-full max-w-lg bg-white shadow-xl rounded-xl p-10">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-extrabold text-primary mb-2">Get in Touch</h2>
          <p className="text-gray-600 text-lg">
            Have questions or need assistance? Fill out the form below and we'll get back to you promptly.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="grid gap-5">
          <input
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary placeholder-gray-400"
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary placeholder-gray-400"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary h-40 resize-none placeholder-gray-400"
            required
          ></textarea>
          <button
            type="submit"
            disabled={submitting}
            className={`bg-primary text-white py-4 rounded-lg text-lg font-medium transition-all duration-300 ${
              submitting ? "opacity-50 cursor-not-allowed" : "hover:bg-primary-dark"
            }`}
          >
            {submitting ? "Sending..." : "Send Message"}
          </button>
        </form>

        
        {success && (
          <p className="text-green-600 font-semibold mt-4 text-center animate-fadeIn">
            ✅ Message sent successfully!
          </p>
        )}
      </div>
    </section>
  );
};

export default Contact;
