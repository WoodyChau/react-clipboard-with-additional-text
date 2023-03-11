import React, { useEffect } from 'react';

const useCopy = (statement) => {
  useEffect(() => {
    const copyHandler = (event) => {
      const selected = window.getSelection().toString();
      event.clipboardData.setData('text/plain', `${selected}\n\n${statement}`);
      event.preventDefault();
    };
    document.addEventListener('copy', copyHandler);
    return () => {
      document.removeEventListener('copy', copyHandler);
    };
  }, [statement]);
};

const CopyWithStatement = ({ statement, children }) => {
  useCopy(statement);
  return <>{children}</>;
};

export default CopyWithStatement;
