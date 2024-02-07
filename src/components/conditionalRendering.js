import { useState } from "react";

const ConditionalRendering  = () => {
    const [display, setDisplay] = useState(true);
    if (display) {
      return(
       <div>
        <h1>Display is true hence this is displaying</h1>
       </div>
      )
    }else{
      return(
        <div>
        <h1>display false</h1>
       </div>
      )
    };
  }
  export default ConditionalRendering;

  // 1st exercise
  // capture the score.
  // return based on the score this is your grade.
  // below 39 fail.
  // 40 - 49 = D.
  // 50 - 59 = C.
  // 60 - 69 = B.
  // 70+ = A.

  // 2nd exercise
  // A small system that is going to add 2 number.
  // enter first number, enter 2nd number and hen you click the button, give answer.

  // React Application My Blog
  // Remove everything in the div in App.js, import logo, delete the logo, app.js write a h1 to test it.
