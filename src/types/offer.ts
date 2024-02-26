export type OfferCity = {
  name: string;
  location: OfferLocation;
};

export type OfferLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type PreviewImage = {
  previewImage: string;
}

export type Host = {
  isPro: boolean;
  name: string;
  avatarUrl: string;
}

export type Offer = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: OfferCity;
  location: OfferLocation;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
};

export type OffersList = PreviewImage & Offer & {
  id: string;
  title: string;
  type: string;
  price: number;
  city: OfferCity;
  location: OfferLocation;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
};

export type CurrentOffer = Offer & {
  description: string;
  images: string[];
  goods: string[];
  host: Host;
  bedrooms: number;
  maxAdults: number;
};
