import React, {Component} from 'react';

class ErrorBoundry extends Component {
	constructor() {
		super();
		this.state = {
			hasError: false
		};
	}
	componentDidCatch(error, info) {
		return this.setState({hasError: false});
	}
	render() {
	    if (this.state.hasError) {
	      // You can render any custom fallback UI
	      return <h1>Something went wrong.</h1>;
	    }
		return this.props.children;
	}
}

export default ErrorBoundry;