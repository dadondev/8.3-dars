import { Provider } from "react-redux";
import Container from "../general/components/Container";
import Header from "./Components/Header";
import Main from "./Components/Main";
import store from "../store/store";
import { YMaps } from "@pbe/react-yandex-maps";

const Home = () => {
  return (
    <Container>
      <Provider store={store}>
        <Header />
        <YMaps query={{ lang: "en_RU" }}>
          <Main />
        </YMaps>
      </Provider>
    </Container>
  );
};

export default Home;
