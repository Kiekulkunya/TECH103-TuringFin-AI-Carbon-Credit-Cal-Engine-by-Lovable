
import { useState } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import CalculatorForm from "@/components/CalculatorForm";
import { CleanTechData, CarbonCreditResult, calculateCarbonCredits } from "@/utils/calculationUtils";

const Calculator = () => {
  const [results, setResults] = useState<CarbonCreditResult | null>(null);

  const handleCalculate = (data: CleanTechData) => {
    const calculatedResults = calculateCarbonCredits(data);
    setResults(calculatedResults);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      
      <main className="flex-grow py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl font-semibold text-center mb-8">Carbon Credit Calculator</h1>
          
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
