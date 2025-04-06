
// Carbon credit calculation utilities

export interface CleanTechData {
  companySize: string;
  industry: string;
  energySavings: number; // in kWh
  renewableEnergyGenerated: number; // in kWh
  wasteReduction: number; // in tons
  waterConservation: number; // in gallons
  technologyType: string;
  projectLifespan: number; // in years
  // New fields for enhanced calculations
  solarEnergyKwh: number;
  storageCapacityKwh: number;
  calculationDate: string;
}

export interface CarbonCreditResult {
  totalCredits: number;
  annualCredits: number;
  financialValue: number;
  co2Reduction: number;
  categoryBreakdown: {
    energy: number;
    waste: number;
    water: number;
  };
  // New fields for tracking
  calculationId: string;
  calculationDate: string;
}

// Constants for calculation (in real scenario these would be more complex)
const CARBON_INTENSITY_ELECTRICITY = 0.92; // kg CO2 per kWh (varies by region)
const CARBON_INTENSITY_WASTE = 2.53; // tons CO2 per ton of waste
const CARBON_INTENSITY_WATER = 0.000264; // kg CO2 per gallon

const CREDIT_CONVERSION_RATE = 0.001; // 1 credit per ton of CO2
const CREDIT_VALUE = 20; // Value per credit in USD (market dependent)

// New constants for enhanced calculation
const EMISSION_FACTOR = 0.85; // kg CO2 per kWh avoided by solar
const STORAGE_FACTOR = 0.15; // Credit multiplier for storage capacity

// Industry multipliers (simplified)
const INDUSTRY_MULTIPLIERS: Record<string, number> = {
  manufacturing: 1.2,
  energy: 1.5,
  transportation: 1.3,
  agriculture: 1.1,
  construction: 1.0,
  technology: 0.9,
  other: 1.0
};

// Technology type multipliers (simplified)
const TECHNOLOGY_MULTIPLIERS: Record<string, number> = {
  solar: 1.3,
  wind: 1.2,
  hydro: 1.1,
  geothermal: 1.4,
  biomass: 1.0,
  energyEfficiency: 1.1,
  wasteManagement: 1.2,
  waterTreatment: 1.0,
  other: 0.9
};

// Company size multipliers (simplified)
const SIZE_MULTIPLIERS: Record<string, number> = {
  startup: 1.0,
  small: 1.1,
  medium: 1.2,
  large: 1.3,
  enterprise: 1.4
};

// Enhanced calculation logic based on the example provided
export const computeSolarAndStorageCredits = (solarEnergyKwh: number, storageKwh: number): number => {
  // Avoided emissions from solar energy
  const avoidedEmissions = solarEnergyKwh * EMISSION_FACTOR / 1000; // Convert to tons
  // Additional credits from building storage (e.g., efficiency gains)
  const storageCredits = storageKwh * STORAGE_FACTOR / 1000; // Convert to tons
  const totalCredits = avoidedEmissions + storageCredits;
  
  return totalCredits;
};

export const calculateCarbonCredits = (data: CleanTechData): CarbonCreditResult => {
  // Calculate CO2 reductions for each category
  const energySavingsCO2 = data.energySavings * CARBON_INTENSITY_ELECTRICITY / 1000; // Convert to tons
  const renewableEnergyCO2 = data.renewableEnergyGenerated * CARBON_INTENSITY_ELECTRICITY / 1000; // Convert to tons
  const wasteCO2 = data.wasteReduction * CARBON_INTENSITY_WASTE;
  const waterCO2 = data.waterConservation * CARBON_INTENSITY_WATER / 1000; // Convert to tons
  
  // Calculate solar and storage credits
  const solarAndStorageCredits = computeSolarAndStorageCredits(data.solarEnergyKwh, data.storageCapacityKwh);
  
  // Apply multipliers
  const industryMultiplier = INDUSTRY_MULTIPLIERS[data.industry] || INDUSTRY_MULTIPLIERS.other;
  const technologyMultiplier = TECHNOLOGY_MULTIPLIERS[data.technologyType] || TECHNOLOGY_MULTIPLIERS.other;
  const sizeMultiplier = SIZE_MULTIPLIERS[data.companySize] || SIZE_MULTIPLIERS.small;
  
  // Calculate total CO2 reduction with multipliers
  const baseCO2Reduction = (energySavingsCO2 + renewableEnergyCO2 + wasteCO2 + waterCO2);
  const totalCO2Reduction = (baseCO2Reduction + solarAndStorageCredits) * 
                            industryMultiplier * 
                            technologyMultiplier * 
                            sizeMultiplier;
  
  // Calculate credits 
  const totalCreditsLifespan = totalCO2Reduction * data.projectLifespan * CREDIT_CONVERSION_RATE * 1000;
  const annualCredits = totalCreditsLifespan / data.projectLifespan;
  
  // Calculate financial value
  const financialValue = totalCreditsLifespan * CREDIT_VALUE;
  
  // Calculate category breakdown (percentages)
  const energyCO2 = (energySavingsCO2 + renewableEnergyCO2 + solarAndStorageCredits) * 
                    industryMultiplier * 
                    technologyMultiplier * 
                    sizeMultiplier;
                    
  const wasteCO2Adjusted = wasteCO2 * 
                          industryMultiplier * 
                          technologyMultiplier * 
                          sizeMultiplier;
                          
  const waterCO2Adjusted = waterCO2 * 
                          industryMultiplier * 
                          technologyMultiplier * 
                          sizeMultiplier;
  
  // Generate unique ID for this calculation
  const calculationId = generateUniqueId();
  
  return {
    totalCredits: Math.round(totalCreditsLifespan),
    annualCredits: Math.round(annualCredits),
    financialValue: Math.round(financialValue),
    co2Reduction: Math.round(totalCO2Reduction),
    categoryBreakdown: {
      energy: Math.round((energyCO2 / totalCO2Reduction) * 100),
      waste: Math.round((wasteCO2Adjusted / totalCO2Reduction) * 100),
      water: Math.round((waterCO2Adjusted / totalCO2Reduction) * 100)
    },
    calculationId,
    calculationDate: data.calculationDate || new Date().toISOString().split('T')[0]
  };
};

// Generate unique ID for calculations
const generateUniqueId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 5).toUpperCase();
};

// Storage utilities for historical data
export const saveCalculationResult = (data: CleanTechData, result: CarbonCreditResult): void => {
  try {
    // Get existing calculations
    const storedData = localStorage.getItem('carbonCalculations');
    const calculations = storedData ? JSON.parse(storedData) : [];
    
    // Add new calculation
    calculations.push({
      calculationId: result.calculationId,
      calculationDate: result.calculationDate,
      companySize: data.companySize,
      industry: data.industry,
      technologyType: data.technologyType,
      projectLifespan: data.projectLifespan,
      totalCredits: result.totalCredits,
      annualCredits: result.annualCredits,
      financialValue: result.financialValue,
      co2Reduction: result.co2Reduction
    });
    
    // Store updated calculations
    localStorage.setItem('carbonCalculations', JSON.stringify(calculations));
  } catch (error) {
    console.error('Error saving calculation:', error);
  }
};

// Get historical calculations
export const getHistoricalCalculations = () => {
  try {
    const storedData = localStorage.getItem('carbonCalculations');
    return storedData ? JSON.parse(storedData) : [];
  } catch (error) {
    console.error('Error retrieving calculations:', error);
    return [];
  }
};

// Format numbers for display
export const formatNumber = (num: number): string => {
  return new Intl.NumberFormat('en-US').format(num);
};

// Format currency
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
};

// Get trend data in format suitable for charts
export const getTrendData = () => {
  const calculations = getHistoricalCalculations();
  if (calculations.length === 0) return null;
  
  // Sort by date
  calculations.sort((a: any, b: any) => new Date(a.calculationDate).getTime() - new Date(b.calculationDate).getTime());
  
  return calculations.map((calc: any) => ({
    date: calc.calculationDate,
    totalCredits: calc.totalCredits,
    financialValue: calc.financialValue,
    co2Reduction: calc.co2Reduction
  }));
};
