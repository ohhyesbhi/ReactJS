

function ErrorFallback({error,resetErrorBoundary}){
  return (
    <div>
        <h2>Something went wrong</h2>
        <button onClick={resetErrorBoundary}>Retry</button>
    </div>
  )
}

export default ErrorFallback;

// this react error boundary which we have installed actually gives us props like error(using this we can print the error ),resetErrorBoundary (this is a callback, which will actually help to re-render the component)
// we are going to create this component if ErrorBoundary gets an error
// what is error boundary?
// In case while loading your components if any error occurs at that we will show this componenet as a fallback ui that will be showing something to the user