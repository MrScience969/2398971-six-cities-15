import { render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../utils/mock-component';
import { makeFakeFavoriteOffers, makeFakeStore } from '../../utils/mocks';
import FavoritesPlaceList from './favorites-place-list';
import { CITIES } from '../../const';


describe('Component: Favorite PlaceList', () => {
  it('should render correctly', () => {
    const favoritesLocationTestId = 'favorites-location';

    const withHistoryComponent = withHistory(
      <FavoritesPlaceList
        city={CITIES[0].name}
        favoriteOffers={makeFakeFavoriteOffers}
      />);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore());

    render(withStoreComponent);
    const favoritesLocation = screen.getByTestId(favoritesLocationTestId);

    expect(favoritesLocation).toBeInTheDocument();
  });
});
