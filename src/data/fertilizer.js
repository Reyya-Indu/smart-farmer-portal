export const fertilizerData = {
  rice: {
    nutrients: { nitrogen: "100-120 kg/ha", phosphorus: "40-50 kg/ha", potassium: "40-50 kg/ha", zinc: "25 kg/ha (if deficient)" },
    categories: ["Urea", "DAP", "MOP", "Zinc Sulfate", "Farm Yard Manure"],
    timing: ["Basal: Full P, K and 1/3 N at transplanting", "Top dressing: 1/3 N at tillering, 1/3 N at panicle initiation"],
    soilTips: ["Maintain soil pH between 5.5-6.5", "Use green manure crops", "Apply organic matter regularly"],
    precautions: ["Do not apply excess nitrogen", "Split nitrogen application", "Apply zinc only if deficient"],
  },
  cotton: {
    nutrients: { nitrogen: "80-100 kg/ha", phosphorus: "40-50 kg/ha", potassium: "40-50 kg/ha", boron: "10 kg/ha (if deficient)" },
    categories: ["Urea", "DAP", "MOP", "Borax", "Farm Yard Manure"],
    timing: ["Basal: Full P, K and 1/4 N", "Top dressing: 1/4 N at 30 DAS, 1/2 N at flowering"],
    soilTips: ["Maintain soil pH between 6.0-7.5", "Ensure good drainage", "Use FYM for soil health"],
    precautions: ["Avoid excess nitrogen which increases pest attacks", "Apply micronutrients based on soil test"],
  },
  maize: {
    nutrients: { nitrogen: "120-150 kg/ha", phosphorus: "60-80 kg/ha", potassium: "40-60 kg/ha" },
    categories: ["Urea", "DAP", "MOP", "Zinc Sulfate"],
    timing: ["Basal: Full P, K and 1/3 N", "Top dressing: 1/3 N at knee-high stage, 1/3 N at tasseling"],
    soilTips: ["Maintain soil pH between 5.5-7.0", "Ensure proper drainage", "Use crop residue as mulch"],
    precautions: ["Do not apply nitrogen in excess", "Split application improves efficiency"],
  },
  groundnut: {
    nutrients: { nitrogen: "20-30 kg/ha", phosphorus: "40-60 kg/ha", potassium: "40-60 kg/ha", calcium: "200-400 kg/ha" },
    categories: ["Urea", "DAP", "MOP", "Gypsum", "Rhizobium Culture"],
    timing: ["Basal: Full P, K and all N", "Gypsum at flowering stage"],
    soilTips: ["Maintain soil pH between 6.0-7.5", "Use rhizobium culture for nodulation", "Calcium is essential for pod development"],
    precautions: ["Avoid nitrogen fertilization as it fixes own nitrogen", "Apply gypsum for better pod filling"],
  },
  chilli: {
    nutrients: { nitrogen: "100-120 kg/ha", phosphorus: "60-80 kg/ha", potassium: "60-80 kg/ha" },
    categories: ["Urea", "DAP", "MOP", "FYM", "Vermicompost"],
    timing: ["Basal: Full P, K and 1/3 N", "Top dressing: 1/3 N at 30 DAT, 1/3 N at flowering"],
    soilTips: ["Maintain soil pH between 6.0-7.0", "Use organic mulch", "Ensure good drainage"],
    precautions: ["Avoid waterlogging", "Balanced fertilization improves fruit quality"],
  },
  tomato: {
    nutrients: { nitrogen: "100-120 kg/ha", phosphorus: "80-100 kg/ha", potassium: "80-100 kg/ha" },
    categories: ["Urea", "DAP", "MOP", "FYM", "Calcium Nitrate"],
    timing: ["Basal: Full P, K and 1/3 N", "Top dressing: 1/3 N at 30 DAT, 1/3 N at fruiting"],
    soilTips: ["Maintain soil pH between 6.0-7.0", "Use calcium for blossom end rot prevention", "Mulching helps maintain soil moisture"],
    precautions: ["Calcium deficiency causes blossom end rot", "Avoid excess nitrogen which reduces fruit set"],
  },
  banana: {
    nutrients: { nitrogen: "200-300 kg/ha", phosphorus: "50-100 kg/ha", potassium: "300-400 kg/ha" },
    categories: ["Urea", "SSP", "MOP", "FYM", "Vermicompost"],
    timing: ["Apply in 5-6 splits over the growing period", "Higher potassium at bunch emergence"],
    soilTips: ["Maintain soil pH between 6.0-7.5", "Heavy feeder - needs rich organic matter", "Ensure good drainage"],
    precautions: ["Potash is crucial for fruit quality", "Apply fertilizers in circular trenches"],
  },
  sugarcane: {
    nutrients: { nitrogen: "250-300 kg/ha", phosphorus: "100-150 kg/ha", potassium: "100-150 kg/ha" },
    categories: ["Urea", "DAP", "MOP", "FYM", "Press Mud"],
    timing: ["Basal: Full P, K and 1/4 N", "Top dressing: 3 splits at 30, 60, 90 days"],
    soilTips: ["Maintain soil pH between 6.5-7.5", "Use press mud as organic matter", "Ensure proper drainage"],
    precautions: ["Heavy feeder - needs high fertilizer", "Avoid water stress during grand growth"],
  },
  mango: {
    nutrients: { nitrogen: "1-2 kg/tree", phosphorus: "0.5-1 kg/tree", potassium: "1-2 kg/tree" },
    categories: ["Urea", "SSP", "MOP", "FYM", "Micronutrients"],
    timing: ["Apply in 2 splits: pre-flowering and post-harvest", "FYM during monsoon"],
    soilTips: ["Maintain soil pH between 6.0-7.5", "Deep rooted - apply fertilizers in trenches", "Mulching helps retain moisture"],
    precautions: ["Avoid fertilizing during flowering", "Zinc and boron are important micronutrients"],
  },
  pulses: {
    nutrients: { nitrogen: "20-30 kg/ha", phosphorus: "40-60 kg/ha", potassium: "20-40 kg/ha" },
    categories: ["Urea", "DAP", "MOP", "Rhizobium Culture", "PSB Culture"],
    timing: ["Basal: Full P, K and all N", "No top dressing needed"],
    soilTips: ["Maintain soil pH between 6.0-7.5", "Use rhizobium culture", "Phosphorus is critical for nodulation"],
    precautions: ["Nitrogen fixation reduces N requirement", "Micronutrients like molybdenum help nodulation"],
  },
}

export const growthStages = [
  "Seedling",
  "Vegetative",
  "Flowering",
  "Fruiting",
  "Maturity",
]

export const irrigationTypes = [
  "Flood Irrigation",
  "Drip Irrigation",
  "Sprinkler Irrigation",
  "Furrow Irrigation",
]
