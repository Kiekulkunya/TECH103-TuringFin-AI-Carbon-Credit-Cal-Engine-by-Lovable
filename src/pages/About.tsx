
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      
      <main className="flex-grow py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl font-semibold text-center mb-8">About Our Carbon Credit Calculator</h1>
          
          <div className="max-w-4xl mx-auto">
            <Card className="mb-8">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-medium mb-4">Our Methodology</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    The CarbonCalc calculator uses industry-standard methodologies to estimate potential carbon credits for cleantech companies.
                    Our calculations are based on several key factors:
                  </p>
                  
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <span className="font-medium">Energy Savings and Generation:</span> We calculate CO₂ reductions from energy efficiency improvements and renewable energy generation.
                    </li>
                    <li>
                      <span className="font-medium">Waste Reduction:</span> We estimate the carbon impact of reducing waste and implementing circular economy practices.
                    </li>
                    <li>
                      <span className="font-medium">Water Conservation:</span> We factor in the carbon emissions saved through water conservation efforts.
                    </li>
                    <li>
                      <span className="font-medium">Industry Factors:</span> We apply industry-specific multipliers to reflect the varying impact of cleantech innovations in different sectors.
                    </li>
                    <li>
                      <span className="font-medium">Technology Type:</span> Different clean technologies have different carbon reduction potentials, which we account for.
                    </li>
                    <li>
                      <span className="font-medium">Project Lifespan:</span> We calculate credits over the estimated lifetime of your project.
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            
            <Card className="mb-8">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-medium mb-4">Limitations and Considerations</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    While our calculator provides useful estimates, there are important limitations to consider:
                  </p>
                  
                  <ul className="list-disc pl-6 space-y-2">
                    <li>This calculator provides estimates only and is not a substitute for professional carbon credit verification.</li>
                    <li>Actual carbon credits require validation through recognized carbon offset standards.</li>
                    <li>Our calculations use generalized emission factors that may differ from your specific region or circumstances.</li>
                    <li>Carbon credit markets are volatile, and the financial value of credits can fluctuate significantly.</li>
                    <li>The eligibility of projects for carbon credits depends on various factors including additionality and verification protocols.</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            
            <Card className="mb-8">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-medium mb-4">About Carbon Credits</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Carbon credits are tradable permits representing the right to emit a specific amount of carbon dioxide or other greenhouse gases. 
                    One carbon credit represents one ton of carbon dioxide equivalent that is either removed from the atmosphere or prevented from being emitted.
                  </p>
                  
                  <p>
                    For cleantech companies, carbon credits represent an additional revenue stream and validation of environmental benefits. 
                    They are generated through projects that reduce, remove, or avoid greenhouse gas emissions.
                  </p>
                  
                  <p>
                    The carbon credit market helps finance projects that might otherwise not be financially viable, accelerating the transition to a 
                    lower-carbon economy by putting a price on carbon emissions.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <div className="text-center mt-12">
              <h2 className="text-2xl font-medium mb-4">Ready to Calculate Your Carbon Credits?</h2>
              <Link to="/calculator">
                <Button size="lg">
                  Go to Calculator
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
