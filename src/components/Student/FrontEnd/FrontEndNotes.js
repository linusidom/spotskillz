import { Accordion } from "react-bootstrap";
import {Link} from 'react-router-dom'
import boxModel from '../../../assets/box_model.png'

export const FrontEndNotes = () => {
  return (
    <div className="contentDiv notes">
      <h1 class="display-4">FrontEnd Notes</h1>

      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Hyper Text Markup Language (HTML)</Accordion.Header>
          <Accordion.Body>
            <div class="table-responsive text-start">
              <table class="table table-striped table-dark text-white">
                <thead>
                  <th>Property</th>
                  <th>Explanation</th>
                </thead>
                <tbody>
                  <tr>
                    <td>Hyper Text Markup Language</td>
                    <td>
                      <p>First and most Basic Building Block of the web</p>
                      <p>Used on Every website, every single one uses HTML</p>
                      <p>Client Side Language/Technology</p>
                      <p>
                        Currently on version 5 and already built into all modern
                        browsers
                      </p>
                      <p>
                        Markup Language - Uses tags to style the content it
                        wraps around but tags are never displayed on the page
                      </p>
                      <p>WYSIWYG - What You See Is What You Get</p>
                      <p>NOT a Programming Language</p>
                    </td>
                  </tr>
                  <tr>
                    <td>Markup Language</td>
                    <td>
                      <p>
                        Big box, with another box inside with another box inside
                        AKA Nesting
                      </p>
                      <p>
                        Tags have an opening tag and a closing tag. Opening tag
                        is denoted by &lt;tagname&gt; and a closing tag is
                        denoted by &lt;/tagname&gt;
                      </p>
                      <p>
                        Tag names do not have spaces or special characters, only
                        combination of letters and numbers
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>ID’s and Classes</td>
                    <td>
                      <p>
                        Every Tag has the ability to add either a Single ID or
                        multiple Classes
                      </p>

                      <p>
                        The whole purpose of ID’s and Classes is to make it
                        easier to identify and style the element from CSS/JS
                      </p>

                      <p>No impact within HTML itself</p>
                    </td>
                  </tr>
                  <tr>
                    <td>Element Specific Attributes</td>
                    <td>
                      <p>
                        Extending the functionality of the element by adding
                        style purely relevant to the element itself
                      </p>

                      <p>
                        Ex &lt;input type="text" placeholder="Enter Text Here"
                        name="fullName"&gt;
                      </p>

                      <p>
                        Type, Placeholder and name have been specifically coded
                        into the "input" tag to enhance it's base functionality
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                      <a
                        class="btn btn-primary"
                        href="https://linusidom.github.io/spotskillz_static/htmlcheatsheet.html"
                        target="_blank"
                        rel='noreferrer'
                      >
                        HTML Cheat Sheet
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Accordion>
        <Accordion.Item eventKey="1">
          <Accordion.Header>HTML Requests and Reponses</Accordion.Header>
          <Accordion.Body>
            <div class="table-responsive text-start">
              <table class="table table-striped table-dark text-white">
                <thead>
                  <th width="30%">Request Type</th>
                  <th>Definition</th>
                </thead>
                <tbody>
                  <tr>
                    <td>GET</td>
                    <td>
                      Request Specific Data from a webpage, 99% of User internet
                      traffic is this
                    </td>
                  </tr>
                  <tr>
                    <td>POST</td>
                    <td>
                      Upload specific data to a site, youtube video, google
                      images (Commonly through API's)
                    </td>
                  </tr>
                  <tr>
                    <td>DELETE</td>
                    <td>Remove a specific item</td>
                  </tr>
                  <tr>
                    <td>PUT</td>
                    <td>Update / Replace a specific current item</td>
                  </tr>
                  <tr>
                    <td>PATCH</td>
                    <td>Modify a specific item</td>
                  </tr>
                  <tr>
                    <td>HEAD</td>
                    <td>
                      Similar to GET but instead of pulling all the data, just
                      get the header parameters of the data, fast way to check
                      if the data is available on the server
                    </td>
                  </tr>
                  <tr>
                    <td>OPTIONS</td>
                    <td>What is this server configured to deliver</td>
                  </tr>
                </tbody>
              </table>
              <table class="table table-striped table-dark text-white">
                <thead>
                  <th width="30%">Response Type</th>
                  <th>Definition</th>
                </thead>
                <tbody>
                  <tr>
                    <td>200 OK</td>
                    <td>
                      Action completed successfully (ie webpage loaded; data
                      returned)
                    </td>
                  </tr>
                  <tr>
                    <td>201 Created</td>
                    <td>Success following a POST command</td>
                  </tr>
                  <tr>
                    <td>400 Bad Request</td>
                    <td>Request had bad syntax or was impossible to fulfill</td>
                  </tr>
                  <tr>
                    <td>403 Forbidden</td>
                    <td>
                      Request does not specify the file name, or the directory
                      or the file does not have the permission that allows the
                      pages to be viewed from the web
                    </td>
                  </tr>
                  <tr>
                    <td>404 Not Found</td>
                    <td>Requested file was not found</td>
                  </tr>
                  <tr>
                    <td>405 Method Not Allowed</td>
                    <td>Request type not accepted</td>
                  </tr>
                  <tr>
                    <td>500 Server Error</td>
                    <td>
                      Confusing because it’s mostly a local error in the way the
                      request was made, not the actual web server
                    </td>
                  </tr>
                  <tr>
                    <td>503 Service Unavailable</td>
                    <td>
                      Server cannot process the request due to a system
                      overload; should be a temporary condition, but also might
                      be a misconfigured web server
                    </td>
                  </tr>
                  <tr>
                    <td>504 Gateway Time-Out</td>
                    <td>
                      Service did not respond within the time frame that the
                      gateway was willing to wait
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Accordion>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            Live Server (Optional but Recommended)
          </Accordion.Header>
          <Accordion.Body>
            <h4>What is Live Server?</h4>
            <p>
              Temporary Local server displaying any HTML/CSS/JS resources in the
              current folder. It automatically reloads the page in your browser
              when any of these files change making development for Static
              content much faster
            </p>

            <div class="jumbotron">
              <h5>Steps</h5>
              <ol>
                <li>
                  Verify that Node.js is installed. If you see anything when you
                  run which npm in a terminal, it is. If not, follow the
                  instructions at nodejs.org to install.
                </li>
                <li>Install live-server: npm install -g live-server</li>
                <li>
                  Move your terminal to where your pages live: cd
                  &lt;path-to-content&gt;
                </li>
                <li>Start the server: live-server</li>
                <li>Open localhost:8080 in a browser</li>
              </ol>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Accordion>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Cascading Style Sheets (CSS)</Accordion.Header>
          <Accordion.Body>
            <div class="table-responsive text-start">
              <table class="table table-striped table-dark text-white table-responsive-sm">
                <thead>
                  <th>Property</th>
                  <th>Explanation</th>
                </thead>
                <tbody>
                  <tr>
                    <td>Cascading Style Sheets</td>
                    <td>
                      <p>Must be called upon by the HTML page</p>
                      <p>File Extension .css</p>
                      <p>Changes the default behavior of HTML</p>
                      <p>
                        Add color, change fonts, arrange items, size and space
                        uniquely, add backgrounds, basically revamp the entire
                        HTML Page
                      </p>
                      <p>Most common way of making webpages responsive</p>
                      <p>
                        Is currently on version 3 and Is loaded into the browser
                        already
                      </p>
                      <p>
                        Frameworks - BootStrap (created by Twitter;
                        https://getbootstrap.com)
                      </p>
                      <p>
                        <strong>
                          Complicated confusing, tempramental and unstable
                        </strong>
                      </p>
                      <p>NOT A Programming Language</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Tag</p>
                      <p>Target the "body"</p>
                      <p>Use the Arial or sans-serif Font</p>
                      <p>Color of the text should be #555 (dark Grey)</p>
                    </td>
                    <td>
                      body
                      <br />
                      {`{`} <br />
                      &emsp;font-family: Arial,sans-serif;
                      <br />
                      &emsp;color: #555;
                      <br />
                      {`}`}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>ID</p>
                      <p>
                        Target every element with the <strong>ID</strong> of
                        'box'
                      </p>
                      <p>Apply the propery of width: with a value of 200px;</p>
                    </td>
                    <td>
                      #box
                      <br />
                      {`{`}
                      <br />
                      &emsp;width: 200px;
                      <br />
                      {`}`}
                      <br />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>Class</p>
                      <p>
                        Target all elements with the{" "}
                        <strong>attribute class</strong> of 'container'
                      </p>
                      <p>
                        For everything nested inside the container give it a
                        margin of 10px all around
                      </p>
                    </td>
                    <td>
                      .container
                      <br />
                      {`{`}
                      <br />
                      &emsp;margin: 10px 10px 10px 10px;
                      <br />
                      {`}`}
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                      <a
                        class="btn btn-primary"
                        href="https://linusidom.github.io/spotskillz_static/csscheatsheet.html"
                        target="_blank"
                      >
                        CSS Cheat Sheet
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table class="table table-striped table-dark text-white table-responsive-sm">
                <thead>
                  <th></th>
                  <th>CSS Box</th>
                </thead>
                <tbody>
                  <tr>
                    <td>CSS Box</td>
                    <td>
                      <img
                        width="100%"
                        src={boxModel}
                        alt="box.png"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Content</td>
                    <td>
                      The content of the box, where text and images appear
                    </td>
                  </tr>
                  <tr>
                    <td>Padding</td>
                    <td>
                      Clears an area around the content <strong>inside</strong>{" "}
                      the box. The padding is transparent - values are put in
                      clockwise direction starting at the Top
                    </td>
                  </tr>
                  <tr>
                    <td>Border</td>
                    <td>A border that goes around the padding and content</td>
                  </tr>
                  <tr>
                    <td>Margin</td>
                    <td>
                      Clears an area <strong>outside</strong> the border. The
                      margin is transparent - values are put in clockwise
                      direction starting at the Top
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Accordion>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            Chrome and Mozilla Developer Tools
          </Accordion.Header>
          <Accordion.Body>
            <p>Menu Bar -&gt; View -&gt; Developer -&gt; Developer Tools</p>
            <p>
              Real time insights into how the browser interprets the page and
              how you see the page
            </p>
            <p>
              Show any errors generated by the page, network load times,
              performance, and network statistics
            </p>
            <p>The most powerful troubleshooting tool for Web Applications</p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Accordion>
        <Accordion.Item eventKey="5">
          <Accordion.Header>Resources</Accordion.Header>
          <Accordion.Body>
            <div class="table-responsive text-start">
              <table class="table table-striped table-dark text-white text-center">
                <tbody>
                  <tr>
                    <td>
                      <p>
                        <a
                          href="https://www.w3schools.com/css/css_intro.asp"
                          target="_blank"
                        >
                          W3 Schools
                        </a>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                        <a
                          href="https://www.youtube.com/watch?v=yfoY53QXEnI&list=PLillGF-RfqbZTASqIqdvm1R5mLrQq79CU&index=2"
                          target="_blank"
                        >
                          Traversy Media HTML CSS Playlist
                        </a>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                        <a href="https://www.coolors.co" target="_blank">
                          Color Palette Generator
                        </a>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                        <a href="https://codepen.io/tag/css%20animation?__cf_chl_jschl_tk__=20fcc37ac7d790891d7b30c9c1e454cdaec200f0-1584979801-0-ATrvFIVYo3QleH_PD5pEJkgE-0ZxcQb4gi8ZHNxI2SgCaYyIJ85G4sPNc_DEweiDukEyIfyGYwnICrbgzunTVE4mOSq6CF6PRufACfcyTQXvlgUmEYSk9nQ0Jz57_cRf-gsmb_qfneOOGIYXGxzrqLA4ajDqcJZhk9HQKsQLOwU6O3adX-BgeAqSE7qQY2XT_gL3lgKccG5yR9l_u45amhO8E58REh0ieYShMVMlt5ojrjnvHnSenw0lRu7iOdZrYhsk-Wq7a1WTaruMgRKqIOMWg21hIeJmX-iAUcNNQ1Ejdn12BC1vwt6BTQblbHZYL_wrrMdrG1IGV68DlKVhZrc4m0pdCk-HfK5cR1j-qmsP">
                          CSS Animations Done in CodePen
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
