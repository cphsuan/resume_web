const ErrorFallback = ({ error, errorInfo }) => (
  <div>
    <h2>Something went wrong:</h2>
    <p>{error && error.message}</p>
    <details>{errorInfo && errorInfo.componentStack}</details>
  </div>
);

export default ErrorFallback;
