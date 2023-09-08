import { invalidate } from "$app/navigation";
import { NEXT_PUBLIC_SUPABASE_ANON_KEY, NEXT_PUBLIC_SUPABASE_URL } from "$env/static/private";
import { createSupabaseLoadClient } from "@supabase/auth-helpers-sveltekit";

export const load = async ({ fetch, data, depends }: any) => {
	depends("supabase:auth");

	const supabase = createSupabaseLoadClient({
		supabaseKey: NEXT_PUBLIC_SUPABASE_ANON_KEY,
		supabaseUrl: NEXT_PUBLIC_SUPABASE_URL,
		event: { fetch },
		serverSession: data.session
	});

	const {
		data: { session }
	} = await supabase.auth.getSession();

	return { supabase, session };
};
