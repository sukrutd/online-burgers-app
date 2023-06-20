import { Country, State } from 'country-state-city';
import './styles.scss';

const Shipping = () => {
	return (
		<section className='shipping'>
			<div className='shipping-details'>
				<h2>Shipping Details</h2>
				<form>
					<div className='form-group'>
						<label>Address</label>
						<input type='text' placeholder='Enter Address' />
					</div>
					<div className='form-group'>
						<label>City</label>
						<input type='text' placeholder='Enter City' />
					</div>
					<div className='form-group'>
						<label>Country</label>
						<select>
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
						<select>
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
						<input type='text' placeholder='Enter Pin Code' />
					</div>
					<div className='form-group'>
						<label>Mobile Number</label>
						<input type='text' placeholder='Enter Mobile Number' />
					</div>
					<button type='submit'>Confirm Order</button>
				</form>
			</div>
		</section>
	);
};

export default Shipping;
