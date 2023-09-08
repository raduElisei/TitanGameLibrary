import { supabase } from "$lib/supabaseClient";

export async function load() {
	const { data } = await supabase.from("Game").select();
	return {
		Game: data ?? []
	};
}
