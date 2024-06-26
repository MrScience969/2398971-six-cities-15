import { AuthorizationStatus } from '../const.js';
import { store } from '../store/index.js';
import { Cities, Comments, CurrentOffer, OffersList, Sorting } from './offer.js';
import { UserData } from './user-data.js';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  userData: UserData | null;
};

export type OffersProcess = {
  city: Cities;
  sorting: Sorting;
  offers: OffersList;
  isOffersDataLoading: boolean;
  hasErrorOffersLoading: boolean;
}

export type OfferProcess = {
  offer: CurrentOffer | null;
  nearOffers: OffersList;
  isOfferDataLoading: boolean[];
  hasErrorOfferLoading: boolean;
  hasErrorNearOffersLoading: boolean;
}

export type FavoriteProcess = {
  favoriteOffers: OffersList;
  isSetFavoriteOffersDataSending: boolean;
  isFavoriteOffersDataLoading: boolean;
  hasErrorFavoriteOffersLoading: boolean;
  hasErrorFavoriteOfferSending: boolean;
}

export type CommentProcess = {
  comments: Comments;
  isSendNewCommentDataLoading: boolean;
  isCommentsDataLoading: boolean;
  hasErrorCommentLoading: boolean;
  hasErrorCommentSending: boolean;
}


export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
