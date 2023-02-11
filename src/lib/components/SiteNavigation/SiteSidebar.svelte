<script lang="ts">
    import { page } from '$app/stores';
    import { writable, type Writable} from 'svelte/store';

    import SvgIcon from '$lib/components/SvgIcon/SvgIcon.svelte';
    import { menuNavLinks } from './links';

    import { AppRail } from '@skeletonlabs/skeleton';
    import {AppRailTile} from '@skeletonlabs/skeleton';

    // stores
    import {storeCurrentUrl} from '$lib/components/stores';
    import { drawerStore } from '@skeletonlabs/skeleton';

    // Props
	export let embedded = false; // when hidden in a drawer

    // local
    const storeCategory: Writable<string> = writable('dashboard'); // dashboard | lists | tasks | reminders | admin
	let filteredMenuNavLinks: any[] = menuNavLinks; // routes for each section ie) dashboard/reports, lists/private, admin/groups

	// ListItem Click Handler
	function onListItemClick(): void {
		// On Drawer embed Only:
		if (!embedded) return;
		drawerStore.close();
	}

    function setNavCategory(c: string): void {
		storeCategory.set(c);
		// prettier-ignore
		switch($storeCategory) {
			case('dashboard'): filteredMenuNavLinks = menuNavLinks.filter((linkSet: any) => linkSet.id === 'dashboard'); break;
			case('lists'): filteredMenuNavLinks = menuNavLinks.filter((linkSet: any) => linkSet.id === 'lists'); break;
			case('tasks'): filteredMenuNavLinks = menuNavLinks.filter((linkSet: any) => linkSet.id === 'tasks'); break;
			case('reminders'): filteredMenuNavLinks = menuNavLinks.filter((linkSet: any) => linkSet.id === 'reminders'); break;
			case('admin'): filteredMenuNavLinks = menuNavLinks.filter((linkSet: any) => ['admin', 'user'].includes(linkSet.id)); break;
            // example with sections
            // case('elements'): filteredMenuNavLinks = menuNavLinks.filter((linkSet: any) => ['tokens', 'base', 'elements'].includes(linkSet.id)); break;
		}
	}

	// Lifecycle
	page.subscribe((p) => {
		console.log('PATH ', p);
		let pathMatch: string = p.url.pathname.split('/')[1];
		console.log('Path Match ', pathMatch);
		if (!pathMatch) { 
			// return;
			console.log('Coffee Home ', pathMatch);
			pathMatch = 'dashboard';
		}
		if (['admin', 'user'].includes(pathMatch)) pathMatch = 'admin';
		// TODO: use the below if two routes belong in one category..
		// if (['components', 'actions'].includes(pathMatch)) pathMatch = 'svelte';
		setNavCategory(pathMatch);
	});
    storeCategory.subscribe((c: string) => {
		setNavCategory(c);
	});

	// Reactive
	$: classesActive = (href: string) => ($storeCurrentUrl?.includes(href) ? 'bg-primary-active-token' : '');

</script>
<div class="grid grid-cols-[auto_1fr] h-full border-r border-black/5 dark:border-white/5 backdrop-blur {$$props.class ?? ''}">
    <!-- 
		App Rail - SELECTED is the storeCategory...
	-->
	<AppRail selected={storeCategory} background="bg-white/30 dark:bg-black/30">
		<AppRailTile label="Dashboard" value={'dashboard'}><SvgIcon name="robot" width="w-6" height="h-6" /></AppRailTile>
		<hr class="opacity-30" />
		<AppRailTile label="Lists" value={'lists'}><SvgIcon name="list-checked" width="w-6" height="h-6" /></AppRailTile>
		<hr class="opacity-30" />
		<AppRailTile label="Tasks" value={'tasks'}><SvgIcon name="folder-open" width="w-6" height="h-6" /></AppRailTile>
		<hr class="opacity-30" />
		<AppRailTile label="Reminders" value={'reminders'}><SvgIcon name="bell" width="w-6" height="h-6" /></AppRailTile>
		<hr class="opacity-30" />
		<AppRailTile label="Admin" value={'admin'}><SvgIcon name="screwdriver" width="w-6" height="h-6" /></AppRailTile>
		<hr class="opacity-30" />
	</AppRail>
	<!-- Nav Links -->
	<section class="p-4 pb-20 space-y-4 overflow-auto">
		{#each filteredMenuNavLinks as {id, title, list}, i }
			{#if list.length > 0}
				<!-- Title -->
				<div {id} class="text-primary-700 dark:text-primary-500 font-bold uppercase px-4">{title}</div>
				<!-- Navigation List-->
				<nav class="list-nav">
					<ul>
						{#each list as {href, label, badge} }
							<li on:click={onListItemClick} on:keypress>
								<a {href} value={href} class={classesActive(href)} data-sveltekit-preload-data="hover">
									<span class="flex-auto">{label}</span>
									{#if badge}<span class="badge badge-filled-secondary">{badge}</span>{/if}
								</a>
							</li>
						{/each}
					</ul>
				</nav>
				<!-- Divider -->
				{#if i + 1 < filteredMenuNavLinks.length}<hr class="!my-6 opacity-50" />{/if}
			{/if}
		{/each}
	</section>
</div>
