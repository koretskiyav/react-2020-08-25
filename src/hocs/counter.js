import React from 'react';
import useAmount from '../hooks/use-amount';

export default (WrappedComponent) => (props) => {
  const amountProps = useAmount(5);
  return <WrappedComponent {...props} {...amountProps} />;
};

// export default (WrappedComponent) => {
//   const HocComponent = (props) => {
//     const { count, decrement, increment } = useAmount(2);

//     return (
//       <WrappedComponent
//         {...props}
//         count={count}
//         decrement={decrement}
//         increment={increment}
//       />
//     );
//   };

//   return HocComponent;
// };
