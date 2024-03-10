import Canvas from "./canvas/index.jsx";
import Customizer from "./pages/customizer.jsx";
import Home from "./pages/home.jsx";

function App() {


  return (
      <main className="app transition-all ease-in">
          <Home/>
          <Canvas/>
          <Customizer/>

      </main>
      
  )
}

export default App
