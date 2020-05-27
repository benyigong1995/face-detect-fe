import React from 'react';

class SignUp extends React.Component {
	constructor(props) {
		super();
		this.state = {
			signInEmail: '',
			signInPassword: ''
		}
	}
	onEmailChange = (event) => {
		this.setState({signInEmail: event.target.value});
	}
	onPasswordChange = (event) => {
		this.setState({signInPassword: event.target.value});
	}
	onSubmitSignUp = () => {
		fetch('https://boiling-basin-43073.herokuapp.com/signup', {
			method: 'post',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email: this.state.signInEmail,
				password: this.state.signInPassword
			})
		})
		.then(response => response.json())
		.then(user => {
			if (user) {
				this.props.loadUser(user);
				this.props.onRouteChange('signin');
			} 
		})
	}
	render() {
		// const {onRouteChange} = this.props;
		return (
			<article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 center">
			<main className="pa4 black-80">
			  <div className="measure">
			    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
			      <legend className="f4 fw6 ph0 mh0">Sign Up</legend>
			      <div className="mt3">
			        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
			        <input 
			        onChange = {this.onEmailChange}
			        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
			        type="email" name="email-address"  id="email-address"/>
			      </div>
			      <div className="mv3">
			        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
			        <input 
			        onChange = {this.onPasswordChange}
			        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
			        type="password" name="password"  id="password"/>
			      </div>
			    </fieldset>
			    <div className="">
			      <input 
			      onClick = {this.onSubmitSignUp}
			      className="b ph3 pv2 input-reset 
			      ba b--black bg-transparent grow pointer f6 dib" 
			      type="submit" 
			      value="Register"/>
			    </div>
			  </div>
			</main>
			</article>
		);		
	}

}

export default SignUp;