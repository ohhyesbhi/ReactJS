import {ErrorBoundary} from "react-error-boundary"
import ErrorFallback from './ErrorFallback'
import Home from "./components/Home"


function App() {
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={()=>console.log("on reset you can do something here")}>
        <Home />
      </ErrorBoundary>
    </>
  );
}

export default App
