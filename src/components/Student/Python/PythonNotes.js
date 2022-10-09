import { Accordion } from "react-bootstrap";

export const PythonNotes = () => {
  return (
    <div className="contentDiv notes">
      <h1>Python Notes</h1>

      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Basics</Accordion.Header>
          <Accordion.Body>
            <div className="table-responsive text-start">
              <table className="table table-striped table-dark text-white">
                <thead>
                  <tr>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Python Basics</td>
                    <td className="grid-table">
                      <p>High Level Programming Language</p>
                      <p>Back End Language</p>
                      <p>Interpreted Language</p>
                      <p>Python Programs are plain text</p>
                      <p>Python Does not work in a Browser</p>
                      <p>Free with Massive Support Community</p>
                    </td>
                  </tr>
                  <tr>
                    <td>Execute a program from the CLI</td>
                    <td>python filename.py</td>
                  </tr>
                  <tr>
                    <td>Python Shell</td>
                    <td>
                      python3
                      <br />
                      Python 3.7.3 (default, Apr 14 2019, 12:05:24) <br />
                      [Clang 8.0.0 (clang-800.0.42.1)] on darwin
                      <br />
                      Type "help", "copyright", "credits" or "license" for more
                      information.
                      <br />
                      &gt;&gt;&gt; exit()
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
          <Accordion.Header>Variables and Data Types</Accordion.Header>
          <Accordion.Body>
            <div className="table-responsive text-start">
              <table className="table table-striped table-dark text-white">
                <thead>
                  <tr>
                    <th></th>
                    <th>Variables and Data Types</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>What is a Variable?</td>
                    <td>
                      <p>
                        A way to store information to be referenced and/or
                        manipulated later in a computer program
                      </p>
                      <p>
                        provide a way of labeling data with a descriptive name,
                        so our programs can be understood more clearly by the
                        reader and ourselves
                      </p>
                      <p>
                        Must be defined before it can be used - Cannot call a
                        Variable if it is not defined
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>Variable Convention in Python</td>
                    <td>
                      Snake Case (underscore between words)
                      <br />
                      example_variable = 'this is an example of a variable in
                      snake case'
                      <br />
                      <br />
                      Variables should make sense to someone else
                      <br />
                      <span style={{ color: "green" }}>
                        <i className="fas fa-check"></i>
                      </span>{" "}
                      hair_color = 'brown'
                      <br />
                      <span style={{ color: "red" }}>
                        <i className="fas fa-times"></i>
                      </span>{" "}
                      hair_color = 73
                      <br />
                      <br />
                      Cannot start with a number or any special character
                      <br />
                      Must start with an alphabet
                      <br />
                      <br />
                      lowercase recommended for variables and functions
                      <br />
                      Uppercase recommended for Classes
                      <br />
                    </td>
                  </tr>
                  <tr>
                    <td>Variable Declaration</td>
                    <td>
                      number = 5<br />
                      string = "string"
                      <br />
                      c = number + number
                      <br />
                      my_list = [number, string]
                      <br />
                      my_dict = {`{'string': number}`}
                      <br />
                      my_tuple = (number, string)
                      <br />
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
                        Can change to the specific element without destroying or
                        reassigning
                      </p>
                      <p>Lists</p>
                      <p>Dictionaries</p>
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
          <Accordion.Header>Printing and Commenting</Accordion.Header>
          <Accordion.Body>
            <div className="table-responsive text-start">
              <table className="table table-striped table-dark text-white">
                <thead>
                  <tr>
                    <th></th>
                    <th>Printing</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Print Statements</td>
                    <td>
                      Outputs information to the user
                      <br />
                      Most basic troubelshooting method
                    </td>
                  </tr>

                  <tr>
                    <td>Single Line Printing</td>
                    <td>
                      print('Hello World')
                      <br />
                      &gt;&gt;&gt; Hello World
                      <br />
                      <br />
                      print(5+7)
                      <br />
                      &gt;&gt;&gt; 12
                      <br />
                      <br />
                      print(variable/list/dictionary/object)
                      <br />
                      <br />
                      {`print(f"Hello, {name}, welcome")<br/>Hello, John, welcome`}
                    </td>
                  </tr>
                  <tr>
                    <td>Multiline Printing</td>
                    <td>
                      print(f"""This would be a paragraph of text or code""")
                    </td>
                  </tr>
                </tbody>
              </table>
              <table className="table table-striped table-dark text-white">
                <thead>
                  <tr>
                    <th></th>
                    <th>Comments</th>
                  </tr>
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
                      # This is a comment
                      <br />
                      <br />
                      Prepend the # symbol and anything after{" "}
                      <strong>on the same line</strong> is a comment
                    </td>
                  </tr>
                  <tr>
                    <td>Multiline Comments</td>
                    <td>
                      """
                      <br />
                      Some Comment text here to explain
                      <br />
                      """
                      <br />
                      <br />
                      PrePend <strong>and</strong> PostPend any comment block
                      with """ (3 Double quotes)
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
            <div className="table-responsive text-start">
              <table className="table table-striped table-dark text-white">
                <thead>
                  <tr>
                    <th>Function</th>
                    <th>Explanation</th>
                  </tr>
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
                      <i className="fas fa-plus"></i>
                      <br />
                      <i className="fas fa-minus"></i>
                      <br />
                      <i className="fas fa-asterisk"></i>
                      <br />
                      <i className="fas fa-slash fa-rotate-90 fa-xs"></i>
                      <br />
                      <i className="fas fa-slash fa-rotate-90 fa-xs"></i>
                      <i className="fas fa-slash fa-rotate-90 fa-xs"></i>
                      <br />
                      <i className="fas fa-percent fas-xs"></i>
                      <br />
                      <i className="fas fa-asterisk"></i>
                      <i className="fas fa-asterisk"></i>
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
                      my_bill = 100
                      <br />
                      service_charge = 0.10
                      <br />
                      total_bill = my_bill * (1+service_charge)
                      <br />
                      print(total_bill)
                      <br />
                      <p className="text-success">110.0</p>
                      <br />
                      my_bill = 100
                      <br />
                      service_charge = 0.10
                      <br />
                      total_bill = my_bill * 1 + service_charge
                      <br />
                      print(total_bill)
                      <br />
                      <p className="text-danger">100.1</p>
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
            <div className="table-responsive text-start">
              <div>
                <p className="text-primary">
                  my_string = 'The quick brown fox jumped over the fence'
                </p>
                <table className="table table-striped table-dark text-white">
                  <thead>
                    <tr>
                      <th width="20%">Function</th>
                      <th width="40%">Usage</th>
                      <th width="40%">Result</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Create String</td>
                      <td>
                        Creation of a string is done with single or double
                        quotes
                      </td>
                      <td>
                        <p>‘This is a string of text’</p>
                        <p>"This is another string of text"</p>
                        <p>
                          “If I’m going to use apostrophes within the string
                          it’s better to use double quotes”
                        </p>
                        <p>String Positions start at 0</p>
                      </td>
                    </tr>
                    <tr>
                      <td>Print Variable</td>
                      <td>Output content of the Variable</td>
                      <td>
                        <p>
                          print(my_string)
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
                          my_string[0]
                          <br />T
                        </p>
                        <p>
                          my_string[-1]
                          <br />e
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>Substrings</td>
                      <td>Select portions of the String</td>
                      <td>
                        <p>
                          my_string[0:]
                          <br />
                          The quick brown fox jumped over the fence
                        </p>
                        <p>
                          my_string[1:]
                          <br />
                          <span className="text-success">he</span> quick brown fox
                          jumped over the fence
                        </p>
                        <p className="text-success">
                          my_string[0:3]
                          <br />
                          The
                        </p>
                        <p>
                          my_string[:-1]
                          <br />
                          The quick brown fox jumped over the{" "}
                          <strong>fenc</strong>
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>Reverse the String</td>
                      <td>Reverses the entire String</td>
                      <td>
                        <p>
                          my_string[::-1]
                          <br />
                          ecnef eht revo depmuj xof nworb kciuq ehT
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>Get Every nth Letter</td>
                      <td>Get Every nth Letter</td>
                      <td>
                        <p>
                          my_string[::2]
                          <br />
                          Teqikbonfxjme vrtefne
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>Upper</td>
                      <td>Uppercase every letter</td>
                      <td>
                        <p>
                          my_string.upper()
                          <br />
                          THE QUICK BROWN FOX JUMPED OVER THE FENCE
                        </p>
                        <br />
                      </td>
                    </tr>
                    <tr>
                      <td>Capitalize</td>
                      <td>Uppercase the first letter of every word</td>
                      <td>
                        <p>
                          my_string.title()
                          <br />
                          The Quick Brown Fox Jumped Over The Fence
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>Lower</td>
                      <td>Lowercase every word</td>
                      <td>
                        <p>
                          my_string.lower()
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
                          my_string.split()
                          <br />
                          ['The', 'quick', 'brown', 'fox', 'jumped', 'over',
                          'the', 'fence']
                        </p>
                        <p>
                          my_string.split('e')
                          <br />
                          ['Th', ' quick brown fox jump', 'd ov', 'r th', ' f',
                          'nc', '']
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>Error - Out of Range</td>
                      <td>print(my_string[400])</td>
                      <td>IndexError: string index out of range</td>
                    </tr>
                    <tr>
                      <td>Error - Immutability</td>
                      <td>my_string[0] = 'a'</td>
                      <td>
                        TypeError: 'str' object does not support item assignment
                      </td>
                    </tr>
                    <tr>
                      <td>Other Methods Available</td>
                      <td>dir(my_string)</td>
                      <td>
                        'capitalize', 'casefold', 'center', 'count', 'encode',
                        'endswith', 'expandtabs', 'find', 'format',
                        'format_map', 'index', 'isalnum', 'isalpha', 'isascii',
                        'isdecimal', 'isdigit', 'isidentifier', 'islower',
                        'isnumeric', 'isprintable', 'isspace', 'istitle',
                        'isupper', 'join', 'ljust', 'lower', 'lstrip',
                        'maketrans', 'partition', 'replace', 'rfind', 'rindex',
                        'rjust', 'rpartition', 'rsplit', 'rstrip', 'split',
                        'splitlines', 'startswith', 'strip', 'swapcase',
                        'title', 'translate', 'upper', 'zfill'
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
        <Accordion.Item eventKey="5">
          <Accordion.Header>Lists</Accordion.Header>
          <Accordion.Body>
            <div className="table-responsive text-start">
              <div>
                <table className="table table-striped table-dark text-white">
                  <thead>
                    <tr>
                      <th width="20%">Function</th>
                      <th width="40%">Usage</th>
                      <th width="40%">Result</th>
                    </tr>
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
                        <p className="text-primary">
                          my_list = ['a','b','c','d','e']
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>Print</td>
                      <td>
                        <p>Print Items in List</p>
                      </td>
                      <td>
                        <p>
                          print(my_list)
                          <br />
                          ['a', 'b', 'c', 'd', 'e']
                        </p>
                        <p>
                          print(my_list[0])
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
                          my_list.index('b')
                          <br />1
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>Append</td>
                      <td>Add a Single Value to the List</td>
                      <td>
                        <p>
                          my_list.append('f')
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
                          my_list.pop()
                          <br />
                          ['a', 'b', 'c', 'd']
                        </p>
                        <p>
                          my_list.pop(0)
                          <br />
                          ['b', 'c', 'd', 'e']
                        </p>
                        <p>
                          my_list.remove('c')
                          <br />
                          ['b', 'd', 'e']
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>Insert</td>
                      <td>Add a Single Value to the List</td>
                      <td>
                        <p>
                          my_list.insert(1,'f')
                          <br />
                          ['a', 'f', 'b', 'c', 'd', 'e']
                        </p>
                        <p>
                          my_list.insert(1,['f'.'g'])
                          <br />
                          ['a', ['f','g'], 'b', 'c', 'd', 'e']
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>Extend</td>
                      <td>Increase Size of List when Adding values</td>
                      <td>
                        <p>my_list.extend(['f','g'])</p>
                        <p>['a', 'b', 'c', 'd', 'e', 'f','g']</p>
                      </td>
                    </tr>
                    <tr>
                      <td>Replace</td>
                      <td>Replace values within a List</td>
                      <td>
                        <p>my_list[0] = 'f'</p>
                        <p>['f', 'b', 'c', 'd', 'e']</p>
                      </td>
                    </tr>
                    <tr>
                      <td>UnPacking</td>
                      <td>Extracting values from List to Variables</td>
                      <td>
                        <p>
                          val1, val2, val3, val4, val5 = my_list
                          <br />
                          print(val1, val2)
                        </p>
                        <p>a b</p>
                      </td>
                    </tr>
                    <tr>
                      <td>Copying 1 List to Another</td>
                      <td>
                        <p>
                          Creates links to values, does not create a new list.
                          If items change in my_list, my_second_list will also
                          reflect those changes (probably not desired result)
                        </p>
                        <p>
                          List Comprehension creates an enitrely new list with
                          the same values as the original
                        </p>
                      </td>
                      <td>
                        <p>
                          <span className="text-danger">
                            <i className="fas fa-times"></i>
                          </span>{" "}
                          my_second_list = my_list
                        </p>
                        <p>
                          <span className="text-success">
                            <i className="fas fa-check"></i>
                          </span>{" "}
                          my_second_list = [item for item in my_list]
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>Length</td>
                      <td>Return the number of elements in the List</td>
                      <td>
                        <p>
                          len(my_list)
                          <br />5
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>Count</td>
                      <td>
                        Return the number of Times Element is in the List
                        (repeat count)
                      </td>
                      <td>
                        <p>
                          my_list.count('a')
                          <br />1
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>Delete List Permanently</td>
                      <td>del my_list</td>
                      <td>
                        del my_list
                        <br />
                        print(my_list)
                        <p>NameError: name 'my_list' is not defined</p>
                      </td>
                    </tr>
                    <tr>
                      <td>Errors</td>
                      <td>
                        <p>print(my_list[5])</p>
                        <p>my_list[6] = 'f'</p>
                      </td>
                      <td>
                        <p>IndexError: list index out of range</p>
                        <p>IndexError: list assignment index out of range</p>
                      </td>
                    </tr>
                    <tr>
                      <td>Other Methods Available</td>
                      <td>dir(my_list)</td>
                      <td>
                        <p>
                          'append', 'clear', 'copy', 'count', 'extend', 'index',
                          'insert', 'pop', 'remove', 'reverse', 'sort'
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
        <Accordion.Item eventKey="6">
          <Accordion.Header>Dictionaries</Accordion.Header>
          <Accordion.Body>
            <div className="table-responsive text-start">
              <div>
                <table className="table table-striped table-dark text-white">
                  <thead>
                    <tr>
                      <th width="20%">Function</th>
                      <th width="40%">Usage</th>
                      <th width="40%">Result</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Dictionaries</td>
                      <td>
                        <p>mapping of key value pairs, Unordered, Mutable</p>
                        <p>
                          Creation of a list is done with{" "}
                          <span className="text-primary">{`{ , }`}</span> and items
                          are separated with commas.
                        </p>
                        <p>
                          Common Uses of Dictionaries are JSON Objects for
                          Database entries
                        </p>
                      </td>
                      <td>
                        <p>Most Common used data type for exchanging data</p>
                        <p className="text-primary">
                          my_dict ={" "}
                          {`{'key1': 'value1','key2': 'value2','key3': 'value3'}`}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Print Dictionary
                        <br />
                      </td>
                      <td>Print a Key Value Pair</td>
                      <td>
                        <p>
                          print(my_dict)
                          <br />
                          {`{'key1': 'value1', 'key2': 'value2', 'key3': 'value3'}`}
                        </p>
                        <p>
                          print(my_dict['key1'])
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
                          my_dict['new_key'] = 'new value'
                          <br />
                          {`{'key1': 'value1', 'key2': 'value2', 'key3': 'value3', 'new_key': 'new value'}`}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>Replace</td>
                      <td>Repalcing a Value in the Dictionary</td>
                      <td>
                        <p>
                          my_dict['key1'] = ['a','b','c']
                          <br />
                          {`{'key1': ['a','b','c'], 'key2': 'value2', 'key3': 'value3'}`}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>Remove</td>
                      <td>Removing Key Value Pair from the Dictionary</td>
                      <td>
                        <p>
                          del my_dict['key1']
                          <br />
                          {`{'key2': 'value2', 'key3': 'value3'}`}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>Insert</td>
                      <td>No need or method to insert</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <td>Copy Dictionary</td>
                      <td>
                        <p>
                          Creates links to values, does not create a new
                          dictionary. If items change in my_dict, my_second_dict
                          will also reflect those changes (probably not desired
                          result)
                        </p>
                        <p>
                          List Comprehension creates an enitrely new dictionary
                          with the same values as the original
                        </p>
                      </td>
                      <td>
                        <p>
                          my_dict2 ={" "}
                          {`{key:value for key,value in my_dict.items()}`}
                        </p>
                        <p>{`{'key2': 'value2', 'key3': 'value3', 'key1': 'value1'}`}</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Error
                        <br />
                        Key Doesn't exist
                      </td>
                      <td>print(my_dict['key4'])</td>
                      <td>KeyError: 'key4'</td>
                    </tr>
                    <tr>
                      <td>Other Methods Available</td>
                      <td>dir(my_dict)</td>
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
          <Accordion.Header>Tuples, Sets and Booleans</Accordion.Header>
          <Accordion.Body>
            <div className="table-responsive text-start">
              <div>
                <table className="table table-striped table-dark text-white">
                  <thead>
                    <tr>
                      <th>Function</th>
                      <th>Usage</th>
                      <th>Result</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Tuples</td>
                      <td>
                        <p>Immutable lists</p>
                        <p>
                          Creation of a list is done with,
                          <span className="text-primary">( , )</span> and items are
                          separated with commas.
                        </p>
                      </td>
                      <td>
                        <p className="text-primary">my_tuple = ('a','b','c')</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Printing
                        <br />
                      </td>
                      <td>Print values in Tuple</td>
                      <td>
                        <p>
                          print(my_tuple)
                          <br />
                          ('a', 'b', 'c')
                        </p>
                        <p>
                          print(my_tuple[0])
                          <br />a
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>Index Values</td>
                      <td>Find the position of a value within Tuple</td>
                      <td>
                        <p>
                          my_tuple.index('b')
                          <br />1
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>Length</td>
                      <td>Return the number of elements in the Tuple</td>
                      <td>
                        <p>
                          my_tuple.count('a')
                          <br />3
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>Count</td>
                      <td>
                        Return the number of Times Element is in the Tuple
                        (repeat count)
                      </td>
                      <td>
                        <p>
                          my_tuple.count('a')
                          <br />1
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>UnPacking</td>
                      <td>Extracting values from List to Variables</td>
                      <td>
                        <p>
                          val1, val2, val3 = my_tuple
                          <br />
                          print(val1, val2)
                          <br />a b
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>Add, Remove, Insert</td>
                      <td>Does Not Exist in Tuples</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <td>Error</td>
                      <td>Key Doesn't exist</td>
                      <td>
                        <p>
                          print(my_tuple[4])
                          <br />
                          IndexError: tuple index out of range
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>Other Methods Available</td>
                      <td>dir(my_tuple)</td>
                      <td>
                        <p>'count', 'index'</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <table className="table table-striped table-dark text-white">
                  <thead>
                    <tr>
                      <th>Function</th>
                      <th>Usage</th>
                      <th>Result</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Sets</td>
                      <td>
                        <p>Unordered collection of unique elements</p>
                      </td>
                      <td>
                        <p className="text-primary">
                          my_set = set([1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3,
                          3])
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>Print</td>
                      <td>Printing values in Sets</td>
                      <td>
                        <p>
                          print(my_set)
                          <br />
                          {(1, 2, 3)}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>Add Values</td>
                      <td>Adding Values to the Set</td>
                      <td>
                        <p>
                          my_set.add(4)
                          <br />
                          {(1, 2, 3, 4)}
                        </p>
                        <p>
                          my_set.update([4,5])
                          <br />
                          {(1, 2, 3, 4, 5)}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>Delete</p>
                        <p></p>
                      </td>
                      <td>
                        <p>Delete The First Value</p>
                        <p>Remove Specific Values</p>
                      </td>
                      <td>
                        <p>
                          my_set.pop()
                          <br />
                          {(2, 3)}
                        </p>
                        <p>
                          my_set.remove(1)
                          <br />
                          {(2, 3)}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>Length</td>
                      <td>Return the number of elements in the Set</td>
                      <td>
                        <p>
                          len(my_set)
                          <br />3
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>UnPacking</td>
                      <td>Extracting values from List to Variables</td>
                      <td>
                        <p>
                          val1, val2, val3 = my_set
                          <br />
                          print(val1, val2)
                          <br />1 2
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>Error</td>
                      <td>Cannot Print Individual values in the Set</td>
                      <td>
                        <p>
                          print(my_set[2])
                          <br />
                          TypeError: 'set' object is not subscriptable
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>Other Methods Available</td>
                      <td>dir(my_set)</td>
                      <td>
                        <p>
                          'add', 'clear', 'copy', 'difference',
                          'difference_update', 'discard', 'intersection',
                          'intersection_update', 'isdisjoint', 'issubset',
                          'issuperset', 'pop', 'remove', 'symmetric_difference',
                          'symmetric_difference_update', 'union', 'update'
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <table className="table table-striped table-dark text-white">
                  <thead>
                    <tr>
                      <td>Function</td>
                      <td>Value</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Booleans</td>
                      <td>Values are only 'True' or 'False'</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Accordion>
        <Accordion.Item eventKey="8">
          <Accordion.Header>Control Flow - If Else For While</Accordion.Header>
          <Accordion.Body>
            <div className="table-responsive text-start">
              <div>
                <table className="table table-striped table-dark text-white">
                  <thead>
                    <tr>
                      <th width="20%">Category</th>
                      <th width="40%">Functions</th>
                      <th width="40%">Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Comparison Operators</td>
                      <td>
                        <p>
                          <i className="fas fa-greater-than fa-xs"></i> Greater than
                        </p>
                        <p>
                          <i className="fas fa-less-than fa-xs"></i> Less Than
                        </p>
                        <p>
                          <i className="fas fa-greater-than fa-xs"></i>{" "}
                          <i className="fas fa-equals fa-xs"></i> Greater than or
                          Equal To{" "}
                        </p>
                        <p>
                          <i className="fas fa-less-than fa-xs"></i>{" "}
                          <i className="fas fa-equals fa-xs"></i> Less than or equal
                          to
                        </p>
                        <p>
                          <i className="fas fa-equals fa-xs"></i>
                          <i className="fas fa-equals fa-xs"></i>Equality
                        </p>
                        <p>
                          <i className="fas fa-exclamation fa-xs"></i>
                          <i className="fas fa-equals fa-xs"></i> Not equal
                        </p>
                        <p>and / or</p>
                      </td>
                      <td>
                        <p>a &gt; b</p>
                        <p>a &lt; b</p>
                        <p>a &gt;= b</p>
                        <p>a &lt;= b</p>
                        <p>a == b</p>
                        <p>a != b</p>
                        <p>( a &gt; b ) and ( b &gt; c )</p>
                        <p>( a &gt; b ) or ( b &gt; c )</p>
                      </td>
                    </tr>
                    <tr>
                      <td>Control Flow Statements and Loops</td>
                      <td>
                        <p>Defined by statement ending with a colon ' : '</p>
                        <p>
                          Comparison Operators used within Control Flow
                          Statement
                        </p>
                      </td>
                      <td>
                        <p>if</p>
                        <p>else</p>
                        <p>elif</p>
                        <p>for</p>
                        <p>while</p>
                      </td>
                    </tr>
                    <tr>
                      <td>Indentations</td>
                      <td>
                        <p>
                          Code block is indented or nested which means it
                          automatically belongs to the parent above it
                        </p>
                        <p>
                          Must be consistent (either spaces or tabs, but cannot
                          be both)
                        </p>
                      </td>
                      <td>
                        <p>if(True):</p>
                        <p>&nbsp;&emsp;print(a)</p>
                        <p>&emsp;print(b)</p>
                        <p>
                          TabError: inconsistent use of tabs and spaces in
                          indentation
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
                        <p>if (a &gt; b):</p>
                        <p>&emsp;print(a)</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>ELIF</p>(Optional)
                      </td>
                      <td>
                        Else If, Used Only with Preceding IF statement when the
                        IF condition is False and another case should be checked
                      </td>
                      <td>
                        <p>elif (a &lt; b):</p>
                        <p>&emsp;print(a)</p>
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
                        <p>else:</p>
                        <p>&emsp;print(a)</p>
                      </td>
                    </tr>
                    <tr>
                      <td>FOR Loop</td>
                      <td>
                        <p>Go through each element one at a time</p>
                        <p>
                          Python version is a For Each Element in Object do
                          something
                        </p>
                        <p>
                          Break point is the number of elements; built into the
                          declaration
                        </p>
                      </td>
                      <td>
                        <p>for item in my_list:</p>
                        <p>&emsp;print(item)</p>
                      </td>
                    </tr>
                    <tr>
                      <td>List Comprehension</td>
                      <td>
                        <p>
                          Filter out elements or create a copy of another list
                        </p>
                      </td>
                      <td>
                        <p>
                          items = [item for item in my_list if item &gt;= a]
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
                        <p>counter = 0</p>
                        <p>while counter &lt; 10:</p>
                        <p>&emsp;print(counter)</p>
                        <p>&emsp;counter += 1</p>
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
            <div className="table-responsive text-start">
              <table className="table table-striped table-dark text-white">
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Explanation</th>
                    <th>Example</th>
                  </tr>
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
                      <p>
                        def my_func():
                        <br />
                        &emsp;pass
                      </p>
                      <p>
                        def my_func(a,b):
                        <br />
                        &emsp;pass
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>Calling/Executing the Function</td>
                    <td>
                      <p>Function can be called multiple times</p>
                      <p>Can be exported/imported</p>
                    </td>
                    <td>
                      <p>my_func()</p>
                      <p>
                        my_func
                        <br />
                        function my_func at 0x10ee82598
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
                      <p>from file1 import my_func</p>
                      <p>from folder.file import my_func</p>
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
                      <p>def my_func()</p>
                      <p>&emsp;return True</p>
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
                      <p>new_list = list(map(lambda x: x * 2 , my_list))</p>
                      <p>
                        new_list = list(filter(lambda x: (x%2 == 0) , my_list))
                      </p>
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
                      <p>x = 'This is a Global Variable'</p>
                      <p>def my_func():</p>
                      <p>&emsp;x = 'This is a Local Variable'</p>
                      <p>&emsp;return x</p>
                      <p>... </p>
                      <p>print(my_func())</p>
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
            <div className="table-responsive text-start">
              <table className="table table-striped table-dark text-white">
                <thead>
                  <tr>
                    <th width="20%">Item</th>
                    <th width="40%">Explanation</th>
                    <th width="40%">Example</th>
                  </tr>
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
                      <p>In python Everything reverts back to an Object</p>
                      <p>Uses ProperCase for naming</p>
                      <p>Good News - We can Define anything we want to use</p>
                      <p>
                        Bad News - We have to define everything we want to use
                      </p>
                    </td>
                    <td>
                      <p>
                        class MyClass():
                        <br />
                        &emsp;pass
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>Initializing a Class</td>
                    <td>In order to use a Class it needs to be initialized</td>
                    <td>new_class = class MyClass()</td>
                  </tr>
                  <tr>
                    <td>Finding the type of an Object</td>
                    <td>
                      Use the Type Function to find out what the type of the
                      object is
                    </td>
                    <td>
                      <p>
                        type(new_class)
                        <br />
                        &lt;class '__main__.MyClass'&gt;
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>Attributes</td>
                    <td>Attributes are Variables in a Class</td>
                    <td>
                      <p>
                        class MyClass():
                        <br />
                        &emsp;def __init__(self, name):
                        <br />
                        &emsp;&emsp;self.name = name
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>Methods</td>
                    <td>Methods are Functions in a Class</td>
                    <td>
                      <p>
                        class MyClass():
                        <br />
                        &emsp;def greet(self, name):
                        <br />
                        {`&emsp;&emsp;return f"Hello {self.name}"`}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>Self</td>
                    <td>Refer to Attributes/Variables in the Class</td>
                    <td>
                      <p>__init__(self, name):</p>
                      <p>def greet(self, name):</p>
                    </td>
                  </tr>
                  <tr>
                    <td>Special Methods</td>
                    <td>
                      <p>Double UnderScore (Dunder)</p>
                      <p>
                        Meant to identify internal to class Functions, should
                        not be used outside of Class
                      </p>
                    </td>
                    <td>
                      <p>__init__(self, name):</p>
                    </td>
                  </tr>
                  <tr>
                    <td>Putting it all Together</td>
                    <td>A full Class Definition</td>
                    <td>
                      <p>
                        class MyClass():
                        <br />
                        &emsp;def __init__(self, name):
                        <br />
                        &emsp;&emsp;self.name = name
                        <br />
                        &emsp;def greet(self, name):
                        <br />
                        {`&emsp;&emsp;return f"Hello {self.name}"`}
                      </p>
                      <p>new_class = MyClass('John')</p>
                      <p>
                        print(new_class.greet())
                        <br />
                        Hello John
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>Printing</td>
                    <td>Must have __str__ or __repr__ method to print</td>
                    <td>
                      <p>
                        def __str__(self, name):
                        <br />
                        &emsp;return {`f'{self.name}'`}
                      </p>
                      <p>
                        print(new_class)
                        <br />
                        John
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
                        class MyClass:
                        <br />
                        &emsp;def __init__(self, name):
                        <br />
                        &emsp;&emsp;self.name = name
                        <br />
                        &emsp;def greet(self):
                        <br />
                        &emsp;&emsp;print(self.name)
                      </p>
                      <p>
                        class MyNewClass(MyClass):
                        <br />
                        &emsp;def __init__(self, name):
                        <br />
                        &emsp;&emsp;super().__init__(name)
                        <br />
                        &emsp;def welcome(self):
                        <br />
                        &emsp;&emsp;{`print(f"Welcome {self.name}")`}
                      </p>

                      <p>new_class = MyNewClass("John")</p>
                      <p>
                        new_class.welcome()
                        <br />
                        Welcome John
                      </p>
                      <p>
                        new_class.greet()
                        <br />
                        John
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Undefined Arguments -{" "}
                      <i className="fas fa-asterisk fa-xs"></i>args
                    </td>
                    <td>
                      <p>
                        We want to pass variables that haven't been defined yet
                      </p>
                      <p>
                        <i className="fas fa-asterisk fa-xs"></i>args get put into a
                        Tuple
                      </p>
                    </td>
                    <td>
                      <p>
                        class MyClass: &emsp;def __init__(self, *args):
                        <br />
                        &emsp;&emsp;self.args = args
                        <br />
                      </p>
                      <p>
                        def __str__(self):
                        <br />
                        &emsp;return {`f'{self.args}`}'
                      </p>
                      <p>
                        new_class = MyClass(1,2,3,'a','b','c')
                        <br />
                        print(new_class)
                      </p>
                      <p>(1, 2, 3, 'a', 'b', 'c')</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Undefined KeyWord Arguments -{" "}
                      <i className="fas fa-asterisk fa-xs"></i>
                      <i className="fas fa-asterisk fa-xs"></i>kwargs
                    </td>
                    <td>
                      <p>
                        We want to pass Key Word variables that haven't been
                        defined yet
                      </p>
                      <p>
                        <i className="fas fa-asterisk fa-xs"></i>
                        <i className="fas fa-asterisk fa-xs"></i>kwargs get put into
                        a Dictionary
                      </p>
                    </td>
                    <td>
                      <p>
                        class MyClass: &emsp;def __init__(self, **kwargs):
                        <br />
                        &emsp;&emsp;self.kwargs = kwargs
                        <br />
                      </p>
                      <p>
                        def __str__(self):
                        <br />
                        &emsp;return {`f'{self.kwargs}`}'
                      </p>
                      <p>
                        new_class = MyClass(key1='value1',
                        key2='value2',key3='value3')
                        <br />
                        print(new_class)
                      </p>
                      <p>{`{'key1': 'value1', 'key2': 'value2', 'key3': 'value3'}`}</p>
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
              <table className="table table-striped table-dark text-white">
                <thead>
                  <tr>
                    <th width="20%">Item</th>
                    <th width="40%">Explanation</th>
                    <th width="40%">Example</th>
                  </tr>
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
                      <p>import className</p>
                      <p>from file import ClassName</p>
                    </td>
                  </tr>
                  <tr>
                    <td>Example</td>
                    <td>
                      <p>2 Files</p>
                      <p>file1.py has desired function</p>
                      <p>file2.py has desired execution</p>
                    </td>
                    <td>
                      <p>
                        file1.py
                        <br />
                        -------------
                        <br />
                        def my_func(): &emsp;return f'Hello World'
                      </p>
                      <p>
                        file2.py
                        <br />
                        -------------
                        <br />
                        from file1.py import my_func
                        <br />
                        print(my_func())
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
            <div className="table-responsive text-start">
              <table className="table table-striped table-dark text-white">
                <thead>
                  <tr>
                    <th width="20%">Item</th>
                    <th width="40%">Explanation</th>
                    <th width="40%">Example</th>
                  </tr>
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
                      <p>Except</p>
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
                        try:
                        <br />
                        &emsp;try_block = 'Try block'
                        <br />
                        &emsp;print(try_block)
                        <br />
                        except:
                        <br />
                        &emsp;print('Error, the Try block failed')
                      </p>
                      <p>
                        <p>
                          Try block
                          <br />
                          Finally block runs no matter what
                        </p>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>Except</td>
                    <td>If the Try Block fails produce an error</td>
                    <td>
                      <p>
                        try:
                        <br />
                        &emsp;<s>try_block = 'Try block'</s>
                        <br />
                        &emsp;print(try_block)
                        <br />
                        except:
                        <br />
                        &emsp;print('Error, the Try block failed')
                      </p>
                      <p>
                        <p>Error, the Try block failed</p>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>Else</td>
                    <td>
                      If the Try Block is Successful and we want to run
                      additional things afterwards
                    </td>
                    <td>
                      <p>
                        try:
                        <br />
                        &emsp;try_block = 'Try block'
                        <br />
                        &emsp;print(try_block)
                        <br />
                        except:
                        <br />
                        &emsp;print('Error, the Try block failed')
                        <br />
                        else:
                        <br />
                        &emsp;else_block = 'Else Block'
                        <br />
                        &emsp;print(else_block)
                      </p>
                      <p>
                        Try block
                        <br />
                        Else Block
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>Finally</td>
                    <td>Runs no matter what at the end of the block</td>
                    <td>
                      <p>
                        try:
                        <br />
                        &emsp;try_block = 'Try block'
                        <br />
                        &emsp;print(try_block)
                        <br />
                        except:
                        <br />
                        &emsp;print('Error, the Try block failed')
                        <br />
                        else:
                        <br />
                        &emsp;else_block = 'Else Block'
                        <br />
                        &emsp;print(else_block)
                        <br />
                        finally:
                        <br />
                        &emsp;print('Finally block runs no matter what')
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
          <Accordion.Header>Regular Expressions</Accordion.Header>
          <Accordion.Body>
            <div className="table-responsive text-start">
              <table className="table table-striped table-dark text-white">
                <thead>
                  <tr>
                    <th width="20%">Item</th>
                    <th width="40%">Explanation</th>
                    <th width="40%">Example</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Regular Expressions</td>
                    <td>
                      <p>
                        Method to search based on sequence or pattern of
                        characters
                      </p>
                    </td>
                    <td>
                      <p>import re</p>
                      <p>
                        patterns = ['THIS_WORD']
                        <br />
                        text = 'This is a string with THIS_WORD and no other!'
                      </p>

                      <p>
                        for pattern in patterns:
                        <br />
                        &emsp;if re.search(pattern, text):
                        <br />
                        &emsp;&emsp;{`print(f'Matched on {pattern}')`}
                        <br />
                        Matched on THIS_WORD
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>Split</td>
                    <td>Split based on Delimiter</td>
                    <td>
                      <p>
                        delimiter = '@'
                        <br />
                        email = 'johndoe@gmail.com'
                      </p>
                      <p>
                        print(re.split(delimiter, email))
                        <br />
                        ['johndoe', 'gmail.com']
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>FindAll</td>
                    <td>
                      Finds all the matches within scope and returns a list
                    </td>
                    <td>
                      <p>
                        print(re.findall('match' , 'test phrase rematch in
                        matched middle'))
                        <br />
                        ['match', 'match']
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>Remove Punctuation</td>
                    <td>
                      test_phrase = 'This is a string! But it has punctuation.
                      How can we remove it?'
                    </td>
                    <td>
                      <p>
                        test_patterns = ['[^!.?]+']
                        <br />
                        ['This is a string', ' But it has punctuation', ' How
                        can we remove it']
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>Find all LowerCase Letters</td>
                    <td></td>
                    <td>
                      <p>
                        test_patterns = ['[a-z]+']
                        <br />
                        ['his', 'is', 'a', 'string', 'ut', 'it', 'has',
                        'punctuation', 'ow', 'can', 'we', 'remove', 'it']
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>Find all UpperCase Letters</td>
                    <td></td>
                    <td>
                      <p>
                        test_patterns = ['[A-Z]+']
                        <br />
                        ['T', 'B', 'H']
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>Digits</td>
                    <td>
                      test_phrase = 'This is a string with number 124214 and a
                      symbol #hashtag'
                    </td>
                    <td>
                      <p>
                        test_patterns = [r'\d+']
                        <br />
                        ['124214']
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>WhiteSpace</td>
                    <td></td>
                    <td>
                      <p>
                        test_patterns = [r'\s+']
                        <br />
                        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>Non-WhiteSpace</td>
                    <td></td>
                    <td>
                      <p>
                        test_patterns = [r'\S+']
                        <br />
                        ['This', 'is', 'a', 'string', 'with', 'number',
                        '124214', 'and', 'a', 'symbol', '#hashtag']
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>Non-Digits</td>
                    <td></td>
                    <td>
                      <p>
                        test_patterns = [r'\D+']
                        <br />
                        ['This is a string with number ', ' and a symbol
                        #hashtag']
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>All a-z and 0-9, no special symbols</td>
                    <td></td>
                    <td>
                      <p>
                        test_patterns = [r'\w+']
                        <br />
                        ['This', 'is', 'a', 'string', 'with', 'number',
                        '124214', 'and', 'a', 'symbol', 'hashtag']
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>All Non-a-z, A-Z, 0-9, Give me everything else</td>
                    <td></td>
                    <td>
                      <p>
                        test_patterns = [r'\W+']
                        <br />
                        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' #']
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
        <Accordion.Item eventKey="13">
          <Accordion.Header>Decorators</Accordion.Header>
          <Accordion.Body>
            <div className="table-responsive text-start">
              <table className="table table-striped table-dark text-white">
                <thead>
                  <tr>
                    <th width="20%">Item</th>
                    <th width="40%">Explanation</th>
                    <th width="40%">Example</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Decorators</td>
                    <td>
                      <p>
                        Wrapper functions that makes it easier to execute code
                        before and after the main code runs
                      </p>
                    </td>
                    <td>
                      Examples
                      <br />
                      <p>Benchmarking run-time of a function</p>
                      <p>Logging</p>
                      <p>Check Login credentials</p>
                    </td>
                  </tr>
                </tbody>
              </table>

              <div className="grid-2">
                <div className="jumbotron">
                  <p>
                    def new_decorator(func):
                    <br />
                    &emsp;def wrapper():
                    <br />
                    &emsp;&emsp;print('before')
                    <br />
                    &emsp;&emsp;func()
                    <br />
                    &emsp;&emsp;print('after')
                    <br />
                    &emsp;return wrapper
                    <br />
                  </p>
                  <p>
                    def needs_decorator():
                    <br />
                    print('hello')
                  </p>

                  <p>
                    needs_decorator = new_decorator(needs_decorator)
                    <br />
                    needs_decorator()
                  </p>
                  <p>
                    before
                    <br />
                    hello
                    <br />
                    after
                  </p>
                </div>

                <div className="jumbotron">
                  <p>
                    def new_decorator(func):
                    <br />
                    &emsp;def wrapper():
                    <br />
                    &emsp;&emsp;print('before')
                    <br />
                    &emsp;&emsp;func()
                    <br />
                    &emsp;&emsp;print('after')
                    <br />
                    &emsp;return wrapper
                    <br />
                  </p>
                  <p>
                    @new_decorator
                    <br />
                    def needs_decorator():
                    <br />
                    print('hello')
                  </p>
                  <p>needs_decorator()</p>
                  <p>
                    before
                    <br />
                    hello
                    <br />
                    after
                  </p>
                </div>
              </div>

              <div className="jumbotron">
                <p>import datetime</p>

                <p>
                  def new_decorator(func):
                  <br />
                  &emsp;def wrapper(*args, **kwargs):
                  <br />
                  &emsp;&emsp;start_time = datetime.datetime.now()
                  <br />
                  &emsp;&emsp;print(func.__name__)
                  <br />
                  &emsp;&emsp;func(*args, **kwargs)
                  <br />
                  &emsp;&emsp;end_time = datetime.datetime.now()
                  <br />
                  &emsp;&emsp;{`print(f'Run Time: {end_time - start_time}')`}
                  <br />
                  &emsp;return wrapper
                </p>

                <p>times = 500</p>

                <p>
                  @new_decorator
                  <br />
                  def first_function(times):
                  <br />
                  &emsp;out = []
                  <br />
                  &emsp;for i in range(times):
                  <br />
                  &emsp;&emsp;out.append(i)
                  <br />
                  &emsp;return out
                </p>

                <p>
                  @new_decorator
                  <br />
                  def second_function(times):
                  <br />
                  &emsp;out = [i for i in range(times)]
                  <br />
                  &emsp;return out
                </p>

                <p>
                  first_function(times)
                  <br />
                  second_function(times)
                </p>

                <p>
                  first_function
                  <br />
                  Run Time: 0:00:00.000174
                </p>
                <p>
                  second_function
                  <br />
                  Run Time: 0:00:00.000060
                </p>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Accordion>
        <Accordion.Item eventKey="14">
          <Accordion.Header>Testing Methodologies</Accordion.Header>
          <Accordion.Body>
            <div className="table-responsive text-start">
              <table className="table table-striped table-dark text-white">
                <thead>
                  <tr>
                    <th></th>
                    <th>Testing Methodologies</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Standalone Developer Testing Methods</td>
                    <td>
                      <p>Manually Check each page</p>
                      <p>Look for errors</p>
                      <p>No standardization</p>
                      <p>Limited to no documentation</p>
                    </td>
                  </tr>
                  <tr>
                    <td>Where we want to go</td>
                    <td>
                      <p>Automate Testing across entire Project</p>
                      <p>Log Errors</p>
                      <p>Standardized across the entire project</p>
                      <p>Documentation for all test cases</p>
                    </td>
                  </tr>
                  <tr>
                    <td>Python UnitTest</td>
                    <td>
                      <p>Python has a built in Testing Framework</p>
                      <p>
                        import unittest
                        <br />
                        class TheseAreOurTestCases(unittest.TestCase):
                        <br />
                        &emsp;def test_willFail(self):
                        <br />
                        &emsp;&emsp;self.assertEqual(True, False)
                        <br />
                        &emsp;def test_willPass(self):
                        <br />
                        &emsp;&emsp;self.assertEqual(False, False)
                        <br />
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
        <Accordion.Item eventKey="15">
          <Accordion.Header>Resources</Accordion.Header>
          <Accordion.Body>
            <div className="table-responsive text-start">
              <table className="table table-striped table-dark text-white">
                <tbody>
                  <tr>
                    <td>
                      <p>
                        <a
                          href="https://trinket.io/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Python Emulator
                        </a>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                        <a
                          href="https://realpython.com/python-pep8/#naming-styles"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Naming Conventions
                        </a>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                        <a
                          href="https://regex101.com/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Regex Tester
                        </a>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                        <a
                          href="https://www.datacamp.com/community/tutorials/decorators-python"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Decorators
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
