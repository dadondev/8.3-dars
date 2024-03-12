import { Provider } from "react-redux";
import Container from "../general/components/Container";
import Header from "./Components/Header";
import Main from "./Components/Main";
import store from "../store/store";

const Home = () => {
  return (
    <Container>
      <Provider store={store}>
        <Header />
        <Main />  
      </Provider>
    </Container>
  );
};

export default Home;
