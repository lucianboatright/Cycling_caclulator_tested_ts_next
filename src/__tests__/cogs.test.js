import CogsComp from '@src/components/cogs';
import { render, screen, cleanup } from '@testing-library/react';

describe('cogs test', () => {
  it('testing cog component renders', () => {
    render(<CogsComp />);
    const cogElement = screen.getByTestId('cog-component');
    expect(cogElement).toBeInTheDocument();
  });
});

// test("testing front cog < 50 returns 'going easy'", () => {
//   render(<CogsComp />);
//   const cogLarge = screen.getByTestId('front-cog-discription');
//   expect(cogLarge).toHaveTextContent('Going Easy');
// });

describe('tersting cog output', () => {
  it("testing front cog > 50 returns says 'Pushing Hard'", () => {
    render(<CogsComp />);
    const cogLarge = screen.getByTestId('cog-component');
    expect(cogLarge).toHaveTextContent('Pushing Hard');
  });
});

// test("testing front cog > 50 returns says 'Pushing Hard'", () => {
//   render(<CogsComp />);
//   const cogLarge = screen.getByTestId('large-cog-discription');
//   expect(cogLarge).toHaveTextContent('Pushing Hard');
// });

describe('testing cogoutput', () => {
  it("testing small cog > 15 = top half'", () => {
    render(<CogsComp />);
    const cogLarge = screen.getByTestId('cog-component');
    expect(cogLarge).toHaveTextContent('Top Half');
  });
});
