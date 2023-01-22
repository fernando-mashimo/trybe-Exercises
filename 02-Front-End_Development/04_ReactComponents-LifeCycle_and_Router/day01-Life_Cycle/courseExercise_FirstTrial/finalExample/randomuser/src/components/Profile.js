import React from "react";

class Profile extends React.Component {
  
  state = {
    loading: true,
    name: '',
    image: '',
    email: '',
    age: '',
  };

  fetchProfile = () => {
    this.setState(
      {
        loading: true,
      },
      async () => {
        const requestReturn = await fetch('https://api.randomuser.me/');
        const requestObject = await requestReturn.json();
        const result = { ...requestObject.results[0] };
        const {
          name: { first, last, title },
          email,
          dob: { age },
          picture: { large },
        } = result;

        this.setState({
          loading: false,
          name: `${title} ${first} ${last}`,
          image: large,
          email: email,
          age: age,
        });
      }
    );
  };

  componentDidMount = () => {
    this.fetchProfile();
  };

  shouldComponentUpdate = (_nextProps, nextState) => {
    const maxAge = 50;
    console.log(nextState.age);
    if (nextState.age <= maxAge) return true;
    return false;
  }

  render() {
    const { loading, name, image, email, age } = this.state;

    return (
      <div>
        {
          loading ? <img src="https://media.tenor.com/wfEN4Vd_GYsAAAAC/loading.gif" alt="Loading profile" width="100px" /> :
            <div>
                <h2>This is...</h2>
                <h3>{name}</h3>
                <img src={image} alt={name} />
                <p>Email: {email}</p>
                <p>Age: {age}</p>
            </div>
        }
      </div>
    );
  }
}

export default Profile;
