import './styles.scss';

const ConfirmOrder = () => {
	return (
		<main className='order-confirmation'>
			<section>
				<h3>Confirm Order</h3>
				<form>
					<div className='form-group'>
						<label htmlFor='payment-cod'>Cash On Delivery</label>
						<input type='radio' name='payment' id='payment-cod' />
					</div>
					<div className='form-group'>
						<label htmlFor='payment-online'>Online</label>
						<input type='radio' name='payment' id='payment-online' />
					</div>
					<button type='submit' className='button primary'>
						Place Order
					</button>
				</form>
			</section>
		</main>
	);
};

export default ConfirmOrder;
