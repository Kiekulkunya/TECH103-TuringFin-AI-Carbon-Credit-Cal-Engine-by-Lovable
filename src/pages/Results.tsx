
import { useLocation, Link, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ResultsChart from "@/components/ResultsChart";
import { CleanTechData, CarbonCreditResult, calculateCarbonCredits } from "@/utils/calculationUtils";
import { ArrowLeft } from "lucide-react";

const Results = () => {
  const location = useLocation();
  const calculationData = location.state?.calculationData as CleanTechData;
  
  // If no data was passed, redirect to calculator
  if (!calculationData) {
    return <Navigate to="/calculator" replace />;
  }
  
  // Calculate results
  const results: CarbonCreditResult = calculateCarbonCredits(calculationData);
  
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      
      <main className="flex-grow py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <h1 className="text-3xl font-semibold mb-4 md:mb-0">Your Carbon Credit Results</h1>
            <Link to="/calculator">
              <Button variant="outline" className="flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Calculator
              </Button>
            </Link>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-xl font-medium mb-6">Based on your inputs, here are your estimated carbon credits:</h2>
            <ResultsChart results={results} />
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-xl font-medium mb-4">What This Means</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Based on your inputs, your cleantech company could potentially generate <span className="font-semibold text-primary">{results.totalCredits} carbon credits</span> over 
                the {calculationData.projectLifespan}-year project lifespan, with an estimated value of 
                <span className="font-semibold text-primary"> ${results.financialValue.toLocaleString()}</span>.
              </p>
              <p>
                This represents a reduction of approximately <span className="font-semibold">{results.co2Reduction} tons</span> of CO₂ 
                equivalent, with the majority coming from {
                  results.categoryBreakdown.energy >= results.categoryBreakdown.waste && 
                  results.categoryBreakdown.energy >= results.categoryBreakdown.water ? 
                  "energy savings and renewable energy generation" : 
                  results.categoryBreakdown.waste >= results.categoryBreakdown.energy && 
                  results.categoryBreakdown.waste >= results.categoryBreakdown.water ?
                  "waste reduction efforts" : "water conservation measures"
                }.
              </p>
              <p>
                Remember that these are estimates based on industry standards and your provided data. 
                Actual carbon credits would need to be verified through an accredited carbon offset program.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-medium mb-4">Next Steps</h2>
            <div className="space-y-4 text-gray-700">
              <p>To turn these potential carbon credits into reality:</p>
              <ol className="list-decimal pl-5 space-y-2">
                <li>Consult with a carbon credit verification specialist</li>
                <li>Develop a monitoring and reporting plan for your project</li>
                <li>Register your project with an appropriate carbon offset program</li>
                <li>Implement your project with proper documentation</li>
                <li>Undergo verification and certification</li>
                <li>List your credits on a carbon market</li>
              </ol>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Results;
