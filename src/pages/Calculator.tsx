
import { useState } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import CalculatorForm from "@/components/CalculatorForm";
import DisclaimerDialog from "@/components/DisclaimerDialog";
import { CleanTechData, CarbonCreditResult, calculateCarbonCredits, saveCalculationResult } from "@/utils/calculationUtils";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BarChart2 } from "lucide-react";

const Calculator = () => {
  const [results, setResults] = useState<CarbonCreditResult | null>(null);
  const [hasAcceptedDisclaimer, setHasAcceptedDisclaimer] = useState(false);

  const handleCalculate = (data: CleanTechData) => {
    const calculatedResults = calculateCarbonCredits(data);
    setResults(calculatedResults);
    
    // Save calculation for historical tracking
    saveCalculationResult(data, calculatedResults);
  };

  if (!hasAcceptedDisclaimer) {
    return (
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-grow py-12 bg-gray-50">
          <div className="container mx-auto px-6">
            <DisclaimerDialog onAccept={() => setHasAcceptedDisclaimer(true)} />
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      
      <main className="flex-grow py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <h1 className="text-3xl font-semibold mb-4 md:mb-0">Carbon Credit Calculator</h1>
            <Link to="/dashboard">
              <Button variant="outline" className="flex items-center">
                <BarChart2 className="mr-2 h-4 w-4" /> View Dashboard
              </Button>
            </Link>
          </div>
          
          <div className="max-w-4xl mx-auto mb-8">
            <p className="text-gray-600 text-center mb-8">
              Enter your cleantech company's information and environmental impact data to estimate
              potential carbon credits and their financial value.
            </p>
            
            <CalculatorForm onCalculate={handleCalculate} />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Calculator;
