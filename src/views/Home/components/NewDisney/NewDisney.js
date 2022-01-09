import { Container, Content, Wrap } from "./NewDisneyStyle";
import { useSelector } from "react-redux";
import { selectNewDisney } from "../../../../stateManage/redux/feature/movie/movieSlice";

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
              {/* <Link to={`/detail/` + movie.id}>
                </Link> */}
              <img src={movie.cardImg} alt={movie.title} />
            </Wrap>
          ))}
      </Content>
    </Container>
  );
};

export default NewDisney;
