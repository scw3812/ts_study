import { data } from '../data.json';

interface PropsType {
  match: {
    params: {
      id: number;
    };
  };
}

export default function StudentDetail({ match }: PropsType) {
  const id = match.params.id;
  const { name, age, isGirlFriend } = data.students[id]; 
  return (
    <>
      <h1>StudentDetail</h1>
      {name}
      {age}
      {isGirlFriend}
    </>
  );
}
