import React from "react";

const ExercisesSum = ({ parts }) => {
// converting parts object into array before using reduce()
  const exercisesArr = parts.map(element => element.exercises)
    let totalExercises = exercisesArr.reduce((p, c) => p + c)
  return (
    <>
      <div>
        <strong>total of {totalExercises} exercises</strong>
      </div>
    </>
  );
};

const Part = ({ part }) => {
  return (
    <>
      <div>
        {part.name} {part.exercises}
      </div>
    </>
  );
};

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((element) => (
        <Part part={element} key={element.id} />
      ))}
    </>
  );
};

const Header = ({ header }) => {
  return (
    <>
      <h1>{header}</h1>
    </>
  );
};

const Course = ({ course }) => {
  return (
    <>
      <Header header={course.name} />
      <Content parts={course.parts} />
      <ExercisesSum parts={course.parts} />
    </>
  );
};

export default Course;
