<script lang="ts">
	import { supabaseClient } from '$lib/db';
	import { AppBar, AppShell, SlideToggle } from '@skeletonlabs/skeleton';

	let loading = false;
	let username: string;
	let email: string;
    let password: string;
    let groupId: string;
    let newUser: boolean = false;

	const handleLogin = async () => {
        loading = true;
        console.log('Push Button ', username, email, password);
        const authData = {
            email: email,
            password: password,
            options: { 
                data: {} 
            } 
        };
        try {
            // once everone is setup can remove this to stop randos from signing up
            if(newUser) {
                authData.options.data = {
                    logged_in_group_id: groupId,
                    username: username,
                }
                const { data, error } = await supabaseClient.auth.signUp(authData);
                console.log('Sign Up ', data, error);
                if (error) throw error;
            } else {
                const { data, error} = await supabaseClient.auth.signInWithPassword(authData);
                console.log('Sign In ', data, error);
                if (error) throw error;
            }
        } catch(error) {
            if (error instanceof Error) {
				alert(error.message);
			} else {
                console.error(error);
            }
        } finally {
            loading = false;
        }
        
        // Email only login
        /*
		try {
			loading = true;
			const { error } = await supabaseClient.auth.signInWithOtp({ email });
			if (error) throw error;
			alert('Check your email for the login link!');
		} catch (error) {
			if (error instanceof Error) {
				alert(error.message);
			}
		} finally {
			loading = false;
		}
        */
	};
</script>

<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<div class="container mx-auto p-8 space-y-8">Please login or sign up</div>
		</AppBar>
	</svelte:fragment>
	<div class="container mx-auto p-8 space-y-8">
		<form on:submit|preventDefault={handleLogin}>
			<div class="card">
				<header class="card-header space-y-4">
					<h2>Please enter email and password</h2>
				</header>
                <SlideToggle class="p-4" bind:checked={newUser}>New User</SlideToggle>
				<div class="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <label for="email">
						<span>Email</span>
						<input type="text" 
                               id="email" 
                               bind:value={email} 
                               required autocomplete="username" />
					</label>
                    <label for="password">
						<span>Password</span>
						<input type="password" 
                               id="password" 
                               bind:value={password} 
                               minlength="8" 
                               required autocomplete="current-password"/>
					</label>
                   
					<label for="fullName" class="{!newUser ? 'invisible' : ''}">
						<span>User Name</span>
						<input type="text" id="fullName" bind:value={username} minlength="3" required="{newUser}" />
					</label>
					<label for="groupId" class="{!newUser ? 'invisible' : ''}">
						<span>Group/Family ID</span>
						<input type="text" id="groupId" bind:value={groupId} minlength="8" required="{newUser}" />
					</label>
                    
				</div>
			</div>
            <button class="btn btn-filled-primary btn-base mt-4" 
                    type="submit" disabled="{loading}">
                Continue
            </button>
			<!-- input
					type="submit"
					class="button block"
					value={loading ? 'Loading' : 'Send magic link'}
					disabled={loading}
				/-->
		</form>
	</div>
</AppShell>
