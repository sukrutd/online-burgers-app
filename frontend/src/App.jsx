import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';
import Home from 'components/home/Home';
import Contact from 'components/contact/Contact';
import Cart from 'components/cart/Cart';
import Shipping from 'components/cart/Shipping';
import ConfirmOrder from 'components/cart/ConfirmOrder';
import 'theme/app.scss';

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/cart' element={<Cart />} />
				<Route path='/shipping' element={<Shipping />} />
				<Route path='/confirm-order' element={<ConfirmOrder />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
