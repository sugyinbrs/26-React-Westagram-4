import React from 'react';
import './Login.scss';

class LoginSg extends React.Component {
  constructor() {
    super();
    this.state = {
      idInput: '',
      pwInput: '',
    };
  }

  goToMain = () => {
    this.props.history.push('/MainSg');
  };

  updateIdInput = e => {
    this.setState({
      idInput: e.target.value,
    });
  };

  updatePwInput = e => {
    this.setState({
      pwInput: e.target.value,
    });
  };

  decideWhereToGo = () => {
    fetch('http://10.58.4.89:8000/user/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.idInput,
        password: this.state.pwInput,
      }),
    })
      .then(response => response.json())
      .then(result => console.log('결과: ', result.ACCESS_TOKEN));
  };

  render() {
    const { idInput, pwInput } = this.state;
    const isActiveButton = idInput.includes('@') && pwInput.length >= 5;
    return (
      <main className="loginSg">
        <div className="boxWrapper">
          <header>
            <p className="loginLogo">Westagram</p>
          </header>
          <section>
            <form className="loginForm" onSubmit={this.goToMain}>
              <input
                type="text"
                id="loginId"
                placeholder="Phone number, username, or email"
                onChange={this.updateIdInput}
              />
              <input
                type="password"
                id="loginPw"
                placeholder="Password"
                onChange={this.updatePwInput}
              />
              <button
                className={
                  isActiveButton ? 'changeButtonColor' : 'normalButtonColor'
                }
                disabled={!isActiveButton}
                onClick={this.decideWhereToGo}
                type="button"
              >
                Log In
              </button>
            </form>
          </section>
          <section>
            <div className="passwordReset">
              <a href="https://www.#.com">Forgot password?</a>
            </div>
          </section>
        </div>
      </main>
    );
  }
}

export default LoginSg;
