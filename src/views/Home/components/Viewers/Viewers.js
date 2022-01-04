import { Container, Wrap } from "./ViewerStyle"

const Viewers = (props) => {
    // reparar el que no se reproduzca automatico
    return (
        <Container>
        <Wrap>
          <img src="/assets/images/viewers-disney.png" alt="" />
          <video autoPlay={true} loop={true} playsInline={true}>
            <source src="/assets/videos/1564674844-disney.mp4" type="video/mp4" />
          </video>
        </Wrap>
        <Wrap>
          <img src="/assets/images/viewers-pixar.png" alt="" />
          <video autoPlay={true} loop={true} playsInline={true}>
            <source src="/assets/videos/1564676714-pixar.mp4" type="video/mp4"/>
          </video>
        </Wrap>
        <Wrap>
          <img src="/assets/images/viewers-marvel.png" alt="" />
          <video autoPlay={true} loop={true} playsInline={true}>
            <source src="/assets/videos/1564676115-marvel.mp4" type="video/mp4" />
          </video>
        </Wrap>
        <Wrap>
          <img src="/assets/images/viewers-starwars.png" alt="" />
          <video autoPlay={true} loop={true} playsInline={true}>
            <source src="/assets/videos/1608229455-star-wars.mp4" type="video/mp4" />
          </video>
        </Wrap>
        <Wrap>
          <img src="/assets/images/viewers-national.png" alt="" />
          <video autoPlay={true} loop={true} playsInline={true}>
            <source
              src="/assets/videos/1564676296-national-geographic.mp4"
              type="video/mp4"
            />
          </video>
        </Wrap>
      </Container>
    );
}

export default Viewers;