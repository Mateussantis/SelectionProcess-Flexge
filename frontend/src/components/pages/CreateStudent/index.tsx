/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-no-bind */
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

import { api } from "../../../services/api";
import { Spacer } from "../../Small/Spacer";
import {
  BoxButton,
  Container,
  ContainerSmall,
  InputLarge,
  Select,
  Options,
  InputSmall,
  Label,
  LabelHorizontal,
} from "./style";

import { DefaultButton } from "../../Small/DefaultButton";

const courses = [
  { value: "", label: "Choose a Course" },
  { value: "A1", label: "A1" },
  { value: "A2", label: "A2" },
  { value: "B1", label: "B1" },
  { value: "B2", label: "B2" },
  { value: "C1", label: "C1" },
  { value: "C2", label: "C2" },
];

const schools = [
  { value: "", label: "Choose a School" },
  { value: "Impacta", label: "Impacta" },
  { value: "USP", label: "USP" },
  { value: "FECAP", label: "FECAP" },
  { value: "UNIP", label: "UNIP" },
];

export function CreateStudent() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [course, setCourse] = useState("");
  const [school, setSchool] = useState("");

  const navigate = useNavigate();

  function CreateOneStudent(event: FormEvent) {
    event.preventDefault();
    if (course === undefined || school === undefined) {
      return toast("Student need to have a Course and School !");
    }
    return api
      .post("/students", { name, age, course, school })
      .then(() => {
        toast("Student Was Created !");
        navigate("/");
      })
      .catch((err) => toast(`Something is wrong ${err.message}`));
  }

  return (
    <Container>
      <Spacer vertical="10" />
      <ContainerSmall onSubmit={CreateOneStudent}>
        <h1>New Student</h1>
        <Spacer vertical="20" />
        <LabelHorizontal>
          <Label>
            <h4>Name</h4>
            <InputLarge
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </Label>
          <Spacer horizontal="58" />
          <Label>
            <h4>Age</h4>
            <InputSmall
              type="number"
              value={age}
              onChange={(event) => setAge(Number(event.target.value))}
            />
          </Label>
        </LabelHorizontal>
        <Spacer vertical="8" />
        <LabelHorizontal>
          <Label>
            <h4>Course</h4>

            <Select
              onChange={(event) => setCourse(event.target.value)}
              value={course}
            >
              {courses.map(({ value, label }) => (
                <Options value={value}>{label}</Options>
              ))}
            </Select>

            {/* <SelectInput onChange={(event) => setCourse(event.target.value)} options={courses} /> */}
          </Label>
          <Spacer horizontal="10" />
          <Label>
            <h4>School</h4>

            <Select
              onChange={(event) => setSchool(event.target.value)}
              value={school}
            >
              {schools.map(({ value, label }) => (
                <Options value={value}>{label}</Options>
              ))}
            </Select>

            {/* <SelectInput options={schools} /> */}
          </Label>
        </LabelHorizontal>
        <Spacer vertical="10" />

        <BoxButton>
          <DefaultButton type="submit" text="Save" />
        </BoxButton>
      </ContainerSmall>
    </Container>
  );
}
