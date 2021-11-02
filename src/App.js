import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import MovieList from "./pages/MovieList";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/movies/:id" component={Movie} />
            <Route path="/movies" component={MovieList} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}
