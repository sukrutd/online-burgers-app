import { motion } from 'framer-motion';
import burger from 'assets/burger1.png';
import './styles.scss';

const Contact = () => {
	return (
		<section className='contact'>
			<motion.form
				initial={{ x: '-100vw', opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				transition={{ delay: 0.3 }}
			>
				<h2>Contact Us</h2>
				<input type='text' placeholder='Name' />
				<input type='email' placeholder='Email' />
				<textarea cols='30' rows='10' placeholder='Enter your message here.'></textarea>
				<button type='submit'>Send</button>
			</motion.form>
			<motion.div
				initial={{ x: '100vw', opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				transition={{ delay: 0.3 }}
				className='form-border'
			>
				<motion.div
					initial={{ x: '50%', y: '-100vh', opacity: 0 }}
					animate={{ x: '50%', y: '-50%', opacity: 1 }}
					transition={{ delay: 0.8 }}
				>
					<img src={burger} alt='Burger' />
				</motion.div>
			</motion.div>
		</section>
	);
};

export default Contact;
