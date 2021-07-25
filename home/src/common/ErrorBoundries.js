import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: '',
    };
  }

  static getDerivedStateFromError(error) {
    console.log('error-------------', error);
    return {
      hasError: true,
      error: `${error}`,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Something went wrong:( </h1>
          <p>{this.state.error}</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
