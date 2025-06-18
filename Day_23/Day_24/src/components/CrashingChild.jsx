import React from 'react';

const CrashingChild = () => {
  throw new Error("❌ CrashingChild has encountered an error!");
};

export default CrashingChild;
