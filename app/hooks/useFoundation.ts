import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api, API_ENDPOINTS } from "../lib/api";
import {
  TeamMember,
  TreeStats,
  BusinessPackage,
  ContactFormData,
  NewsletterSubscription,
  Donation,
  ImpactReport,
  Event,
  ApiResponse,
  PaginatedResponse,
} from "../types/foundation";

// Query Keys
export const QUERY_KEYS = {
  TEAM_MEMBERS: ["team-members"],
  TREE_STATS: ["tree-stats"],
  BUSINESS_PACKAGES: ["business-packages"],
  DONATIONS: ["donations"],
  IMPACT_REPORTS: ["impact-reports"],
  EVENTS: ["events"],
} as const;

// Team Members
export const useTeamMembers = () => {
  return useQuery({
    queryKey: QUERY_KEYS.TEAM_MEMBERS,
    queryFn: () => api.get(API_ENDPOINTS.TEAM_MEMBERS),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

// Tree Statistics
export const useTreeStats = () => {
  return useQuery({
    queryKey: QUERY_KEYS.TREE_STATS,
    queryFn: () => api.get(API_ENDPOINTS.TREE_STATS),
    staleTime: 2 * 60 * 1000, // 2 minutes
    refetchInterval: 5 * 60 * 1000, // Refetch every 5 minutes
  });
};

// Business Packages
export const useBusinessPackages = () => {
  return useQuery({
    queryKey: QUERY_KEYS.BUSINESS_PACKAGES,
    queryFn: () => api.get(API_ENDPOINTS.BUSINESS_PACKAGES),
    staleTime: 10 * 60 * 1000, // 10 minutes
  });
};

// Impact Reports
export const useImpactReports = (page = 1, limit = 10) => {
  return useQuery({
    queryKey: [...QUERY_KEYS.IMPACT_REPORTS, page, limit],
    queryFn: () =>
      api.get(`${API_ENDPOINTS.IMPACT_REPORTS}?page=${page}&limit=${limit}`),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

// Events
export const useEvents = (upcoming = true) => {
  return useQuery({
    queryKey: [...QUERY_KEYS.EVENTS, upcoming],
    queryFn: () => api.get(`${API_ENDPOINTS.EVENTS}?upcoming=${upcoming}`),
    staleTime: 2 * 60 * 1000, // 2 minutes
  });
};

// Donations (for admin dashboard)
export const useDonations = (page = 1, limit = 20) => {
  return useQuery({
    queryKey: [...QUERY_KEYS.DONATIONS, page, limit],
    queryFn: () =>
      api.get(`${API_ENDPOINTS.DONATIONS}?page=${page}&limit=${limit}`),
    staleTime: 1 * 60 * 1000, // 1 minute
  });
};

// Mutations
export const useContactForm = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: ContactFormData) =>
      api.post(API_ENDPOINTS.CONTACT, data),
    onSuccess: () => {
      // Could invalidate related queries if needed
      // queryClient.invalidateQueries({ queryKey: ['contacts'] });
    },
  });
};

export const useNewsletterSubscription = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: NewsletterSubscription) =>
      api.post(API_ENDPOINTS.NEWSLETTER, data),
    onSuccess: () => {
      // Could track successful subscriptions
    },
  });
};

export const useDonation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Partial<Donation>) =>
      api.post(API_ENDPOINTS.DONATIONS, data),
    onSuccess: () => {
      // Invalidate donations and tree stats when a new donation is made
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.DONATIONS });
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.TREE_STATS });
    },
  });
};

// Custom hooks for complex scenarios
export const useFoundationStats = () => {
  const treeStatsQuery = useTreeStats();
  const donationsQuery = useDonations();

  return {
    treeStats: treeStatsQuery.data,
    donations: donationsQuery.data,
    isLoading: treeStatsQuery.isLoading || donationsQuery.isLoading,
    error: treeStatsQuery.error || donationsQuery.error,
  };
};

export const useFoundationOverview = () => {
  const teamQuery = useTeamMembers();
  const treeStatsQuery = useTreeStats();
  const eventsQuery = useEvents(true);

  return {
    team: teamQuery.data,
    treeStats: treeStatsQuery.data,
    upcomingEvents: eventsQuery.data,
    isLoading:
      teamQuery.isLoading || treeStatsQuery.isLoading || eventsQuery.isLoading,
    error: teamQuery.error || treeStatsQuery.error || eventsQuery.error,
  };
};
