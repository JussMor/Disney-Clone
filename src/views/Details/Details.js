import {
  Container,
  Background,
  ImageTitle,
  ContentMeta,
  Controls,
  Player,
  Trailer,
  AddList,
  GroupWatch,
  SubTitle,
  Description,
} from "./DetailStyle";

const Detail = (props) => {
  return (
    <Container>
      <Background>
        <img alt="hola" src="/assets/images/slider-badging.jpg" />
      </Background>
      <ImageTitle>
        <img alt="hola" src="/assets/images/slider-badging.jpg" />
      </ImageTitle>
      <ContentMeta>
        <Controls>
          <Player>
            <img src="/assets/images/play-icon-black.png" alt="" />
            <span>Play</span>
          </Player>
          <Trailer>
            <img src="/assets/images/play-icon-white.png" alt="" />
            <span>Trailer</span>
          </Trailer>
          <AddList>
            <span />
            <span />
          </AddList>
          <GroupWatch>
            <div>
              <img src="/assets/images/group-icon.png" alt="" />
            </div>
          </GroupWatch>
        </Controls>
        <SubTitle>"SubTitle"</SubTitle>
        <Description>"Description"</Description>
      </ContentMeta>
    </Container>
  );
};

export default Detail;
