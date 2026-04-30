import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://zrgjhynzbhlxoyhgzdnp.supabase.co';
const SUPABASE_KEY = 'sb_publishable__9EIZHGkDiI9LYh118tpIA_95haRx6n';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);