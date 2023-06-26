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
		<main>
			<section className='home'>
				<div className='brand-name'>
					<motion.h1 {...motionOptions}>Burgerwala</motion.h1>
					<motion.p {...motionOptions} transition={{ delay: 0.3 }}>
						Burgers and cheese are bound to please!
					</motion.p>
				</div>
				<motion.a
					href='#menu'
					initial={{ y: '-100%', opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ delay: 0.5 }}
					className='button primary explore-menu'
				>
					Explore Menu
				</motion.a>
			</section>
			<Founder />
			<Menu />
		</main>
	);
};

export default Home;
