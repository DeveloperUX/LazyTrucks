var milesToRadian = function(miles){
  var earthRadiusInMiles = 3959;
  return miles / earthRadiusInMiles;
};

Meteor.publish('nearbyTrucks', function(userLoc) {

  let lat = userLoc ? userLoc.latitude : 34;
  let long = userLoc ? userLoc.longitude : -73;

  console.log(userLoc);
  console.log("LAT - LONG: " + long + ' ' + lat);

  return Trucks.find({
      loc: {
        '$geoWithin': {
          '$centerSphere': [ [ long, lat ] , milesToRadian(6) ]
        }
      }
    });
});
