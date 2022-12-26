import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Mypage from "./pages/Mypage";
import NotFound from "./pages/NotFound";
import QuestionDetail from "./pages/QuestionDetail";
import QuestionsList from "./pages/QuestionsList";
import Signup from "./pages/Signup";
import Tags from "./pages/Tags";
import Users from "./pages/Users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <QuestionsList />,
    errorElement: <NotFound />,
  },
  {
    path: "/:questionId", //useParams()를 쓸때 ":"이용
    element: <QuestionDetail />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/logout",
    element: <Logout />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/tags",
    element: <Tags />,
  },
  {
    path: "/users",
    element: <Users />,
  },
  {
    path: "/mypage",
    element: <Mypage />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
