import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { BandMemberProvider } from "./contexts/BandMemberContext";

function App() {
  return (
    <div>
      <BandMemberProvider>
        <Header />
        <main>
          <Outlet />
        </main>
      </BandMemberProvider>
    </div>
  );
}

export default App;
