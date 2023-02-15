import hero from '../../public/Images/hero.jpg';
import companyVan from '../../public/Images/company-van.png';
import Image from 'next/image';

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

			<div className='relative h-full bg-black/70'>
				<div className='max-w-7xl mx-auto grid place-items-center grid-cols-3  h-full gap-16'>
					<div className='col-span-1'>
						<Image
							src={companyVan}
							alt='company van'
							// width={600}
							// height={600}
						/>
					</div>
					<div className='col-span-2 '>
						<HeroText />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;

const HeroText = () => {
	return (
		<div className='text-white  text-2xl grid gap-2 w-3/4 mx-auto rounded p-4 bg-red-700/50  tracking-wide'>
			<span className="text-4xl font-semibold tracking-wider">Family Owned and Trusted</span>
			<span>Focusing on homes 60 - 120 years old! While forming long lasting relationships build on trust with our clients.</span>
		
		</div>
	);
};
