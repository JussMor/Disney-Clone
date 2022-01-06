import { Container, Content, Wrap } from "./TrendingStyle";

const Trending = (props) => { 
    return (
        <Container>
        <h4>Trendings</h4>
        <Content>
              <Wrap>
                {/* <Link to="/">
                </Link> */}
                  <img src="/assets/images/slider-badging.jpg" alt={" "} />
              </Wrap>
        </Content>
      </Container>
    )
}

export default Trending;