import burger1 from 'assets/burger1.png';
import burger2 from 'assets/burger2.png';
import burger3 from 'assets/burger3.png';
import MenuCard from './MenuCard';
import './styles.scss';

const Menu = () => {
	return (
		<section id='menu'>
			<h2>MENU</h2>
			<div className='cards-container'>
				<MenuCard
					itemNum={1}
					title='Cheese Burger'
					price={125}
					imageSrc={burger1}
					delay={0.1}
				/>
				<MenuCard
					itemNum={2}
					title='Crispy Chicken Burger'
					price={180}
					imageSrc={burger2}
					delay={0.5}
				/>
				<MenuCard
					itemNum={3}
					title='Mexican Burger with French Fries'
					price={240}
					imageSrc={burger3}
					delay={0.9}
				/>
			</div>
		</section>
	);
};

export default Menu;
