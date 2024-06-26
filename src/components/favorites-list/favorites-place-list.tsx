import { OffersList } from '../../types/offer';
import MemoizeCardPreview from '../card-preview/card-preview';

type FavoritesPlaceListProps = {
  favoriteOffers: OffersList;
  city: string;
}

function FavoritesPlaceList(props: FavoritesPlaceListProps): JSX.Element {
  const { city, favoriteOffers } = props;
  const handleMouseHover = () => {};

  return (
    <li className="favorites__locations-items" data-testid="favorites-location">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {favoriteOffers.map((offer) => (
          <MemoizeCardPreview
            handleMouseHover={handleMouseHover}
            key={offer.id}
            offer={offer}
            cardClassName = {'favorites'}
          />
        ))}
      </div>
    </li>);
}

export default FavoritesPlaceList;
