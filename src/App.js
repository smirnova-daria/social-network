import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import News from "./components/News/News";
import Photos from "./components/Photos/Photos";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import { initializeApp } from "./redux/app-reducer";
import Preloader from "./components/UI/Preloader/Preloader";

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) return <Preloader />;
    return (
      <BrowserRouter>
        <div className="container">
          <HeaderContainer />
          <Navbar />
          <main className="main">
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
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

export default connect(mapStateToProps, { initializeApp })(App);
