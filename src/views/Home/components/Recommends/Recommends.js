import { Container, Content, Wrap } from './RecommendStyle'
// import { Link } from "react-router-dom";


const Recommends = (props) => { 

    return (
        <Container>
        <h4>Recommended for You</h4>
        <Content>
              <Wrap>
                {/* <Link to="/">
                </Link> */}
                  <img src="/assets/images/slider-badging.jpg" alt={" "} />
              </Wrap>
        </Content>
      </Container>
    );
}

export default Recommends;