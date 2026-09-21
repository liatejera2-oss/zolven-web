import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://khbqzubiwduhgentgoyi.supabase.co";
const supabasePublishableKey = "sb_publishable_ZvBGbnfY7TOjcNT2uBh_lg_jhoAc5uc";

export const supabase = createClient(supabaseUrl, supabasePublishableKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
    detectSessionInUrl: false,
  },
});
