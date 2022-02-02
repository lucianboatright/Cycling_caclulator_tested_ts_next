import Details from '@src/components/details';
import CogsComp from '@src/components/cogs';
import { render, screen, fireEvent } from '@testing-library/react';

describe('Testsing Components Mounted', () => {
  it('testing Details component renders', () => {
    render(<Details />);
    const details = screen.getByTestId('details-component');
    expect(details).toBeInTheDocument();
  });
});
