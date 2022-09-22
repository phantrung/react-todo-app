import {
  Button,
  Card,
  CardContent,
  CardHeader,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
// import PropTypes from 'prop-types'
import { useNavigate } from "react-router-dom";
import { useTodoAppForm } from "./hooks/useTodoAppForm";
const TodoDetail = (props) => {
  const navigate = useNavigate();

  const { methodForm, onSubmit } = useTodoAppForm();

  const { control, register } = methodForm;

  return (
    <div>
      <Card>
        <CardHeader
          title="Thêm mới task"
          action={
            <Button
              variant="contained"
              color="secondary"
              onClick={() => navigate("/todo-app")}
            >
              Trở về
            </Button>
          }
        />
        <CardContent>
          <form onSubmit={onSubmit}>
            <TextField
              variant="outlined"
              fullWidth
              label="Tên task"
              {...register("name")}
            />
            <TextField
              multiline
              minRows={5}
              variant="outlined"
              fullWidth
              label="Mô tả task"
              sx={{
                marginTop: 4,
              }}
              {...register("description")}
            />
            <Box sx={{ textAlign: "center", marginTop: 3 }}>
              <Button type="submit" color="primary" variant="contained">
                Submit
              </Button>
            </Box>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

//TodoDetail.defaultProps = {}

//TodoDetail.propTypes = {}

export default React.memo(TodoDetail);
