/**
 * Code to be called on the Server when the app starts up
 */
Meteor.startup(function() {

  // TODO : Development stuff that'll need to be removed later

  // First wipe out the list of trucks
  Trucks.remove({});
  Menus.remove({});

  // TODO : Need to run this as a cron job every hour

  var trucks = [];

  // Grab the complete list of food trucks from those guys
  // This section will grab the trucks who have shared their location
  var foodTrucksList = HTTP.call("GET", "http://foodtruckfiesta.com/apps/map_json.php?num_days=365&minimal=0&alert_nc=y&alert_hc=0&alert_pm=0&rand=458950514");

  _.forEach(foodTrucksList.data.markers, function(marker) {
    // Before we parse this Truck let's make sure this is not a duplicate
    var existing = _.findWhere(trucks, {handle: marker.truck.toUpperCase()});
    if( !existing ) {
      // Let's grab only the fields we need
      let truck = _.pick(marker, 'coord_lat', 'coord_long', 'truck', 'print_name');
      // Rename some fields, handle will be the document ID
      truck.handle = truck.truck.toUpperCase();
      truck.name = truck.print_name;
      truck.loc = [truck.coord_long, truck.coord_lat];
      truck = _.omit(truck, ['truck', 'print_name']);
      console.log("Truck with Coords: ", truck);
      // Add the truck to our full list of trucks
      trucks.push(truck);
    }
  });

  // Add the list of trucks from the seed file
  var trucksFromSeed = JSON.parse(Assets.getText('seed.json'));
  _.forEach(trucksFromSeed, function(truckFromSeed) {
    // If the Truck already exists, simply append the information
    var existing = _.findWhere(trucks, {handle: truckFromSeed.handle.toUpperCase()});
    if( existing ) {
      // Add the fields from the seed file objects (url and image)
      existing.url = truckFromSeed.url;
      existing.image = truckFromSeed.image;

      console.log("Found an existing truck: ", existing);
    }
    // If this truck doesn't exist, add it to the global list of trucks
    else {
      trucks.push(truckFromSeed);
    }

  });

  trucks.forEach( function(truck) {
    Trucks.insert(truck);
  });

});
