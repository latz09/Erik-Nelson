import Link from 'next/link';
import { navLinks } from '../../data/navigation';
import { AiFillPhone, AiFillMail } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
	return (
		<div className='max-w-7xl mx-auto w-full py-2'>
			<div className='grid gap-8'>
				<QuickContact />
				<div className='text-4xl lg:text-6xl'>
					<Logo />
				</div>
				<Navigation />
			</div>
		</div>
	);
};

export default Navbar;

const QuickContact = () => {
	return (
		<div className='flex justify-between mx-2 lg:space-x-8 lg:place-self-end text-lg tracking-wider'>
			<div className='flex space-x-2 items-center'>
				<span className='text-2xl text-blue'>
					<AiFillPhone />
				</span>
				<span>612-242-6483</span>
			</div>
			<div className='flex space-x-2'>
				<span className='text-2xl text-blue'>
					<AiFillMail />
				</span>
				<div>
					info<span className='text-red scale-105 font-bold'>@</span>
					eriknelsonplumbing.com
				</div>
			</div>
		</div>
	);
};

export const Logo = () => {
	const areas = ['MSP', 'Edina', 'Richfield', 'Roseville', 'St Anthony'];
	return (
		<motion.div
			className='place-items-center grid gap-2'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ delay: 0.1, duration: 1 }}
		>
			<span className=' text-red font-semibold font-tinos scale-y-110 text-center'>
				Erik Nelson Plumbing LLC
			</span>
			<div className='flex space-x-2 lg:space-x-8 text-base lg:text-xl '>
				{areas.map((area, index) => (
					<motion.div
						key={index}
						className='tracking-widest'
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0.2 * index, duration: 1.4 }}
					>
						{area}
					</motion.div>
				))}
			</div>
		</motion.div>
	);
};

const Navigation = () => {
	return (
		<>
		{/* mobile to large */}
		<div className="lg:hidden  grid place-self-end mx-4">
			<span className="text-4xl">
				<GiHamburgerMenu />
			</span>

		</div>

		{/* large and up */}
			<div className='hidden lg:flex justify-between w-full'>
				{navLinks.map((link, index) => (
					<Link href={link.path} key={index}>
						<span className='p-4 text-xl font-semibold tracking-wide text-blue uppercase hover:font-bold hover:scale-105 transition duration-700 cursor-pointer'>
							{link.name}
						</span>
					</Link>
				))}
			</div>
		</>
	);
};
