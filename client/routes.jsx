const {Router, Route, IndexRoute, Link, history} = ReactRouter;

// Note: we're using verson 1.0.0 of react router here.
// a lot of the examples online are from 0.13.0
// make sure you check out if you find old code online
// https://github.com/rackt/react-router/blob/master/UPGRADE_GUIDE.md


// Also their docs are very good, take a minute to go through them in detail:
// https://github.com/rackt/react-router/tree/master/docs

// A history object must be created to maintain the history for our router
const browserHistory = history.createHistory();

Meteor.startup(function() {

  ReactDOM.render((
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="trucks" component={FoodTrucks} />
        <Route path="truck/:id" component={Menu} />
      </Route>
    </Router>
  ), document.getElementById("app"));
});
