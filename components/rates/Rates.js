import { rates } from '../../data/rates';
import Link from 'next/link';

import { BsFillFileTextFill } from 'react-icons/bs';
import ButtonLink from '../utils/ButtonLink';

const Rates = () => {
	return (
		<div className='grid gap-16 tracking-wider max-w-5xl mx-auto'>
			<RatesHeading />
			<div className='grid grid-cols-2  gap-8'>
				{rates.map((rate) => (
					<div key={rate.id} className=' shadow-lg'>
						<RatesCard rate={rate} />
					</div>
				))}
			</div>
			<div className=' flex justify-between items-center '>
				<ButtonLink title={'Contact Now'} path={'/'} />
				<WarrantyLink />
			</div>
		</div>
	);
};

export default Rates;

const RatesHeading = () => {
	return (
		<div className='grid gap-2 tracking-wider text-center'>
			<span className='text-4xl font-semibold'>Upfront Pricing</span>
			<span className='text-2xl  font-semibold text-gray-700'>
				We proudly offer exceptional service, competitive pricing, and superior
				quality
			</span>
		</div>
	);
};

const RatesCard = ({ rate }) => {
	return (
		<div className='grid gap-1 text-center p-4 rounded border border-red-600/50 h-full'>
			<span className='text-2xl font-semibold '>{rate.name}</span>
			<span className=''>{rate.description}</span>
		</div>
	);
};

const WarrantyLink = () => {
	return (
		<>
			<Link href='/'>
				<button className='font-semibold tracking-wide text-red-600/80 text-2xl flex items-center space-x-2'>
					<span> Upfront warranty info</span>
					<span className=''>
						<BsFillFileTextFill />
					</span>
				</button>
			</Link>
		</>
	);
};
