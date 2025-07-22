// Foundation-related types
export interface TeamMember {
  id: string;
  name: string;
  credentials?: string;
  role: string;
  image: string;
  bio?: string;
  email?: string;
  linkedin?: string;
}

export interface TreeStats {
  totalTreesPlanted: number;
  monthlyTreesPlanted: number;
  co2Reduced: number; // in tons
  areasReforested: number; // in square meters
  lastUpdated: string;
}

export interface BusinessPackage {
  id: string;
  name: string;
  price: number;
  treesPerMonth: number;
  treesPerYear: number;
  features: string[];
  isPopular?: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  packageInterest?: string;
}

export interface NewsletterSubscription {
  email: string;
  name?: string;
  interests?: string[];
}

export interface Donation {
  id: string;
  amount: number;
  donorName: string;
  donorEmail: string;
  packageType?: string;
  treesSponsored: number;
  date: string;
  status: "pending" | "completed" | "failed";
}

export interface ImpactReport {
  id: string;
  title: string;
  description: string;
  date: string;
  treesPlanted: number;
  co2Reduced: number;
  location: string;
  images: string[];
  downloadUrl?: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  type: "tree-planting" | "community-education" | "corporate-event" | "other";
  maxParticipants?: number;
  currentParticipants: number;
  registrationUrl?: string;
  images?: string[];
}

export interface FocusArea {
  id: string;
  title: string;
  description: string;
  bulletPoints: string[];
  icon: string;
}

// API Response types
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  hasNext: boolean;
  hasPrev: boolean;
}

// Form validation types
export interface FormErrors {
  [key: string]: string;
}

export interface FormState {
  isSubmitting: boolean;
  errors: FormErrors;
  success: boolean;
}
