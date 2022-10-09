import Accordion from "react-bootstrap/Accordion";

export const BasicReq = () => {
  return (
    <div className="notes">
      <h1 className="headerText">Pre-Requisites and Setup</h1>
      <Accordion>
        <Accordion.Item eventKey="6">
          <Accordion.Header>
            Basic Requirements, Accounts and Applications
          </Accordion.Header>
          <Accordion.Body>
            <div className="table-responsive text-start">
              <table className="table table-dark table-striped text-start">
                <tbody>
                  <tr>
                    <th scope="row">Desktop or Laptop with the minimum OS</th>
                    <td>
                      <p>MacOS Catalina or Higher (Big Sur)</p>
                      <p>Windows 10 or higher (Windows 11 recommended)</p>
                      <p>Linux Any latest Distro</p>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      Basic Familiarity with Terminal System Level Commands
                    </th>
                    <td>
                      <p>
                        Below are some suggested Free courses to get started
                        with to get you familiar with what we're going to dive
                        into
                      </p>

                      <p>
                        MacOS and Linux -{" "}
                        <a
                          href="https://www.udemy.com/course/command-line/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Learn The Linux Command Line: Basic Commands | Udemy
                        </a>
                      </p>
                      <p>
                        Free Windows 10 Tutorial -{" "}
                        <a
                          href="https://www.udemy.com/course/free-computer-literacy-101-course/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          FREE Computer Literacy 101 Course | Udemy
                        </a>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Programs to Install</th>
                    <td>
                      <p>
                        <a
                          href="https://code.visualstudio.com/download"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Visual Studio Code
                        </a>{" "}
                        - Code Editor
                      </p>
                      <p>
                        <a
                          href="https://git-scm.com/downloads"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Git
                        </a>{" "}
                        - Local Code Repository
                      </p>
                      <p>
                        <a
                          href="https://nodejs.org/en/download/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Node
                        </a>{" "}
                        - Runtime Environment
                      </p>
                      <p>
                        <a
                          href="https://www.docker.com/products/docker-desktop/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Docker
                        </a>{" "}
                        - Environment Container
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Accounts to Create</th>
                    <td>
                      <p>
                        <a
                          href="https://github.com/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          GitHub
                        </a>
                        - Online Code Repository
                      </p>
                      <p>
                        <a
                          href="https://www.figma.com/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Figma
                        </a>
                        - Web Designer
                      </p>
                      <p>
                        <a
                          href="https://www.mongodb.com/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          MongoDB
                        </a>
                        - NoSQL Database
                      </p>
                      <p>
                        <a
                          href="https://aws.amazon.com/console/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          AWS Console
                        </a>
                        - Amazon Web Services
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
        <Accordion.Item eventKey="0">
          <Accordion.Header>Systems Administration</Accordion.Header>
          <Accordion.Body>
            <div className="table-responsive text-start">
              <table className="table table-dark table-striped text-start">
                <thead>
                  <tr>
                    <th>Task</th>
                    <th>Symbol or Command</th>
                    <th>Usage</th>
                    <th>Example</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Home Directory</td>
                    <td>~</td>
                    <td>cd ~</td>
                    <td>roadblock:~ Admin$</td>
                  </tr>
                  <tr>
                    <td>Directory Separators</td>
                    <td>/</td>
                    <td>pwd</td>
                    <td>/Users/Admin</td>
                  </tr>
                  <tr>
                    <td>List Files</td>
                    <td>ls</td>
                    <td>ls -alutr</td>
                    <td>
                      ls -alutr
                      <br />
                      total 336
                      <br />
                      drwxr-xr-x 4 Admin staff 136 Aug 22 2017 .adobe
                      <br />
                      drwxr-x---+ 6 Admin staff 204 Aug 22 2017 Public
                      <br />
                      drwx------+ 7 Admin staff 238 Aug 22 2017 Music
                    </td>
                  </tr>
                  <tr>
                    <td>Change Directory</td>
                    <td>cd</td>
                    <td>cd ...</td>
                    <td>
                      <p>cd ../</p>
                      <p>cd /Admin/Users</p>
                    </td>
                  </tr>
                  <tr>
                    <td>Make Directory</td>
                    <td>mkdir</td>
                    <td>mkdir &lt;name&gt;</td>
                    <td>mkdir new_directory</td>
                  </tr>
                  <tr>
                    <td>Create a new File</td>
                    <td>touch</td>
                    <td>touch &lt;file name&gt;</td>
                    <td>touch new_file.txt</td>
                  </tr>
                  <tr>
                    <td>Move Files or Directories</td>
                    <td>mv</td>
                    <td>mv &lt;old location&gt; &lt;new location&gt;</td>
                    <td>mv new_file.txt</td>
                  </tr>
                  <tr>
                    <td>Delete Files or Directories</td>
                    <td>rm</td>
                    <td>
                      rm &lt;file&gt;
                      <br />
                      rm &lt;directory&gt;
                    </td>
                    <td>
                      rm new_file.txt
                      <br />
                      rm -f new_directory
                    </td>
                  </tr>
                  <tr>
                    <td>Linux Root Privilege</td>
                    <td>sudo</td>
                    <td>sudo &lt;command&gt;</td>
                    <td>sudo apt-get install python3</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Accordion>
        <Accordion.Item eventKey="4">
          <Accordion.Header>Collaboration, Version Control</Accordion.Header>
          <Accordion.Body>
            <div className="table-responsive">
              <table className="table table-striped table-dark text-white text-start">
                <thead>
                  <tr>
                    <th>Git - Local Version Control</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Collaboration Challenges</td>
                    <td>
                      <p>Who made the change?</p>
                      <p>What changed?</p>
                      <p>Where were the changes made?</p>
                      <p>When it changed?</p>
                      <p>Why was it changed?</p>
                      <p>How was the change made?</p>
                      <p>Can this be automated?</p>
                      <p>
                        How do we go beyond a few people to a few hundred
                        people?
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>Introduce Git</td>
                    <td>
                      <p>Create shared project tracking</p>
                      <p>Who, What, Where, When, Why, How</p>
                      <p>Accept those changes or not?</p>
                      <p>
                        Branches - Experiment with different versions of our
                        software
                      </p>
                      <p>Clone Project to your local machine</p>
                    </td>
                  </tr>
                  <tr>
                    <td>Git init</td>
                    <td>
                      <p>Start a repository locally</p>
                      <p>
                        You have a project that you want to apply version
                        control and tracking to
                      </p>
                      <p>
                        2 Steps to getting your files tracked and ready to be
                        version controlled
                      </p>
                      <p>
                        Step 1:
                        <br />
                        Git add - flags files to add to the local repo
                      </p>
                      <p>
                        Step 2:
                        <br />
                        Git commit - adds files to the local repo
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>Git Options</td>
                    <td>
                      <p>
                        Which Files are in the Repo?
                        <br />
                        git status
                      </p>
                      <p>
                        What changed between the last commit and this one?
                        <br />
                        Git diff
                      </p>
                      <p>
                        What commits have already been done?
                        <br />
                        Git log
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table className="table table-striped table-dark text-white text-start">
                <thead>
                  <tr>
                    <th>GitHub - Cloud Collaboration Service</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Can I store this in the cloud?</td>
                    <td>
                      <p>GitHub</p>
                      <p>
                        GitHub, Free and easy to use, can easily upload the Repo
                        to GitHub
                      </p>
                      <p>Git is a Tool, Github is a Service</p>
                    </td>
                  </tr>
                  <tr>
                    <td>Adding GitHub Repository</td>
                    <td>
                      <p>
                        git remote add origin https://github.com/user/repo.git
                      </p>
                      <p>
                        git remote -v
                        <br />
                        origin https://github.com/user/repo.git (fetch)
                        <br />
                        origin https://github.com/user/repo.git (push)
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>3 Steps to Upload</td>
                    <td>
                      <p>
                        git add .<br />
                        git commit -m 'message'
                        <br />
                        git push origin master
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>GitHub Cloning</td>
                    <td>
                      <p>
                        Cloning is copying a repo/project locally onto your own
                        machine
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>Forking</td>
                    <td>
                      <p>
                        Forking is GitHub specific and copies over another
                        persons project to your account, not local machine
                      </p>
                      <p>Afterwards you clone locally</p>
                    </td>
                  </tr>
                  <tr>
                    <td>Collaboration Process</td>
                    <td>
                      <p>Fork From Original</p>
                      <p>Clone To Local</p>
                      <p>Branch In Local</p>
                      <p>Push to Clone in Local</p>
                      <p>Initiate Pull Request from Original</p>
                    </td>
                  </tr>
                  <tr>
                    <td>Github Resources</td>
                    <td>
                      <p>
                        <a
                          href="https://gist.github.com/receptor/d4ac8f5228faa40d5dee906ddb64b40e"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Learn Git the Hard Way
                        </a>
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
