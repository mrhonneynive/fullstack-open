const Course = ({ course }) => {
  return (
    <div>
      <h1>{course.name}</h1>
      {course.parts.map((part) => {
        return (
          <p key={part.id}>
            {part.name} {part.exercises}
          </p>
        );
      })}
      <b>
        <p>
          total of {course.parts.reduce((acc, obj) => acc + obj.exercises, 0)}{" "}
          exercises
        </p>
      </b>
    </div>
  );
};

export default Course;
