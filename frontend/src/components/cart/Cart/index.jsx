import { Link } from 'react-router-dom';
import burger1 from 'assets/burger1.png';
import burger2 from 'assets/burger2.png';
import burger3 from 'assets/burger3.png';
import CartItem from './CartItem';
import './styles.scss';

const Cart = () => {
	const increment = () => {};

	const decrement = () => {};

	return (
		<main className='cart'>
			<section>
				<CartItem
					title='Cheese Burger'
					image={burger1}
					value={0}
					increment={() => increment(1)}
					decrement={() => decrement(1)}
				/>
				<CartItem
					title='Crispy Chicken Burger'
					image={burger2}
					value={0}
					increment={() => increment(2)}
					decrement={() => decrement(2)}
				/>
				<CartItem
					title='Mexican Burger with French Fries'
					image={burger3}
					value={0}
					increment={() => increment(3)}
					decrement={() => decrement(3)}
				/>
				<div className='estimated-total'>
					<div className='row'>
						<h4>Sub Total</h4>
						<p>₹{2000}</p>
					</div>
					<div className='row'>
						<h4>Shipping</h4>
						<p>₹{200}</p>
					</div>
					<div className='row'>
						<h4>Tax</h4>
						<p>₹{2000 * 0.18}</p>
					</div>
					<div className='row'>
						<h4>Total</h4>
						<p>₹{2000 + 2000 * 0.18 + 200}</p>
					</div>
					<Link to='/shipping' className='checkout'>
						Checkout
					</Link>
				</div>
			</section>
		</main>
	);
};

export default Cart;
