import { GiWashingMachine, GiStraightPipe } from 'react-icons/gi';
import { MdPlumbing } from 'react-icons/md';
import { motion } from 'framer-motion';

const IconFilter = ({ name }) => {
	return (
		<>
			<motion.div
				className='text-9xl '
				initial={{ scale: 0.96 }}
				animate={{ scale: 1 }}
				transition={{ duration: 1.4, repeat: Infinity, repeatType: 'mirror' }}
			>
				{name === 'Plumbing' && (
					<span className=' '>
						{' '}
						<MdPlumbing />
					</span>
				)}
				{name === 'Gas Piping' && (
					<span className='  '>
						{' '}
						<GiStraightPipe />
					</span>
				)}
				{name === 'Gas Appliance Installation' && (
					<span className=' text-red '>
						{' '}
						<GiWashingMachine />
					</span>
				)}
				
			</motion.div>
		</>
	);
};

export default IconFilter;