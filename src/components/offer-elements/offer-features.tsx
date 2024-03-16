type OfferFeaturesProps = {
  type: string;
  bedrooms: number;
  maxAdults: number;
}

function OfferFeatures(props: OfferFeaturesProps): JSX.Element {
  const {type, bedrooms, maxAdults} = props;

  return (
    <ul className="offer__features">
      <li className="offer__feature offer__feature--entire">
        {type}
      </li>
      <li className="offer__feature offer__feature--bedrooms">
        {`${bedrooms} Bedrooms`}
      </li>
      <li className="offer__feature offer__feature--adults">
        {`Max ${maxAdults} adults`}
      </li>
    </ul>
  );
}

export default OfferFeatures;
