import React, { useState } from "react";

export default function Mentors() {
  const [person, setPerson] = useState({
    name: "Dowon",
    title: "Developer",
    mentor: [
      {
        name: "James",
        title: "Cheif",
      },
      {
        name: "Bob",
        title: "Boss",
      },
    ],
  });
  return (
    <>
      <h1>
        {person.name}(은)는 {person.title} 입니다.
      </h1>
      <h3>
        {person.name}의 멘토는{" "}
        <ul>
          {person.mentor.map((mentor, index) => (
            <li key={index}>
              {mentor.name} ({mentor.title})
            </li>
          ))}
        </ul>
      </h3>
      <button
        onClick={() => {
          const prev = prompt("누구의 이름을 바꾸고 싶은가요 : ");
          const current = prompt("어떤 이름으로 바꾸고 싶은가요 : ");

          setPerson((person) => ({
            ...person,
            mentor: person.mentor.map((mentor) => {
              if (prev === mentor.name) {
                return { ...person.mentor, name: current };
              }
              return mentor;
            }),
          }));
        }}
      >
        Change Mentor name
      </button>
    </>
  );
}
