import { Logo, QuickContact } from './Navbar';
import { navLinks } from '../../data/navigation';
import Link from 'next/link';
import ButtonLink from '../utils/ButtonLink';
const Footer = () => {
	return (
		<div className='py-12 bg-gray-200 border-t border-blue/10'>
			<div className='max-w-7xl mx-auto grid gap-8 xl:gap-0 xl:grid-cols-2'>
				<div className="grid  ">
					<div className='text-3xl'>
						<Logo />
					</div>
					<div className=' grid place-items-center my-4'>
						<QuickContact />
					</div>
				</div>
				<div className='grid gap-8 '>
					<FooterNavs />
					<div className='place-self-center'>
						<ButtonLink path='/contact' title='Request a quote' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;

const FooterNavs = () => {
	return (
		<div className='grid grid-cols-2 lg:grid-cols-3 gap-4 place-items-center lg:text-xl '>
			{navLinks.map((link, index) => (
				<div key={index}>
					<Link href={link.path}>
						<span className='font-semibold hover:font-bold hover:opacity-80 transition duration-700 cursor-pointer '>
							{link.name}
						</span>
					</Link>
				</div>
			))}
		</div>
	);
};
