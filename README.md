# Selvete Kit 1.0, Skeleton BETA, Supabase

# This project was created with the Skeleton CLI

```
npm create skeleton-app@latest my-skeleton-app
	- Enable SvelteKit's Typescript syntax
cd my-skeleton-app
npm run dev
```			
# Since skeleton is still in beta this may or may not turn into the real project

## Serve as learning these technologies to build the real app
  1. Selvete Kit - just hit 1.0 so ready for prime time  
    a. Routing  
    b. Components  
    c.   
  2. Skeleton - really like the themes and the components  
    a. TailWind - also have tailwind.ui components  
    b. Components - study the code to learn how to make my own  
    c. [Link](https://www.skeleton.dev)  
  3. Supabase - see how much we can get done with the free tier  
    a. PostgreSQL  
    b. Row Level Security [RLS](https://supabase.com/docs/guides/auth/row-level-security)    
    c.   

# install Auth Helpers and Supabase.js
```
npm install @supabase/supabase-js

npm install @supabase/auth-helpers-sveltekit
```

# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

# Update Log
## Like they say if its not on the backlog it does not exist
## If its not in the readme it never happended

Svelte Notes and links

Only do admin stuff from the server pages, NEVER from the front end only code
The admin stuff needs to use the private key that bypasses RLS

https://kit.svelte.dev/docs/server-only-modules

How to use public ENV variables on the front end
https://answers.netlify.com/t/sveltekit-supabase-deployment-error/52403/5

TLDR; need to go into static on prod and dynamic for dev

As the app needs to scale can take server only code and put Into edge/functions

Also going to need to use pg_cron for alerts reminders

https://onesignal.com/  can allow me to send email, text, sms

*********************************************************************************************************
12-25-2022  
Status Update  
  
Able to create new svelte kit application and connect it to Supabase  
Been researching Supabase RLS to secure the app  
ERD is sketched out enough to start on some basics.  Do not need to hook up groups, but will  
Be good lesson in complex queries to secure the table for multiple families or groups  
  
https://supabase.com/docs/guides/auth/row-level-security  

  
Able to create a new skeleton CSS CLI app.  Need to take the two concepts and combine them   
Together into one single starter app.  Put this into GitHub as a template for future apps.  

https://www.skeleton.dev  
  
New focus for tonight will be to get template into GitHub and then see how I can add the CSS  
Like skeleton has to hide the left navigation on mobile/smaller devices  
  
  
After that want to add the forms (look at form validation libs) and then focus on DB security.  
				
*************************************************************************************************************
12-25-2022  
Status Update  
    
Some good code review of the Skeleton Docs from GitHub.  Really like how they did their custom  
Components and would like to mimic mine after theirs  
    
Also researched SVG vs icon.  SVG is the new standard and can be styles using regular CSS.  
Can resize, color, background, shadow -> easier to customize.  
Can also be smaller download size but not always  
    
The way they hide the side bar is to make it a component and then hide that component at a certain  
Size.  When it’s hidden that same component is shown in a drawer when the button is clicked.  
  
So need to make make a JmhSidebar.svelte component NEXT  

*************************************************************************************************************
12-27-2022  
Status Update  
  
The SiteSidebar is made and first part is working (minus the links part) but the main nav is working  
And shows the active button pushed  
  
Still need to get Supabase hooked up, but not sure if I want to use email auth since the kids are not  
Going to be able to check theirs.  The more I think email and password will be easier and then I can  
Just add them manually without a sign up page.  Will need a sign up or magic link eventually but  
For now just keep moving forward.  
  
Today going to start on the SiteAppBar because I want the menu that shows the drawer with the   
SiteSidebar when the screen is small.  

Can also search for some new SVG Icons for the app (FUN stuff)  

Once that is working going to add the links part, add some place holder components for each route  
  
Then its time to hook up the email/password screen make some users and then focus on the   
DB for a while learning RLS.  
  
*************************************************************************************************************
01-15-2022  
Status Update  

Been about 2-weeks since a status update.  Made some good progress since then.  Supabase is hooked up  
With sign in page and user update page.  Time to get serious about this project.  
  
Going to make default routes for each of the ones listed in the links.ts file.  This   will make the nav seem  
To be functional.  After that going to start working on LISTs or TASKs.  
  
Update once the default routes are in place  
  
Utah (Snowbasin and Pow Mow) 23rd - 27th then Crystal Mnt Feb 9th - 17th   
  
Upload latest code to GitHub before adding default routes!  
  
Is this done?  (updated 02-11-2023 Midnight Seattle time :)
Utah was a blast!  We did leave one day early because everyone was so tired and possibly hungover

Snowbasin was really nice.  Best lodge I have ever seen.  Very fancy.  Snow was well groomed with a few pockets of pow.

Powder Mountain (Pow Mow) was in my top 5 rides ever!  We got a guide (LaMar) who took us on the entire Mnt.
We hit some awesome powder stashs and rode in a SnowCat to one of the spots.  Lightning Ridge (Last Resort)

Super pumped with the new Lobster Board and Burton Step-On bindings.  Did not set my stance back and rode
twin the whole time.  Going to set my stance back 1 or 2" for my upcoming ride to Chrystal Mountin in Seattle

See below!

*************************************************************************************************************
01-17-2022  
Status Update  
  
Updated the project to the latest version of Skeleton   
Just used the CLI and moved the components and files over.  Not the best ways but  
had a bunch of errors doing it using npm update  
  
The CSS looks different but like the new look.  Need to update a few buttons.  
  
Next up is making empty pages for each of the routes.  
Then start on LISTS or TASKS  

NOTE:  Group news/feed is also going to be a killer/show feature.  
Able to type and when hit enter shows up on anyone screen who is in that group.  
Can also be put into 'notifications' once thats figured out.  

Also make a 'home page' that explains the project and what 'Coffee Time' is.  
That way '/' will not be highlighed on the feed.

*************************************************************************************************************
02-09-2022  
Status Update

Out in Seattle for Angies birthday to see great grandma and Sandy.

We are also going skiing at Chrystal Mountain the 13th and 14th

Eli got stiches today by his eye.  3 in total and is going to be getting a black eye

Checked on the status of the Skeleton.dev CSS framework.  At 0.124.2  last updated
on my project at 92.2.  Just going to wait for the 1.0 as the last time was not too
bad but want to focus on features.


*************************************************************************************************************
02-10-2022  
Status Update

Good day in Seattle went to Pikes Market had some king crab for lunch.

Grandma is in good spirits and we have cleaned up the house/our room nicely.
Lots of talk about how dangerous Seattle is right now but today was not too bad.

Everyone is sleeping but I wanted to take some notes and get these ideas down while I have some
time and energy.

Thinking about buying a new bad ass linux dev box but investigating Jetbrains code spaces.  They have some new
tools coming out and the free plan is not too bad.  We all know how that goes tho get ya hooked and then set
the hook.
https://system76.com/laptops/pang12/configure

Replit just fucked me over by taking away most of the hacker plan benifits (1 from 5 boosted/always on apps), 
less memory and storage and overall just worse.  Price stayed the same but now have teams version that is twice
as much money but same benifits as old hacker plan.  

So keep using low end boxes for now and utilize the Jetbrains setup until that fucks me over then buy a real box.

Side note Chrystal Mountain is looking to get 4" - 13" of snow Sunday night/Monday morning.  Could be the stars aligning
once again out here in the PNW.  Going to start as Rain but temps to drop to 25-ish so might be light and fluffy for a day or 2


*************************************************************************************************************
02-23-2022  
Status Update

Jetbrains Spaces is not easy to use and Fleets Terminal does not have /bin installed by default

On a happy note we just got 14" at Welch today.  So couple days after getting back from Washington and Chrystal Mnt
we get some sweet snow here in MN.  Got a few good runs on Chicken and then road with the kiddos

Back to looking at a new computer because I want to have someting that is my own with out using windows.



*************************************************************************************************************