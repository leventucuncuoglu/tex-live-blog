import { createClient } from '@supabase/supabase-js'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// Server-side client
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Client-side client for components
export const createSupabaseClient = () => createClientComponentClient()

export default supabase 