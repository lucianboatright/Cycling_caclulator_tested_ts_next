import CogsComp from '@src/components/cogs';
// import Home from '../../pages/index';
import { render, screen, fireEvent } from '@testing-library/react';

describe('Testsing Components Mounted', () => {
  it('testing cog component renders', () => {
    render(<CogsComp />);
    const cogElement = screen.getByTestId('cog-component');
    expect(cogElement).toBeInTheDocument();
  });
});

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
  it('testing - shifter changes gear changed gear up once', () => {
    render(<CogsComp />);
    fireEvent.click(screen.getByTestId('frontShifterDown'));
    const cogLarge = screen.getByTestId('large-cog-discription');
    expect(cogLarge).toHaveTextContent('49');
  });
  it('testing - shifter DOWN three times returns 47', () => {
    render(<CogsComp />);
    fireEvent.click(screen.getByTestId('frontShifterDown'));
    fireEvent.click(screen.getByTestId('frontShifterDown'));
    fireEvent.click(screen.getByTestId('frontShifterDown'));
    const cogLarge = screen.getByTestId('large-cog-discription');
    expect(cogLarge).toHaveTextContent('47');
  });
  it('testing - shifter tops out at 60', () => {
    render(<CogsComp />);
    for (let i = 0; i < 12; i++) {
      fireEvent.click(screen.getByTestId('frontShifterUp'));
    }
    const cogLarge = screen.getByTestId('large-cog-discription');
    expect(cogLarge).toHaveTextContent('60');
  });
  it('testing - shifter bottoms out at 24', () => {
    render(<CogsComp />);
    for (let i = 0; i < 26; i++) {
      fireEvent.click(screen.getByTestId('frontShifterDown'));
    }
    const cogLarge = screen.getByTestId('large-cog-discription');
    expect(cogLarge).toHaveTextContent('24');
  });
  it('testing - shifter bottoms out at 24', () => {
    render(<CogsComp />);
    for (let i = 0; i < 27; i++) {
      fireEvent.click(screen.getByTestId('frontShifterDown'));
    }
    const cogLarge = screen.getByTestId('large-cog-discription');
    expect(cogLarge).toHaveTextContent('24');
  });
});

describe('testing RearShifter', () => {
  it("testing small cog > 15 = top half'", () => {
    render(<CogsComp />);
    const cogSmall = screen.getByTestId('small-cog-discription');
    expect(cogSmall).toHaveTextContent('Top Half');
  });
  it('testing small starts at 15', () => {
    render(<CogsComp />);
    const cogSmall = screen.getByTestId('small-cog-discription');
    expect(cogSmall).toHaveTextContent('16');
  });
  it('testing RearShifterUp changes small cog up by 1', () => {
    render(<CogsComp />);
    fireEvent.click(screen.getByTestId('rearShifterUp'));
    const cogSmall = screen.getByTestId('small-cog-discription');
    expect(cogSmall).toHaveTextContent('17');
  });
  it('testing RearShifterUp can be changes 3 times = 19', () => {
    render(<CogsComp />);
    fireEvent.click(screen.getByTestId('rearShifterUp'));
    fireEvent.click(screen.getByTestId('rearShifterUp'));
    fireEvent.click(screen.getByTestId('rearShifterUp'));
    const cogSmall = screen.getByTestId('small-cog-discription');
    expect(cogSmall).toHaveTextContent('19');
  });
  it('testing RearShifterDown changes smallCog by 1', () => {
    render(<CogsComp />);
    fireEvent.click(screen.getByTestId('rearShifterDown'));
    const cogSmall = screen.getByTestId('small-cog-discription');
    expect(cogSmall).toHaveTextContent('15');
  });
  it('testing rear cog lower limit is 10', () => {
    render(<CogsComp />);
    for (let i = 0; i < 15; i++) {
      fireEvent.click(screen.getByTestId('rearShifterDown'));
    }
    const cogSmall = screen.getByTestId('small-cog-discription');
    expect(cogSmall).toHaveTextContent('10');
  });
  it('test upper limit of rear cog is 46 teeth', () => {
    render(<CogsComp />);
    for (let i = 0; i < 32; i++) {
      fireEvent.click(screen.getByTestId('rearShifterUp'));
    }
    const cogSmall = screen.getByTestId('small-cog-discription');
    expect(cogSmall).toHaveTextContent('46');
  });
});

// describe('Testing Details Component', () => {
//   // it('testing that rear cog number is shown and is changed when up or down', () => {
//   //   const
//   //   render(<CogsComp />);
//   // })
// })
