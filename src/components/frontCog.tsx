import React, { useState } from "react";
import type { FrontDispatch } from "@src/context/FrontCogContext";
import type { FrontState } from "@src/context/FrontCogContext";

export default function FrontCogs({handler, frontCog}: {handler: FrontDispatch}) {
  return (
    <div className="Cog-Component">
      <div data-testid="cog-component">
        <div data-testid="large-cog-discription">
          <div> Large Cog</div>
          {frontCog < 50 ? <div>{frontCog} Going Easy</div> : <div>{frontCog} Pushing Hard</div>}
          <button data-testid="frontShifterDown" onClick={() => { handler('frontShiftDown')}}>Shift Down</button>
          <button data-testid="frontShifterUp" onClick={() => { handler('frontShiftUp')}}>Shift Up</button>
        </div>
      </div>
    </div>
  );
}
