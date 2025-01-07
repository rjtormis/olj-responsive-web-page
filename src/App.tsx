import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router";
import MainPage from "./pages/main";

const route = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainPage />} />
    </>
  )
);

function App() {
  return (
    <>
      <div className="min-h-screen">
        <RouterProvider router={route} />
      </div>
    </>
  );
}

export default App;
