/* eslint-disable react/jsx-no-bind */
import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";

import { BsPlusLg, BsBrushFill, BsSearch } from "react-icons/bs";
import { GiTrashCan } from "react-icons/gi";
import {
  BigBox,
  Button,
  ButtonActions,
  FirstBox,
  Input,
  InputBigBox,
  SecondBox,
  Table,
  Td,
  TdActions,
  Th,
  ThActions,
  TitleBox,
  Tr,
} from "./style";

import { Spacer } from "../../Small/Spacer";
import { MyModal } from "../../Small/MyModal";
import { Paginate } from "../Paginate/Paginate";

import { useTable } from "../../../hooks/Table";

export function TableConsult() {
  const {
    students,
    student,
    setStudent,
    pages,
    userToDelete,
    setUserToDelete,
    searchName,
    confirmDeleteStudent,
  } = useTable();

  const navigate = useNavigate();

  const [modal, setModal] = useState(false);

  function handleFilterSearch(event: FormEvent) {
    event.preventDefault();
    searchName();
  }

  function handleDeleteStudent(event: FormEvent, _id: string, name: string) {
    event.preventDefault();
    setUserToDelete({
      name,
      _id,
    });
    setModal(true);
  }

  function handleConfirmDeleteStudent() {
    confirmDeleteStudent();
    setModal(false);
  }

  return (
    <BigBox>
      <MyModal
        title="Delete User"
        body={`Do you want to delete ${userToDelete.name} ?`}
        close="Cancel"
        save="Confirm"
        showToggle={modal}
        onClose={() => setModal(false)}
        onSave={handleConfirmDeleteStudent}
      />

      <TitleBox>
        <h3>Students</h3>
      </TitleBox>

      <InputBigBox onSubmit={handleFilterSearch}>
        <FirstBox>
          <Input
            placeholder="Find By Name"
            value={student}
            onChange={(event) => setStudent(event.target.value)}
          />
          <Spacer horizontal="8" />
          <Button type="submit">
            <BsSearch />
            <Spacer horizontal="5" />
            Search
          </Button>
        </FirstBox>
        <SecondBox>
          <Button
            onClick={() =>
              navigate("/createStudent", { state: { student: {} } })
            }
          >
            <BsPlusLg />
            <Spacer horizontal="5" />
            New Student
          </Button>
        </SecondBox>
      </InputBigBox>
      <Spacer vertical="5" />

      <Table>
        <Tr>
          <Th>Name</Th>
          <Th>Age</Th>
          <Th>Course</Th>
          <Th>School</Th>
          <ThActions>Actions</ThActions>
        </Tr>
        {students.map(({ _id, name, age, course, school }) => (
          <Tr>
            <Td>{name}</Td>
            <Td>{age}</Td>
            <Td>{course}</Td>
            <Td>{school}</Td>
            <TdActions>
              <ButtonActions
                onClick={() => {
                  navigate("/updateStudent", {
                    state: { student: { _id, name, age, course, school } },
                  });
                }}
              >
                <BsBrushFill size={30} />
              </ButtonActions>
              <ButtonActions
                onClick={(event: FormEvent) => {
                  handleDeleteStudent(event, _id, name);
                }}
              >
                <GiTrashCan size={30} />
              </ButtonActions>
            </TdActions>
          </Tr>
        ))}
      </Table>
      <Paginate numberPages={pages} />
    </BigBox>
  );
}
