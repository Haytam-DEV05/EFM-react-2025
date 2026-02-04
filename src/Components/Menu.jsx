import {
  createBrowserRouter,
  RouterProvider,
  NavLink,
  Outlet,
} from "react-router";
import ListeDesEquipes from "./ListeDesEquipes";
import ListeDesMatchs from "./ListeDesMatchs";

export default function Menu() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <ListeDesEquipes /> },
        { path: "matchs/:id", element: <ListeDesMatchs /> },
      ],
    },
  ]);

  function Layout() {
    return (
      <>
        <nav
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            minHeight: "70px",
            background: "red",
          }}
        >
          <NavLink style={{ marginInline: "10px" }} to="/">
            Les Equipes
          </NavLink>
          <NavLink style={{ marginInline: "10px" }} to="/">
            Les Matchs
          </NavLink>
        </nav>
        <main>
          <Outlet />
        </main>
      </>
    );
  }
  return <RouterProvider router={router}></RouterProvider>;
}
