import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Layout, Menu } from 'antd';

import routes from './routes';
import history from './utils/history';
const { Header, Footer } = Layout;
// import './App.css';

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Layout>
          <Header className="header">
            <Menu style={{ textAlign: 'right' }} theme="dark" mode="horizontal">
              <Menu.Item key="1">Requirements</Menu.Item>
              <Menu.Item key="2">Upload</Menu.Item>
            </Menu>
          </Header>
          {routes.map((route, i) => (
            <Route
              exact
              key={i}
              path={route.path}
              component={route.component}
            />
          ))}
          <Footer style={{ textAlign: 'center' }}>SPBB ©2020</Footer>
        </Layout>
      </Switch>
    </Router>
  );
}

export default App;
