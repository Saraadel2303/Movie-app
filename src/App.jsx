import AllMovies from "./components/AllMovies";
import Header from "./components/Header";

const App = () => {
	return (
		<div className="bg-purple-950 min-h-screen">
			<Header/>
			<AllMovies/>
		</div>
	);
};

export default App;
