import React from 'react';
import './SignUp.scss';

class SignUpSg extends React.Component {
  constructor() {
    super();
    this.state = {
      idInput: '',
      pwInput: '',
      nameInput: '',
      phoneInput: '',
      accountInput: '',
    };
  }

  goToMain = () => {
    this.props.history.push('/MainSg');
  };

  handleIdInput = e => {
    this.setState({
      idInput: e.target.value,
    });
  };

  handlePwInput = e => {
    this.setState({
      pwInput: e.target.value,
    });
  };

  handleNameInput = e => {
    this.setState({
      nameInput: e.target.value,
    });
  };

  handlePhoneInput = e => {
    this.setState({
      phoneInput: e.target.value,
    });
  };

  handleAccountInput = e => {
    this.setState({
      accountInput: e.target.value,
    });
  };

  signUpData = () => {
    fetch('http://10.58.4.89:8000/user/signup', {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.idInput,
        password: this.state.pwInput,
        name: this.state.nameInput,
        phone: this.state.phoneInput,
        account: this.state.accountInput,
      }),
    })
      .then(response => response.json())
      .then(result => console.log('결과: ', result.ACCESS_TOKEN));
  };

  render() {
    return (
      <main className="login">
        <div className="boxWrapper">
          <header>
            <p className="login__logo">Westagram</p>
          </header>
          <section>
            <form className="login__form">
              <input
                type="text"
                id="login__id"
                placeholder="Email"
                onChange={this.handleIdInput}
              />
              <input
                type="password"
                id="login__pw"
                placeholder="Password"
                onChange={this.handlePwInput}
              />
              <input
                type="text"
                id="login__pw"
                placeholder="Name"
                onChange={this.handleNameInput}
              />
              <input
                type="text"
                id="login__pw"
                placeholder="Phone"
                onChange={this.handlePhoneInput}
              />
              <input
                type="text"
                id="login__pw"
                placeholder="Account"
                onChange={this.handleAccountInput}
              />
              <button
                className={
                  this.state.idInput.includes('@') &&
                  this.state.pwInput.length >= 5
                    ? 'changeButtonColor'
                    : 'normalButtonColor'
                }
                disabled={
                  this.state.idInput.includes('@') &&
                  this.state.pwInput.length >= 5
                    ? false
                    : true
                }
                onClick={this.signUpData}
              >
                Log In
              </button>
            </form>
          </section>
          <section>
            <div className="password__reset">
              <a href="https://www.#.com">Forgot password?</a>
            </div>
          </section>
        </div>
      </main>
    );
  }
}

export default SignUpSg;
