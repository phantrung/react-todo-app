import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Card, CardContent, CardHeader } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTodoAppContext } from "./ListTodoProvider";

function createData(id, name, description, status) {
  return { id, name, description, status };
}

const rows = [
  createData(
    1,
    "Dựng UI/UX màn danh sách",
    "Tích hợp api + dựng giao diện",
    "todo"
  ),
];

const TodoList = () => {
  const navigate = useNavigate();
  const { tasks } = useTodoAppContext();

  const renderRows = () => {
    if (Array.isArray(tasks) && tasks.length > 0) {
      return tasks.map((row) => (
        <TableRow
          key={row.id}
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        >
          <TableCell component="th" scope="row">
            {row.id}
          </TableCell>
          <TableCell align="right">{row.name}</TableCell>
          <TableCell align="right">{row.description}</TableCell>
          <TableCell align="right">
            {row.status ? "Active" : "Inactive"}
          </TableCell>
        </TableRow>
      ));
    } else {
      return (
        <TableRow>
          <TableCell colSpan={4} align="center">
            "Không có dữ liệu nào"
          </TableCell>
        </TableRow>
      );
    }
  };

  return (
    <Card>
      <CardHeader
        title="TodoApp"
        action={
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("/todo-app/new")}
          >
            Thêm mới
          </Button>
        }
      />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Description</TableCell>
              <TableCell align="right">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{renderRows()}</TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default TodoList;
