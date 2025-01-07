import React from "react";

function Contact() {
  return (
    <div
      id="contact"
      className="container mx-auto p-4 my-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
    >
      <div>
        <h2 className="text-center lg:text-left text-3xl lg:text-4xl font-bold mb-4 text-blue-600 leading-tight">
          Contact Us
        </h2>
        <p className=" text-center lg:text-left text-lg lg:text-xl text-gray-700 leading-relaxed">
          Have questions or want to collaborate? Reach out to us! We're always here to help. Drop us
          a message, and we'll get back to you as soon as possible.
        </p>
      </div>
      <div className="container mx-auto p-4 max-w-lg">
        <div className="border border-gray-300 rounded-lg shadow-md p-6 bg-white">
          <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">Get in Touch</h2>
          <form>
            {/* Name Input */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Email Input */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Message Input */}
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Your Message"
                rows={4}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
