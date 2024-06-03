import {AppRouter} from "./routers";
import {Providers} from "./providers";

function App() {
  return (
      <Providers>
        <AppRouter/>
      </Providers>
  )
}

export default App;
