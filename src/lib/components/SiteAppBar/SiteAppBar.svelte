<script lang="ts">
    import { browser } from '$app/environment';

    // Types
    import { type ModalSettings, type ModalComponent, GradientHeading } from '@skeletonlabs/skeleton';
    import type { DrawerSettings } from '@skeletonlabs/skeleton';

    // TODO: Add custom logos here
    import SiteLogoIcon from '$lib/components/SiteLogo/SiteLogoIcon.svelte';

    // Components
    import SvgIcon from '$lib/components/SvgIcon/SvgIcon.svelte';
    import { AppBar } from '@skeletonlabs/skeleton';
    import { Divider } from '@skeletonlabs/skeleton';

    // Utilites
    import { LightSwitch } from '@skeletonlabs/skeleton';
    import { menu } from '@skeletonlabs/skeleton';
    import { modalStore } from '@skeletonlabs/skeleton';

    // Stores
    import { drawerStore } from '@skeletonlabs/skeleton';

    // Local
	let isOsMac = false;

    // Set Search Shortkey Keys
    if (browser) {
        let os = navigator.userAgent;
        isOsMac = os.search('Mac') !== -1;
    }

    // Drawer Handler
	function drawerOpen(): void {
		const s: DrawerSettings = { id: 'site-sidenav' };
		drawerStore.open(s);
	}

    // TODO: Hook up search later... Search
    /*
	function triggerSearch(): void {
		const modalComponent: ModalComponent = { ref: DocsSearch };
		const d: ModalSettings = {
			type: 'component',
			component: modalComponent,
			classes: '!p-0'
		};
		modalStore.trigger(d);
	}
    */

    // Keyboard Shortcut (CTRL/⌘+K) to Focus Search
	function onWindowKeydown(e: KeyboardEvent): void {
		if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
			// Prevent default browser behavior of focusing URL bar
			e.preventDefault();
			// If modal currently open, close modal (allows to open/close search with CTRL/⌘+K)
			$modalStore.length ? modalStore.close() : ''; //triggerSearch();
		}
	}


</script>

<!-- NOTE: using stopPropagation to override Chrome for Windows search shortcut -->
<svelte:window on:keydown|stopPropagation={onWindowKeydown} />

<AppBar>
    <!-- Branding -->
	<svelte:fragment slot="lead">
		<!-- Drawer Menu -->
		<button on:click={drawerOpen} class="lg:!hidden btn btn-sm">
			<SvgIcon name="bars" />
		</button>
		<!-- Logo -->
		<a class="mr-4" href="/" title="Go to Homepage">
			<span class="inline"><SiteLogoIcon /></span>
		</a>
		<!-- 
			Names we have gone through
			Hanson HoneyDew - HH
			Anything & Everything - AE - A&E
			Coffee, Lists and Tasks - CLT
			Coffee Time - CT
			Cup of Everything - CoE
			Cup of Life - CoL
			Done/Done - DD
			Done Games - DG
			Task Games - TG
			Mocha Expresso - ME
			Mocha Express - ME
			Is it Done Yet - IDY
			Track It - TI
			Track Anything and Everything - TAE
			Got a feeling and cannot let go - LOL
			One and Done - OD
			Weekend Warrior
			Frog Temple
			
		-->
		<GradientHeading tag="h3" direction="bg-gradient-to-br" from="from-primary-500" to="to-accent-500">
			Coffee Time
		</GradientHeading>
	</svelte:fragment>

    <!-- Search -->
	<div class="hidden md:inline md:ml-4">
		<button class="btn btn-ghost-surface btn-sm"> <!-- on:click={triggerSearch} TODO -->
			<SvgIcon name="search" width="w-4" height="h-4" class="mr-2" />
			<span>Search</span>
			<span class="text-[11px] font-bold opacity-60 pl-2">{isOsMac ? '⌘' : 'Ctrl'}+K</span>
		</button>
	</div>
</AppBar>