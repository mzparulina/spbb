import React, { useState, useEffect } from "react";
import { Switch, Route, Link, useLocation } from "react-router-dom";
import { Layout, Menu } from "antd";

import DataService from "./services/DataService";
import routes from "./routes";

const { Header, Footer } = Layout;

function App() {
  const location = useLocation();
  const [user, setUser] = useState(null);

  const getUser = async () => {
    const user = { username: "www", password: "chris" };
    const users = await DataService.login(user);
    setUser(users.data);
    console.log(users);
  };

  useEffect(() => {
    getUser();
  }, [location]);

  return (
    <Layout>
      <Header className="header">
        <Menu style={{ textAlign: "right" }} theme="dark" mode="horizontal">
          <Menu.Item key="1">Requirements</Menu.Item>
          <Menu.Item key="2">
            <Link to={"/upload"}>Upload</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Switch>
        {routes.map((route, i) => (
          <Route exact key={i} path={route.path} component={route.component} />
        ))}
      </Switch>

      <Footer style={{ textAlign: "center" }}>SPBB ©2020</Footer>
    </Layout>
  );
}

export default App;
