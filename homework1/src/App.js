const Header = ({courseName})=> (
    <h1>{courseName}</h1>
)
const Content = ({courseChapters})=> (
    <ul>
      {courseChapters.map(el=>
          <li key={el.id}>Chapter {el.id}. {el.chapter}. Number of exercises: {el.numOfEx}</li>
      )}
    </ul>
)
const Total = ({courseExercises})=> (
    <h5>Total exercises in the course: {courseExercises}</h5>
)

const courseName = "React Js Course";
const courseChapters = [
  {id: 1, chapter: "Introduction to the course", numOfEx: 15},
  {id: 2, chapter:"React props", numOfEx: 45},
  {id: 3, chapter: "React components", numOfEx: 90}
];
const courseExercises = courseChapters.reduce((acc, cur)=>{
  return acc + cur.numOfEx;
}, 0);

const App = () => (
    <div>
      <Header courseName={courseName} />
      <Content courseChapters={courseChapters} />
      <Total courseExercises={courseExercises} />
    </div>
)

export default App
