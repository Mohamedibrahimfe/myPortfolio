import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "../style/Skills.css";
const skills = () => {
  return (
    <div className="skills">
      <h1>Skills</h1>
      <br />
      <div className="skills-container">
        <Tabs>
          <TabList
            style={{
              backgroundColor: "#EEE",
              color: "black",
              borderRadius: "6px",
              padding: "10px",
              display: "flex",
              justifyContent: "center",
              gap: "10px",
              flexWrap: "wrap",
              boxShadow: "0 4px 10px rgba(5 ,143, 255, 0.3) ",
              cursor: "pointer",
              fontWeight: "bold",
              border: "none",
              transition: "all .15s ease-in-out",
              "&:active": {
                backgroundColor: "white",
                color: "black",
                border: "none",
                padding: "20%",
                outline: "none",
              },
            }}
          >
            <Tab>Languages</Tab>
            <Tab>Frameworks</Tab>
            <Tab>Libraries</Tab>
            <Tab>Development Tools</Tab>
            <Tab>APIs& Integrations</Tab>
            <Tab>Soft Skills</Tab>
          </TabList>
          <TabPanel>
            <div>
              <article className="skills-list">
                <figure>
                  {" "}
                  <div className="logo html">html </div>
                </figure>
                <figure>
                  {" "}
                  <div className="logo css">CSS</div>
                </figure>
                <figure>
                  {" "}
                  <div className="logo js">JavaScript</div>
                </figure>
                <figure>
                  {" "}
                  <div className="logo sql">SQL</div>
                </figure>
                <figure>
                  {" "}
                  <div className="logo python">Python</div>
                </figure>
                <figure>
                  {" "}
                  <div className="logo cpp">c++</div>
                </figure>
                <figure>
                  {" "}
                  <div className="logo php">php</div>
                </figure>
              </article>
            </div>
          </TabPanel>
          <TabPanel>
            <div>
              <article className="skills-list">
                <figure>
                  {" "}
                  <div className="logo bootstrap">bootstrap</div>
                </figure>
                <figure>
                  {" "}
                  <div className="logo tailwind">tailwind</div>
                </figure>
              </article>
            </div>
          </TabPanel>
          <TabPanel>
            <div>
              <article className="skills-list">
                <figure>
                  {" "}
                  <div className="logo react">react </div>
                </figure>
              </article>
            </div>
          </TabPanel>
          <TabPanel>
            <div>
              <article className="skills-list">
                <figure>
                  {" "}
                  <div className="logo vs">VS Code </div>
                </figure>
                <figure>
                  {" "}
                  <div className="logo git">git </div>
                </figure>
                <figure>
                  {" "}
                  <div className="logo github">github </div>
                </figure>
              </article>
            </div>
          </TabPanel>
          <TabPanel>
            <div>
              <article className="skills-list">
                <figure>
                  {" "}
                  <div className="logo postman">postman </div>
                </figure>
              </article>
            </div>
          </TabPanel>
          <TabPanel>
            <div>
              <article className="skills-list">
                <figure>
                  {" "}
                  <div className="logo com">Communication </div>
                </figure>
                <figure>
                  {" "}
                  <div className="logo prob">Problem Solving </div>
                </figure>
                <figure>
                  {" "}
                  <div className="logo adaptability">Adaptability </div>
                </figure>
              </article>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default skills;
export { Tabs };
