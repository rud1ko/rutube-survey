import {AppRouter} from "./routers/AppRouter.tsx";
import {Providers} from "./providers";

function App() {
  return (
      <Providers>
        <AppRouter/>
      </Providers>
  )
}

export default App;
