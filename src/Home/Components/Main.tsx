import styled from "styled-components";
import Card from "../../general/components/Card";
import { useSelector } from "react-redux";
import { useEffect } from "react";

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
`;

const StyledYMap = styled.div`
  height: 100%;
  max-width: 100%;
`;

const Main = () => {
  const status: boolean = useSelector((state) => state.isLoading);
  const err: boolean = useSelector((s) => s.isError);
  const datas = useSelector((s) => s.data);
  useEffect(() => {
    ymaps.ready(init);
    function init() {
      // Создание карты.
      const myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [55.76, 37.64],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 7,
      });
    }
  }, []);

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
      <StyledYMap id="map"></StyledYMap>
    </StyledMain>
  );
};

export default Main;
