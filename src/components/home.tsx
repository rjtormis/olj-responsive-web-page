import innovation from "../assets/innovative.svg"; // Ensure the image path is correct

function Home() {
  return (
    <div id="home" className="container mx-auto p-4 my-32 scroll-mt-20 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Image Section - Appears First on Mobile */}
        <div className="order-1 lg:order-2">
          <img
            src={innovation}
            alt="Innovation"
            className="w-full h-auto rounded-lg shadow-md object-cover"
          />
        </div>

        {/* Text Section - Appears Second on Mobile */}
        <div className="order-2 lg:order-1 text-center lg:text-left">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-blue-600 leading-tight">
            Welcome to Our Space
          </h2>
          <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
            Explore a world of innovation, creativity, and solutions tailored just for you. Whether
            you're here to learn, collaborate, or connect, we've got you covered.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
