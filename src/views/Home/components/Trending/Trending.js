import { Container, Content, Wrap } from "./TrendingStyle";
import { useSelector } from "react-redux";
import { selectTrending } from "../../../../stateManage/redux/feature/movie/movieSlice";

const Trending = (props) => {
  const movies = useSelector(selectTrending);
  return (
    <Container>
      <h4>Trendings</h4>
      <Content>
        {movies &&
          movies.map((movie, key) => (
            <Wrap key={key}>
              {movie.id}
              {/* <Link to="/">
                </Link> */}
              <img src={movie.cardImg} alt={movie.title} />
            </Wrap>
          ))}
      </Content>
    </Container>
  );
};

export default Trending;
