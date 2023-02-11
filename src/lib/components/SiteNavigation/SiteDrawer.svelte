<script lang="ts">
    import { Drawer, drawerStore } from "@skeletonlabs/skeleton";
    import SiteSidebar from "./SiteSidebar.svelte";

    // responsive
    $: classesDrawer = $drawerStore.id === 'site-sidenav' ? 'lg:hidden' : '';
</script>

<Drawer class={classesDrawer}>
    <SiteSidebar embedded={true}/>
</Drawer>