import { reviews } from '../../data/reviews';
import { AiFillStar } from 'react-icons/ai';
import { motion } from 'framer-motion';
const Reviews = () => {
	return (
		<div className='grid gap-8 max-w-7xl mx-auto'>
			{/* <span className="text-center text-3xl italic text-gray-700">Forming lasting relationships with our community</span> */}
			<div className='grid grid-cols-2 gap-16 place-items-center '>
				{reviews.map((review) => (
					<div key={review.id} className=''>
						<Review name={review.name} description={review.description} />
					</div>
				))}
			</div>
		</div>
	);
};

export default Reviews;

const Review = ({ name, description }) => {
	return (
		<div className='grid gap-2 text-justify text-gray-700'>
			<span className='text-2xl font-semibold font-tinos '>{name}.</span>
			<FiveStars />
			<span className='mx-8 text-lg text-dark '>{description}</span>
		</div>
	);
};

const FiveStars = () => {
	const stars = [1, 2, 3, 4, 5];
	return (
		<>
			<div className='flex space-x-2'>
				{stars.map((s, i) => (
					<motion.div
						key={i}
						className='text-red text-lg'
						initial={{ opacity: 0, scale: 0 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{ duration: 1.3, delay: 0.2 * i }}
					>
						<motion.div
							initial={{ scale: 0.75, opacity: .85 }}
							whileInView={{ scale: 1.0, opacity: 1 }}
							transition={{
								duration: 1,
								repeat: Infinity,
								repeatType: 'reverse',
								delay: 0.2 * i,
								repeatDelay: .4,
							}}
						>
							<AiFillStar />
						</motion.div>
					</motion.div>
				))}
			</div>
		</>
	);
};
