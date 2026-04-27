import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://plgwjprweinmcxyqjvzu.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBsZ3dqcHJ3ZWlubWN4eXFqdnp1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzczMDY5OTEsImV4cCI6MjA5Mjg4Mjk5MX0.WZPznDDuL0z18q2BLQ2vpnaQ6Bxm1mgZcy2WmJy_iwc';

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase URL or Anon Key is missing. Please add them to your environment variables.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);