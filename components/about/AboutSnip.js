import { motion } from 'framer-motion';
const AboutSnip = () => {
	return (
		<div className='max-w-5xl mx-auto'>
			<div className='grid gap-2 text-center  '>
				<span className='text-3xl lg:text-5xl font-semibold text-dark/80'>
					Thanks For Visiting Us
				</span>
				<div>
					<Snip />
				</div>
			</div>
		</div>
	);
};

export default AboutSnip;

const Snip = () => {
	return (
		<div className='grid gap-4 text-lg lg:text-xl '>
			<p className='text-xl lg:text-3xl  font-semibold '>
				We Focus on cleanliness, client communication, quality of work and
				transparent business pracices.
			</p>
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1, delay: 0.1 }}
				className='mx-2 lg:mx-0'
			>
				For over 15 years,{' '}
				<span className='font-semibold'>Erik Nelson Plumbing</span> has provided{' '}
				<span className='font-semibold '>
					trustworthy, dependable, and economical plumbing services in the twin
					cities
				</span>{' '}
				and the surrounding areas. Over the years we have been in a business we
				have been dedicated to helping our local area by solving their{' '}
				<span className='font-semibold '>challenging plumbing needs.</span>
			</motion.div>
		</div>
	);
};
