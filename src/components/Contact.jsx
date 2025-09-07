import React from "react";
import toast from "react-hot-toast";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "90a05928-1224-4d22-ab34-612a5c1b2c35");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Thank you for your message");
        event.target.reset();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
         toast.error(error.message);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 md:px-36  backdrop-blur-md text-white"
    >
      {/* العنوان */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold uppercase text-[var(--color-secondary)] mb-2">
          Contact Me
        </h2>
        <div className="w-24 h-1 bg-[var(--color-secondary)] mx-auto"></div>
      </div>

      {/* النموذج */}
      <form onSubmit={onSubmit} className="max-w-2xl mx-auto space-y-6">
        <div className="flex gap-6 flex-col md:flex-row ">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-3 rounded bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)]"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            name="email"
            className="w-full p-3 rounded bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)]"
            required
          />
        </div>
        <textarea
          placeholder="Your Message"
          name="message"
          className="w-full p-3 h-70 rounded bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)]"
          required
        ></textarea>
        <button
          type="submit"
          className="px-6 py-3 mx-auto block cursor-pointer bg-[var(--color-secondary)] text-white font-semibold rounded hover:bg-opacity-80 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
