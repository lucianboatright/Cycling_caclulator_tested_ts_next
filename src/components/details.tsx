import React, { useState } from "react";
import type { State } from '@src/context';

export default function Details({rearCog, frontCog}: State) {
  return (
    <div className="Cog-Component">
      <div data-testid="details-component">
        <div>Rear Cog {rearCog}</div> 
        <div>Front Cog {frontCog}</div> 
      </div>
    </div>
  );
}
