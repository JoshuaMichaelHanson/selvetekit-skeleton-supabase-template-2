<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { supabaseClient } from '$lib/db';
	import { FileButton, Avatar } from '@skeletonlabs/skeleton';

	export let size = 10;
	export let url: string | null;

	let avatarUrl: string | null = null;
	let uploading = false;
	let files: FileList;

	const dispatch = createEventDispatcher();

	const downloadImage = async (path: string) => {
		try {
			const { data, error } = await supabaseClient.storage.from('avatars').download(path);

			if (error) {
				throw error;
			}

			const url = URL.createObjectURL(data);
			avatarUrl = url;
		} catch (error) {
			if (error instanceof Error) {
				console.log('Error downloading image: ', error.message);
			}
		}
	};

	const uploadAvatar = async () => {
		try {
			uploading = true;

			if (!files || files.length === 0) {
				throw new Error('You must select an image to upload.');
			}

			const file = files[0];
			const fileExt = file.name.split('.').pop();
			const filePath = `${Math.random()}.${fileExt}`;

			let { error } = await supabaseClient.storage.from('avatars').upload(filePath, file);

			if (error) {
				throw error;
			}

			url = filePath;
			dispatch('upload');
		} catch (error) {
			if (error instanceof Error) {
				alert(error.message);
			}
		} finally {
			uploading = false;
		}
	};

	$: if (url) downloadImage(url);
</script>

<div>
	<!-- Replace with Skeleton Avatar component -->
	{#if avatarUrl}
  <Avatar src={avatarUrl} 
          width="w-56" 
          rounded="rounded-full"
		  class="mb-4"
          border='border-4 border-surface-300-600-token hover:!border-primary-500 cursor-pointer' />
	{:else}
  <Avatar initials="N/A"
  width="w-56" 
          rounded="rounded-full" 
          border='border-4 border-surface-300-600-token hover:!border-primary-500 cursor-pointer' />
	{/if}

	<FileButton class="flex flex-col-reverse"
		bind:files
		on:change={uploadAvatar}
		disabled={uploading}
		accept="image/*"
		button="btn btn-filled-accent">
		{uploading ? 'Uploading ...' : 'Upload File'}
	</FileButton>
</div>
