const CartItem = ({ title, value, image, increment, decrement }) => {
	return (
		<div className='cart-item'>
			<div className='description'>
				<h5>{title}</h5>
				<img src={image} alt={title} />
			</div>
			<div className='actions'>
				<button onClick={decrement}>-</button>
				<input type='number' value={value} readOnly />
				<button onClick={increment}>+</button>
			</div>
		</div>
	);
};

export default CartItem;
