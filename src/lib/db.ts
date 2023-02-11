import { createClient } from '@supabase/auth-helpers-sveltekit';
// import { env } from '$env/dynamic/public';
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public';


// console.log('Where the fuck is the ENV? ', env);
console.log('ENV', PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY);

//https://github.com/supabase/supabase/discussions/6088
// to redirect back to 3000 when site is live

// export const supabaseClient = createClient(env.PUBLIC_SUPABASE_URL, env.PUBLIC_SUPABASE_ANON_KEY);
export const supabaseClient = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY);

//https://answers.netlify.com/t/sveltekit-environment-variables-not-appearing-in-prod/78027/4