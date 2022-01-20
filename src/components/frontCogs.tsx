import React, { useState } from "react";
export function cogsCalculator():
HTMLButtonElement {
  let count = 0;

  const clickToCount = document.createElement('button');
  clickToCount.addEventListener('click', handleClick);
  updateButtonText();

  function handleClick() {
    count += 1;
    updateButtonText();
  }

  function updateButtonText() {
    clickToCount.textContent = `Front Chainring is ${count} teeth`
  }
  
  return clickToCount;
}







// export default function Cogs() {
//   const [largeCog, setLargeCog] = useState(52);
//   const [smallCog, setSmallCog] = useState(17);

//   const frontShiftUp = () => {

//   }

//   return (
//     <div>
//       <div data-testid="cog-component">
//         <div data-testid="small-cog-discription">
//           {smallCog < 15 ? <div>{smallCog} Bottom half</div> : <div>{smallCog} Top Half</div>}
//           <button onClick={frontShiftUp()}>+</button>
//         </div>
//         <div data-testid="large-cog-discription">
//           {largeCog < 50 ? <div>{smallCog} Going Easy</div> : <div>{largeCog} Pushing Hard</div>}
//         </div>
//         <div>Large cog</div>
//       </div>
//     </div>
//   );
// }
