import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CreatePattern from "./pages/CreatePattern";
import PatternView from "./pages/PatternView";

function App() {

  return (
    <BrowserRouter>
      <section>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/new" element={<CreatePattern />}/>
          <Route path="/pattern" element={<PatternView />}/>
        </Routes>

        <Toaster 
          position="bottom-center"
          toastOptions={{
            duration: 2000,
            removeDelay: 1000,
          }}
        />
      </section>
    </BrowserRouter>
  )
}

export default App;
