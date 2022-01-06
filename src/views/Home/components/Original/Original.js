import { Container, Content, Wrap } from "./OriginalStyle";

const Originals = (props) => { 
    return(
        <Container>
        <h4>Originals</h4>
        <Content>
          <Wrap>
            {/* <Link to={`/detail/` + movie.id}>
                  </Link> */}
            <img src="/assets/images/slider-badging.jpg" alt={" "} />
          </Wrap>
        </Content>
      </Container>
    );
}
export default Originals;