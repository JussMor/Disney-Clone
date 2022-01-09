import { Container, Content, Wrap } from "./OriginalStyle";
import { useSelector } from "react-redux";
import { selectOriginal } from "../../../../stateManage/redux/feature/movie/movieSlice";
import {Link } from "react-router-dom";

const Originals = (props) => {
  const movies = useSelector(selectOriginal);
  return (
    <Container>
      <h4>Originals</h4>
      <Content>
        {movies &&
          movies.map((movie, key) => (
            <Wrap key={key}>
              <Link to={`/detail/` + movie.id}>
                <img src={movie.cardImg} alt={movie.title} />
              </Link>
            </Wrap>
          ))}
      </Content>
    </Container>
  );
};
export default Originals;
