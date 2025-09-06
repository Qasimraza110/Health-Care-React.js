import { useState } from "react";

const Header = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    phone: "",
  });
  const [submitting, setSubmitting] = useState(false); // submission state
  const [success, setSuccess] = useState(false); // success message

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSuccess(false);

    // Simulate API request
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      setFormData({ firstName: "", lastName: "", address: "", phone: "" });
    }, 2000);
  };

  return (
    <header className="bg-[url('/src/assets/header.jpg')] bg-cover bg-center relative min-h-[80vh] flex items-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-teal-500/60"></div>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 p-6 md:p-10">
        {/* Left: Text */}
        <div className="text-white max-w-lg text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Providing an Exceptional Patient Experience
          </h1>
          <p className="mb-6">
            Welcome, where exceptional patient experiences are our priority.
          </p>
          <button className="bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600 transition">
            See Services
          </button>
        </div>

        {/* Right: Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm grid gap-4 relative"
        >
          <h4 className="text-teal-600 text-xl font-bold mb-2">Book Now</h4>
          <input
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-600"
            required
          />
          <input
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-600"
            required
          />
          <input
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-600"
            required
          />
          <input
            name="phone"
            placeholder="Phone No."
            value={formData.phone}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-600"
            required
          />
          <button
            type="submit"
            disabled={submitting}
            className={`bg-orange-500 text-white py-3 rounded transition font-medium ${
              submitting ? "opacity-50 cursor-not-allowed" : "hover:bg-orange-600"
            }`}
          >
            {submitting ? "Booking..." : "Book Appointment"}
          </button>

          {/* Success message */}
          {success && (
            <p className="text-green-600 font-medium mt-2 text-center">
              Appointment booked successfully!
            </p>
          )}
        </form>
      </div>
    </header>
  );
};

export default Header;
