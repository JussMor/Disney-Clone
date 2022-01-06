import { Container, Content, Wrap } from "./NewDisneyStyle";

const NewDisney = (props) => {
  return (
    <Container>
      <h4>New to Disney+</h4>
      <Content>
        <Wrap>
          {/* <Link to={`/detail/` + movie.id}>
                </Link> */}
          <img src="/assets/images/slider-badging.jpg" alt={" "} />
        </Wrap>
      </Content>
    </Container>
  );
};

export default NewDisney;
