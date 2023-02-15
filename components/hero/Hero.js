import hero from '../../public/Images/hero.jpg';
import companyVan from '../../public/Images/company-van.png';
import Image from 'next/image';
import ButtonLink from '../utils/ButtonLink';
import { motion } from 'framer-motion';

const Hero = () => {
	return (
		<div className='relative w-full h-[60vh]'>
			<Image
				src={hero}
				alt='ddd'
				priority='true'
				layout='fill'
				objectFit='cover'
				objectPosition='center'
			/>

			<div className='relative h-full bg-dark/80'>
				<div className='max-w-7xl mx-auto grid place-items-center grid-cols-3  h-full gap-16'>
					<motion.div
						className='col-span-1'
						initial={{ scale: 0.98 }}
						animate={{ scale: 1 }}
						transition={{
							duration: 1.5,
							delay: 1.2,
							repeat: Infinity,
							repeatType: 'reverse',
						}}
					>
						<motion.div
							// using framermotion to animate from left and scale in
							initial={{ x: -400, scale: 0.9 }}
							animate={{ x: 0, scale: 1 }}
							transition={{ duration: 1, delay: 0.2 }}
						>
							<Image
								src={companyVan}
								alt='company van'
								// width={600}
								// height={600}
							/>
						</motion.div>
					</motion.div>
					<div className='col-span-2 place-items-center grid gap-2 '>
						<HeroText />
						<ButtonLink title='Request a quote' path='/' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;

const HeroText = () => {
	return (
		<div className=' text-light text-2xl grid gap-2 w-3/4 mx-auto rounded   tracking-wide '>
			<span className='text-5xl font-bold tracking-wider text-red font-tinos scale-y-110'>
				Family Owned and Trusted
			</span>
			<motion.div className='mx-2'
			initial={{ opacity: 0}}
			animate={{ opacity: 1 }}
			transition={{ delay: 0.2, duration: 1 }}
			>
				<span className="font-semibold text-white"> Focusing on homes 60 - 120 years old! </span> We strive to form long lasting
				relationships built on trust with our clients.
			</motion.div>
		</div>
	);
};
