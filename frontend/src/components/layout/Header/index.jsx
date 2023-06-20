import { IoFastFoodOutline, IoCart, IoPerson, IoLogIn } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './styles.scss';

const Header = ({ isAuthenticated = false }) => {
	return (
		<nav>
			<motion.div initial={{ x: '-100%' }} whileInView={{ x: 0 }} className='logo'>
				<Link to='/'>
					<IoFastFoodOutline />
				</Link>
			</motion.div>
			<div className='nav-links'>
				<Link to='/'>Home</Link>
				<Link to='/contact'>Contact</Link>
				<Link to='/about'>About</Link>
				<Link to='/cart'>
					<IoCart />
				</Link>
				<Link to={isAuthenticated ? '/me' : '/login'}>
					{isAuthenticated ? <IoPerson /> : <IoLogIn />}
				</Link>
			</div>
		</nav>
	);
};

export default Header;
