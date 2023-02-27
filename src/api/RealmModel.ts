import { prettyPrint } from '@common';
import Realm from 'realm';

class RestaurantImage extends Realm.Object {
  static schema = {
    name: 'RestaurantImage',
    embedded: true,
    properties: {
      url: 'string',
    },
  };
}

class Restaurant extends Realm.Object {
  static schema: Realm.ObjectSchema = {
    name: 'Restaurant',
    properties: {
      _id: 'objectId',
      id: 'int',
      title: 'string',
      address: 'string',
      latitude: 'string',
      longitude: 'string',
      rating: 'float',
      total_review: 'int',
      description: 'string',
      mobile: 'string',
      images: { type: 'list', objectType: 'RestaurantImage' },
    },
  };
}
const realm = new Realm({ schema: [Restaurant, RestaurantImage] });
const saveRestaurantsToRealm = (restaurants: Restaurant[]) => {
  realm.write(() => {
    for (const restaurant of restaurants) {
      prettyPrint(restaurant);
      // realm.create('Restaurant', restaurant);
    }
  });
};

export { saveRestaurantsToRealm };
