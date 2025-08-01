import { NextRequest, NextResponse } from "next/server";

// Team member type definition
interface TeamMember {
  id: string;
  name: string;
  credentials?: string;
  role: string;
  image: string;
  bio?: string;
  email?: string;
}

// Mock data for team members
const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Robert Mazibuko",
    credentials: "CM(SA)",
    role: "Founder and Chairman | Interim Chief Executive Officer",
    image: "/robert.jpeg",
    bio: "Robert is the visionary founder of the Robert Mazibuko Foundation (RMF) (RMF), dedicated to creating sustainable prosperity through environmental conservation.",
    email: "robert@plant-rmf.co.za",
  },
  {
    id: "2",
    name: "Penelope Matlale Shongwe",
    role: "Treasury | Interim Chief Financial Officer",
    image: "/penelope.webp",
    bio: "Penelope oversees the financial operations and ensures transparency in all foundation activities.",
    email: "penelope@plant-rmf.co.za",
  },
  {
    id: "3",
    name: "Sipho Siddique Bonco",
    role: "Secretary | Interim Chief Operations Officer",
    image: "/siddique.jpg",
    bio: "Sipho manages day-to-day operations and coordinates our environmental initiatives across SADC.",
    email: "sipho@plant-rmf.co.za",
  },
];

export async function GET() {
  try {
    return NextResponse.json({
      success: true,
      data: teamMembers,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch team members",
      },
      { status: 500 }
    );
  }
}
