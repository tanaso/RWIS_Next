import Link from 'next/link'
import { useRouter } from 'next/router'
import MenuBookIcon from '@mui/icons-material/MenuBook';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { MdForest } from "react-icons/md";

const BottomNav = () => {
	const router = useRouter()

	return (
		<div className='sm:hidden'>
			<nav className='fixed bottom-0 w-full border-t bg-text-color pb-safe'>
				<div className='mx-auto flex h-16 max-w-md items-center justify-around px-6'>
					{links.map(({ href, label, icon }) => (
						<Link
							key={label}
							href={href}
							className={`flex h-full w-full flex-col items-center justify-center space-y-1 ${
								router.pathname === href
									? 'text-soil-color'
									: 'text-bg-color'
							}`}
						>
							{icon}
							<span className='text-xs text-bg-color'>
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
			<MdForest size={23}/>
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
