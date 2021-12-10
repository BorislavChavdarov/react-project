import { Component } from 'react';
import "./ErrorBoundary.css"
class ErrorBoundary extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null
        };
    }

    static getDerivedStateFromError(error) {
        return {error};
    }

    componentDidCatch(error) {
        console.log(error);
    }

    render() {
        if (this.state.error) {
            return (
    <div class="container">
        <h2>ERROR</h2>
        <h1>404</h1>
        <h2>PAGE NOT FOUND</h2>
        </div>
 );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;