const AboutSnip = () => {
	return (
		<div className='max-w-5xl mx-auto'>
			<div className='grid gap-2 text-center '>
				<span className='text-5xl font-semibold '>
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
		<div className='grid gap-4 text-xl text-gray-700'>
			<p className='text-3xl  font-semibold '>
				We Focus on cleanliness, client communication, quality of work and
				transparent business pracices.
			</p>
			<p>
				For over 15 years,{' '}
				<span className='font-semibold'>Erik Nelson Plumbing</span> has provided
				trustworthy, dependable, and economical plumbing services in the twin
				cities and the surrounding areas. Over the years we have been in a
				business we have been dedicated to helping our local area by solving
				their challenging plumbing needs.
			</p>
		</div>
	);
};
