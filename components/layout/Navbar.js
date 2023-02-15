import Link from 'next/link';
import { navLinks } from '../../data/navigation';
import { AiFillPhone, AiFillMail } from 'react-icons/ai';

const Navbar = () => {
	return (
		<div className='max-w-7xl mx-auto w-full py-2'>
			<div className='grid gap-4'>
				<QuickContact />
				<Logo />
				<Navigation />
			</div>
		</div>
	);
};

export default Navbar;

const QuickContact = () => {
	return (
		<div className='grid gap-1 place-self-end'>
			<div className='flex space-x-2 items-center'>
				<span className='text-2xl'>
					<AiFillPhone />
				</span>
				<span>612-242-6483</span>
			</div>
			<div className='flex space-x-2'>
				<span className='text-2xl'>
					<AiFillMail />
				</span>
				<span>info@eriknelsonplumbing.com</span>
			</div>
		</div>
	);
};

const Logo = () => {
	const areas = ['MSP', 'Edina', 'Richfield', 'RoseVille', 'St Anthony'];
	return (
		<div className='place-items-center grid gap-1'>
			<span className='text-4xl'>Erik Nelson Plumbing LLC</span>
			<div className='flex space-x-4 '>
				{areas.map((area, index) => (
					<span key={index}>{area}</span>
				))}
			</div>
		</div>
	);
};

const Navigation = () => {
	return (
		<div className='flex justify-between w-full'>
			{navLinks.map((link, index) => (
				<Link href={link.path} key={index}>
					<span className=''>{link.name}</span>
				</Link>
			))}
		</div>
	);
};
