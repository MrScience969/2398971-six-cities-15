import { Nullable } from 'vitest';
import { CurrentOffer, OfferList, OffersList } from '../../types/offer';
import { Comments } from '../../types/offer';
import OfferGallery from '../offer-gallery/offer-gallery';
import OfferPremiumLogo from '../offer-premium-logo/offer-premium-logo';
import OfferBookmark from '../offer-bookmark/offer-bookmark';
import OfferRating from '../offer-rating/offer-rating';
import OfferFeatures from '../offer-features/offer-features';
import OfferPrice from '../offer-price/offer-price';
import OfferInside from '../offer-inside/offer-inside';
import OfferUser from '../offer-user/offer-user';
import OfferDescription from '../offer-description/offer-description';
import OfferReviewsList from '../offer-reviews-list/offer-reviews-list';
import Map from '../map/map';
import MemoizeOfferReviewForm from '../offer-review-form/offer-review-form';

type OfferReviewFormProps = {
  authorizationStatus: string;
  currentOffer: CurrentOffer;
  nearOffers: OffersList;
  comments: Comments;
  activeOffer: Nullable<OfferList>;
}

function Offer(props: OfferReviewFormProps): JSX.Element {
  const {authorizationStatus, currentOffer, nearOffers, comments, activeOffer} = props;
  const {id, title, description, type, price, images, city, goods, host, isFavorite, isPremium, rating, bedrooms, maxAdults} = currentOffer;

  return (
    <section className="offer" data-testid="offer">
      <OfferGallery images={images}/>
      <div className="offer__container container">
        <div className="offer__wrapper">
          {isPremium ? <OfferPremiumLogo className="offer__mark" /> : ''}
          <div className="offer__name-wrapper">
            <h1 className="offer__name">
              {title}
            </h1>
            <OfferBookmark
              offerId={id}
              isFavorite={isFavorite}
              className="offer"
              width={31}
              height={33}
            />
          </div>
          <OfferRating
            className="offer"
            rating={rating}
          />
          <OfferFeatures
            type={type}
            bedrooms={bedrooms}
            maxAdults={maxAdults}
          />
          <OfferPrice
            className="offer"
            price={price}
          />
          <OfferInside goods={goods}/>
          <div className="offer__host">
            <h2 className="offer__host-title">Meet the host</h2>
            <OfferUser
              className={'offer'}
              user={host}
              width={74}
              height={74}
            />
            <OfferDescription description={description}/>
          </div>
          <section className="offer__reviews reviews">
            <h2 className="reviews__title">
              Reviews · <span className="reviews__amount">{comments.length}</span>
            </h2>
            <OfferReviewsList
              comments={comments}
            />
            { authorizationStatus === 'AUTH' ? <MemoizeOfferReviewForm/> : ''}
          </section>
        </div>
      </div>
      <section className="offer__map map">
        <Map
          city={city}
          offers={nearOffers}
          activeOffer={activeOffer}
        />
      </section>
    </section>
  );
}

export default Offer;
