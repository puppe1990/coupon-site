import React from 'react';

export const Alert = ({ children, ...props }) => <div {...props}>{children}</div>;
export const AlertTitle = ({ children, ...props }) => <h4 {...props}>{children}</h4>;
export const AlertDescription = ({ children, ...props }) => <p {...props}>{children}</p>;
