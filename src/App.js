import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import { connect } from "react-redux";
import News from "./components/News/News";
import Photos from "./components/Photos/Photos";
import Settings from "./components/Settings/Settings";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import { initializeApp } from "./redux/app-reducer";
import Preloader from "./components/UI/Preloader/Preloader";

const ProfileContainer = React.lazy(() =>
  import("./components/Profile/ProfileContainer")
);
const DialogsContainer = React.lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);
const UsersContainer = React.lazy(() =>
  import("./components/Users/UsersContainer")
);

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) return <Preloader />;
    return (
      <HashRouter>
        <div className="container">
          <HeaderContainer />
          <Navbar />
          <main className="main">
            <React.Suspense fallback={<Preloader />}>
              <Routes>
                <Route path="profile/:userId" element={<ProfileContainer />} />
                <Route path="profile" element={<ProfileContainer />} />

                <Route path="dialogs/*" element={<DialogsContainer />} />
                <Route path="news" element={<News />} />
                <Route path="photos" element={<Photos />} />
                <Route path="settings" element={<Settings />} />
                <Route path="users" element={<UsersContainer />} />
                <Route path="login" element={<Login />} />
                <Route
                  path="*"
                  element={
                    <main style={{ padding: "1rem" }}>
                      <p>There's nothing here!</p>
                    </main>
                  }
                />
              </Routes>
            </React.Suspense>
          </main>
        </div>
      </HashRouter>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

export default connect(mapStateToProps, { initializeApp })(App);
