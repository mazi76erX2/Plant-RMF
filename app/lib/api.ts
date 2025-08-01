// API endpoints
export const API_ENDPOINTS = {
  // Contact form
  CONTACT: "/api/contact",
  // Newsletter subscription
  NEWSLETTER: "/api/newsletter",
  // Donation tracking
  DONATIONS: "/api/donations",
  // Tree planting statistics
  TREE_STATS: "/api/tree-stats",
  // Business packages
  BUSINESS_PACKAGES: "/api/business-packages",
  // Team members
  TEAM_MEMBERS: "/api/team",
  // Impact reports
  IMPACT_REPORTS: "/api/impact-reports",
  // Events
  EVENTS: "/api/events",
} as const;

// Common API functions
export const api = {
  // GET request
  get: async (url: string) => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  },

  // POST request
  post: async <T = unknown>(url: string, data: T) => {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  },

  // PUT request
  put: async <T = unknown>(url: string, data: T) => {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  },

  // DELETE request
  delete: async (url: string) => {
    const response = await fetch(url, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  },
};
