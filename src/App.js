import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import CoursePage from "./components/CoursePage";
import Nav from "./components/Nav";
import PageNotFound from "./components/PageNotFound";
import Welcome from "./components/Welcome";
import ManageCoursePage from "./components/ManageCoursePage";
import CreateCourse from "./components/CreateCourse";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<HomePage />} />

        <Route path='/about/*' element={<AboutPage />}>
          <Route path='new-user' element={<Welcome />} />
        </Route>

        <Route path='/course' element={<CoursePage />} />
        <Route path='/course/:slug' element={<ManageCoursePage />} />
        <Route path='/create-course' element={<CreateCourse />} />

        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
