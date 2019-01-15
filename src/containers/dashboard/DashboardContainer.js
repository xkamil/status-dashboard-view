import React from 'react';
import PropTypes from 'prop-types';


class SectionContainer extends React.Component {

    render() {
        const envs = ["", "dev", "test", "stage"];

        const apps = [
            {
                name: 'fs_client',
                envs: {
                    dev: {version: '1.0.0-SNAPSHOT', status: 'ok'},
                    test: {version: '1.0.0-RC03', status: 'unknown'},
                    stage: {version: '1.0.0-RC03', status: 'unknown'},
                }
            },
            {
                name: 'fs_dictionary',
                envs: {
                    dev: {version: '1.0.0-SNAPSHOT', status: 'ok'},
                    test: {version: '1.0.0-SNAPSHOT', status: 'fail'},
                    stage: {version: '1.0.0-RC03', status: 'ok'},
                }
            },
        ];

        return (
            <div className="container">
                <div className="containers-row">
                    {envs.map((h, idx) =>
                        <Header id={idx} key={idx} text={h}/>
                    )}
                </div>

                {apps.map((app, idx) =>
                    <div className="containers-row" key={idx}>
                        {envs.map((env, idx) =>
                            <AppRow id={idx} key={idx} env={env} app={app}/>
                        )}
                    </div>
                )}
            </div>
        );
    }
}

function Header(props) {
    const {id, text} = props;
    return <div className={id ? 'rows-header_x' : 'rows-header_y'}>{text}</div>
}

function AppRow(props) {
    const {id, app, env} = props;

    return (
        <div className={id ? 'rows-cell' : 'rows-header_y'}>
            {!id && app &&
            <span>{app.name}</span>
            }

            {id &&
            <App app={app} env={env}/>
            }
        </div>
    )
}

function App(props) {
    const {app, env} = props;
    const status = app.envs[env] ? app.envs[env].status : 'unknown';

    return (
        <div className={`app_container status-${status}`}>
            {app.envs[env] &&
            <div className="app">{app.envs[env].version}</div>
            }
        </div>
    )
}

SectionContainer.propTypes = {
    config: PropTypes.object.isRequired
};

export default SectionContainer;
