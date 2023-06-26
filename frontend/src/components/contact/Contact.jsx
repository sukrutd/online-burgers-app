import { motion } from 'framer-motion';
import burger from 'assets/burger1.png';
import './styles.scss';

const Contact = () => {
	return (
		<main className='contact-us'>
			<motion.form
				initial={{ x: '-100vw', opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				transition={{ delay: 0.3 }}
			>
				<h3>Contact Us</h3>
				<input type='text' placeholder='Name' className='primary' />
				<input type='email' placeholder='Email' className='primary' />
				<textarea
					rows='15'
					cols='30'
					placeholder='Enter your message here.'
					className='primary'
				></textarea>
				<button type='submit' className='button primary'>
					Send
				</button>
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
					className='image-wrapper'
				>
					<img src={burger} alt='Burger' />
				</motion.div>
			</motion.div>
		</main>
	);
};

export default Contact;
