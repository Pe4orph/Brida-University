import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';

import Header from './components/heading/Header';
import Footer from './components/heading/Footer';

import Main from './pages/main/Main';
import Aboutus from './pages/aboutus/Aboutus';
import Article from './pages/article/Article';
import Career from './pages/career/Career';
import Majors from './pages/majors/Majors';
import NotFound from './pages/NotFound/NotFound';
import OurStudents from './pages/ourstudents/OurStudents';
import Professionals from './pages/professionals/Professionals';
import Publications from './pages/publications/Publications';
import RegistrationForm from './pages/registration/RegistrationForm';

import ArticleDetails from './components/subpages/articledetails/ArticleDetails';
import MajorDetails from './components/subpages/majordetails/MajorDetails';

function App() {
	return (
		<BrowserRouter>
			<Header />

			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/about" element={<Aboutus />} />
				<Route path="/articles" element={<Article />} />
				<Route path="/career" element={<Career />} />
				<Route path="/majors" element={<Majors />} />
				<Route path="/notfound" element={<NotFound />} />
				<Route path="/students" element={<OurStudents />} />
				<Route path="/professionals" element={<Professionals />} />
				<Route path="/publications" element={<Publications />} />
				<Route path="/registration" element={<RegistrationForm />} />

				<Route path="/articles/:id" element={<ArticleDetails />} />
				<Route path="/majors/:id" element={<MajorDetails />} />
			</Routes>

			<Footer />
		</BrowserRouter>
	);
}

export default App;
