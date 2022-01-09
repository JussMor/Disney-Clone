import { Container, Content, Wrap } from "./OriginalStyle";
import { useSelector } from "react-redux";
import { selectOriginal } from "../../../../stateManage/redux/feature/movie/movieSlice";

const Originals = (props) => {
  const movies = useSelector(selectOriginal);
  return (
    <Container>
      <h4>Originals</h4>
      <Content>
        {movies &&
          movies.map((movie, key) => (
            <Wrap key={key}>
              {/* <Link to={`/detail/` + movie.id}>
                  </Link> */}
              <img src={movie.cardImg} alt={movie.title} />
            </Wrap>
          ))}
      </Content>
    </Container>
  );
};
export default Originals;
