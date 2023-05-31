import './App.css';
import { useState, useEffect } from 'react';
import Students from './Students';
import Average from './AverageScore';

function App() {
  const [students, setStudents] = useState([
    { name: 'Андрій', score: 200 },
    { name: 'Світлана', score: 100 },
    { name: 'Людмила', score: 200 },
    { name: 'Іван', score: 200 },
  ]);
  const [averageScore, setAverageScore] = useState(0);

  useEffect(() => {
    const average =
      students.reduce((acc, student) => student.score + acc, 0) /
      students.length;
    setAverageScore(average);
  }, [students]);

  const handleInputChange = e => {
    const { name, value } = e.target;

    setStudents(prevStudents => {
      const updatedStudents = prevStudents.map(student => {
        if (student.name === name) {
          return { ...student, score: Number(value) };
        }
        return student;
      });

      return updatedStudents;
    });
  };

  return (
    <>
      <h1>Рейтинг студентів</h1>
      <Average avg={averageScore} />
      <table className='container'>
        <tbody>
          <Students students={students} onInputChange={handleInputChange} />
        </tbody>
      </table>
    </>
  );
}

export default App;
