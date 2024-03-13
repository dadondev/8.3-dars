import styled from "styled-components";
import Card from "../../general/components/Card";
import { useSelector } from "react-redux";
import { useYMaps } from "@pbe/react-yandex-maps";
import { useEffect, useRef } from "react";

interface state {
  isLoading: any;
}

interface isErr {
  isError?: boolean;
}

type dataT = {
  ip?: string;
  location: {
    region?: string;
    timezone?: string;
  };
  isp?: string;
};

const StyledMain = styled.main`
  position: relative;
  height: 100%;
  padding-inline: 24px;
  @media (width>=800px) {
    padding: 0;
  }
`;

const StyledDiv = styled.div`
  max-width: 300px;
  width: 100%;
  z-index: 9999999;
  text-align: center;
  height: auto;
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 24px;
  transform: translate(-50%, 30%);
  left: 50%;
  top: -50%;
  border-radius: 15px;
  padding: 26px 24px 24px;
  background: #fff;
  box-shadow: 0px 50px 50px -25px rgba(0, 0, 0, 0.1);

  @media (width>=1200px) {
    text-align: left;
    flex-direction: row;
    max-width: 1110px;
    top: 0;
    gap: 0;
    right: 50%;
    padding: 37px 32px;
    transform: translate(-50%, -50%);
  }
`;

const Title = styled.h1`
  text-align: center;
  padding: 10px 20px;
  background-color: white;
  top: -10px;
  position: absolute;
  z-index: 1000000;
  left: 50%;
  transform: translateX(-50%);
`;
const StyledMap = styled.div`
  width: 100%;
  min-height: 100%;
`;

const Main = () => {
  const mapRef = useRef(null);
  const ymaps = useYMaps(["Map"]);
  const status = useSelector<state>((state) => state.isLoading);
  const err = useSelector<isErr>((s) => s.isError);
  const datas: {
    ip?: string;
    location: {
      region?: string;
      timezone?: string;
      lat?: number;
      lng?: number;
    };
    isp?: string;
  } = useSelector((s: { data: dataT }) => s.data);

  useEffect(() => {
    if (!ymaps || !mapRef.current) {
      return;
    }

    new ymaps.Map(mapRef.current, {
      center: [41.311081, 69.240562],
      zoom: 10,
    });
  }, [ymaps]);

  return (
    <StyledMain>
      {err ? (
        <Title>Is not defined</Title>
      ) : status ? (
        <Title>Loading</Title>
      ) : datas ? (
        <StyledDiv>
          <Card title="IP Address" text={datas.ip} isLatest={true} />
          <Card title="Location" text={datas.location.region} isLatest={true} />
          <Card
            title="Timezone"
            text={datas.location.timezone}
            isLatest={true}
          />
          <Card title="ISP" text={datas.isp} isLatest={false} />
        </StyledDiv>
      ) : (
        ""
      )}
      <StyledMap ref={mapRef}></StyledMap>
    </StyledMain>
  );
};

export default Main;
