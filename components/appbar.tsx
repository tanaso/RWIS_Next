import Link from 'next/link'
import { useRouter } from 'next/router'

const links = [
	{ label: 'Encyclopedia', href: '/encyclopedia' },
	{ label: 'Garden', href: '/garden' },
]

const Appbar = () => {
	const router = useRouter()

	return (
		<div className='fixed top-0 left-0 z-20 w-full bg-bg-color pt-safe'>
			<header className='border-b bg-text-color px-safe dark:border-text-color'>
				<div className='mx-auto flex h-20 max-w-screen-md items-center justify-between px-6'>
					<Link href='/'>
						<h1 className='font-medium text-bg-color'>Iris</h1>
					</Link>

					<nav className='flex items-center space-x-6'>
						<div className='hidden sm:block'>
							<div className='flex items-center space-x-6'>
								{links.map(({ label, href }) => (
									<Link
										key={label}
										href={href}
										className={`text-sm ${
											router.pathname === href
												? 'text-indigo-500 dark:text-indigo-400'
												: 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50'
										}`}
									>
										{label}
									</Link>
								))}
							</div>
						</div>

						<div
							title='Gluten Free'
							className='h-10 w-10 rounded-full bg-zinc-200 bg-cover bg-center shadow-inner dark:bg-zinc-800'
							style={{
								backgroundImage: 'url(/images/cat.png)',
							}}
						/>
					</nav>
				</div>
			</header>
		</div>
	)
}

export default Appbar
