import ErrorBoundaryWrapper from "../error/ErrorBoundaryWrapper";
import SuspenseWrapper from "../loader/SuspenseWrapper";

const ComponentWrapper = ({ children }) => {
  return (
    <ErrorBoundaryWrapper>
      <SuspenseWrapper>{children}</SuspenseWrapper>
    </ErrorBoundaryWrapper>
  );
};

export default ComponentWrapper;
