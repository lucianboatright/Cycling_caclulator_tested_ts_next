import React, { useState } from "react";

export default function Cogs() {
  const [largeCog, setLargeCog] = React.useState<number>(50);
  const [smallCog, setSmallCog] = React.useState<number>(17);

  const frontShiftUp = (event) => {
    console.log('Clicked Front UP');
    console.log(largeCog);
    setLargeCog(largeCog + 1);
  }

  const frontShiftDown = (event) => {
    console.log('Clicked Front DOWN');
    console.log(largeCog);
    setLargeCog(largeCog - 1);
  }

  return (
    <div className="Cog-Component">
      <div data-testid="cog-component">
        <div data-testid="small-cog-discription">
          {smallCog < 15 ? <div>{smallCog} Bottom half</div> : <div>{smallCog} Top Half</div>}
        </div>
        <div data-testid="large-cog-discription">
          {largeCog < 50 ? <div>{largeCog} Going Easy</div> : <div>{largeCog} Pushing Hard</div>}
          <button onClick={frontShiftUp}>Shift Up</button>
          <button onClick={frontShiftDown}>Shift Down</button>
        </div>
        <div>Large cog</div>
      </div>
    </div>
  );
}
