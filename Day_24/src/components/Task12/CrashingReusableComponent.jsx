import React from 'react';

const CrashingReusableComponent = () => {
  throw new Error("Crash inside CrashingReusableComponent!");
};

export default CrashingReusableComponent;
