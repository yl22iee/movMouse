import React, { useState } from "react";

export default function AppMentor() {
  const [person, setPerson] = useState({
    name: "Dowon",
    title: "Developer",
    mentor: {
      name: "Elley",
      title: "Fullstack",
    },
  });
  return (
    <>
      <h3>
        {person.name}(은)는 {person.title}입니다.
      </h3>
      <h3>
        {person.name}의 멘토는 {person.mentor.name}({person.mentor.title}
        )입니다.
      </h3>
      <button
        onClick={() => {
          const name = prompt("what is your mentor name : ");
          setPerson({ ...person, mentor: { ...person.mentor, name } });
        }}
      >
        Change Mentor Name
      </button>
      <button
        onClick={() => {
          const title = prompt("what is your mentor title");
          setPerson({ ...person, mentor: { ...person.mentor, title } });
        }}
      >
        Change Mentor Title
      </button>
    </>
  );
}
