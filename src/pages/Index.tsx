
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Leaf, Tree, Factory } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-50 to-teal-100 py-16 md:py-24">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
              Carbon Credit Calculator for{" "}
              <span className="text-primary">CleanTech Companies</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Estimate your potential carbon credits and their financial value with our
              specialized calculator built for clean technology companies.
            </p>
            <Link to="/calculator">
              <Button className="px-6 py-3 text-lg">
                Start Calculating <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-semibold text-center mb-12">How It Works</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="card-hover">
                <CardContent className="pt-6 text-center">
                  <div className="bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <Factory className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-medium mb-3">Enter Your Data</h3>
                  <p className="text-gray-600">
                    Provide information about your cleantech company's activities and environmental impact.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="card-hover">
                <CardContent className="pt-6 text-center">
                  <div className="bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <Leaf className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-medium mb-3">Get Calculations</h3>
                  <p className="text-gray-600">
                    Our algorithm calculates potential carbon credits based on industry standards and your inputs.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="card-hover">
                <CardContent className="pt-6 text-center">
                  <div className="bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <Tree className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-medium mb-3">View Results</h3>
                  <p className="text-gray-600">
                    See detailed breakdowns of potential carbon credits and their estimated financial value.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-primary/5 py-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-semibold mb-6">Ready to Calculate Your Carbon Credits?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Get started with our easy-to-use calculator and discover the potential carbon credits your
              cleantech company could generate.
            </p>
            <Link to="/calculator">
              <Button variant="default" size="lg">
                Start Now
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
