<script lang="ts">
	import { onMount } from 'svelte';
	import type { AuthSession } from '@supabase/supabase-js';
	import { supabaseClient } from '$lib/db';
	import Avatar from './EditAvatar.svelte';

	export let session: AuthSession;

	let loading = false;
	let username: string | null = null;
	let groupId: string | null = null;
	let avatarUrl: string | null = null;

	onMount(() => {
		getProfile();
	});

	const getProfile = async () => {
		try {
			loading = true;
			const { user } = session;

			const { data, error, status } = await supabaseClient
				.from('profiles')
				.select(`username, logged_in_group_id, avatar_url`)
				.eq('id', user.id)
				.single();

			if (data) {
				username = data.username;
				groupId = data.logged_in_group_id;
				avatarUrl = data.avatar_url;
			}

			if (error && status !== 406) throw error;
		} catch (error) {
			if (error instanceof Error) {
				alert(error.message);
			}
		} finally {
			loading = false;
		}
	};

	async function updateProfile() {
		try {
			loading = true;
			const { user } = session;

			const updates = {
				id: user.id,
				username: username,
				logged_in_group_id: groupId,
				avatar_url: avatarUrl,
				updated_at: new Date()
			};

			let { error } = await supabaseClient.from('profiles').upsert(updates);

			if (error) throw error;
		} catch (error) {
			if (error instanceof Error) {
				alert(error.message);
			}
		} finally {
			loading = false;
		}
	}

	async function signOut() {
		try {
			loading = true;
			let { error } = await supabaseClient.auth.signOut();
			if (error) throw error;
		} catch (error) {
			if (error instanceof Error) {
				alert(error.message);
			}
		} finally {
			loading = false;
		}
	}
</script>

<div class="container mx-auto p-8 space-y-8">
	<form class="" on:submit|preventDefault={updateProfile}>
		<div class="pt-4 pb-4 grid grid-cols-1 md:grid-cols-3 gap-4">
			<div class="col-span-1 flex flex-col-reverse">
				<Avatar bind:url={avatarUrl} size={10} on:upload={updateProfile} />
			</div>
			<div class="col-span-2">
				<label for="email" class="pb-4">
					<span>Email</span>
					<input type="text" id="email" value={session.user.email} disabled />
				</label>
				<label for="username" class="pb-4">
					<span>User Name</span>
					<input type="text" id="username" bind:value={username} minlength="3" required />
				</label>

				<label for="groupId" class="pb-4">
					<span>Group/Family ID</span>
					<input type="text" id="groupId" bind:value={groupId} minlength="8" required />
				</label>
				<div class="mt-4">
					<input
						type="submit"
						class="btn btn-filled-primary"
						value={loading ? 'Loading...' : 'Update'}
						disabled={loading} />
					<button class="btn btn-filled-accent" on:click={signOut} disabled={loading}>
            Sign Out
          </button>
				</div>
			</div>
		</div>
	</form>
</div>
