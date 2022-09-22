// File này dùng để khai báo router

import Dashboard from "../components/pages/Dashboard";
import TodoApp from "../components/pages/TodoApp";
import TodoDetail from "../components/pages/TodoApp/TodoDetail";
import Users from "../components/pages/Users";
export const appRouterConfig = [
  {
    path: "/",
    component: <Dashboard />,
  },
  {
    path: "/todo-app",
    component: <TodoApp />,
  },
  {
    path: "/todo-app/:id",
    component: <TodoDetail />,
  },
  {
    path: "/users",
    component: <Users />,
  },
  {
    path: "/company",
    component: <div>Quản lý công ty</div>,
  },
];
