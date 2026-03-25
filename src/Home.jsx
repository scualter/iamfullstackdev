import {Link} from 'react-router-dom'
const Home = ({data}) => {
  return (
    <>
    <h2>Lista de datos</h2>
     <Link to="/create">
        <button style={{ marginBottom: "1rem" }}>Añadir nueva tarea</button>
    </Link>
    <ul>
      {data.map(item => (
        <li key={item._id}>
          <Link to={`/${item._id}`}>{item.title}</Link>
        </li>
      ))}
    </ul>
    </>
  )
};

export default Home;
