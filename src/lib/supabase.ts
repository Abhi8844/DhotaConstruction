import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface ContactQuery {
  id?: string;
  full_name: string;
  email: string;
  phone_number: string;
  message: string;
  status?: string;
  created_at?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  location: string;
  area_sqft: number;
  stories: number;
  completion_year: number;
  image_url: string;
  featured: boolean;
  created_at: string;
}

export interface CostEstimate {
  id?: string;
  area_sqft: number;
  stories: number;
  estimated_cost: number;
  email?: string;
  phone_number?: string;
  created_at?: string;
}
