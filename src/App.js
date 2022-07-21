import "./App.css";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import News from "./components/News/News";
import Photos from "./components/Photos/Photos";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

function App(props) {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Navbar />
        <main className="main">
          <Routes>
            <Route path="profile" element={<Profile store={props.store} />} />
            <Route
              path="dialogs/*"
              element={<DialogsContainer store={props.store} />}
            />
            <Route path="news" element={<News />} />
            <Route path="photos" element={<Photos />} />
            <Route path="settings" element={<Settings />} />
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>There's nothing here!</p>
                </main>
              }
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
