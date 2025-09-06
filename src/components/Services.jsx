import { RiMicroscopeLine, RiMentalHealthLine, RiHospitalLine } from "react-icons/ri";

const Services = () => {
  const services = [
    {
      icon: <RiMicroscopeLine />,
      title: "Laboratory Test",
      desc: "Accurate Diagnostics, Swift Results."
    },
    {
      icon: <RiMentalHealthLine />,
      title: "Health Check",
      desc: "Proactive health assessments for your well-being."
    },
    {
      icon: <RiHospitalLine />,
      title: "General Dentistry",
      desc: "Comprehensive oral care for a healthy smile."
    },
  ];

  return (
    <section id="service" className="max-w-6xl mx-auto p-10">
      <h2 className="text-3xl font-semibold mb-6">Our Special Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className="text-center p-6 rounded-lg shadow hover:shadow-lg transition">
            <div className="text-primary text-4xl mb-3">{service.icon}</div>
            <h4 className="font-semibold mb-2">{service.title}</h4>
            <p className="text-gray-500">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
