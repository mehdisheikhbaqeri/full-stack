import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import CourseList from "./CourseList";
import coursesData from "./data";
import axios from "axios";

const CoursePage = () => {
  const navigate = useNavigate();
  // console.log(navigate);
  cosnt[(coursesData, setCoursesData)] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/courses").then((data) => setCoursesData());
  });

  return (
    <>
      <h1>Course Page</h1>
      <Button onClick={() => navigate("/create-course")}>Create Course</Button>
      <CourseList coursesData={coursesData} />
    </>
  );
};

export default CoursePage;
