import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { CgProfile } from 'react-icons/cg';

const activeLink = `px-3 py-2 rounded-md text-sm text-primary font-medium underline underline-offset-8 decoration-primary decoration-2`;
const nonActiveLink = `px-3 py-2 rounded-md text-sm hover:text-primary font-medium hover:underline hover:underline-offset-8 hover:decoration-primary hover:decoration-2`;
function Nav() {
	const router = useRouter();

	const [isOpen, setIsOpen] = useState(false);
	const [showIcon, setShowIcon] = useState(false);
	return (
		<>
			<nav className='shadow-md sticky top-0 bg-white z-50'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='flex items-center justify-between h-16'>
						<div className='flex items-center'>
							<Link
								href='/'
								className='flex-shrink-0 cursor-pointer'>
								<img
									className='w-20  cursor-pointer'
									src='/Logo1.svg'
									alt='Pera Logo'
								/>
							</Link>
							<div className='hidden md:block'>
								<div className='ml-10 flex items-baseline space-x-4'>
									<Link href='/'>
										<a
											className={
												router.pathname == '/'
													? activeLink
													: nonActiveLink
											}>
											Loans
										</a>
									</Link>
									<Link href='/new-application'>
										<a
											className={
												router.pathname ==
												'/new-application'
													? activeLink
													: nonActiveLink
											}>
											New Application
										</a>
									</Link>
									<Link href='/proforma-invoice'>
										<a
											className={
												router.pathname ==
												'/proforma-invoice'
													? activeLink
													: nonActiveLink
											}>
											Generate Invoice
										</a>
									</Link>
									<Link href='/dsa'>
										<a
											className={
												router.pathname == '/dsa'
													? activeLink
													: nonActiveLink
											}>
											DSA
										</a>
									</Link>
								</div>
							</div>
						</div>
						<div className='flex items-center justify-between'>
							<div
								className='flex text-primary cursor-pointer hover:text-secondary'
								onClick={() => setShowIcon(!showIcon)}>
								<CgProfile className='text-2xl mx-2 text-primary cursor-pointer ' />{' '}
								<span className='mr-5'>Settings</span>
								{showIcon && (
									<div className='shadow-lg absolute mt-10 border border-primary text-primary bg-accent'>
										<button
											className='hover:bg-primary hover:text-accent w-full  p-1 border-b border-primary '
											onClick={() => {
												router.push('/profile');
											}}>
											Profile
										</button>
										<button className='hover:bg-primary hover:text-accent w-full  p-1'>
											Logout
										</button>
									</div>
								)}
							</div>
							<div className='-mr-2 flex md:hidden'>
								<button
									onClick={() =>
										setIsOpen((isOpen) => !isOpen)
									}
									type='button'
									className='bg-accent inline-flex items-center justify-center p-2 rounded-md text-primary hover:text-accent hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-accent focus:ring-none'
									aria-controls='mobile-menu'
									aria-expanded='false'>
									<span className='sr-only'>
										Open main menu
									</span>
									{!isOpen ? (
										<svg
											className='block h-6 w-6'
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											stroke='currentColor'
											aria-hidden='true'>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth='2'
												d='M4 6h16M4 12h16M4 18h16'
											/>
										</svg>
									) : (
										<svg
											className='block h-6 w-6'
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											stroke='currentColor'
											aria-hidden='true'>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth='2'
												d='M6 18L18 6M6 6l12 12'
											/>
										</svg>
									)}
								</button>
							</div>
						</div>
					</div>
				</div>

				{isOpen && (
					<div
						className='md:hidden transition ease-in-out delay-150'
						id='mobile-menu'>
						<div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
							<a
								href='#'
								className='hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium'>
								Dashboard
							</a>
						</div>
					</div>
				)}
			</nav>
		</>
	);
}

export default Nav;
