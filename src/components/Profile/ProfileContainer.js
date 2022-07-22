import axios from "axios";
import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { setProfile } from "../../redux/profile-reducer";
class ProfileContainer extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then((res) => {
        this.props.setProfile(res.data);
      });
  }
  render() {
    return <Profile {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

export default connect(mapStateToProps, {
  setProfile,
})(ProfileContainer);
