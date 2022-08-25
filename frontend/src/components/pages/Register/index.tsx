/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-alert */
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

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
import { api } from "../../../services/api";

export function Register() {
  const [email, setEmail] = useState("");
  const [confirmationEmail, setConfirmationEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmationPassword, setConfirmationPassword] = useState("");

  const navigate = useNavigate();

  function CreateUser(event: FormEvent) {
    event.preventDefault();
    if (email !== confirmationEmail) {
      return toast("Email is not the same of Confirmation Email!");
    }
    if (password !== confirmationPassword) {
      return toast("Password is not the same of Confirmation Password!");
    }

    api
      .post("/users", { email, password })
      .then(() => {
        toast("User was created!");
        navigate("/");
      })
      .catch(() => toast("Something went wrong"));
  }

  return (
    <Container>
      <Form onSubmit={CreateUser}>
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
          <TextInput>Email Confirmation</TextInput>
          <Spacer vertical="5" />
          <Input
            value={confirmationEmail}
            onChange={(event) => setConfirmationEmail(event.target.value)}
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
        </Label>
        <Label>
          <TextInput>Password Confirmation</TextInput>
          <Spacer vertical="5" />
          <Input
            type="password"
            value={confirmationPassword}
            onChange={(event) => setConfirmationPassword(event.target.value)}
          />
          <Spacer vertical="19" />
          <BoxButtonLink>
            <Button>Register</Button>
            <Spacer horizontal="30" />
            <ButtonText onClick={() => navigate("/")}>Back to Login</ButtonText>
          </BoxButtonLink>
        </Label>
      </Form>
    </Container>
  );
}
