import { OffersList, CurrentOffer } from '../types/offer';

export const offersList: OffersList[] = [
  {
    'id': '6af6f711-c28d-4121-82cd-e0b462a27f00',
    'title': 'Beautiful & luxurious studio at great location',
    'type': 'apartment',
    'price': 120,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/1.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.35514938496378,
        'longitude': 4.673877537499948,
        'zoom': 8
      }},
    'location': {
      'latitude': 52.35514938496378,
      'longitude': 4.673877537499948,
      'zoom': 8
    },
    'isFavorite': true,
    'isPremium': false,
    'rating': 4,
  },
  {
    'id': '2f47ca94-4d24-4425-9ae6-43d7333df736',
    'title': 'House in countryside',
    'type': 'apartment',
    'price': 242,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/3.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.858610000000006,
      'longitude': 2.330499,
      'zoom': 16
    },
    'isFavorite': true,
    'isPremium': true,
    'rating': 2.7
  },
  {
    'id': '258e916e-b073-49d5-8806-e4e2fb3617a3',
    'title': 'Tile House',
    'type': 'apartment',
    'price': 101,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/6.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.834610000000005,
      'longitude': 2.335499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2
  },
  {
    'id': 'f431d956-6b7f-4aa4-839e-d57743638b28',
    'title': 'Tile House',
    'type': 'room',
    'price': 216,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/19.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.85761,
      'longitude': 2.358499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 5
  },
];

export const сurrentOffer: CurrentOffer[] = [
  {
    'id': '6af6f711-c28d-4121-82cd-27f00e0b462a',
    'title': 'Beautiful & luxurious studio at great location',
    'description': 'Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.',
    'type': 'apartment',
    'price': 120,
    'images': [
      'https://15.design.htmlacademy.pro/static/hotel/18.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/6.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/10.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/14.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/4.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/17.jpg'
    ],
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.35514938496378,
        'longitude': 4.673877537499948,
        'zoom': 8
      },
    },
    'location': {
      'latitude': 52.35514938496378,
      'longitude': 4.673877537499948,
      'zoom': 8
    },
    'goods': [
      'Heating',
      'Laptop friendly workspace',
      'Cable TV',
      'Fridge'
    ],
    'host': {
      'isPro': true,
      'name': 'Angelina',
      'avatarUrl': 'https://15.design.htmlacademy.pro/static/host/avatar-angelina.jpg'
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4,
    'bedrooms': 3,
    'maxAdults': 3
  }
];
