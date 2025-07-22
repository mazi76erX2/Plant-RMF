import { NextRequest, NextResponse } from "next/server";

// Tree statistics type
interface TreeStats {
  totalTreesPlanted: number;
  monthlyTreesPlanted: number;
  co2Reduced: number;
  areasReforested: number;
  lastUpdated: string;
}

// Mock data for tree statistics
const treeStats: TreeStats = {
  totalTreesPlanted: 12450,
  monthlyTreesPlanted: 850,
  co2Reduced: 47.8, // in tons
  areasReforested: 15650, // in square meters
  lastUpdated: new Date().toISOString(),
};

export async function GET() {
  try {
    // Simulate some real-time updates
    const updatedStats = {
      ...treeStats,
      totalTreesPlanted:
        treeStats.totalTreesPlanted + Math.floor(Math.random() * 10),
      monthlyTreesPlanted:
        treeStats.monthlyTreesPlanted + Math.floor(Math.random() * 5),
      lastUpdated: new Date().toISOString(),
    };

    return NextResponse.json({
      success: true,
      data: updatedStats,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch tree statistics",
      },
      { status: 500 }
    );
  }
}
