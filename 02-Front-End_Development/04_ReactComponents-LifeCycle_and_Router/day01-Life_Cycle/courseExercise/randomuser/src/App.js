import React, { Component } from 'react';
import Loading from './components/Loading';
import UserCard from './components/UserCard';

class App extends Component {
  state = {
    user: [],
    isLoading: true,
  };

  fetchUser = async () => {
    const request = await fetch('https://api.randomuser.me/');
    const response = await request.json();
    this.setState({
      user: response.results,
      isLoading: false,
    });
  };

  componentDidMount() {
    this.fetchUser();
  };

  getUserData = (user) => {
    return {
      name: `${user.name.title} ${user.name.first} ${user.name.last}`,
      email: user.email,
      age: user.dob.age,
      image: user.picture.large,
    };
  };

  render() {
    const { user, isLoading } = this.state;
    console.log(user[0]);
    return (
      <div>
        <h2>Random User</h2>
        { isLoading ? <Loading /> : <UserCard user={ this.getUserData(user[0]) } /> }
      </div>
    );
  }
}

export default App;
