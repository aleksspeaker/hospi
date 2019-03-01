import Router from 'next/router';
import React, { ChangeEvent, Component } from 'react';

import * as T from './types';

export interface ILoginState {
  credentials: T.LoginCredentials;
  isLoginLoading: boolean;
}

export default class Login extends Component<{}, ILoginState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      credentials: {
        email: null,
        password: null,
      },
      isLoginLoading: false,
    };
  }

  public handleCredentialsChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { credentials } = this.state;
    credentials[e.target.name] = e.target.value;

    this.setState({ credentials });
  }

  public handleLoginSubmit = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    this.setState({ isLoginLoading: true });

    setTimeout(() => {
      this.setState({ isLoginLoading: false });
      Router.replace('/cars');
    }, 500);
  }

  public render() {
    const { credentials } = this.state;

    return (
      <div>
        <h1>Login</h1>
        <form>
          <input
            id="formEmail"
            name="email"
            type="text"
            value={credentials.email}
            onChange={this.handleCredentialsChange}
          />
          <input
            name="password"
            type="password"
            value={credentials.password}
            onChange={this.handleCredentialsChange}
          />

          <button id="loginSubmit" onClick={this.handleLoginSubmit}>
            {this.state.isLoginLoading ? 'Logging in...' : 'Log in'}
          </button>
        </form>
      </div>
    );
  }
}
