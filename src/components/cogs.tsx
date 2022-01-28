import React, { useState } from "react";
import type { Dispatch } from "@src/context";

export default function Cogs({handler}: {handler: Dispatch}) {
  // const [largeCog, setLargeCog] = React.useState<number>(50);
  // const [smallCog, setSmallCog] = React.useState<number>(16);

  // const frontShiftUp = (event) => {
  //   if (largeCog < 60) {
  //     setLargeCog(largeCog + 1)
  //   } else {
  //     setLargeCog(largeCog)
  //   }
  // }

  // const frontShiftDown = (event) => {
  //   if (largeCog > 24) {
  //     setLargeCog(largeCog - 1);
  //   } else { 
  //     setLargeCog(largeCog);
  //   }
  // };

  // const rearShiftDown = (event) => {
  //   if (smallCog > 10) {
  //     setSmallCog(smallCog - 1);
  //   }
  // }

  // const rearShiftUp = (event) => {
  //   if (smallCog < 46) {
  //     setSmallCog(smallCog + 1);
  //   }
  // }

  return (
    <div className="Cog-Component">
      <div data-testid="cog-component">
        <div data-testid="small-cog-discription">
          <div>Small Cog</div>
          {/* {smallCog < 15 ? <div>{smallCog} Bottom half</div> : <div>{smallCog} Top Half</div>} */}
          <button data-testid="rearShifterDown" onClick={() => { handler('decrement')}}>Shift Down</button>
          <button data-testid="rearShifterUp" onClick={() => { handler('increment')}}>Shift Up</button>
        </div>
        {/* <div data-testid="large-cog-discription">
          <div>Large Cog</div>
          {largeCog < 50 ? <div>{largeCog} Going Easy</div> : <div>{largeCog} Pushing Hard</div>}
          <button data-testid="frontShifterDown" onClick={frontShiftDown}>Shift Down</button>
          <button data-testid="frontShifterUp" onClick={frontShiftUp}>Shift Up</button>
        </div> */}
      </div>
      <div>
        <label>Choose Wheel Size</label>
        <select name="dog-names" id="dog-names">
            <option value="700">Rigatoni</option>
          <option value="dave">Dave</option>
          <option value="pumpernickel">Pumpernickel</option>
          <option value="reeses">Reeses</option>
        </select>
      </div>
    </div>
  );
}
