import { FaLocationDot, FaFingerprint, FaEnvelope } from "react-icons/fa6";
import { FaWhatsapp, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black text-white lg:px-20 lg:pt-10 p-5">
      <div className="flex flex-col md:flex-row justify-between">
        <div>
          <p className="flex items-center gap-2">
            <FaLocationDot className="text-green-500" />
            Registered Office: WeWork Salarpuria Magnificia, Tin Factory, 78,
            Old Madras Road, Dooravani Nagar, Bengaluru – 560016 India
          </p>
          <p className="flex items-center gap-2">
            <FaLocationDot className="text-green-500" />
            Marketing Office: 3rd Floor, OYO Workflo, Tin Factory, Old Madras
            Road, Dooravani Nagar, Bengaluru – 560016 India
          </p>
          <p className="flex items-center gap-2">
            <FaFingerprint className="text-green-500" />
            CIN: U62013KA2023PTC179278 | GSTN: 29AAKCK5466D1Z8
          </p>
          <p className="flex items-center gap-2">
            <FaEnvelope className="text-green-500" />
            <a href="mailto:contactus@krissaco.com" className="hover:underline">
              contactus@krissaco.com
            </a>
          </p>
          <p className="flex items-center gap-2">
            <FaWhatsapp className="text-green-500" />
            9731423166
          </p>
        </div>
        <div className="flex flex-col justify-end items-end">
          <div className="flex gap-4 mt-4 md:mt-0">
            <a
              href="https://www.linkedin.com/company/koyya-enterprises-private-limited"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-blue-500 text-2xl hover:text-blue-700" />
            </a>
            <a
              href="https://www.instagram.com/koyya.enterprises/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-pink-500 text-2xl hover:text-pink-700" />
            </a>
            <a
              href="https://x.com/koyyaofficial"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-blue-400 text-2xl hover:text-blue-600" />
            </a>
          </div>
          <div className="text-end mt-5 text-blue-500">
            <a
              href="https://www.koyya.in"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              https://www.koyya.com
            </a>
            <br />
            <a href="mailto:contactus@koyya.in" className="hover:underline">
              contactus@koyya.in
            </a>
          </div>
        </div>
      </div>

      <div className="text-center pt-5">
        <p>
          Krissaco is an Agritech Business Unit of Koyya Enterprises Private
          Limited, Bengaluru
        </p>
        <p>&copy;2025, Koyya Enterprises Private Limited</p>
      </div>
    </div>
  );
};

export default Footer;
