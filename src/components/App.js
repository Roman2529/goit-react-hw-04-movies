import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';
import styles from './App.module.css';

const HomePage = lazy(() =>
  import('../pages/HomePage.js' /* webpackChunkName: "home-page" */),
);
const MoviePage = lazy(() =>
  import('../pages/MoviePage.js' /* webpackChunkName: "movie-page" */),
);
const MovieDetails = lazy(() =>
  import('../pages/MovieDetails.js' /* webpackChunkName: "movie-details" */),
);
const Actors = lazy(() =>
  import('../pages/Actors.js' /* webpackChunkName: "actors" */),
);
const Review = lazy(() =>
  import('../pages/Review.js' /* webpackChunkName: "review" */),
);

const App = () => {
  return (
    <>
      <header>
        <nav className={styles.Navigation}>
          <ul className={styles.NavigationList}>
            <li>
              <NavLink
                exact
                to="/"
                className={styles.NavigationLink}
                activeClassName={styles.NavigationLinkActive}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/movies"
                className={styles.NavigationLink}
                activeClassName={styles.NavigationLinkActive}
              >
                Movies
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/movies/:id" component={MovieDetails} />
            <Route path="/movies" component={MoviePage} />
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </div>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/movies/:id/actors" component={Actors} />
            <Route path="/movies/:id/reviews" component={Review} />
          </Switch>
        </Suspense>
      </div>
    </>
  );
};

export default App;
