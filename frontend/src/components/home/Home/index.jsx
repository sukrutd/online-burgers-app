import { motion } from 'framer-motion';
import Founder from 'components/home/Founder';
import Menu from 'components/home/Menu';
import './styles.scss';

const motionOptions = {
	initial: {
		x: '-100%',
		opacity: 0
	},
	whileInView: {
		x: 0,
		opacity: 1
	}
};

const Home = () => {
	return (
		<>
			<section className='home'>
				<div className='brand-name'>
					<motion.h1 {...motionOptions}>Burgerwala</motion.h1>
					<motion.p {...motionOptions} transition={{ delay: 0.3 }}>
						Burgers and cheese are bound to please!
					</motion.p>
				</div>
				<motion.a
					href='#menu'
					className='explore-menu'
					initial={{ y: '-100%', opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ delay: 0.5 }}
				>
					Explore Menu
				</motion.a>
			</section>
			<Founder />
			<Menu />
		</>
	);
};

export default Home;
