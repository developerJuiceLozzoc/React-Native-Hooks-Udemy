import * as Location from "expo-location"

const tenMeters = 0.0001

const getLocation = increment => {
  return {
    timestamp: Date.now(),
    coords: {
      speed: 0,
      heading: 0,
      accuracy: 5,
      altitudeAccuracy: 5,
      altitude: 315.7686424255375,
      longitude: -84.484058031891 + increment * tenMeters,
      latitude: 33.91274982135176 + increment * tenMeters,
    }
  }
}

let count = 0

var listener = setInterval(function(){
  Location.EventEmitter.emit("Expo.locationChanged", {
    watchId: Location._getCurrentWatchId(),
    location: getLocation(count)
  });
  count += 1;
}, 1000)
