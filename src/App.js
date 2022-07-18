import "./styles.css";
import { LangSelector } from "./LangSelector";
import { T } from "@tolgee/react";

export default function App() {
  return (
    <div className="App">
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <div>
          <img src="https://tolgee.io/img/tolgeeLogo.svg" height="80em" />
        </div>
        <div>
          <LangSelector />
        </div>
      </nav>
      <div className="body">
        <T keyName="in-context" parameters={{ i: <i />}}>Work in progress...</T>
      </div>
    </div>
  );
}
