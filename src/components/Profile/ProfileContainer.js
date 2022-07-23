import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getProfile } from "../../redux/profile-reducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.getProfile(userId);
  }
  render() {
    return <Profile {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

const withRouter = (Component) => {
  const ComponentWithRouterProp = (props) => {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  };

  return ComponentWithRouterProp;
};

export default connect(mapStateToProps, {
  getProfile,
})(withRouter(ProfileContainer));
