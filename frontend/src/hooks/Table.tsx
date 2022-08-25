/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-no-constructed-context-values */
import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
  useCallback,
} from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";

import { usePaginate } from "./Paginate";

interface TableProps {
  _id: string;
  name: string;
  age: number;
  course: string;
  school: string;
}

interface IUserToDelete {
  name: string;
  _id: string;
}

interface TableContextData {
  students: TableProps[];
  setStudents: React.Dispatch<React.SetStateAction<TableProps[]>>;
  oldStudents: TableProps[];
  setOldStudents: React.Dispatch<React.SetStateAction<TableProps[]>>;
  student: string;
  setStudent: React.Dispatch<React.SetStateAction<string>>;
  pages: number;
  setPages: React.Dispatch<React.SetStateAction<number>>;
  userToDelete: IUserToDelete;
  setUserToDelete: React.Dispatch<React.SetStateAction<IUserToDelete>>;
  searchName: () => void;
  confirmDeleteStudent: () => void;
}

interface TableProviderProps {
  children: ReactNode;
}

const TableContext = createContext<TableContextData>({} as TableContextData);

function TableProvider({ children }: TableProviderProps): JSX.Element {
  const { index } = usePaginate();

  const [students, setStudents] = useState<TableProps[]>([]);
  const [oldStudents, setOldStudents] = useState<TableProps[]>([]);
  const [student, setStudent] = useState("");
  const [pages, setPages] = useState(0);

  const [userToDelete, setUserToDelete] = useState<IUserToDelete>({
    name: "",
    _id: "",
  });

  useEffect(() => {
    api.get(`/filters/?page=${index}`).then((res) => setStudents(res.data));
    api.get("/pages").then((response) => setPages(response.data));
  }, [index, setStudents]);

  useEffect(() => {
    if (index === 0) {
      api.get(`/filters/?page=${index}`).then((res) => {
        setStudents(res.data);
        setOldStudents(res.data);
      });
    }
  }, [setOldStudents, setStudents, setPages, index]);

  const searchName = useCallback(() => {
    if (student === "") {
      setStudents(oldStudents);
    } else {
      api.get(`/filters/${student}`).then((data) => {
        setStudents(data.data);
      });
    }
  }, [student, setStudents, oldStudents]);

  const confirmDeleteStudent = useCallback(() => {
    api
      .delete(`/students/${userToDelete._id}`)
      .then(() => {
        setStudents(students.filter(({ _id: id }) => userToDelete._id !== id));
        setOldStudents(
          students.filter(({ _id: id }) => userToDelete._id !== id)
        );
        api.get("/pages").then((response) => setPages(response.data));
        api.get(`/filters/?page=${index}`).then((res) => setStudents(res.data));
        toast("User was deleted !");
      })
      .catch((error) => console.log(error));
  }, [index, students, userToDelete]);

  return (
    <TableContext.Provider
      value={{
        students,
        setStudents,
        oldStudents,
        setOldStudents,
        student,
        setStudent,
        pages,
        setPages,
        userToDelete,
        setUserToDelete,
        searchName,
        confirmDeleteStudent,
      }}
    >
      {children}
    </TableContext.Provider>
  );
}

function useTable(): TableContextData {
  const context = useContext(TableContext);

  if (!context) {
    throw new Error("useTable should be used within a TableProvider");
  }

  return context;
}

export { TableProvider, useTable };
