
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { CarbonCreditResult, formatNumber, formatCurrency } from "@/utils/calculationUtils";

interface ResultsChartProps {
  results: CarbonCreditResult;
}

const ResultsChart: React.FC<ResultsChartProps> = ({ results }) => {
  const { categoryBreakdown } = results;
  
  const chartData = [
    { name: "Energy", value: categoryBreakdown.energy },
    { name: "Waste", value: categoryBreakdown.waste },
    { name: "Water", value: categoryBreakdown.water }
  ].filter(item => item.value > 0);
  
  const COLORS = ["#22c55e", "#14b8a6", "#0ea5e9"];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="overflow-hidden">
        <CardContent className="pt-6">
          <h3 className="text-lg font-medium mb-4 text-center">Carbon Credit Breakdown</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={90}
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `${value}%`} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6 space-y-6">
          <h3 className="text-lg font-medium mb-4 text-center">Carbon Credit Summary</h3>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b border-gray-100 pb-2">
              <span className="text-gray-600">Total Carbon Credits:</span>
              <span className="text-xl font-semibold text-green-600">{formatNumber(results.totalCredits)}</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-100 pb-2">
              <span className="text-gray-600">Annual Carbon Credits:</span>
              <span className="text-lg font-medium text-green-600">{formatNumber(results.annualCredits)}</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-100 pb-2">
              <span className="text-gray-600">CO₂ Reduction (tons):</span>
              <span className="text-lg font-medium">{formatNumber(results.co2Reduction)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Estimated Financial Value:</span>
              <span className="text-xl font-semibold text-green-700">{formatCurrency(results.financialValue)}</span>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-md mt-4">
            <p className="text-sm text-gray-500 italic">
              Note: These calculations are estimates based on industry standards. 
              Actual carbon credits may vary based on verification processes and market conditions.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResultsChart;
