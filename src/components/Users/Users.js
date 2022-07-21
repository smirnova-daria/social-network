import React from "react";
import User from "./User/User";
import * as axios from "axios";

class Users extends React.Component {
  componentDidMount() {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((res) => this.props.setUsers(res.data.items));
  }
  render() {
    return (
      <div>
        {this.props.users.map((u) => (
          <User
            key={u.id}
            user={u}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
          />
        ))}
      </div>
    );
  }
}
export default Users;
