import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import CourseList from "./CourseList";
import coursesData from "./data";

const CoursePage = () => {
  const navigate = useNavigate();
  // console.log(navigate);

  return (
    <>
      <h1>Course Page</h1>
      <Button onClick={() => navigate("/create-course")}>Create Course</Button>
      <CourseList coursesData={coursesData} />
    </>
  );
};

export default CoursePage;
