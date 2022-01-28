import React, { useState } from "react";
import type { RearDispatch } from "@src/context/rearCogContext";
import type { State } from "@src/context/rearCogContext";

export default function Cogs({handler, rearCog, frontCog}: {handler: RearDispatch}, {count: State}) {
  return (
    <div className="Cog-Component">
      <div data-testid="cog-component">
        <div data-testid="small-cog-discription">
          <div>Small Cog</div>
          {rearCog < 15 ? <div>{rearCog} Bottom half</div> : <div>{rearCog} Top Half</div>}
          <button data-testid="rearShifterDown" onClick={() => { handler('rearShiftDown'), console.log(rearCog, frontCog)}}>Shift Down</button>
          <button data-testid="rearShifterUp" onClick={() => { handler('rearShiftUp'), console.log(rearCog, frontCog)}}>Shift Up</button>
        </div>
        <div data-testid="large-cog-discription">
          <div>Large Cog</div>
          {frontCog < 50 ? <div>{frontCog} Going Easy</div> : <div>{frontCog} Pushing Hard</div>}
          <button data-testid="frontShifterDown" onClick={() => { handler('frontShiftDown'), console.log(rearCog, frontCog)}}>Shift Down</button>
          <button data-testid="frontShifterUp" onClick={() => { handler('frontShiftUp'), console.log(rearCog, frontCog)}}>Shift Up</button>
        </div>
      </div>
      {/* <div>
        <label>Choose Wheel Size</label>
        <select name="dog-names" id="dog-names">
            <option value="700">Rigatoni</option>
          <option value="dave">Dave</option>
          <option value="pumpernickel">Pumpernickel</option>
          <option value="reeses">Reeses</option>
        </select>
      </div> */}
    </div>
  );
}