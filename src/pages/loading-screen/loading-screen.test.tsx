import { render, screen } from '@testing-library/react';
import LoadingScreen from './loading-screen';

describe('Component: Loading screen', () => {
  it('should render correct', () => {
    const loadSpinnerTestId = 'load-spinner';

    render(<LoadingScreen />);

    const loadSpinner = screen.getByTestId(loadSpinnerTestId);
    expect(loadSpinner).toBeInTheDocument();
  });
});
