import type { LayoutLoad } from './$types'
import { getSupabase } from '@supabase/auth-helpers-sveltekit'

export const load: LayoutLoad = async (event) => {
  const { session } = await getSupabase(event);
  console.log('Main Layout Session ', session);
  return { session }
}