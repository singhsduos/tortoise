import { Alphabet } from "./page/alphabet.component";
import Provider from "./context/provider";

function App() {
  return (
    <>
      <Provider>
        <Alphabet />
      </Provider>
    </>
  );
}

export default App;
