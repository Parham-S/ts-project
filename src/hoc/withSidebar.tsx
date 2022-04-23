import { Component } from 'react'
import NavBar from '../Components/Navbar/Navbar'

function withSidebar(WrappedComponent: typeof Component) {
  return class extends Component {
    constructor(props: any) {
      super(props);
    }

    render() {
      return (
        <>
          <NavBar />
          <WrappedComponent {...this.props} />
        </>
      );
    }
  };
}

export { withSidebar };