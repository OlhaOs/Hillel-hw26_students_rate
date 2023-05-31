export default function Students({ students, onInputChange }) {
  const sortByScore = students.sort(
    (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
  );
  return (
    <>
      {sortByScore.map(({ name, score }) => (
        <tr key={name}>
          <td>{name}</td>
          <td>
            <input
              type='text'
              name={name}
              value={score}
              onChange={onInputChange}
            />
          </td>
        </tr>
      ))}
    </>
  );
}
