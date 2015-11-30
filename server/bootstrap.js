/**
 * Code to be called on the Server when the app starts up
 */
Meteor.startup(function() {

  // TODO : Development stuff that'll need to be removed later

  // First wipe out the list of trucks
  Trucks.remove({});
  Menus.remove({});

  // Add the list of trucks from the seed file
  var trucks = JSON.parse(Assets.getText('seed.json')).trucks;

  trucks.forEach( function(truck) {
    Trucks.insert(truck);
  });

});
