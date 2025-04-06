
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CleanTechData } from "@/utils/calculationUtils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

interface CalculatorFormProps {
  onCalculate: (data: CleanTechData) => void;
}

const CalculatorForm: React.FC<CalculatorFormProps> = ({ onCalculate }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<CleanTechData>({
    companySize: "small",
    industry: "manufacturing",
    energySavings: 0,
    renewableEnergyGenerated: 0,
    wasteReduction: 0,
    waterConservation: 0,
    technologyType: "energyEfficiency",
    projectLifespan: 10,
    solarEnergyKwh: 0,
    storageCapacityKwh: 0,
    calculationDate: new Date().toISOString().split('T')[0]
  });

  const handleChange = (field: keyof CleanTechData, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (formData.energySavings === 0 && 
        formData.renewableEnergyGenerated === 0 && 
        formData.wasteReduction === 0 && 
        formData.waterConservation === 0 &&
        formData.solarEnergyKwh === 0) {
      toast("Please enter at least one environmental impact value");
      return;
    }

    onCalculate(formData);
    navigate("/results", { state: { calculationData: formData } });
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="companySize">Company Size</Label>
              <Select 
                value={formData.companySize} 
                onValueChange={(value) => handleChange("companySize", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select company size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="startup">Startup (1-10 employees)</SelectItem>
                    <SelectItem value="small">Small (11-50 employees)</SelectItem>
                    <SelectItem value="medium">Medium (51-250 employees)</SelectItem>
                    <SelectItem value="large">Large (251-1000 employees)</SelectItem>
                    <SelectItem value="enterprise">Enterprise (1000+ employees)</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="industry">Industry</Label>
              <Select 
                value={formData.industry} 
                onValueChange={(value) => handleChange("industry", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select industry" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="manufacturing">Manufacturing</SelectItem>
                    <SelectItem value="energy">Energy</SelectItem>
                    <SelectItem value="transportation">Transportation</SelectItem>
                    <SelectItem value="agriculture">Agriculture</SelectItem>
                    <SelectItem value="construction">Construction</SelectItem>
                    <SelectItem value="technology">Technology</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="technologyType">Primary Technology Type</Label>
              <Select 
                value={formData.technologyType} 
                onValueChange={(value) => handleChange("technologyType", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select technology type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="solar">Solar Energy</SelectItem>
                    <SelectItem value="wind">Wind Energy</SelectItem>
                    <SelectItem value="hydro">Hydroelectric</SelectItem>
                    <SelectItem value="geothermal">Geothermal</SelectItem>
                    <SelectItem value="biomass">Biomass</SelectItem>
                    <SelectItem value="energyEfficiency">Energy Efficiency</SelectItem>
                    <SelectItem value="wasteManagement">Waste Management</SelectItem>
                    <SelectItem value="waterTreatment">Water Treatment</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="projectLifespan">Project Lifespan (years)</Label>
              <Input
                id="projectLifespan"
                type="number"
                min="1"
                max="50"
                value={formData.projectLifespan}
                onChange={(e) => handleChange("projectLifespan", parseInt(e.target.value) || 0)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="calculationDate">Calculation Date</Label>
              <Input
                id="calculationDate"
                type="date"
                value={formData.calculationDate}
                onChange={(e) => handleChange("calculationDate", e.target.value)}
              />
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-medium mb-4">Environmental Impact Data</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="energySavings">Energy Savings (kWh/year)</Label>
                <Input
                  id="energySavings"
                  type="number"
                  min="0"
                  value={formData.energySavings}
                  onChange={(e) => handleChange("energySavings", parseInt(e.target.value) || 0)}
                  placeholder="e.g., 50000"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="renewableEnergyGenerated">Renewable Energy Generated (kWh/year)</Label>
                <Input
                  id="renewableEnergyGenerated"
                  type="number"
                  min="0"
                  value={formData.renewableEnergyGenerated}
                  onChange={(e) => handleChange("renewableEnergyGenerated", parseInt(e.target.value) || 0)}
                  placeholder="e.g., 75000"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="solarEnergyKwh">Solar Energy Production (kWh/year)</Label>
                <Input
                  id="solarEnergyKwh"
                  type="number"
                  min="0"
                  value={formData.solarEnergyKwh}
                  onChange={(e) => handleChange("solarEnergyKwh", parseInt(e.target.value) || 0)}
                  placeholder="e.g., 100000"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="storageCapacityKwh">Energy Storage Capacity (kWh)</Label>
                <Input
                  id="storageCapacityKwh"
                  type="number"
                  min="0"
                  value={formData.storageCapacityKwh}
                  onChange={(e) => handleChange("storageCapacityKwh", parseInt(e.target.value) || 0)}
                  placeholder="e.g., 50000"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="wasteReduction">Waste Reduction (tons/year)</Label>
                <Input
                  id="wasteReduction"
                  type="number"
                  min="0"
                  value={formData.wasteReduction}
                  onChange={(e) => handleChange("wasteReduction", parseInt(e.target.value) || 0)}
                  placeholder="e.g., 100"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="waterConservation">Water Conservation (gallons/year)</Label>
                <Input
                  id="waterConservation"
                  type="number"
                  min="0"
                  value={formData.waterConservation}
                  onChange={(e) => handleChange("waterConservation", parseInt(e.target.value) || 0)}
                  placeholder="e.g., 250000"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center pt-4">
            <Button type="submit" className="px-8 py-2">Calculate Carbon Credits</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default CalculatorForm;
