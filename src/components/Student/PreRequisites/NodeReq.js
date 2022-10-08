import { Accordion } from "react-bootstrap";

export const NodeReq = () => {
  return (
    <div className="javascriptSection">
      <h1 className="headerText">Node/JavaScript Specific Information</h1>
      <Accordion>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Node Versions</Accordion.Header>
          <Accordion.Body>
            <div className="table-responsive text-start">
              <table className="table table-striped table-dark text-white responsive">
                <tbody>
                  <tr>
                    <td>Required Versions</td>
                    <td>
                      <p>Node v18.0 or above</p>
                      <p>NPM v8.0 or above</p>
                    </td>
                    <td>
                      <p>
                        node -v
                        <br />
                        v18.6.0
                      </p>
                      <p>
                        npm -v
                        <br />
                        8.13.2
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>Mac Windows Linux</td>
                    <td>
                      <p>Installer</p>
                    </td>
                    <td>
                      <p>
                        <a
                          href="https://nodejs.org/en/download/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          NodeJS
                        </a>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>Executing a File</td>
                    <td>Files must have a ".js" extension</td>
                    <td>node file.js</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Accordion>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Node/NPM Getting Started</Accordion.Header>
          <Accordion.Body>
            <div className="table-responsive text-start">
              <table className="table table-striped table-dark text-white text-start">
                <tbody>
                  <tr>
                    <td>Initialize Node Environment</td>
                    <td>
                      npm init <br />
                      OR <br />
                      npm init --y
                    </td>
                  </tr>
                  <tr>
                    <td>What's happening under the hood?</td>
                    <td>
                      <p>
                        Node can run .js files but in order to access other
                        libraries, a package manager is needed. NPM is a package
                        manager that install packages into the node_modules
                        folder
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Installing Packages</p>
                    </td>
                    <td>
                      <p>
                        Locally (most common)
                        <br />
                        npm install <i>library</i>
                      </p>
                      <p>
                        Locally only for the dev envrionment, not production
                        <br />
                        npm install -d <i>library</i>
                      </p>
                      <p>
                        Globally, available system-wide
                        <br />
                        npm install -g<i>library</i>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>Understanding package.json (npm specific)</td>
                    <td>
                      Holds necessary dependencies and various scripts such as
                      run and build
                    </td>
                  </tr>
                  <tr>
                    <td>Executing package.json and project</td>
                    <td>
                      npm run <i>start|build|etc</i>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};
