import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  getProfile,
  getStatus,
  updateStatus,
  savePhoto,
  saveProfile,
} from "../../redux/profile-reducer.ts";
import {
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { compose } from "redux";
import { ProfileType } from '../../types/types'
import { AppStateType } from '../../redux/store-redux'

type MapStatePropsType = {
  profile: ProfileType
  status: string
  authorizedUserId: number
  isAuth: boolean
  router: any
}
type MapDispatchPropsType = {
  getProfile: (userId: number) => void
  getStatus: (userId: number) => void
  updateStatus: (status: string) => void
  savePhoto: (file: any) => void
  saveProfile: () => void
}

type PropsType = MapStatePropsType & MapDispatchPropsType
type StateType = {
  redirect: boolean
}

class ProfileContainer extends React.Component<PropsType, StateType> {
  state = {
    redirect: false,
  };

  refreshProfile() {
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
  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps: PropsType, prevState: StateType) {
    if (this.props.router.params.userId !== prevProps.router.params.userId) {
      this.refreshProfile();
    }
  }
  render() {
    if (this.state.redirect) return <Navigate to={"/login"} />;
    return (
      <Profile {...this.props} isOwner={!this.props.router.params.userId} />
    );
  }
}

const mapStateToProps = (state: AppStateType) => ({
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
  connect<MapStatePropsType, MapStatePropsType, {}, AppStateType>(mapStateToProps, {
    getProfile,
    getStatus,
    updateStatus,
    savePhoto,
    saveProfile,
  }),
  withRouter
)(ProfileContainer);
