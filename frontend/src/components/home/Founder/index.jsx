import { motion } from 'framer-motion';
import founderImage from 'assets/founder.png';
import './styles.scss';

const Founder = () => {
	return (
		<section className='founder'>
			<motion.div
				initial={{ x: '-100%', opacity: 0 }}
				whileInView={{ x: 0, opacity: 1 }}
				className='founder-info'
			>
				<img src={founderImage} alt='Founder' height={200} width={210} />
				<h4>Sukrut Daphalapurkar</h4>
				<p className='remarks'>
					Hey everyone, I am the founder of Burgerwala. Our aim is to serve customers with
					a wide range of delicious and hygienic burgers. <br />
					We wish to keep our customers happy and their cravings satisfied.
				</p>
			</motion.div>
		</section>
	);
};

export default Founder;
