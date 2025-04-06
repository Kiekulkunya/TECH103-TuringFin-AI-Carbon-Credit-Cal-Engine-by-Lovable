
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  getHistoricalCalculations, 
  getTrendData, 
  formatNumber, 
  formatCurrency 
} from "@/utils/calculationUtils";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from "recharts";
import { ExternalLink, BarChart2, TrendingUp, ArrowLeft } from "lucide-react";

const Dashboard = () => {
  const [historicalData, setHistoricalData] = useState<any[]>([]);
  const [trendData, setTrendData] = useState<any[]>([]);
  const [totalCalculations, setTotalCalculations] = useState(0);
  const [averageCredits, setAverageCredits] = useState(0);
  const [totalValue, setTotalValue] = useState(0);

  useEffect(() => {
    // Load historical data
    const calculations = getHistoricalCalculations();
    setHistoricalData(calculations);
    
    // Calculate metrics
    setTotalCalculations(calculations.length);
    
    if (calculations.length > 0) {
      const totalCredits = calculations.reduce((sum: number, calc: any) => sum + calc.totalCredits, 0);
      setAverageCredits(Math.round(totalCredits / calculations.length));
      
      const value = calculations.reduce((sum: number, calc: any) => sum + calc.financialValue, 0);
      setTotalValue(value);
    }
    
    // Get trend data for charts
    const trends = getTrendData();
    if (trends) setTrendData(trends);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      
      <main className="flex-grow py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <h1 className="text-3xl font-semibold mb-4 md:mb-0">Carbon Credits Dashboard</h1>
            <Link to="/calculator">
              <Button variant="outline" className="flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Calculator
              </Button>
            </Link>
          </div>
          
          {historicalData.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      Total Calculations
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold flex items-center">
                      {totalCalculations}
                      <BarChart2 className="h-4 w-4 ml-2 text-muted-foreground" />
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      Average Credits Per Project
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold flex items-center">
                      {formatNumber(averageCredits)}
                      <TrendingUp className="h-4 w-4 ml-2 text-muted-foreground" />
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      Total Financial Value
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-green-600">
                      {formatCurrency(totalValue)}
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Carbon Credits Trend</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={trendData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="date" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Line 
                            type="monotone" 
                            dataKey="totalCredits" 
                            name="Total Credits"
                            stroke="#22c55e" 
                            activeDot={{ r: 8 }} 
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Financial Value Trend</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={trendData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="date" />
                          <YAxis />
                          <Tooltip 
                            formatter={(value) => formatCurrency(Number(value))}
                          />
                          <Legend />
                          <Bar 
                            dataKey="financialValue" 
                            name="Financial Value" 
                            fill="#0ea5e9" 
                          />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Historical Calculations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Date</TableHead>
                          <TableHead>Industry</TableHead>
                          <TableHead>Technology</TableHead>
                          <TableHead>Years</TableHead>
                          <TableHead>Total Credits</TableHead>
                          <TableHead>Annual Credits</TableHead>
                          <TableHead>Financial Value</TableHead>
                          <TableHead>CO₂ Reduction</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {historicalData.map((calculation) => (
                          <TableRow key={calculation.calculationId}>
                            <TableCell>{calculation.calculationDate}</TableCell>
                            <TableCell className="capitalize">{calculation.industry}</TableCell>
                            <TableCell className="capitalize">{calculation.technologyType}</TableCell>
                            <TableCell>{calculation.projectLifespan}</TableCell>
                            <TableCell>{formatNumber(calculation.totalCredits)}</TableCell>
                            <TableCell>{formatNumber(calculation.annualCredits)}</TableCell>
                            <TableCell>{formatCurrency(calculation.financialValue)}</TableCell>
                            <TableCell>{formatNumber(calculation.co2Reduction)} tons</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </>
          ) : (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold mb-4">No Historical Data Yet</h2>
              <p className="text-gray-600 mb-8">
                Complete a carbon credit calculation to start tracking your historical data and trends.
              </p>
              <Link to="/calculator">
                <Button>Go to Calculator</Button>
              </Link>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
