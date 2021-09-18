import { Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Modal from "./Components/Modal"
import ModalButton from "./Components/ModalButton";
import SideBarButton from "./Components/SideBarButton";
import Sidebar from "./Components/Sidebar";
import { links } from "./util/consts";

const filterList = ["home"];

function App() {
  return (
    <main>
      <SideBarButton />
      <ModalButton />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        {links.filter((link) => !filterList.includes(link.text))
          .map((link) => {
            const { page, id, url } = link;
            return (
              <Route key={id} path={url}>
                {page}
              </Route>
            )
          })
        }
      </Switch>
      <Sidebar />
      <Modal />
    </main>
  );
}

export default App;
