import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ArrowRight, BarChart2, Leaf, Zap } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F2FCE2]">
      <NavBar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-[#F2FCE2] py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
                  AI-Powered Carbon Credit Calculation
                </h1>
                <p className="text-xl text-black mb-8">
                  TuringFin AI empowers cleantech companies to precisely quantify and monetize 
                  their environmental impact through advanced carbon credit estimation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/calculator">
                    <Button size="lg" className="w-full sm:w-auto">
                      Start Calculating <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link to="/dashboard">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto">
                      View Dashboard <BarChart2 className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="hidden md:flex justify-center">
                <div className="relative w-full max-w-md">
                  <div className="relative bg-white p-8 rounded-xl shadow-lg">
                    <div className="flex items-center justify-center w-20 h-20 bg-green-50 rounded-full mb-6">
                      <img 
                        src="/lovable-uploads/6bc84c3b-71f6-4c55-9807-1566a1ae2ddd.png" 
                        alt="TuringFin Logo" 
                        className="h-12 w-12 object-contain"
                      />
                    </div>
                    <h3 className="text-2xl font-semibold mb-2">Transform Impact into Value</h3>
                    <p className="text-gray-600 mb-4">
                      Leverage AI to convert your sustainability efforts into measurable 
                      financial opportunities.
                    </p>
                    <div className="flex items-center text-blue-600 font-medium">
                      <Zap className="h-5 w-5 mr-2" />
                      <span>Intelligent Carbon Credit Solutions</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-6 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-semibold text-center mb-12">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-green-100 text-green-600 mb-4">
                  <span className="text-xl font-semibold">1</span>
                </div>
                <h3 className="text-xl font-medium mb-2">Input Your Data</h3>
                <p className="text-gray-600">
                  Enter information about your cleantech initiatives, energy production, and environmental
                  impact metrics.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-green-100 text-green-600 mb-4">
                  <span className="text-xl font-semibold">2</span>
                </div>
                <h3 className="text-xl font-medium mb-2">Calculate Credits</h3>
                <p className="text-gray-600">
                  Our advanced algorithm computes potential carbon credits based on industry
                  standards and best practices.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-green-100 text-green-600 mb-4">
                  <span className="text-xl font-semibold">3</span>
                </div>
                <h3 className="text-xl font-medium mb-2">Track & Analyze</h3>
                <p className="text-gray-600">
                  View your results, track historical calculations, and analyze trends with our
                  intuitive dashboard.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 bg-green-50">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-semibold mb-4">Ready to Calculate Your Carbon Credits?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Start quantifying your environmental impact today and discover the potential
              financial value of your sustainability initiatives.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/calculator">
                <Button size="lg">Get Started</Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline">Learn More</Button>
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
