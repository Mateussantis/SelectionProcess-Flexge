/* eslint-disable no-alert */
import { useNavigate, useLocation } from "react-router-dom";
import { FormEvent, useCallback, useState } from "react";
import { toast } from "react-toastify";

import { useAuth } from "../../../hooks/Auth";

import { Spacer } from "../../Small/Spacer";
import {
  BoxButtonLink,
  Button,
  ButtonText,
  Container,
  Form,
  Img,
  Input,
  Label,
  TextInput,
} from "./style";
import Logo from "../../../assets/logo.png";

export function Login() {
  const navigate = useNavigate();

  const { signin } = useAuth();

  const { state } = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignin = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();
      try {
        await signin({ email, password });
        toast("Everything is right, you will be redirected to Home!");
        navigate("/home", { replace: true, state });
      } catch (err) {
        toast("The values are wrong!");
      }
    },
    [email, password, navigate, signin, state]
  );

  return (
    <Container>
      <Form onSubmit={handleSignin}>
        <Img src={Logo} />
        <Spacer vertical="15" />
        <Label>
          <TextInput>Email</TextInput>
          <Spacer vertical="5" />
          <Input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </Label>
        <Label>
          <TextInput>Password</TextInput>
          <Spacer vertical="5" />
          <Input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <Spacer vertical="17" />
          <Spacer vertical="2" />
          <BoxButtonLink>
            <Button>Login</Button>
            <Spacer horizontal="30" />
            <ButtonText onClick={() => navigate("/register")}>
              Register User
            </ButtonText>
          </BoxButtonLink>
        </Label>
      </Form>
    </Container>
  );
}
