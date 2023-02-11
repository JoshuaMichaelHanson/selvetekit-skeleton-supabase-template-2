<script lang="ts">
	import '@skeletonlabs/skeleton/themes/theme-hamlindigo.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';
	import { AppShell, AppBar, Modal, Toast, dataTableHandler} from '@skeletonlabs/skeleton'

	// SvelteKit Imports
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import { afterNavigate, invalidate } from '$app/navigation';

	// Stores
	import { storeCurrentUrl } from '$lib/components/stores';
	import SiteSidebar from '$lib/components/SiteNavigation/SiteSidebar.svelte';
	import SiteAppBar from '$lib/components/SiteAppBar/SiteAppBar.svelte';
	import SiteDrawer from '$lib/components/SiteNavigation/SiteDrawer.svelte';
	import { onMount } from 'svelte';
	import { supabaseClient } from '$lib/db';
	import Auth from '$lib/components/SiteAuth/Auth.svelte';
	import type { AuthSession } from '@supabase/supabase-js';

	export let session: AuthSession;
	
	onMount(() => {
      const {
        data: { subscription },
      } = supabaseClient.auth.onAuthStateChange(() => {
        invalidate('supabase:auth')
      })
  
      return () => {
        subscription.unsubscribe()
      }
    })

	afterNavigate((params: any) => {
		// Store current page route URL
		storeCurrentUrl.set($page.url.pathname);
		// Scroll to top
		const isNewPage: boolean = params.from && params.to && params.from.route.id !== params.to.route.id;
		const elemPage = document.querySelector('#page');
		if (isNewPage && elemPage !== null) {
			elemPage.scrollTop = 0;
		}
	});
</script>

<Modal />
<Toast />
<SiteDrawer />

<!-- App Shell -->
{#if !$page.data.session}
	<Auth />
{:else}
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<SiteAppBar />
	</svelte:fragment>
	<!-- Page Route Content -->
	<svelte:fragment slot="sidebarLeft">
		<SiteSidebar class="hidden lg:grid w-[360px] overflow-hidden" />
	</svelte:fragment>

	<slot />
</AppShell>
{/if}
<!-- 
	You can pass the session into the slot
	Can also pass the session into appbar and sidebar
	Think you could also grab the session in the components if they need to be used
	independently
	Account session="{$page.data.session}" / 
-->
