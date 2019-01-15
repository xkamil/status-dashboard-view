import React, {Component} from 'react';

class AppView extends Component {

    constructor() {
        super();

        this.state = {
            health: null,
            isRequestInProgress: false
        };
    }

    componentDidMount() {
        const {health} = this.props;

        setInterval(() => {
            this.setState({isRequestInProgress: true});

            fetch(health)
                .then(() => setTimeout(() => this.setState({health: 'ok', isRequestInProgress: false}), 300))
                .catch(() => this.setState({health: 'fail', isRequestInProgress: false}))
        }, 3000);
    }

    render() {
        const {app} = this.props;
        const {health, isRequestInProgress} = this.state;

        const getColor = () => {
            switch (health) {
                case null :
                    return 'none';
                case 'fail' :
                    return 'red';
                case 'ok' :
                    return 'green';
            }
        };

        return (
            <div style={{backgroundColor: getColor(), opacity: isRequestInProgress ? 0.7 : 1}}>
                {JSON.stringify(app.health)}
            </div>
        );
    }
}

export default AppView;
