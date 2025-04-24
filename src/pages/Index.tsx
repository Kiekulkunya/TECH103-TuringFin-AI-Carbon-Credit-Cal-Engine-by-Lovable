import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ArrowRight, BarChart2, Zap } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <NavBar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 px-6 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  AI-Powered Carbon Credit Calculation
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  TuringFin AI empowers cleantech companies to precisely quantify and monetize 
                  their environmental impact through advanced carbon credit estimation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/calculator">
                    <Button size="lg" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700">
                      Start Calculating <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link to="/dashboard">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto border-blue-600 text-blue-600 hover:bg-blue-50">
                      View Dashboard <BarChart2 className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="hidden md:flex justify-center">
                <div className="relative w-full max-w-md">
                  <div className="relative bg-white p-6 rounded-xl shadow-lg">
                    <div className="flex items-center justify-center w-24 h-24 bg-blue-100 rounded-full mb-4">
                      <img 
                        src="/lovable-uploads/b995ac2b-9eb4-44ed-be2b-2f8d517398d6.png" 
                        alt="TuringFin Logo" 
                        className="h-20 w-20 object-contain"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Transform Impact into Value</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Leverage AI to convert your sustainability efforts into measurable 
                      financial opportunities.
                    </p>
                    <div className="flex items-center text-blue-600 font-medium">
                      <Zap className="h-4 w-4 mr-2" />
                      <span className="text-sm">Intelligent Carbon Credit Solutions</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Workflow Section */}
        <section className="py-8 px-6 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-xl font-semibold text-center mb-6 text-gray-900">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-3 rounded-lg shadow-sm">
                <img 
                  src="photo-1488590528505-98d2b5aba04b" 
                  alt="Data Input"
                  className="w-full h-24 object-cover rounded-lg mb-2"
                />
                <h3 className="text-xs font-medium mb-1 text-gray-900">Input Your Data</h3>
                <p className="text-xs text-gray-600">Enter information about your cleantech initiatives.</p>
              </div>

              <div className="bg-white p-3 rounded-lg shadow-sm">
                <img 
                  src="photo-1461749280684-dccba630e2f6" 
                  alt="Calculate Credits"
                  className="w-full h-24 object-cover rounded-lg mb-2"
                />
                <h3 className="text-xs font-medium mb-1 text-gray-900">Calculate Credits</h3>
                <p className="text-xs text-gray-600">Our AI algorithm computes potential credits.</p>
              </div>

              <div className="bg-white p-3 rounded-lg shadow-sm">
                <img 
                  src="photo-1531297484001-80022131f5a1" 
                  alt="Track Results"
                  className="w-full h-24 object-cover rounded-lg mb-2"
                />
                <h3 className="text-xs font-medium mb-1 text-gray-900">Track & Analyze</h3>
                <p className="text-xs text-gray-600">View your results in our dashboard.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 px-6 bg-blue-50">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Ready to Calculate Your Carbon Credits?</h2>
            <p className="text-sm text-gray-600 mb-6">
              Start quantifying your environmental impact today and discover the potential
              financial value of your sustainability initiatives.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/calculator">
                <Button size="lg" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700">Get Started</Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-blue-600 text-blue-600 hover:bg-blue-50">Learn More</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
