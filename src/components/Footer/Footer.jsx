import { FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa";
const Footer = () => {
    return (
       <section className="bg-gray-900">
         <footer className="footer p-10 py-24  text-gray-200 mt-24">
        <div>
          <span className="footer-title">Services</span> 
          <a className="link link-hover">Cooking</a> 
          <a className="link link-hover">Tutorial</a> 
          <a className="link link-hover">Marketing</a> 
          <a className="link link-hover">Advertisement</a>
        </div> 
        <div>
          <span className="footer-title">Company</span> 
          <a className="link link-hover">About us</a> 
          <a className="link link-hover">Contact</a> 
          <a className="link link-hover">Jobs</a> 
        </div> 
        <div>
          <span className="footer-title">Legal</span> 
          <a className="link link-hover">Terms of use</a> 
          <a className="link link-hover">Privacy policy</a> 
          <a className="link link-hover">Cookie policy</a>
        </div> 
        <div>
        <span className="footer-title">Social Links</span> 
          <div className="flex gap-5 text-xl items-center">
          <a className="link link-hover"><FaInstagram/></a> 
          <a className="link link-hover"><FaFacebook/></a> 
          <a className="link link-hover"><FaTwitter/></a>
          </div>
        </div>
       
      </footer>
      <p className="text-center text-gray-300 py-2">&copy; 2023 Sapori Italiani. All rights reserved.</p>
       </section>
    );
};

export default Footer;