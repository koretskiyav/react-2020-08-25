import React from 'react';
import useToggle from '../hooks/use-toggle';

export default (WrappedComponent) => ({ ...props }) => {
  const toggleProps = useToggle();
  return <WrappedComponent {...props} {...toggleProps} />;
};
