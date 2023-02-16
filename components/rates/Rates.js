import { rates } from '../../data/rates';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BsFillFileTextFill } from 'react-icons/bs';
import ButtonLink from '../utils/ButtonLink';

const Rates = () => {
	return (
		<motion.div
			className='grid gap-16 tracking-wider max-w-5xl mx-auto'
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.2 }}
		>
			<RatesHeading />
			<div className='grid lg:grid-cols-2  gap-8 mx-4 xl:mx-0'>
				{rates.map((rate, index) => (
					<motion.div
						key={rate.id}
						className=' shadow-md'
						initial={{ opacity: 0, scale: 0.8 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{ duration: 1, delay: 0.2 * index }}
					>
						<RatesCard rate={rate} />
					</motion.div>
				))}
			</div>
			<div className='grid gap-12 lg:gap-0  lg:flex lg:justify-between lg:items-center '>
				<div className='order-2 lg:order-1 grid place-items-center'>
					<ButtonLink title={'Contact Now'} path={'/'} />
				</div>
				<div className='order-1 lg:order-2 grid place-items-center'>
					<WarrantyLink />
				</div>
			</div>
		</motion.div>
	);
};

export default Rates;

const RatesHeading = () => {
	return (
		<div className='grid gap-2 tracking-wider text-center font-tino'>
			<span className='text-2xl lg:text-4xl font-semibold font-tinos'>
				Upfront Pricing
			</span>
			<span className='text-lg lg:text-xl text-dark   '>
				We proudly offer exceptional service, competitive pricing, and superior
				quality
			</span>
		</div>
	);
};

const RatesCard = ({ rate }) => {
	return (
		<div className='grid gap-1 text-center p-4 rounded border border-blue/40 h-full hover:border-blue/100 transtion duration-700 '>
			<span className='text-2xl font-semibold font-tinos '>{rate.name}</span>
			<span className='text-dark font-semibold'>{rate.description}</span>
		</div>
	);
};

const WarrantyLink = () => {
	return (
		<div>
			<Link href='/'>
				<button className='font-semibold tracking-wide text-red-600/80 text-2xl flex items-center space-x-2 '>
					<span> Upfront warranty info</span>
					<span className=''>
						<BsFillFileTextFill />
					</span>
				</button>
			</Link>
		</div>
	);
};
