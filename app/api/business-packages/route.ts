import { NextRequest, NextResponse } from "next/server";

// Business package type
interface BusinessPackage {
  id: string;
  name: string;
  price: number;
  treesPerMonth: number;
  treesPerYear: number;
  features: string[];
  isPopular?: boolean;
}

// Mock data for business packages
const businessPackages: BusinessPackage[] = [
  {
    id: "enviro-start",
    name: "ENVIRO-START",
    price: 401400,
    treesPerMonth: 30,
    treesPerYear: 360,
    features: [
      "Plant 30 trees per month",
      "2.5 tons of CO2 reduction per year",
      "540 m² of forested area per year",
      "Website widget showing trees planted",
      "UN Sustainable Development Goals graphics",
      "Dedicated section on foundation website",
      "Photographic reports from planting events",
      "Tree-planting certificate",
      "Section 18A tax deductible receipt",
    ],
  },
  {
    id: "enviro-econo",
    name: "ENVIRO-ECONO",
    price: 669000,
    treesPerMonth: 50,
    treesPerYear: 600,
    isPopular: true,
    features: [
      "Plant 50 trees per month",
      "4.2 tons of CO2 reduction per year",
      "900 m² of forested area per year",
      "All ENVIRO-START features included",
      "Quarterly website content updates",
      "Video reports for social media",
      "Personalized certificates for employees",
      "Section 18A tax deductible receipt",
    ],
  },
  {
    id: "enviro-premium",
    name: "ENVIRO-PREMIUM",
    price: 1338000,
    treesPerMonth: 100,
    treesPerYear: 1200,
    features: [
      "Plant 100+ trees per month",
      "8.4 tons of CO2 reduction per year",
      "1200 m² of forested area per year",
      "All ENVIRO-START and ENVIRO-ECONO features",
      "Annual environmental action report",
      "Infographics for social media",
      "ESG report contribution",
      "Section 18A tax deductible receipt",
    ],
  },
];

export async function GET() {
  try {
    return NextResponse.json({
      success: true,
      data: businessPackages,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch business packages",
      },
      { status: 500 }
    );
  }
}
