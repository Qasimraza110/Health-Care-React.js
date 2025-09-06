const About = () => {
  return (
    <section id="about" className="max-w-6xl mx-auto p-10 grid md:grid-cols-2 gap-8 items-center">
      <div className="space-y-4">
        <h2 className="text-3xl font-semibold mb-4">About Us</h2>
        <p className="text-gray-600">
          Welcome to our healthcare website, your one-stop destination for reliable and comprehensive health care information. We are committed to promoting wellness and providing valuable resources to empower you on your health journey.
        </p>
        <p className="text-gray-600">
          Explore our extensive collection of expertly written articles and guides covering a wide range of health topics. From understanding common medical conditions to tips for maintaining a healthy lifestyle, our content is designed to educate, inspire, and support you in making informed choices for your health.
        </p>
        <p className="text-gray-600">
          Discover practical health tips and lifestyle advice to optimize your physical and mental well-being. We believe that small changes can lead to significant improvements in your quality of life, and we're here to guide you on your path to a healthier and happier you.
        </p>
      </div>
      <div className="flex justify-center">
        <img src="/src/assets/about.jpeg" alt="about" className="rounded-lg max-w-sm" />
      </div>
    </section>
  );
};

export default About;
