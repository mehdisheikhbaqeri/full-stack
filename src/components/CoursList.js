import React from "react";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CourseList = ({ courseData }) => {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author ID</th>
          <th>Category</th>
          <th colSpan={2}>Slug</th>
        </tr>
      </thead>
      <tbody>
        {courseData?.map((course) => {
          const { id, title, authorId, category, slug } = course;
          return (
            <tr key={id}>
              <td>
                <Link to={`/course/${slug}`}></Link>
              </td>
              <td>{title}</td>
              <td>{authorId}</td>
              <td>{category}</td>
              <td>{slug}</td>
              <td>
                <button variant="danger">Delete</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default CourseList;
