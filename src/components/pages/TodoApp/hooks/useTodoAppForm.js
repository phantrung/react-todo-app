import { useForm } from "react-hook-form";
import axios from "axios";
import { API_TODO_APP } from "../../../../configs/api";
import { useNavigate } from "react-router-dom";
export const useTodoAppForm = () => {
  const navigate = useNavigate();
  const methodForm = useForm({
    mode: "onTouched",
    defaultValues: {
      name: "",
      description: "",
    },
  });

  const onSubmit = methodForm.handleSubmit(async (data) => {
    try {
      const res = await axios.post(API_TODO_APP.tasks, data);
      navigate("/todo-app");
      console.log("============= res", res);
    } catch (e) {
      console.log(e);
    }
  });

  return {
    methodForm,
    onSubmit,
  };
};
