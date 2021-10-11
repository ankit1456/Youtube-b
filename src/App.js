import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import HomeScreen from "./screens/HomeScreen/Homescreen";
import { Container } from "react-bootstrap";
import "./sass/_app.scss";
import React, { useState, useEffect } from "react";
import LoginScreen from "./screens/LoginScreen/Loginscreen";
import { useHistory } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector } from "react-redux";

const Layout = ({ children }) => {
  const [sidebar, toggleSidebar] = useState(false);

  const handleToggleSidebar = () => toggleSidebar((value) => !value);

  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className='app__container'>
        <Sidebar handleToggleSidebar={handleToggleSidebar} sidebar={sidebar} />
        <Container fluid className='app__main'>
          {children}
        </Container>
      </div>
    </>
  );
};

function App() {
  const { accessToken, loading } = useSelector((state) => state.auth);
  const history = useHistory();

  useEffect(() => {
    if (!loading && !accessToken) {
      history.push("/auth");
    }
  }, [accessToken, loading, history]);

  return (
    <Switch>
      <Route exact path='/'>
        <Layout>
          <HomeScreen />
        </Layout>
      </Route>

      <Route path='/auth'>
        <LoginScreen />
      </Route>
      <Route path='/search'>
        <Layout>
          <h1>Search Results</h1>
        </Layout>
      </Route>
      <Route>
        <Redirect to='/' />
      </Route>
    </Switch>
  );
}

export default App;
