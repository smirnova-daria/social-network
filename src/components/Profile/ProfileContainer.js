import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  getProfile,
  getStatus,
  updateStatus,
} from "../../redux/profile-reducer";
import {
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  state = {
    redirect: false,
  };
  componentDidMount() {
    let userId = this.props.router.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
      if (!userId) {
        this.setState({ redirect: true });
      }
    }
    if (userId) {
      this.props.getProfile(userId);
      this.props.getStatus(userId);
    }
  }
  render() {
    if (this.state.redirect) return <Navigate to={"/login"} />;
    return <Profile {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.id,
  isAuth: state.auth.isAuth,
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

export default compose(
  connect(mapStateToProps, {
    getProfile,
    getStatus,
    updateStatus,
  }),
  withRouter
)(ProfileContainer);
