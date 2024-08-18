// import React, { useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { SignedInContext } from "../../contexts/user.contexts";

// const SuccessMessage = () => {
//   const Navigate = useNavigate();
//   const { signedIn } = useContext(SignedInContext);
//   const handleNavigate = () => {
//     signedIn ? Navigate("/home") : Navigate("/landing-page");
//   };

//   return (
//     <div className="success-msg-container">
//       <div className="success-msg-wrapper">
//         <div className="success-msg">
//           <strong>Sign In Successful.</strong>
//         </div>
//       </div>
//       <button
//         className="btn btn-outline-light btn-lg btn-block btn-rounded btn-purple"
//         onClick={handleNavigate}
//       >
//         OK
//       </button>
//     </div>
//   );
// };

// export default SuccessMessage;
