import { createClient, SupabaseClient } from '@supabase/supabase-js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppState } from 'react-native';
import 'react-native-url-polyfill/auto';

const supabaseUrl = 'https://jidrcnatwlvaiqekahrs.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImppZHJjbmF0d2x2YWlxZWthaHJzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTEzOTA3MzgsImV4cCI6MjAyNjk2NjczOH0.Dyx9TWwOjBH_1SzoSB10Z3N3V_2Fog30d1PdSMww-rU';

export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
        storage: AsyncStorage,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false,
    },
});

AppState.addEventListener('change', (state) => {
    if (state === 'active') {
        supabase.auth.startAutoRefresh();
    } else {
        supabase.auth.stopAutoRefresh();
    }
});
