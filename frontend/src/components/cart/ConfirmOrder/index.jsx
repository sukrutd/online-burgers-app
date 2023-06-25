import './styles.scss';

const ConfirmOrder = () => {
	return (
		<main className='order-confirmation'>
			<section>
				<h2>Confirm Order</h2>
				<form>
					<div className='form-group'>
						<label htmlFor='payment-cod'>Cash On Delivery</label>
						<input type='radio' name='payment' id='payment-cod' />
					</div>
					<div className='form-group'>
						<label htmlFor='payment-online'>Online</label>
						<input type='radio' name='payment' id='payment-online' />
					</div>
					<button type='submit'>Place Order</button>
				</form>
			</section>
		</main>
	);
};

export default ConfirmOrder;
