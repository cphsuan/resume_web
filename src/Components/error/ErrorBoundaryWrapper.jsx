import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./ErrorFallBack";

const ErrorBoundaryWrapper = ({ children }) => {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={(error, errorInfo) => {
        console.log("Error caught!");
        console.error(error);
        console.error(errorInfo);
      }}
    >
      {children}
    </ErrorBoundary>
  );
};

export default ErrorBoundaryWrapper;
