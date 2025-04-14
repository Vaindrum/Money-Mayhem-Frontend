import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-black text-gray-400 text-center py-6">
        <div className="flex justify-center space-x-6 ">
          <a href="https://instagram.com/vaindrum" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <FaInstagram size={24} />
          </a>
          <a href="https://www.linkedin.com/in/vaibhav-raj-610125275" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/Vaindrum" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <FaGithub size={24} />
          </a>
        </div>
        <p className="text-sm">&copy; Vaibhav Raj & Dharul Mittal {new Date().getFullYear()} MoneyMayhem. All rights reserved.</p>
      </footer>
    );
  };
  
  export default Footer;
  