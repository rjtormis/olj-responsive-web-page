import about from "../assets/about.svg";

function About() {
  return (
    <div id="about" className="container mx-auto p-4 my-32 scroll-mt-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Image Section - First Column on Desktop & First on Mobile */}
        <div className="order-1">
          <img
            src={about}
            alt="About Us"
            className="w-full h-auto rounded-lg shadow-md object-cover"
          />
        </div>

        {/* Text Section - Second Column on Desktop & Second on Mobile */}
        <div className="order-2 text-center lg:text-left">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-blue-600 leading-tight">
            Get to Know Us Better
          </h2>
          <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
            We are a passionate team dedicated to delivering excellence in everything we do. Our
            mission is to provide value, build trust, and create meaningful experiences for our
            audience. Learn more about our journey and what drives us.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
