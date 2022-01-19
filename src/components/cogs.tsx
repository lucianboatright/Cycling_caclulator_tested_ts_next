import React, { useState } from "react";

export default function Cogs() {
  const [largCog, setLargeCog] = useState(0);
  const [smallCog, setSmallCog] = useState(12);

  return (
    <div data-testid="cog-component">
      {smallCog < 15 ? <div>{smallCog} Bottom half</div> : <div>{smallCog} Top Half</div>}
      <div>Large cog</div>
    </div>
  );
}
