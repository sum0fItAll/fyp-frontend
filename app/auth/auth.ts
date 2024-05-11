import { supabase } from './supabaseClient';

export const login = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
        throw new Error(error.message);
    }
    return data?.user;
};

export const logout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
        throw new Error(error.message);
    }
    console.log('logged out');
};

export const signUp = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) {
        throw new Error(error.message);
    }
    return data?.user;
};
