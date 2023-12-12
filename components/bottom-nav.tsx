import Link from 'next/link'
import { useRouter } from 'next/router'
import MenuBookIcon from '@mui/icons-material/MenuBook';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

const BottomNav = () => {
	const router = useRouter()

	return (
		<div className='sm:hidden'>
			<nav className='fixed bottom-0 w-full border-t bg-zinc-100 pb-safe dark:border-zinc-800 dark:bg-zinc-900'>
				<div className='mx-auto flex h-16 max-w-md items-center justify-around px-6'>
					{links.map(({ href, label, icon }) => (
						<Link
							key={label}
							href={href}
							className={`flex h-full w-full flex-col items-center justify-center space-y-1 ${
								router.pathname === href
									? 'text-indigo-500 dark:text-indigo-400'
									: 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50'
							}`}
						>
							{icon}
							<span className='text-xs text-zinc-600 dark:text-zinc-400'>
								{label}
							</span>
						</Link>
					))}
				</div>
			</nav>
		</div>
	)
}

export default BottomNav

const links = [
	{
		label: 'TaskList',
		href: '/',
		icon: (
			<FormatListBulletedIcon />
		),
	},
	{
		label: 'Garden',
		href: '/garden',
		icon: (
			<svg
				viewBox='0 0 15 15'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				width='18'
				height='18'
			>
				<path
					d='M7.5 15V7m0 .5v3m0-3a4 4 0 00-4-4h-3v3a4 4 0 004 4h3m0-3h3a4 4 0 004-4v-3h-3a4 4 0 00-4 4v3zm0 0l4-4m-4 7l-4-4'
					stroke='currentColor'
				/>
			</svg>
		),
	},
	{
		label: 'Encyclopedia',
		href: '/encyclopedia',
		icon: (
			<MenuBookIcon />
		),
	},
]
