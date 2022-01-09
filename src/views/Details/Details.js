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
import {useParams} from 'react-router-dom'
import { useEffect, useState } from "react";
import db from "../../services/firebase/firebase";
import { doc, getDoc } from "firebase/firestore";

const Detail = (props) => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState({});

  useEffect(() => {
    async function fetchData() {
      const querySnapshot = await getDoc(doc(db, `movies/${id}`));
      try {
        if(querySnapshot.exists){
          setDetailData(querySnapshot.data());
        } else {
          console.log("no such document in firebase 🔥");
        }
      } catch (error) { 
        console.log("Error getting document:", error);
      }
    }

    fetchData();

  }, [id]);
  
  return (

    <Container>      
      <Background>
        <img alt={detailData.title}src={detailData.backgroundImg} />
      </Background>
      <ImageTitle>
        <img alt={detailData.title} src={detailData.titleImg} />
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
        <SubTitle>{detailData.subTitle}</SubTitle>
        <Description>{detailData.description}</Description>
      </ContentMeta>
    </Container>
  );
};

export default Detail;
