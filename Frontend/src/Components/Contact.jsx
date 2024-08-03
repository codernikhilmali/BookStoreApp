import { Link } from 'react-router-dom';
import contact from '../../public/contact.jpg';

const Contact = () => {
  return (
    <div className="container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10 items-center">
      <div className="order-2 md:order-1 w-full md:w-1/2 flex justify-center md:justify-end">
        <img src={contact} className="w-92 h-92" alt="right" />
      </div>
      <div className="order-1 md:order-2 w-full md:w-1/2 mt-8 md:mt-24 md:ml-20">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
          <h3 className="text-center text-6xl font-semibold mb-6" style={{ fontFamily:'sans-serif' }}>Talk to Us</h3>
          <div className="mb-6">
            <input
              id="nameid"
              type="text"
              placeholder="Name"
              className="w-full px-4 py-3 border rounded-md outline-none text-lg hover:border-pink-500 hover:border-4 transition duration-300"
            />
          </div>
          <div className="mb-6">
            <input
              id="email"
              type="email"
              placeholder="E-mail"
              className="w-full px-4 py-3 border rounded-md outline-none text-lg hover:border-pink-500 hover:border-4 transition duration-300"
            />
          </div>
          <div className="mb-6">
            <textarea
              id="message"
              placeholder="Message"
              className="w-full px-4 py-3 border rounded-md outline-none h-40 text-lg hover:border-pink-500 hover:border-4 transition duration-300"
            ></textarea>
          </div>
          <div className="text-center">
            <Link to={"/"}>
            <button className="bg-pink-500 text-white px-8 py-3 rounded-md text-lg">
              Send message
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
