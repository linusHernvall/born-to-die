import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { BandMemberProvider } from "./contexts/BandMemberContext";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  return (
    <div>
      <BandMemberProvider>
        <Header />
        <main>
          <ScrollToTop />
          <Outlet />
        </main>
      </BandMemberProvider>
    </div>
  );
}

export default App;
