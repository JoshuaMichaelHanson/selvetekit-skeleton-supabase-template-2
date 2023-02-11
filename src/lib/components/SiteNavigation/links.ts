// Navigation Links & Sitemap

export const menuNavLinks: any = [
	// Home or Dashboard? ---

	{
		id: 'dashboard',
		title: 'Dashboard',
		list: [ // todo: need to figure out how to have default route that is not always highlighed!
			{ href: '/', label: 'Group News' }, // make homepage not show the nav unless on mobile
			{ href: '/dashboard/overdue', label: 'Overdue' },
			{ href: '/dashboard/today', label: 'Today' },
			{ href: '/dashboard/week', label: 'This Week' },
			{ href: '/dashboard/month', label: 'This Month' }, // , badge: 'New'
			// { href: '/docs/recommended', label: 'Recommended' }, // DISABLED until more complete
			{ href: '/dashboard/leader-board', label: 'Leader Board' }
		]
	},
	
	{
		id: 'lists',
		title: 'Lists',
		list: [
			{ href: '/lists/personal', label: 'Personal' }, // make homepage not show the nav unless on mobile
			{ href: '/lists/group', label: 'Group' },
			{ href: '/lists/templates', label: 'Templates' },
			{ href: '/lists/archived', label: 'Archived' }
		]
	},

	// Tasks links --- would be cool to dynamically build this IDK maybe not

	{
		id: 'tasks',
		title: 'Tasks',
		list: [
			{ href: '/tasks/personal', label: 'Personal' },
			{ href: '/tasks/group', label: 'Group' }
		]
	},

	{
		id: 'reminders',
		title: 'Reminders',
		list: [
			{ href: '/reminders/personal', label: 'Personal' },
			{ href: '/reminders/group', label: 'Group' },
			{ href: '/reminders/completed', label: 'Completed' }
		]
	},

	{
		id: 'admin',
		title: 'Admin',
		list: [
			{ href: '/admin/users', label: 'Users' },
			{ href: '/admin/lists', label: 'Lists' },
			{ href: '/admin/tasks', label: 'Tasks' },
			{ href: '/admin/groups', label: 'Groups' }
		]
	},
	{
		id: 'user',
		title: 'User',
		list: [
			{ href: '/user/account', label: 'My Account' }
		]
	},
];
