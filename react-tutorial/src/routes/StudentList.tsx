import { Link } from 'react-router-dom';
import { data } from '../data.json'; 

export default function StudentList() {
  return (
    <>
      <h1>학생명단</h1>
      {data.students.map(s => (
        <h4 key={s.id}>
          <Link to={`/studentlist/${s.id}`}>
            {s.name}
          </Link>
        </h4>
      ))}
    </>
  )
}