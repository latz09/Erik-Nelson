import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children }) => {
	return (
		<div className='flex flex-col h-scree font-nunito'>
			<div>
				<Navbar />
			</div>
			<main className='flex-grow'>{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
