import Accordion from "react-bootstrap/Accordion";

export const PythonReq = () => {
  return (
    <div className="pythonSection">
      <h1 className="headerText">Python Specific Information</h1>
      <Accordion>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Python Versions</Accordion.Header>
          <Accordion.Body>
            <div className="table-responsive text-start">
              <table className="table table-striped table-dark text-white responsive">
                <tbody>
                  <tr>
                    <td>Required Versions</td>
                    <td>
                      <p>Python 3.6 or above</p>
                      <p>Virtual Environment 20.0 or above</p>
                      <p>PIP 19 or above</p>
                    </td>
                    <td>
                      <p>
                        python3 --version
                        <br />
                        Python 3.7.3
                      </p>
                      <p>
                        virtualenv --version
                        <br />
                        virtualenv 20.0.10
                      </p>
                      <p>
                        pip --version
                        <br />
                        pip 20.0.2
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>Mac</td>
                    <td>
                      <p>Command Line</p>
                      <p>
                        <a href="https://brew.sh/">HomeBrew</a>
                      </p>
                    </td>
                    <td>
                      <p>
                        brew install python3
                        <br />
                        brew install virtualenv
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>Linux</td>
                    <td>
                      <p>Command Line</p>
                    </td>
                    <td>
                      <p>sudo apt-get install python3.7</p>
                    </td>
                  </tr>
                  <tr>
                    <td>Windows</td>
                    <td>Download the Installer</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>
                      <p>Python Package Installer</p>
                      <p>Should come with Python Installer but if not</p>
                    </td>
                    <td>Download the Installer</td>
                    <td>
                      <p>
                        <a
                          href="https://bootstrap.pypa.io/get-pip.py"
                          target="_blank"
                          rel="noreferrer"
                        >
                          get-pip.py
                        </a>
                      </p>
                      <p>python3 get-pip.py</p>
                    </td>
                  </tr>
                  <tr>
                    <td>Executing a File</td>
                    <td>Files must have a ".py" extension</td>
                    <td>python3 file.py</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Accordion>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Virtual Environment (Python Only)</Accordion.Header>
          <Accordion.Body>
            <div className="table-responsive text-start">
              <table className="table table-striped table-dark text-white">
                <tbody>
                  <tr>
                    <td>Operating System</td>
                    <td>
                      The software that supports a computer's basic functions,
                      such as scheduling tasks, executing applications, and
                      controlling peripherals.
                    </td>
                  </tr>
                  <tr>
                    <td>Virtual Environments</td>
                    <td>
                      Isolated pieces of software from the main Operating
                      System. The major functions will still rely on the
                      Operating System however specific functions or tasks can
                      rely on the local variations within the Virtual
                      Environment
                    </td>
                  </tr>
                  <tr>
                    <td>Best Practices</td>
                    <td>
                      <p>One Project/Application per Virtual Environment</p>
                      <p>
                        Project and Virtual Environment should be under the same
                        directory
                      </p>
                      <p>
                        Do I need to have a Virtual Environment to make my
                        project, NO, but it's a really really really good idea
                        to have one. Most companies will have you use one.
                      </p>
                      <p>
                        Python has <strong>virtualenv</strong>
                      </p>
                      <p>
                        JavaScript has <strong>nvm</strong>
                      </p>
                      <p>
                        Java has <strong>JRE</strong>
                      </p>
                      <p>
                        Ruby has <strong>rbenv</strong>
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Accordion>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            Using Your Virtual Environment (Python Only)
          </Accordion.Header>
          <Accordion.Body>
            <div className="table-responsive text-start">
              <table className="table table-striped table-dark text-white">
                <tbody>
                  <tr>
                    <td>Setup</td>
                    <td>virtualenv venv_project_one</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Activate</td>
                    <td>
                      <p>source venv_project_one/bin/activate</p>
                    </td>
                    <td>
                      <p>
                        <strong>(venv_project_one)</strong>{" "}
                        roadblock:project_one Admin${" "}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>Installed Packages</td>
                    <td>pip list</td>
                    <td>
                      Package Version
                      <br />
                      ---------- -------
                      <br />
                      pip 20.0.2 <br />
                      setuptools 46.0.0
                      <br />
                      wheel 0.34.2 <br />
                    </td>
                  </tr>
                  <tr>
                    <td>What is a package?</td>
                    <td>
                      A pluggable set of methods to add features and
                      functionality to your Application
                    </td>
                    <td>
                      <p>
                        pip install django
                        <br />
                        Successfully installed asgiref-3.2.5 django-3.0.4
                        pytz-2019.3 sqlparse-0.3.1
                      </p>
                      <p>
                        pip list Package Version
                        <br />
                        ---------- -------
                        <br />
                        asgiref 3.2.5 <br />
                        Django 3.0.4 <br />
                        pip 20.0.2 <br />
                        pytz 2019.3 <br />
                        setuptools 46.0.0 <br />
                        sqlparse 0.3.1 <br />
                        wheel 0.34.2 <br />
                      </p>
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
