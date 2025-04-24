import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 border-t border-gray-100 py-8 mt-auto">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <img 
                src="/lovable-uploads/6bc84c3b-71f6-4c55-9807-1566a1ae2ddd.png" 
                alt="TuringFin Logo" 
                className="h-10 w-10"
              />
              <h3 className="text-lg font-semibold text-gray-800">TuringFin AI</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Empowering cleantech companies to quantify and monetize their carbon credits.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/calculator" className="text-gray-600 hover:text-primary transition-colors">
                  Calculator
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-primary transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-gray-600 hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-primary transition-colors">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-6 text-center">
          <p className="text-gray-600 text-sm mb-2">
            &copy; {currentYear} TuringFin AI. All rights reserved. Carbon credit calculations are estimates.
          </p>
          <p className="text-gray-600 text-sm">
            Copyright of TuringFin. This application is Beta version. The user cannot solely base on the information providing from this engine.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
