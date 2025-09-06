import { RiHandHeartLine, RiTruckLine, RiHospitalLine } from "react-icons/ri";

const WhyUs = () => {
  const features = [
    {
      icon: <RiHandHeartLine />,
      title: "Intensive Care",
      desc: "Our Intensive Care Unit is equipped with advanced technology and staffed by team of professionals",
    },
    {
      icon: <RiTruckLine />,
      title: "Free Ambulance Car",
      desc: "A compassionate initiative to prioritize your health and well-being without any financial burden.",
    },
    {
      icon: <RiHospitalLine />,
      title: "Medical and Surgical",
      desc: "Our Medical and Surgical services offer advanced healthcare solutions to address medical needs.",
    },
  ];

  return (
    <section id="blog" className="max-w-6xl mx-auto p-10 grid md:grid-cols-2 gap-8 items-center">
      <div className="flex justify-center">
        <img src="/src/assets/choose-us.jpg" alt="why choose us" className="rounded-lg max-w-sm" />
      </div>
      <div className="space-y-6">
        <h2 className="text-3xl font-semibold mb-4">Why Choose Us</h2>
        <p className="text-gray-600">
          With a steadfast commitment to your well-being, our team of highly trained healthcare professionals ensures that you receive nothing short of exceptional patient experiences.
        </p>
        <div className="grid gap-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="text-primary text-4xl">{feature.icon}</div>
              <div>
                <h4 className="font-semibold text-lg">{feature.title}</h4>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
