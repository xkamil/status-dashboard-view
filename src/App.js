import React, {Component} from 'react';
import DashboardContainer from "./containers/dashboard/DashboardContainer";

class App extends Component {


    render() {
        return <DashboardContainer config={config}/>;
    }
}

const config = {
    envs: ['dev', 'test', 'stage', 'prod'],
    apps: [
        {
            name: 'client',
            envs: {
                dev: {
                    health_url: 'https://jsonplaceholder.typicode.com/users',
                    meta_url: 'https://jsonplaceholder.typicode.com/users'
                },
                test: {
                    health_url: 'https://jsonplaceholder.typicode.com/users',
                    meta_url: 'https://jsonplaceholder.typicode.com/users'
                },
                stage: {
                    health_url: 'https://jsonplaceholder.typicode.com/users',
                    meta_url: 'https://jsonplaceholder.typicode.com/users'
                },
                prod: {
                    health_url: 'https://jsonplaceholder.typicode.com/users',
                    meta_url: 'https://jsonplaceholder.typicode.com/users'
                }
            }
        }, {
            name: 'dictionary',
            envs: {
                dev: {
                    health_url: 'https://jsonplaceholder.typicode.com/users',
                    meta_url: 'https://jsonplaceholder.typicode.com/users'
                },
                test: {
                    health_url: 'https://jsonplaceholder.typicode.com/users',
                    meta_url: 'https://jsonplaceholder.typicode.com/users'
                },
                stage: {
                    health_url: 'https://jsonplaceholder.typicode.com/users',
                    meta_url: 'https://jsonplaceholder.typicode.com/users'
                },
                prod: {
                    health_url: 'https://jsonplaceholder.typicode.com/users',
                    meta_url: 'https://jsonplaceholder.typicode.com/users'
                }
            }
        }, {
            name: 'tss',
            envs: {
                dev: {
                    health_url: 'https://jsonplaceholder.typicode.com/users',
                    meta_url: 'https://jsonplaceholder.typicode.com/users'
                },
                test: {
                    health_url: 'https://jsonplaceholder.typicode.com/users',
                    meta_url: 'https://jsonplaceholder.typicode.com/users'
                },
                stage: {
                    health_url: 'https://jsonplaceholder.typicode.com/users',
                    meta_url: 'https://jsonplaceholder.typicode.com/users'
                },
                prod: {
                    health_url: 'https://jsonplaceholder.typicode.com/users',
                    meta_url: 'https://jsonplaceholder.typicode.com/users'
                }
            }
        }, {
            name: 'mms',
            envs: {
                dev: {
                    health_url: 'https://jsonplaceholder.typicode.com/users',
                    meta_url: 'https://jsonplaceholder.typicode.com/users'
                },
                test: {
                    health_url: 'https://jsonplaceholder.typicode.com/users',
                    meta_url: 'https://jsonplaceholder.typicode.com/users'
                },
                stage: {
                    health_url: 'https://jsonplaceholder.typicode.com/users',
                    meta_url: 'https://jsonplaceholder.typicode.com/users'
                },
                prod: {
                    health_url: 'https://jsonplaceholder.typicode.com/users',
                    meta_url: 'https://jsonplaceholder.typicode.com/users'
                }
            }
        }, {
            name: 'admin',
            envs: {
                dev: {
                    health_url: 'https://jsonplaceholder.typicode.com/users',
                    meta_url: 'https://jsonplaceholder.typicode.com/users'
                },
                test: {
                    health_url: 'https://jsonplaceholder.typicode.com/users',
                    meta_url: 'https://jsonplaceholder.typicode.com/users'
                },
                stage: {
                    health_url: 'https://jsonplaceholder.typicode.com/users',
                    meta_url: 'https://jsonplaceholder.typicode.com/users'
                },
                prod: {
                    health_url: 'https://jsonplaceholder.typicode.com/users',
                    meta_url: 'https://jsonplaceholder.typicode.com/users'
                }
            }
        }
    ]
};

const apps = [
    {
        name: 'dictionary',
        environments: [
            {
                name: 'dev',
                health: 'https://jsonplaceholder.typicode.com/users',
                info: 'https://jsonplaceholder.typicode.com/users'
            },
            {
                name: 'test',
                health: 'https://jsonplaceholder.typicode.com/users',
                info: 'https://jsonplaceholder.typicode.com/users'
            },
            {
                name: 'stage',
                health: 'https://jsonplaceholder.typicode.com/users',
                info: 'https://jsonplaceholder.typicode.com/users'
            }
        ]
    },
    {
        name: 'client',
        environments: [
            {
                name: 'dev',
                health: 'https://jsonplaceholder.typicode.com/users',
                info: 'https://jsonplaceholder.typicode.com/users'
            },
            {
                name: 'test',
                health: 'https://jsonplaceholder.typicode.com/users',
                info: 'https://jsonplaceholder.typicode.com/users'
            },
            {
                name: 'stage',
                health: 'https://jsonplaceholder.typicode.com/users',
                info: 'https://jsonplaceholder.typicode.com/users'
            }
        ]
    },
];

export default App;
