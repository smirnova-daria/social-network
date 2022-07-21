import React from "react";
import User from "./User/User";
import * as axios from "axios";
import s from "./Users.module.css";
class Users extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersCountOnPage}&page=1`
      )
      .then((res) => {
        this.props.setUsers(res.data.items);
        this.props.setTotalUsersCount(res.data.totalCount);
      });
  }

  onPageChanged = (p) => {
    this.props.setCurrentPage(p);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersCountOnPage}&page=${p}`
      )
      .then((res) => this.props.setUsers(res.data.items));
  };

  render() {
    let pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.usersCountOnPage
    );
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      if (i === 50) {
        break;
      }
      pages.push(i);
    }

    return (
      <div>
        <div>
          {pages.map((p) => (
            <span
              key={p}
              className={this.props.currentPage === p ? s.active : ""}
              onClick={() => {
                this.onPageChanged(p);
              }}
            >
              {p}_
            </span>
          ))}
        </div>

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
