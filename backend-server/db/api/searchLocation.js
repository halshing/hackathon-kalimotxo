const googleMapsClient = require("@google/maps").createClient({
  key: "AIzaSyBlDO2GyHfkusBWmULgFZuDhUkfrpPjojc",
  Promise: Promise
});

const searchLocation = query => {
    return googleMapsClient.geocode({ address: query }).asPromise();
}

module.exports = searchLocation;