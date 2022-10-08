import { Accordion } from "react-bootstrap";

export const JavaScriptNotes = () => {
  return (
    <div className="contentDiv notes">
      <h1>Node/JavaScript Notes</h1>

      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Basics</Accordion.Header>
          <Accordion.Body>
            <div class="table-responsive text-start">
              <table class="table table-striped table-dark text-white">
                <thead>
                  <th></th>
                  <th></th>
                </thead>
                <tbody>
                  <tr>
                    <td>JavaScript Basics</td>
                    <td class="grid-table">
                      <p>High Level Programming Language</p>
                      <p>Frontend and BackEnd Language</p>
                      <p>Interpreted Language (uses Node)</p>
                      <p>JavaScript Programs are plain text</p>
                      <p>Most all Browsers Support JavaScript Directly</p>
                      <p>Can run directly in the Browser Console</p>
                      <p>
                        Can interact with every HTML element using the Document
                        Object Model (DOM)
                      </p>
                      <p>Free with Massive Support Community</p>
                      <p>
                        All Statements (variable declarations, execution
                        commands) must end with a ' ; ' (semi-colon)
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>Developer Tools</td>
                    <td>
                      <p>
                        Chrome
                        <br />
                        View-&gt;Developer-&gt; Developer Tools
                      </p>
                      <p>
                        Mozilla
                        <br />
                        Tools-&gt;Web Developer-&gt; Web Console
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>Create a file and call from HTML (most common)</td>
                    <td>
                      <p>&lt;script src='main.js'&gt;</p>
                    </td>
                  </tr>
                  <tr>
                    <td>Execute a program from the CLI</td>
                    <td>node filename.py</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Accordion>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Variables and Data Types</Accordion.Header>
          <Accordion.Body>
            <div class="table-responsive text-start">
              <div>
                <table class="table table-striped table-dark text-white">
                  <tbody>
                    <tr>
                      <td>What is a Variable?</td>
                      <td>
                        <p>
                          A way to store information to be referenced and/or
                          manipulated later in a computer program
                        </p>
                        <p>
                          provide a way of labeling data with a descriptive
                          name, so our programs can be understood more clearly
                          by the reader and ourselves
                        </p>
                        <p>
                          Must be defined before it can be used - Cannot call a
                          Variable if it is not defined
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>Variable Convention in JavaScript</td>
                      <td>
                        camelCase
                        <br />
                        exampleVariable = 'this is an example of a variable in
                        camel case';
                        <br />
                        <br />
                        Variables should make sense to someone else
                        <br />
                        <span class="text-success">
                          <i class="fas fa-check"></i>
                        </span>{" "}
                        hairColor = 'brown';
                        <br />
                        <span class="text-danger">
                          <i class="fas fa-times"></i>
                        </span>{" "}
                        hairColor = 73;
                        <br />
                        <br />
                        Cannot start with a number or any special character
                        <br />
                        Must start with an alphabet
                        <br />
                        <br />
                        camelCase recommended for variables and functions
                        <br />
                        UpperCase recommended for Classes
                        <br />
                      </td>
                    </tr>
                    <tr>
                      <td>Variable Declaration</td>
                      <td>
                        <p>
                          var
                          <br />
                          Used globally for values that can change
                        </p>
                        <p>
                          let
                          <br />
                          Used locally inside a function or class for variables
                          that can change
                        </p>
                        <p>
                          const
                          <br />
                          Used globally or locally for values that cannot change
                          (can be appended to)
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>Data Types</td>
                      <td>
                        int - Integers
                        <br />
                        float - Integer with Decimal, Floating Point
                        <br />
                        str - Strings
                        <br />
                        bool - Boolean , True or False
                        <br />
                        list - Lists or Arrays
                        <br />
                        tuple - Immutable List
                        <br />
                        dict - Dictionaries
                        <br />
                        Self Defined - Class
                        <br />
                      </td>
                    </tr>
                    <tr>
                      <td>Immutability</td>
                      <td>
                        <p>
                          Cannot Change or modify but can delete or completely
                          re-assign
                        </p>
                        <p>Numbers</p>
                        <p>Strings</p>
                        <p>Tuples</p>
                      </td>
                    </tr>
                    <tr>
                      <td>Mutability</td>
                      <td>
                        <p>
                          Can change to the specific element without destroying
                          or reassigning
                        </p>
                        <p>Lists</p>
                        <p>Dictionaries</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Accordion>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Printing and Commenting</Accordion.Header>
          <Accordion.Body>
            <div class="table-responsive text-start">
              <table class="table table-striped table-dark text-white">
                <thead>
                  <th></th>
                  <th>Printing</th>
                </thead>
                <tbody>
                  <tr>
                    <td>console.log()</td>
                    <td>
                      Outputs information to the user
                      <br />
                      Most basic troubelshooting method
                    </td>
                  </tr>

                  <tr>
                    <td>Single Line Printing</td>
                    <td>
                      console.log('Hello World')
                      <br />
                      Hello World
                      <br />
                      <br />
                      console.log(5+7)
                      <br />
                      12
                      <br />
                      <br />
                      console.log(variable/list/dictionary/object)
                      <br />
                      <br />
                      console.log("Hello " + name + ", welcome")
                      <br />
                      Hello John, welcome
                    </td>
                  </tr>
                  <tr>
                    <td>Multiline Printing</td>
                    <td>
                      <p>
                        var multiLineStr = "This is the first line \<br />
                        This is the second line \<br />
                        This is more...";
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table class="table table-striped table-dark text-white">
                <thead>
                  <th></th>
                  <th>Comments</th>
                </thead>
                <tbody>
                  <tr>
                    <td>Comments</td>
                    <td>
                      Does not output any information
                      <br />
                      Purely informative
                      <br />
                      Recommended way to explain code
                    </td>
                  </tr>
                  <tr>
                    <td>Single Line Commenting</td>
                    <td>
                      {"// This is a comment"}
                      <br />
                      <br />
                      Prepend the // symbol and anything after{" "}
                      <strong>on the same line</strong> is a comment
                    </td>
                  </tr>
                  <tr>
                    <td>Multiline Comments</td>
                    <td>
                      {`/*`}
                      <br />
                      Some Comment text here to explain
                      <br />
                      {`*/`}
                      <br />
                      <br />
                      PrePend <strong>and</strong> PostPend any comment block
                      with {`/* */`} (Slash Star Star Slash)
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
          <Accordion.Header>Numbers</Accordion.Header>
          <Accordion.Body>
            <div class="table-responsive text-start">
              <table class="table table-striped table-dark text-white">
                <thead>
                  <th>Function</th>
                  <th>Explanation</th>
                </thead>
                <tbody>
                  <tr>
                    <td>Integers (int)</td>
                    <td>
                      Whole Numbers
                      <br />
                      2,10,100, etc
                    </td>
                  </tr>
                  <tr>
                    <td>Floating Point Numbers (float)</td>
                    <td>
                      Numbers with Decimal Points
                      <br />
                      2.2, 10.4, 100.5
                    </td>
                  </tr>
                  <tr>
                    <td>Arithmetic</td>
                    <td>
                      <i class="fas fa-plus"></i>
                      <br />
                      <i class="fas fa-minus"></i>
                      <br />
                      <i class="fas fa-asterisk"></i>
                      <br />
                      <i class="fas fa-slash fa-rotate-90 fa-xs"></i>
                      <br />
                      <i class="fas fa-slash fa-rotate-90 fa-xs"></i>
                      <i class="fas fa-slash fa-rotate-90 fa-xs"></i>
                      <br />
                      <i class="fas fa-percent fas-xs"></i>
                      <br />
                      <i class="fas fa-asterisk"></i>
                      <i class="fas fa-asterisk"></i>
                      <br />
                      <br />
                      Order of Operations PEMDAS
                      <br />
                      Parentheses
                      <br />
                      Exponents
                      <br />
                      Multiplication
                      <br />
                      Division
                      <br />
                      Addition
                      <br />
                      Subtraction
                    </td>
                  </tr>
                  <tr>
                    <td>Example</td>
                    <td>
                      var myBill = 100
                      <br />
                      var serviceCharge = 0.10
                      <br />
                      var totalBill = myBill * (1+serviceCharge)
                      <br />
                      console.log(totalBill)
                      <br />
                      <p class="text-success">110.0</p>
                      <br />
                      var myBill = 100
                      <br />
                      var serviceCharge = 0.10
                      <br />
                      var totalBill = myBill * 1 + serviceCharge
                      <br />
                      console.log(totalBill)
                      <br />
                      <p class="text-danger">100.1</p>
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
          <Accordion.Header>Strings</Accordion.Header>
          <Accordion.Body>
            <div class="table-responsive text-start">
              <p class="text-primary">
                var myString = 'The quick brown fox jumped over the fence'
              </p>
              <table class="table table-striped table-dark text-white">
                <thead>
                  <th width="20%">Function</th>
                  <th width="40%">Usage</th>
                  <th width="40%">Result</th>
                </thead>
                <tbody>
                  <tr>
                    <td>Create String</td>
                    <td>
                      Creation of a string is done with single or double quotes
                    </td>
                    <td>
                      <p>‘This is a string of text’</p>
                      <p>"This is another string of text"</p>
                      <p>
                        “If I’m going to use apostrophes within the string it’s
                        better to use double quotes”
                      </p>
                      <p>String Positions start at 0</p>
                    </td>
                  </tr>
                  <tr>
                    <td>Printing Variable</td>
                    <td>Output content of the Variable</td>
                    <td>
                      <p>
                        console.log(myString)
                        <br />
                        The quick brown fox jumped over the fence
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>Indexing from the front</td>
                    <td>Select individual items in the String</td>
                    <td>
                      <p>
                        myString[0]
                        <br />T
                      </p>
                      <p>
                        myString[-1]
                        <br />e
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>Substrings</td>
                    <td>Select portions of the String</td>
                    <td>
                      <p>
                        myString.substr(0,myString.length)
                        <br />
                        The quick brown fox jumped over the fence
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>Reverse the String</td>
                    <td>Reverses the entire String</td>
                    <td>
                      <p>
                        myString.split("").reverse().join("");
                        <br />
                        ecnef eht revo depmuj xof nworb kciuq ehT
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>Upper</td>
                    <td>Uppercase every letter</td>
                    <td>
                      <p>
                        myString.upperCase()
                        <br />
                        THE QUICK BROWN FOX JUMPED OVER THE FENCE
                      </p>
                      <br />
                    </td>
                  </tr>
                  <tr>
                    <td>Lower</td>
                    <td>Lowercase every word</td>
                    <td>
                      <p>
                        myString.lowerCase()
                        <br />
                        the quick brown fox jumped over the fence
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Split
                      <br />
                    </td>
                    <td>
                      <p>Return a List</p>
                      <p>Takes in delimeter</p>
                      <p>Default is single space</p>
                    </td>
                    <td>
                      <p>
                        myString.split(' ')
                        <br />
                        ['The', 'quick', 'brown', 'fox', 'jumped', 'over',
                        'the', 'fence']
                      </p>
                      <p>
                        myString.split('e')
                        <br />
                        ['Th', ' quick brown fox jump', 'd ov', 'r th', ' f',
                        'nc', '']
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>Errors</td>
                    <td>console.log(myString[400])</td>
                    <td>undefined</td>
                  </tr>
                  <tr>
                    <td>Error - Immutability</td>
                    <td>myString[0] = 'a'</td>
                    <td>No errors</td>
                  </tr>
                  <tr>
                    <td>Other Methods Available</td>
                    <td>Object.keys(myString).__proto__</td>
                    <td>
                      <p>
                        length: 0,constructor: ƒ Array(),concat: ƒ
                        concat(),copyWithin: ƒ copyWithin(),fill: ƒ fill(),find:
                        ƒ find(),findIndex: ƒ findIndex(),lastIndexOf: ƒ
                        lastIndexOf(),pop: ƒ pop(),push: ƒ push(),reverse: ƒ
                        reverse(), shift: ƒ shift(),unshift: ƒ unshift(), slice:
                        ƒ slice(),sort: ƒ sort(), splice: ƒ splice(),includes: ƒ
                        includes(), indexOf: ƒ indexOf(),join: ƒ join(), keys: ƒ
                        keys(),entries: ƒ entries(), values: ƒ values(),forEach:
                        ƒ forEach(),filter: ƒ filter(),flat: ƒ flat(),flatMap: ƒ
                        flatMap(),map: ƒ map(),every: ƒ every(),some: ƒ
                        some(),reduce: ƒ reduce(),reduceRight: ƒ
                        reduceRight(),toLocaleString: ƒ
                        toLocaleString(),toString: ƒ toString()
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
        <Accordion.Item eventKey="5">
          <Accordion.Header>Lists</Accordion.Header>
          <Accordion.Body>
            <div class="table-responsive text-start">
              <div>
                <table class="table table-striped table-dark text-white">
                  <thead>
                    <th width="20%">Function</th>
                    <th width="40%">Usage</th>
                    <th width="40%">Result</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td>List Summary</td>
                      <td>
                        <p>
                          Creation of a list is done with, very specific
                          symbols, ‘[’,’]’ and items are separated with commas
                        </p>
                        <p>List items are changeable or mutable</p>
                      </td>
                      <td>
                        <p>
                          Items within lists can be numbers, strings, lists,
                          dictionaries, basically anything
                        </p>
                        <p class="text-primary">
                          var myArray = ['a','b','c','d','e']
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>console.log</td>
                      <td>
                        <p>console.log Items in List</p>
                      </td>
                      <td>
                        <p>
                          console.log(myArray)
                          <br />
                          ['a', 'b', 'c', 'd', 'e']
                        </p>
                        <p>
                          console.log(myArray[0])
                          <br />
                          ['a']
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>Index</td>
                      <td>Location of Specific Element in List</td>
                      <td>
                        <p>
                          myArray.indexOf('b')
                          <br />1
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>Append</td>
                      <td>Add a Single Value to the List</td>
                      <td>
                        <p>
                          myArray.push('f')
                          <br />
                          ['a', 'b', 'c', 'd', 'e', 'f']
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>Delete</td>
                      <td>Remove Values from List</td>
                      <td>
                        <p>
                          myArray.pop()
                          <br />
                          ['a', 'b', 'c', 'd']
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>Splice</td>
                      <td>
                        Returns removed Values from Array and changes the
                        original array
                      </td>
                      <td>
                        <p>
                          myArray.splice(2,2)
                          <br />
                          [c', 'd']
                        </p>
                        <p>
                          console.log(myArray)
                          <br />
                          ['a','b','e']
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>Slice</td>
                      <td>
                        Similar to Substring and does not modify the original
                        Array
                      </td>
                      <td>
                        <p>
                          myArray.splice(2,4)
                          <br />
                          [c', 'd']
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>Insert</td>
                      <td>Add Elements to the Array</td>
                      <td>
                        <p>
                          myArray.splice(1,0,'f')
                          <br />
                          ['a', 'f', 'b', 'c', 'd', 'e']
                        </p>
                        <p>
                          myArray.splice(1,0 'f'.'g')
                          <br />
                          ['a', 'f', 'g', 'b', 'c', 'd', 'e']
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>Replace</td>
                      <td>Replace values within a List</td>
                      <td>
                        <p>myArray[0] = 'f'</p>
                        <p>['f', 'b', 'c', 'd', 'e']</p>
                      </td>
                    </tr>
                    <tr>
                      <td>UnPacking</td>
                      <td>
                        <p>Extracting values from List to Variables</p>
                        <p>
                          Spread Operator holds all the undeclared values
                          (...rest)
                        </p>
                      </td>
                      <td>
                        <p>
                          [val1, val2, ...rest] = myArray
                          <br />
                          console.log(val1, val2, rest)
                        </p>
                        <p>a b ['c','d','e']</p>
                      </td>
                    </tr>
                    <tr>
                      <td>Copying 1 List to Another</td>
                      <td>
                        <p>
                          Creates links to values, does not create a new list.
                          If items change in myArray, my_second_list will also
                          reflect those changes (probably not desired result)
                        </p>
                      </td>
                      <td>
                        <p>var myArray2 = myArray.slice()</p>
                      </td>
                    </tr>
                    <tr>
                      <td>Length</td>
                      <td>Return the number of elements in the List</td>
                      <td>
                        <p>
                          myArray.length
                          <br />5
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>Errors</td>
                      <td>
                        <p>console.log(myArray[15])</p>
                      </td>
                      <td>
                        <p>undefined</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Accordion>
        <Accordion.Item eventKey="6">
          <Accordion.Header>Dictionaries</Accordion.Header>
          <Accordion.Body>
            <div class="table-responsive text-start">
              <div>
                <table class="table table-striped table-dark text-white">
                  <thead>
                    <th width="20%">Function</th>
                    <th width="40%">Usage</th>
                    <th width="40%">Result</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Dictionaries</td>
                      <td>
                        <p>mapping of key value pairs, Unordered, Mutable</p>
                        <p>
                          Creation of a list is done with{" "}
                          <span class="text-primary">{`{ , }`}</span> and items
                          are separated with commas.
                        </p>
                        <p>
                          Common Uses of Dictionaries are JSON Objects for
                          Database entries
                        </p>
                      </td>
                      <td>
                        <p>Most Common used data type for exchanging data</p>
                        <p class="text-primary">
                          var myDict ={" "}
                          {`{key1: 'value1',key2: 'value2', key3: 'value3'}`}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Printing Dictionary
                        <br />
                      </td>
                      <td>Printing a Key Value Pair</td>
                      <td>
                        <p>
                          console.log(myDict)
                          <br />
                          {`{'key1': 'value1', key2: 'value2', key3: 'value3'}`}
                        </p>
                        <p>
                          console.log(myDict['key1'])
                          <br />
                          value1
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>Add</td>
                      <td>Adding Key Value Pair</td>
                      <td>
                        <p>
                          myDict['new_key'] = 'new value'
                          <br />
                          {`{key1: 'value1', key2: 'value2', key3: 'value3', new_key: 'new value'}`}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>Replace</td>
                      <td>Repalcing a Value in the Dictionary</td>
                      <td>
                        <p>
                          myDict['key1'] = ['a','b','c']
                          <br />
                          {`{key1: ['a','b','c'], key2: 'value2', key3: 'value3'}`}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>Remove</td>
                      <td>Removing Key Value Pair from the Dictionary</td>
                      <td>
                        <p>
                          delete myDict['key1']
                          <br />
                          {`{key2: 'value2', key3: 'value3'}`}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Error
                        <br />
                        Key Doesn't exist
                      </td>
                      <td>console.log(myDict['key4'])</td>
                      <td>undefined</td>
                    </tr>
                    <tr>
                      <td>Other Methods Available</td>
                      <td>dir(myDict)</td>
                      <td>
                        <p>
                          'clear', 'copy', 'fromkeys', 'get', 'items', 'keys',
                          'pop', 'popitem', 'setdefault', 'update', 'values'
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Accordion>
        <Accordion.Item eventKey="7">
          <Accordion.Header>Booleans</Accordion.Header>
          <Accordion.Body>
            <div class="table-responsive text-start">
              <table class="table table-striped table-dark text-white">
                <thead>
                  <td>Function</td>
                  <td>Value</td>
                </thead>
                <tbody>
                  <tr>
                    <td>Booleans</td>
                    <td>Values are only 'true' or 'false'</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Accordion>
        <Accordion.Item eventKey="8">
          <Accordion.Header>Control Flow - If Else For While</Accordion.Header>
          <Accordion.Body>
            <div class="table-responsive text-start">
              <div>
                <table class="table table-striped table-dark text-white">
                  <thead>
                    <th width="20%">Category</th>
                    <th width="40%">Functions</th>
                    <th width="40%">Example</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Comparison Operators</td>
                      <td>
                        <p>
                          <i class="fas fa-greater-than fa-xs"></i> Greater than
                        </p>
                        <p>
                          <i class="fas fa-less-than fa-xs"></i> Less Than
                        </p>
                        <p>
                          <i class="fas fa-greater-than fa-xs"></i>{" "}
                          <i class="fas fa-equals fa-xs"></i> Greater than or
                          Equal To{" "}
                        </p>
                        <p>
                          <i class="fas fa-less-than fa-xs"></i>{" "}
                          <i class="fas fa-equals fa-xs"></i> Less than or equal
                          to
                        </p>
                        <p>
                          <i class="fas fa-equals fa-xs"></i>
                          <i class="fas fa-equals fa-xs"></i>Equality
                        </p>
                        <p>
                          <i class="fas fa-exclamation fa-xs"></i>
                          <i class="fas fa-equals fa-xs"></i> Not equal
                        </p>
                        <p>and / or</p>
                      </td>
                      <td>
                        <p>a &gt; b</p>
                        <p>a &lt; b</p>
                        <p>a &gt;= b</p>
                        <p>a &lt;= b</p>
                        <p>a === b (Do no use ==)</p>
                        <p>a != b</p>
                        <p>( a &gt; b ) and ( b &gt; c )</p>
                        <p>( a &gt; b ) or ( b &gt; c )</p>
                      </td>
                    </tr>
                    <tr>
                      <td>Control Flow Statements and Loops</td>
                      <td>
                        <p>Defined by statement enclosed in '(' ')'</p>
                        <p>
                          Comparison Operators used within Control Flow
                          Statement
                        </p>
                      </td>
                      <td>
                        <p>if</p>
                        <p>else</p>
                        <p>else if</p>
                        <p>for</p>
                        <p>while</p>
                      </td>
                    </tr>
                    <tr>
                      <td>Containment</td>
                      <td>
                        <p>Code block is enclosed in ' '</p>
                      </td>
                      <td>
                        <p>
                          if(true){`{`}
                          <br />
                          &nbsp;&emsp;console.log(a)
                          <br />
                          {`}`}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>IF</td>
                      <td>
                        Used to check one time if something matches desired
                        criteria
                      </td>
                      <td>
                        <p>if (a &gt; b){"{"}</p>
                        <p>
                          &emsp;console.log(a)
                          <br />
                          {"}"}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>ELSE IF</p>(Optional)
                      </td>
                      <td>
                        Else If, Used Only with Preceding IF statement when the
                        IF condition is False and another case should be checked
                      </td>
                      <td>
                        <p>else if (a &lt; b){"{"}</p>
                        <p>
                          &emsp;console.log(a)
                          <br />
                          {"}"}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>ELSE</p>(Optional)
                      </td>
                      <td>
                        <p>
                          Used Only with Preceding IF statement when the IF
                          condition is False, Final Catch if desired
                        </p>
                        <p>Does not support Comparison Operators</p>
                      </td>
                      <td>
                        <p>else{"{"}</p>
                        <p>
                          &emsp;console.log(a)
                          <br />
                          {"}"}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>FOR Loop</td>
                      <td>
                        <p>3 Parts for definition</p>
                        <p>Starting Point</p>
                        <p>Ending Point</p>
                        <p>Step Rate</p>
                      </td>
                      <td>
                        <p>for (let i = 0; i &lt; 5;i++){"{"}</p>
                        <p>
                          &emsp;console.log(i)
                          <br />
                          {"}"}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>WHILE Loop</td>
                      <td>
                        <p>Repeat the action until break point is reached</p>
                        <p>
                          Must define a break point outside of the definition
                        </p>
                        <p>Without break point, system can crash</p>
                      </td>
                      <td>
                        <p>var counter = 0</p>
                        <p>while (counter &lt; 10){`{`}</p>
                        <p>&emsp;console.log(counter)</p>
                        <p>
                          &emsp;counter += 1<br />
                          {`}`}
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Accordion>
        <Accordion.Item eventKey="9">
          <Accordion.Header>Functions</Accordion.Header>
          <Accordion.Body>
            <div class="table-responsive text-start">
              <table class="table table-striped table-dark text-white">
                <thead>
                  <th>Item</th>
                  <th>Explanation</th>
                  <th>Example</th>
                </thead>
                <tbody>
                  <tr>
                    <td>Function Definition</td>
                    <td>
                      <p>DRY - Don't Repeat Yourself</p>
                      <p>Defined with 'def' keyword</p>
                      <p>
                        Name is required to be able to call within the program
                      </p>
                      <p>Opening Closing Parentheses are Required</p>
                      <p>
                        Can Pass in variables inside the parentheses (optional)
                      </p>
                      <p>
                        Order of Operations Matters - Define Functions at the
                        top of the Program
                      </p>
                    </td>
                    <td>
                      <p>function myFunc(){`{}`}</p>
                      <p>function myFunc(a,b){`{}`}</p>
                    </td>
                  </tr>
                  <tr>
                    <td>Calling/Executing the Function</td>
                    <td>
                      <p>Function can be called multiple times</p>
                      <p>Can be exported/imported</p>
                    </td>
                    <td>
                      <p>myFunc() - Executes the Function</p>
                      <p>
                        myFunc
                        <br />ƒ myFunc(){`{`}
                        <br />
                        console.log('hello')
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>Importing/Re-Using</td>
                    <td>
                      <p>Function can be called multiple times</p>
                      <p>Can be exported/imported</p>
                    </td>
                    <td>
                      <p>import myFunc from 'file1.js'</p>
                      <p>import myFunc from '../folder/file1.js'</p>
                    </td>
                  </tr>
                  <tr>
                    <td>Return statements</td>
                    <td>
                      <p>
                        Signifies the end of the function, that it did what it
                        needed to, the object was found, no more computation
                        needed
                      </p>
                      <p>Highly Recommended but not necessary</p>
                    </td>
                    <td>
                      <p>
                        function myFunc(){`{`}
                        <br />
                        &emsp;return true
                        <br />
                        {`}`}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>Lambda Functions</td>
                    <td>
                      <p>
                        Single 1-time use function generally used with map and
                        filter
                      </p>
                      <p>Map - applies function to all values</p>
                      <p>Filter - returns all True Values</p>
                    </td>
                    <td>
                      <p>
                        var newArray = function(){`{`}
                        <br />
                        &emsp;console.log('Inside function')
                        <br />
                        {`}`}
                      </p>
                      <p>newArray()</p>
                      <p>Inside function</p>
                    </td>
                  </tr>
                  <tr>
                    <td>Function Scope</td>
                    <td>
                      <p>
                        Local - names nested inside a function, class or lambda
                      </p>
                      <p>
                        Global - names assigned at the top level of a module
                        file or declared in a def within a file
                      </p>
                    </td>
                    <td>
                      <p>var x = 'This is a Global Variable'</p>
                      <p>function myFunc(){`{`}</p>
                      <p>&emsp;let x = 'This is a Local Variable'</p>
                      <p>
                        &emsp;return x<br />
                        {`}`}
                      </p>
                      <p>console.log(myFunc())</p>
                      <p>This is a Local Variable</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Accordion>
        <Accordion.Item eventKey="10">
          <Accordion.Header>Object Oriented Programming</Accordion.Header>
          <Accordion.Body>
            <div class="table-responsive text-start">
              <table class="table table-striped table-dark text-white">
                <thead>
                  <th width="20%">Item</th>
                  <th width="40%">Explanation</th>
                  <th width="40%">Example</th>
                </thead>
                <tbody>
                  <tr>
                    <td>Object Oriented Programming</td>
                    <td>
                      <p>
                        We have Variables and Functions - Object Oriented
                        Programming Combines the Two into a wrapper to keep
                        changes consistent
                      </p>
                      <p>
                        Think about the Object and its place within the data
                        set, and what we are trying to modify
                      </p>
                      <p>Uses ProperCase for naming</p>
                      <p>Good News - We can Define anything we want to use</p>
                      <p>
                        Bad News - We have to define everything we want to use
                      </p>
                    </td>
                    <td>
                      <p>class MyClass(){}</p>
                    </td>
                  </tr>
                  <tr>
                    <td>Initializing a Class</td>
                    <td>
                      <p>In order to use a Class it needs to be initialized</p>
                      <p>
                        Uses the 'new' keyword before the class we want to
                        Invoke
                      </p>
                    </td>
                    <td>var newClass = new MyClass()</td>
                  </tr>
                  <tr>
                    <td>Attributes</td>
                    <td>Attributes are Variables in a Class</td>
                    <td>
                      <p>
                        class MyClass(){`{`}
                        <br />
                        &emsp;constructor(name){`{`}
                        <br />
                        &emsp;&emsp;this.name = name
                        <br />
                        &emsp;{`}`}
                        <br />
                        {`}`}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>Methods</td>
                    <td>Methods are Functions in a Class</td>
                    <td>
                      <p>
                        class MyClass(){`{`}
                        <br />
                        &emsp;greet(){`{`}
                        <br />
                        &emsp;&emsp;return `Hello {'$'}{`{this.name}`}`<br />
                        &emsp;{`}`}
                        <br />
                        {`}`}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>This</td>
                    <td>Refer to Attributes/Variables in the Class</td>
                    <td>
                      <p>
                        constructor(name){`{`}
                        <br />
                        &emsp;this.name = name
                        <br />
                        {`}`}
                      </p>
                      <p>
                        greet(){`{`}
                        <br />
                        &emsp;return `Welcome {'$'}{`{this.name}`}`;
                        <br />
                        {`}`}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>Special Methods</td>
                    <td>
                      <p>Static - can be used independent of Initialization</p>
                    </td>
                    <td>
                      <p>
                        static greet(){`{`}
                        <br />
                        &emsp;return 'Hello From Inside the Class'
                        <br />
                        {`}`}
                      </p>
                      <p>
                        MyClass.greet()
                        <br />
                        Hello from inside the class
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>Putting it all Together</td>
                    <td>A full Class Definition</td>
                    <td>
                      <p>
                        class MyClass(){`{`}
                        <br />
                        &emsp;constructor(name){`{`}
                        <br />
                        &emsp;&emsp;this.name = name
                        <br />
                        &emsp;{`}`}
                        <br />
                        &emsp;greet(){`{`}
                        <br />
                        &emsp;&emsp;return `Hello{` {this.name}`}`<br />
                        &emsp;{`}`}
                        <br />
                        {`}`}
                      </p>
                      <p>newClass = new MyClass('John')</p>
                      <p>
                        {`console.log(newClass.greet())`}
                        <br />
                        Hello John
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>Inheritance</td>
                    <td>
                      <p>
                        We can build off of Classes instead of defining
                        everything all over again
                      </p>
                      <p>DRY Principle</p>
                    </td>
                    <td>
                      <p>
                        class MyClass{`{`}
                        <br />
                        &emsp;constructor(name){`{`}
                        <br />
                        &emsp;&emsp;this.name = name
                        <br />
                        &emsp;{`}`}
                        <br />
                        &emsp;greet(){`{`}
                        <br />
                        &emsp;&emsp;console.log(this.name)
                        <br />
                        &emsp;{`}`}
                        <br />
                        {`}`}
                      </p>
                      <p>
                        class MyNewClass extends MyClass{`{`}
                        <br />
                        &emsp;welcome(){`{`}
                        <br />
                        &emsp;&emsp;console.log(`{`Welcome {this.name}`}`)
                        <br />
                        &emsp;{`}`}
                        <br />
                        {`}`}
                      </p>

                      <p>var newClass = new MyNewClass("John")</p>
                      <p>
                        newClass.welcome()
                        <br />
                        Welcome John
                      </p>
                      <p>
                        newClass.greet()
                        <br />
                        John
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>Undefined Arguments - ...rest (Spread Operator)</td>
                    <td>
                      <p>
                        We want to pass variables that haven't been defined yet
                      </p>
                      <p>...rest variables get put into an Array</p>
                    </td>
                    <td>
                      <p>
                        class MyClass{`{`}
                        <br />
                        &emsp;constructor(name, ...rest){`{`}
                        <br />
                        &emsp;&emsp;this.name = name;
                        <br />
                        &emsp;&emsp;this.others = rest
                        <br />
                        &emsp;{`}`}
                        <br />
                        &emsp;otherValues(){`{`}
                        <br />
                        &emsp;&emsp;console.log(this.others)
                        <br />
                        &emsp;{`}`}
                        <br />
                        {`}`}
                      </p>
                      <p>var newClass = new MyClass('john', 1,2,3)</p>
                      <p>
                        {`console.log(newClass.otherValues())`}
                        <br />
                        [1,2,3]
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>Other Methods Available</td>
                    <td>dir(new_class)</td>
                    <td>
                      <p>'greet', 'name', 'welcome'</p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table class="table table-striped table-dark text-white">
                <thead>
                  <th width="20%">Item</th>
                  <th width="40%">Explanation</th>
                  <th width="40%">Example</th>
                </thead>
                <tbody>
                  <tr>
                    <td>Module and Packages</td>
                    <td>
                      <p>
                        Programs Written by you or other people that we want to
                        re-use in our codebase
                      </p>
                      <p>
                        Can import anything, variables, functions, or classes
                      </p>
                    </td>
                    <td>
                      <p>import className from 'file1.js'</p>
                      <p>import * from 'file1.js'</p>
                    </td>
                  </tr>
                  <tr>
                    <td>Example</td>
                    <td>
                      <p>2 Files</p>
                      <p>file1.js has desired function</p>
                      <p>file2.js has desired execution</p>
                    </td>
                    <td>
                      <p>
                        file1.js
                        <br />
                        -------------
                        <br />
                        function myFunc(): &emsp;return 'Hello World'
                      </p>
                      <p>
                        file2.js
                        <br />
                        -------------
                        <br />
                        import myFunc from './file1.js'
                        <br />
                        {`console.log(myFunc())`}
                        <br />
                        Hello World
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
        <Accordion.Item eventKey="11">
          <Accordion.Header>Errors and Exceptions</Accordion.Header>
          <Accordion.Body>
            <div class="table-responsive text-start">
              <table class="table table-striped table-dark text-white">
                <thead>
                  <th width="20%">Item</th>
                  <th width="40%">Explanation</th>
                  <th width="40%">Example</th>
                </thead>
                <tbody>
                  <tr>
                    <td>Errors and Exceptions</td>
                    <td>
                      If code has potential for error, code can keep working and
                      not crash
                    </td>
                    <td>
                      <p>Try</p>
                      <p>Catch</p>
                      <p>Finally</p>
                    </td>
                  </tr>
                  <tr>
                    <td>Try</td>
                    <td>
                      Attempt to run this however if there are problems don't
                      run
                    </td>
                    <td>
                      <p>
                        try{`{`}
                        <br />
                        &emsp;var try_block = 'Try block'
                        <br />
                        &emsp;console.log(try_block)
                        <br />
                        {`}`}
                        <br />
                        catch (err){`{`}
                        <br />
                        &emsp;console.log('Error, the Try block failed', err)
                        <br />
                        {`}`}
                      </p>
                      <p>
                        <p>Try block</p>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>Catch</td>
                    <td>
                      <p>If the Try Block fails produce an error</p>
                      <p>Done with the 'throw' command</p>
                    </td>
                    <td>
                      <p>
                        try{`{`}
                        <br />
                        &emsp;<s>var try_block = 'Try block'</s>
                        <br />
                        &emsp;console.log(try_block) throw 'No Variable with
                        that name'
                        <br />
                        {`}`}
                        <br />
                        catch(err){`{`}
                        <br />
                        &emsp;console.log('Error, the Try block failed, ', err)
                        <br />
                        {`}`}
                      </p>
                      <p>
                        <p>
                          Error, the Try block failed, No Variable with that
                          name
                        </p>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>Finally</td>
                    <td>Runs no matter what at the end of the block</td>
                    <td>
                      <p>
                        try{`{`}
                        <br />
                        &emsp;var try_block = 'Try block'
                        <br />
                        &emsp;console.log(try_block)
                        <br />
                        {`}`}
                        <br />
                        catch(err){`{`}
                        <br />
                        &emsp;console.log('Error, the Try block failed')
                        <br />
                        {`}`}
                        <br />
                        finally{`{`}
                        <br />
                        &emsp;console.log('Finally block runs no matter what')
                        <br />
                        {`}`}
                      </p>
                      <p>
                        Try block
                        <br />
                        Else Block
                        <br />
                        Finally block runs no matter what
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
        <Accordion.Item eventKey="12">
          <Accordion.Header>
            Document Object Model (DOM) Manipulation
          </Accordion.Header>
          <Accordion.Body>
            <div class="table-responsive text-start">
              <table class="table table-striped table-dark text-white">
                <thead>
                  <th></th>
                  <th>Document Object Model (DOM) Manipulation</th>
                </thead>
                <tbody>
                  <tr>
                    <td>What is the DOM</td>
                    <td>
                      <p>
                        The Actual webpage is the entire Document and we can
                        change any component we want to
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>Why is this important</td>
                    <td>
                      <p>We have HTML and we have Python</p>
                      <p>
                        Both work well together but from a User Experience,
                        Python is a bit Clunky and HTML is a bit Static
                      </p>
                      <p>Introduce JavaScript</p>
                      <p>
                        Since JavaScript works in the Browser we can make
                        changes really fast
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>Grabbing Elements</td>
                    <td>
                      <p>
                        document.querySelector('tag/#id/.className')
                        (recommended)
                      </p>
                      <p>document.getElementById('id')</p>
                      <p>document.getElementsByTagName('tag')</p>
                      <p>document.getElementsByClassName('class')</p>
                    </td>
                  </tr>
                  <tr>
                    <td>Changing Elements Example</td>
                    <td>
                      <p>Each Element is a just an object in a dictionary</p>
                      <p>To change it, just update the dictionary Value</p>
                      <p>
                        let output = document.querySelector('.output')
                        <br />
                        output.innerHTML = '&lt;h1&gt;Hello World&lt;/h1&gt;'
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>On Click Events</td>
                    <td>
                      <p>document.querySelector('#button').addEventListener('click', {`(e)`} =&lt; {`{`}<br />{`console.log(e.target)`}<br />{`//Insert Changes Here`}<br />{`}`})</p>
                    </td>
                  </tr>
                  <tr>
                    <td>Forms Handling</td>
                    <td>
                      <p>
                        document.querySelector('#button').addEventListener('click',
                        {`(e)`} =&lt; {`{`}
                        <br />
                        e.preventDefault()
                        <br />
                        {`// Prevents the page from reloading`}
                        <br />
                        console.log(e.target)
                        <br />
                        {`//Insert Changes Here`}
                        <br />
                        {"}"})
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>What if I want to make Back End DataBase Changes</td>
                    <td>
                      <p>
                        Django Should have API's in place (djangorestframework)
                      </p>
                      <p>Use the Fetch library built into JavaScript</p>
                      <p>
                        fetch('http://127.0.0.1:8000/api_firstapp/list/')
                        <br />
                        .then(res =&lt; res.json())
                        <br />
                        .then(data =&lt; console.log(data))
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
