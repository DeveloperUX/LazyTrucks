Meteor.publish('nearbyTrucks', function(userLoc) {
  return Trucks.find({ loc: { '$geoWithin': { '$centerSphere': [ [ -74, 40.74 ] , 100 / 3963.2 ] } } }).fetch();
});
