const {Router, Route, Link, IndexRoute} = ReactRouter;

// Note: we're using verson 1.0.0 of react router here.
// a lot of the examples online are from 0.13.0
// make sure you check out if you find old code online
// https://github.com/rackt/react-router/blob/master/UPGRADE_GUIDE.md


// Also their docs are very good, take a minute to go through them in detail:
// https://github.com/rackt/react-router/tree/master/docs


Meteor.startup(function() {
  function requireAuth(nextState, replaceState) {
    if (!Meteor.user()){
      console.log("USER:",Meteor.user());
      replaceState({ nextPathname: nextState.location.pathname }, '/login');
    }
  }
  ReactDOM.render((
    <Router>
      <Route path="/" component={App}>
        <Route path="login" component={Login} />
        <Route path="trucks" component={Trucks} />
      </Route>
    </Router>
  ), document.getElementById("app"));
});
