import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

function AboutPage() {
  const [parallelValue, setParallelValue] = useState("");
  const [descValue, setDescValue] = useState("");
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setText(descValue);
  }

  return (
    <>
      <h1>About Page</h1>
      <Link to='/'>Home | </Link>
      <Link to='new-user'>New User Welcome</Link>
      <Outlet />
      <form onSubmit={handleSubmit}>
        <label htmlFor='parallel'>type and submit on change</label>
        <input
          type='text'
          name='parallel'
          id='parallel'
          value={parallelValue}
          onChange={e => setParallelValue(e.target.value)}
        />
        <label htmlFor='describe'>type and submit on Click the button</label>
        <input
          type='text'
          name='describe'
          id='describe'
          value={descValue}
          onChange={e => setDescValue(e.target.value)}
        />
        <Button type='submit'>Submit</Button>
      </form>
      {parallelValue && <p>{parallelValue}</p>}
      {text && <p>{text}</p>}
    </>
  );
}

export default AboutPage;
