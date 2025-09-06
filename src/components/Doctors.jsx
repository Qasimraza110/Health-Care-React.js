import { FaUserMd } from "react-icons/fa";


const doctorsData = [
  {
    name: "Dr. Emily Smith",
    specialty: "Cardiologist",
    img: "/doctor-3.jpg", 
  },
  {
    name: "Dr. James Anderson",
    specialty: "Neurosurgeon",
    img: "/doctor-2.jpg",
  },
  {
    name: "Dr. Michael Lee",
    specialty: "Dermatologist",
    img: "/doctor-1.jpg",
  },
];

const Doctors = () => {
  return (
    <section id="doctors" className="max-w-6xl mx-auto py-20 px-4">
      <h2 className="text-3xl font-semibold mb-10 text-center">Our Special Doctors</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {doctorsData.map((doctor, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col items-center"
          >
            <div className="w-32 h-32 mb-4 rounded-full overflow-hidden border-4 border-green-500">
              {doctor.img ? (
                <img
                  src={doctor.img}
                  alt={doctor.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-6xl text-green-500 flex items-center justify-center h-full">
                  <FaUserMd />
                </span>
              )}
            </div>
            <h4 className="font-semibold text-xl mb-2">{doctor.name}</h4>
            <p className="text-gray-500">{doctor.specialty}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Doctors;

