import React, { useState } from "react";
import { Button } from "react-bootstrap";

export default function CreateCourse() {
  const [updateCourse, setUpdateCourse] = useState({
    title: "",
    authorId: "",
    slug: "",
    category: "",
  });

  const handleSubmit = e => {
    e.preventDefault();
    setUpdateCourse({
      title: "",
      authorId: "",
      slug: "",
      category: "",
    });
  };

  return (
    <>
      <h1>Create Course Page</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='title'>Course Title</label>
          <input
            type='text'
            name='title'
            value={updateCourse.title}
            onChange={e =>
              setUpdateCourse({ ...updateCourse, title: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor='authorId'>Course authorId</label>
          <input
            type='text'
            name='authorId'
            value={updateCourse.authorId}
            onChange={e =>
              setUpdateCourse({ ...updateCourse, authorId: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor='slug'>Course slug</label>
          <input
            type='text'
            name='slug'
            value={updateCourse.slug}
            onChange={e =>
              setUpdateCourse({ ...updateCourse, slug: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor='category'>Course category</label>
          <input
            type='text'
            name='category'
            value={updateCourse.category}
            onChange={e =>
              setUpdateCourse({ ...updateCourse, category: e.target.value })
            }
          />
        </div>
        <Button type='submit'>Submit</Button>
      </form>
    </>
  );
}
