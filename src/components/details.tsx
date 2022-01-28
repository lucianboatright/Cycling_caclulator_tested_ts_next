import React, { useState } from "react";
import type { State } from '@src/context';

export default function Details({count}: State) {
  return (
    <div className="Cog-Component">
      <div data-testid="details-component">
        Details {count}
      </div>
    </div>
  );
}
