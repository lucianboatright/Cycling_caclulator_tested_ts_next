import { cogsCalculator } from '@src/components/frontCogs';
import { render, screen, cleanup } from '@testing-library/react';

// ######################## first test
// describe('cogs test', () => {
//   it('testing cog component renders', () => {
//     render(<CogsComp />);
//     const cogElement = screen.getByTestId('cog-component');
//     expect(cogElement).toBeInTheDocument();
//   });
// });

// // test("testing front cog < 50 returns 'going easy'", () => {
// //   render(<CogsComp />);
// //   const cogLarge = screen.getByTestId('front-cog-discription');
// //   expect(cogLarge).toHaveTextContent('Going Easy');
// // });

// // describe('tersting cog output', () => {
// //   it('testing opening state of cog is < 50', () => {
// //     render(<CogsComp />);
// //     const cogLarge = screen.getByTestId('cog-component');
// //     expect(cogLarge).toHaveTextContent('Going Easy');
// //   });
// // });

// describe('tersting cog output', () => {
//   it("testing front cog > 50 returns says 'Pushing Hard'", () => {
//     render(<CogsComp />);
//     const cogLarge = screen.getByTestId('large-cog-discription');
//     expect(cogLarge).toHaveTextContent('Pushing Hard');
//   });
// });

// describe('testing cogoutput', () => {
//   it("testing small cog > 15 = top half'", () => {
//     render(<CogsComp />);
//     const cogLarge = screen.getByTestId('small-cog-discription');
//     expect(cogLarge).toHaveTextContent('Top Half');
//   });
// });
// ########################

describe('Cogs components to have buttons', () => {
  it('will test if its a button', () => {
    const Cogs = cogsCalculator();
    expect(Cogs.nodeName).toEqual('BUTTON');
  });

  it('should start with 0 as its initial count', () => {
    const Cogs = cogsCalculator();
    expect(Cogs.textContent).toContain('0');
  });

  it('tests that ammount changes when clicked', () => {
    const Cogs = cogsCalculator();
    expect(Cogs.textContent).toContain('0');

    Cogs.click();
    expect(Cogs.textContent).toContain('1');

    Cogs.click();
    Cogs.click();
    expect(Cogs.textContent).toContain('3');
  });
});
