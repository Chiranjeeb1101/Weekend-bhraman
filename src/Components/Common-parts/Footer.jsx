import React from "react";
// import RazorpayLogo from "../../assets/razorpay.svg";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300">
      <div className="max-w-7xl py-3 px-6 md:mx-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h2 className="text-white font-bold text-lg mb-4">Find Us</h2>
          <p className="flex items-start gap-2 mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-orange-500 mt-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM12 11.5c-1.38 
              0-2.5-1.12-2.5-2.5s1.12-2.5 
              2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            <span>
              <strong>Head Office:</strong> A-37 Sachdeva Complex, Madhu Vihar I.P Ext. New-Delhi-92
            </span>
          </p>

          <p className="flex items-start gap-2 mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-orange-500 mt-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM12 11.5c-1.38 
              0-2.5-1.12-2.5-2.5s1.12-2.5 
              2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            <span>
              <strong>Branch Office:</strong> Dudhadhari Chowk, Bhupatwala, Haridwar-249410
            </span>
          </p>

          <p className="flex items-center gap-2 mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 
              1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 
              1 1V20c0 .55-.45 1-1 1C10.07 21 3 13.93 3 
              5c0-.55.45-1 1-1h3.5c.55 0 1 .45 
              1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 
              1.02l-2.2 2.2z"/>
            </svg>
            <span>+91-8178958591, +91-9310366002</span>
          </p>

          <p className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-2 .9-2 
              2v12c0 1.1.9 2 2 
              2h16c1.1 0 2-.9 
              2-2V6c0-1.1-.9-2-2-2zm0 
              4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            <span>info@weekendbhraman.com</span>
          </p>
        </div>

        <div>
          <h2 className="text-white font-bold text-lg mb-4">Useful Links</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-orange-500">Terms and Condition</a></li>
            <li><a href="#" className="hover:text-orange-500">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-orange-500">Refund Policy</a></li>
            <li><a href="#" className="hover:text-orange-500">Contact</a></li>
            <li><a href="#" className="hover:text-orange-500">Destinations</a></li>
          </ul>
        </div>

        <div>
          <h2 className="text-red-500 font-bold text-lg mb-4">Certifications</h2>
          <p>GSTIN-07CCTPN4212Q1Z</p>
          <p>Registered by Govt of India MSME</p>
          <p className="font-semibold">UDYAM-DL-11-0064056</p>

          <h3 className="text-white font-bold mt-6 mb-2">Secure Transactions with</h3>
          {/* <img src={RazorpayLogo} alt="Razorpay" className="w-32" /> */}
        </div>
      </div>

      <div className="border-t border-gray-700 py-4 px-6 flex flex-col md:flex-row items-center justify-between text-sm">
        <p>
          © 2025. All Rights Reserved.{" "}
          <span className="text-orange-500 font-semibold">
            Weekend Bhraman - V 2.0.0
          </span>
        </p>
        <p>
          Design & Development by{" "}
          <a href="#" className="text-orange-500 font-semibold">
            Web_Bocket Pvt. Ltd.
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
