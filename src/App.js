import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { Layout, Menu } from 'antd';

import routes from './routes';
import history from './utils/history';

const { Header, Footer } = Layout;

function App() {
  return (
    <Router history={history}>
      <Layout>
        <Header className="header">
          <Menu style={{ textAlign: 'right' }} theme="dark" mode="horizontal">
            <Menu.Item key="1">Requirements</Menu.Item>
            <Menu.Item key="2">Upload</Menu.Item>
          </Menu>
        </Header>
        <Switch>
          {routes.map((route, i) => (
            <Route key={i} path={route.path} component={route.component} />
          ))}
        </Switch>

        <Footer style={{ textAlign: 'center' }}>SPBB ©2020</Footer>
      </Layout>
    </Router>
  );
}

export default App;
