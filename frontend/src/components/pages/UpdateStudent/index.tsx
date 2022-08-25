/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-no-bind */
import { FormEvent, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

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

interface IStudent {
  _id: string;
  name: string;
  age: number;
  course: string;
  school: string;
}

interface ConfigStudentScreenState {
  student: IStudent;
}

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

export function UpdateStudent() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [course, setCourse] = useState("");
  const [school, setSchool] = useState("");

  const navigate = useNavigate();
  const { state } = useLocation();

  const { student } = state as ConfigStudentScreenState;

  function UpdateOneStudent(event: FormEvent) {
    event.preventDefault();
    if (course === undefined || school === undefined) {
      return toast("Student need to have a Course and School !");
    }

    api
      .patch(`/students/${student._id}`, { name, age, course, school })
      .then(() => {
        toast("Student Was Updated !");
        navigate("/");
      })
      .catch((err) => toast(`Something went wrong ${err.message}`));
  }

  useEffect(() => {
    if (student) {
      setName(student.name);
      setAge(student.age);
      setCourse(student.course);
      setSchool(student.school);
    }
  }, [student]);

  return (
    <Container>
      <Spacer vertical="10" />
      <ContainerSmall onSubmit={UpdateOneStudent}>
        <h1>Update Student</h1>
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
          <DefaultButton type="submit" text="Update" />
        </BoxButton>
      </ContainerSmall>
    </Container>
  );
}
