import { Container, Content, Wrap } from "./NewDisneyStyle";
import { useSelector } from "react-redux";
import { selectNewDisney } from "../../../../stateManage/redux/feature/movie/movieSlice";
import { Link } from "react-router-dom";

const NewDisney = (props) => {
  const movies = useSelector(selectNewDisney);

  return (
    <Container>
      <h4>New to Disney+</h4>
      <Content>
        {movies &&
          movies.map((movie, key) => (
            <Wrap key={key}>
              {movie.id}
              <Link to={`/detail/` + movie.id}>
                <img src={movie.cardImg} alt={movie.title} />
              </Link>
            </Wrap>
          ))}
      </Content>
    </Container>
  );
};

export default NewDisney;
