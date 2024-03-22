import "./App.css";
import Email from "./email.jsx";

function App() {
  const name = "samir";
  const Function = () => {
    return new Date().getHours() * 60 + new Date().getMinutes();
  };

  return (
    <>
      <div class="text">
        <Email variable={name} Function={Function()} />
      </div>
    </>
  );
}

export default App;
