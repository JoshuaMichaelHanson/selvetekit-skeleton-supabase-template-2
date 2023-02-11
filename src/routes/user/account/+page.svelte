<script lang="ts">

	import UserAccount from "$lib/components/UserAccount/UserAccount.svelte";

	// each page under layout can use the info from load..
	// by loading the 'page' form $app/stores
    import { page } from '$app/stores';

</script>

<UserAccount session={$page.data.session}></UserAccount>