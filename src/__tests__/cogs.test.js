import CogsComp from '@src/components/cogs';
import { render, screen, fireEvent } from '@testing-library/react';
// import Adapter from 'enzyme-adapter-react-16';
// import { shallow, configure } from 'enzyme';

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

// describe('tersting cog output', () => {
//   it('testing opening state of cog is < 50', () => {
//     render(<CogsComp />);
//     const cogLarge = screen.getByTestId('cog-component');
//     expect(cogLarge).toHaveTextContent('Going Easy');
//   });
// });

describe('Testing front shifter for large chainring', () => {
  it('testing front cog starts at 50', () => {
    render(<CogsComp />);
    const cogLarge = screen.getByTestId('large-cog-discription');
    expect(cogLarge).toHaveTextContent('50');
  });
  it("testing front cog > 50 returns says 'Pushing Hard'", () => {
    render(<CogsComp />);
    const cogLarge = screen.getByTestId('large-cog-discription');
    expect(cogLarge).toHaveTextContent('Pushing Hard');
  });
  it('testing + shifter changes gear changed gear up once', () => {
    // render(<CogsComp />);
    // const setLargeCog = jest.fn();
    // const wrapper = render(<Cog-Component onClick={setLargeCog} />);
    // const handleClick = jest.spyOn(React, 'useState');
    // handleClick.mockImplementation((largeCog) => [largeCog, setLargeCog]);
    // wrapper.getByTestId('large-cog-discription').simulate('click');
    // expect(setLargeCog).toBeCalled();
    // ######
    // render(<CogsComp />);
    // const frontShiftUp = frontShiftUp();
    // frontShiftUp.click();
    // const cogLarge = screen.getByTestId('large-cog-discription');
    // expect(cogLarge).toHaveTextContent('51');
    // #####
    // const onClick = jest.fn();
    // const { getByText } = render(<button onClick={onClick} />);
    // fireEvent.click(screen.getByText('Shift Up'));
    // expect(onClick).toHaveBeenCalled();
    // ##########
    render(<CogsComp />);
    fireEvent.click(screen.getByTestId('frontShifterUp'));
    const cogLarge = screen.getByTestId('large-cog-discription');
    expect(cogLarge).toHaveTextContent('51');
  });
  it('testing + shifter UP three times returns 53', () => {
    render(<CogsComp />);
    fireEvent.click(screen.getByTestId('frontShifterUp'));
    fireEvent.click(screen.getByTestId('frontShifterUp'));
    fireEvent.click(screen.getByTestId('frontShifterUp'));
    const cogLarge = screen.getByTestId('large-cog-discription');
    expect(cogLarge).toHaveTextContent('53');
  });
  it('testing + shifter changes gear changed gear up once', () => {
    render(<CogsComp />);
    fireEvent.click(screen.getByTestId('frontShifterDown'));
    const cogLarge = screen.getByTestId('large-cog-discription');
    expect(cogLarge).toHaveTextContent('49');
  });
  it('testing + shifter DOWN three times returns 47', () => {
    render(<CogsComp />);
    fireEvent.click(screen.getByTestId('frontShifterDown'));
    fireEvent.click(screen.getByTestId('frontShifterDown'));
    fireEvent.click(screen.getByTestId('frontShifterDown'));
    const cogLarge = screen.getByTestId('large-cog-discription');
    expect(cogLarge).toHaveTextContent('47');
  });
});

describe('testing RearShifter', () => {
  it("testing small cog > 15 = top half'", () => {
    render(<CogsComp />);
    const cogLarge = screen.getByTestId('small-cog-discription');
    expect(cogLarge).toHaveTextContent('Top Half');
  });
  it('testing small starts at 15', () => {
    render(<CogsComp />);
    const cogLarge = screen.getByTestId('small-cog-discription');
    expect(cogLarge).toHaveTextContent('16');
  });
  it('testing RearShifterUp changes small cog up by 1', () => {
    render(<CogsComp />);
    // const { getByTestId } = render(
    //   <button onClick={rearShiftUp}>Shift Up</button>
    // )
    fireEvent.click(screen.getByTestId('rearShifterUp'));
    const cogLarge = screen.getByTestId('small-cog-discription');
    expect(cogLarge).toHaveTextContent('17');
  });
});
