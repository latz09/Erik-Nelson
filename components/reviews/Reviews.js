import { reviews } from '../../data/reviews';
import { AiFillStar } from 'react-icons/ai';
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
			<span className='text-2xl font-semibold '>{name}.</span>
			<FiveStars />
			<span className='mx-8 text-lg'>{description}</span>
		</div>
	);
};

const FiveStars = () => {
	const stars = [1, 2, 3, 4, 5];
	return (
		<>
			<div className='flex space-x-2'>
				{stars.map((s, i) => (
					<span key={i} className='text-red-600/80 text-lg'>
                        <AiFillStar />
					</span>
				))}
			</div>
		</>
	);
};
