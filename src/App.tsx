import AppRoutingComponents from "./RouterComponents/AppRoutingComponents";
import NavigationMenu from "./Components/NavigationMenu";

function App() {
  return (
    <>
      <NavigationMenu />
      <h1>Welcome to admin site</h1>
      <AppRoutingComponents />
    </>
  );
}

export default App;
