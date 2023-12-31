import { Country, State } from 'country-state-city';
import './styles.scss';

const Shipping = () => {
	return (
		<main className='shipping-details'>
			<section>
				<h3>Shipping Details</h3>
				<form>
					<div className='form-group'>
						<label>Address</label>
						<input type='text' placeholder='Enter Address' className='primary' />
					</div>
					<div className='form-group'>
						<label>City</label>
						<input type='text' placeholder='Enter City' className='primary' />
					</div>
					<div className='form-group'>
						<label>Country</label>
						<select className='primary'>
							<option value=''>Country</option>
							{Country &&
								Country.getAllCountries().map((country) => (
									<option key={country.isoCode} value={country.isoCode}>
										{country.name}
									</option>
								))}
						</select>
					</div>
					<div className='form-group'>
						<label>State</label>
						<select className='primary'>
							<option value=''>State</option>
							{State &&
								State.getStatesOfCountry('IN').map((state) => (
									<option key={state.isoCode} value={state.isoCode}>
										{state.name}
									</option>
								))}
						</select>
					</div>
					<div className='form-group'>
						<label>Pin Code</label>
						<input type='text' placeholder='Enter Pin Code' className='primary' />
					</div>
					<div className='form-group'>
						<label>Mobile Number</label>
						<input type='text' placeholder='Enter Mobile Number' className='primary' />
					</div>
					<button type='submit' className='button primary'>
						Confirm Order
					</button>
				</form>
			</section>
		</main>
	);
};

export default Shipping;
