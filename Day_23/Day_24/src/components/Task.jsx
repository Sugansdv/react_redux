import React from "react";
import Task1 from "./Task1";
import ErrorBoundaryWrapper from "./ErrorBoundaryWrapper";
import BuggyComponent from "./BuggyComponent";
import ErrorSimulator from "./ErrorSimulator";
import CrashingComponent from "./CrashingComponent";
import TryCatchComponent from "./TryCatchComponent";
import GlobalErrorStateComponent from "./GlobalErrorStateComponent";
import ErrorBoundaryWithChildren from "./ErrorBoundaryWithChildren";
import ResettableErrorBoundary from "./ResettableErrorBoundary";
import LoggableErrorBoundary from "./LoggableErrorBoundary";
import AsyncErrorComponent from "./AsyncErrorComponent";
import ReusableErrorDemo from "./Task12/ReuseableErrorDemo";
import MultipleBoundaryDemo from "./Task13/MultipleBoundaryDemo";


function Task() {
  return (
    <>
      <Task1 />
      <div className="container mt-4">
        <h4>Task 2. Basic Error Boundary Setup:</h4>
        <ErrorBoundaryWrapper>
          <BuggyComponent />
        </ErrorBoundaryWrapper>
        <ErrorSimulator />
      </div>
      <div className="container mt-4">
        <ErrorBoundaryWrapper>
    <CrashingComponent />
  </ErrorBoundaryWrapper>
      </div>
      <TryCatchComponent />
      <GlobalErrorStateComponent />
      <ErrorBoundaryWithChildren />
      <ResettableErrorBoundary />
      <LoggableErrorBoundary />
      <AsyncErrorComponent />
      <ReusableErrorDemo />
      <MultipleBoundaryDemo />
    </>
  );
}

export default Task;
