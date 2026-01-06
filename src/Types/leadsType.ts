export type LeadStatus = "New" | "Contacted" | "Converted";

// src/types/Lead.ts
export interface Lead {
  id?: string;
  name: string;
  email: string;
  phone: string;
  status: string;
  source: string;
  createdAt: number;
}
