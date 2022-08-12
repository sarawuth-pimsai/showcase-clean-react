import HomePage from "@ui/pages/HomePage";
import { useRoutes } from "react-router-dom";

type Props = {};

export default function Router({}: Props) {
  const element = useRoutes([
    {
      path: "/",
      element: <HomePage />,
    },
  ]);
  return element;
}
