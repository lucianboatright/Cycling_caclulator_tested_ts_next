import React, { useState } from "react";

export default function Cogs() {
  const [largeCog, setLargeCog] = useState(52);
  const [smallCog, setSmallCog] = useState(17);

  return (
    <div data-testid="cog-component">
      {smallCog < 15 ? <div data-testid="small-cog-discription">{smallCog} Bottom half</div> : <div>{smallCog} Top Half</div>}
      {largeCog < 50 ? <div data-testid="large-cog-discription">{smallCog} Bottom half</div> : <div>{largeCog} Pushing Hard</div>}
      <div>Large cog</div>
    </div>
  );
}
