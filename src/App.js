import "./styles/App.css";
import { Toaster } from "react-hot-toast";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";

function App() {
  return (
    <div className="App">
      <SignUp />
      <SignIn />
      <Toaster />
    </div>
  );
}

export default App;
