import Menu from "./Components/Menu";
import { Store } from "./app/Store/Store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <>
      <Provider store={Store}>
        <Menu />
      </Provider>
    </>
  );
}
