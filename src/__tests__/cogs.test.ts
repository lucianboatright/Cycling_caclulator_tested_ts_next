import CogsComp from '@src/components/cogs';
import { render, screen, cleanup } from "@testing-library/react";


describe('cogs test', () => {
  it('testing cog component renders', () => {
    render(<Cogs />);
    const cogElement = screen.getByTestId('cog-component');
    expect(cogElement).toBeInTheDocument();
  })
})

// test('renders cog small message if small cog < 15', () => {
//   const { container, getByTestId } = render(<CogsComp />);
//   expect(getByTestId('cog-component')).toBeInTheDocument();
// })