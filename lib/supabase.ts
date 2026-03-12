import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://kgqaenbvsqcdmlmyppxv.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtncWFlbmJ2c3FjZG1sbXlwcHh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMzMDQ2ODcsImV4cCI6MjA4ODg4MDY4N30.4u8yi3v5AoYwnZfHG4hFSSb98KTOICrgTPR01a91qm8";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface DbArticle {
  id: string;
  slug: string;
  title: string;
  category: string;
  excerpt: string | null;
  body: string | null;
  author: string;
  read_time: string;
  editors_pick: boolean;
  published: boolean;
  image_url: string | null;
  created_at: string;
  updated_at: string;
}
