import { motion } from 'framer-motion';

const MenuCard = ({ itemNum, title, price, imageSrc, clickHandler, delay = 0 }) => {
	return (
		<motion.div
			initial={{ x: '-100%', opacity: 0 }}
			whileInView={{ x: 0, opacity: 1 }}
			transition={{ delay }}
			className='menu-card'
		>
			<div className='card-title'>Item {itemNum}</div>
			<div className='card-body'>
				<img src={imageSrc} alt={itemNum} />
				<h3>₹{price}</h3>
				<p>{title}</p>
				<button className='button primary' onClick={() => clickHandler(itemNum)}>
					Buy Now
				</button>
			</div>
		</motion.div>
	);
};

export default MenuCard;
