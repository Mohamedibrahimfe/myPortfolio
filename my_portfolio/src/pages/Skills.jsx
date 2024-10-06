import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "../style/Skills.css";
const skills = () => {
  return (
    <div className="skills" id="skills">
      <h1 className="title">Skills</h1>
      <br />
      <div className="skills-container">
        <Tabs>
          <TabList
            style={{
              color: "black",
              borderRadius: "6px",
              padding: "10px",
              display: "flex",
              justifyContent: "center",
              gap: "5px",
              flexWrap: "wrap",
              cursor: "pointer",
              fontSize: "1.1rem",
              fontWeight: "bold",
              border: "1px solid rgb(180 185 189 / 31%)",
              transition: "all .15s ease-in-out",
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
                  <div className="logo html skill down left">html </div>
                </figure>
                <figure>
                  {" "}
                  <div className="logo css skill up left">CSS</div>
                </figure>
                <figure>
                  {" "}
                  <div className="logo js skill up right">JavaScript</div>
                </figure>
                <figure>
                  {" "}
                  <div className="logo sql skill down right">SQL</div>
                </figure>
                <figure>
                  {" "}
                  <div className="logo python skill up right">Python</div>
                </figure>
                <figure>
                  {" "}
                  <div className="logo cpp skill down left">c++</div>
                </figure>
                <figure>
                  {" "}
                  <div className="logo php skill up left">php</div>
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
