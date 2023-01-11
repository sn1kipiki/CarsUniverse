import React, { useContext, useState } from "react";

import { Button, Card, Container, Form, FormControl } from "react-bootstrap";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  CATALOG_ROUTE,
  LOGIN_ROUTE,
  MAIN_ROUTE,
  REGISTRATION_ROUTE,
} from "../utils/consts";
import { registration, login } from "../http/userAPI";
import { observer } from "mobx-react-lite";
import { Context } from "..";

const Auth = observer(() => {
  const { user } = useContext(Context);
  const location = useLocation();
  const navigate = useNavigate();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const click = async () => {
    try {
      let data;
      if (isLogin) {
        data = await login(email, password);
      } else {
        data = await registration(email, password);
      }
      user.setUser(data);
      user.setIsAuth(true);

      navigate(MAIN_ROUTE);
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: 250, marginTop: 200 }}
      // class="margin"
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">{isLogin ? "Authorization" : "Registration"}</h2>
        <Form className="d-flex flex-column">
          <FormControl
            className="mt-3"
            placeholder="Enter e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormControl
            className="mt-3"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <Form className="d-flex justify-content-between mt-3">
            {isLogin ? (
              <div>
                dont have an acaunt?{" "}
                <NavLink to={REGISTRATION_ROUTE}>Sing up</NavLink>
              </div>
            ) : (
              <div>
                have an acaunt? <NavLink to={LOGIN_ROUTE}>Sing in</NavLink>
              </div>
            )}
            <Button variant={"outline-success"} onClick={click}>
              {isLogin ? "sing In" : "sing Up"}
            </Button>
          </Form>
        </Form>
      </Card>
    </Container>
  );
});
export default Auth;
// (window.innerHeight = 54)
