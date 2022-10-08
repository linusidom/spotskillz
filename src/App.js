import { Layout } from "./components/Layout/Layout";
import {Routes, Route, Navigate} from 'react-router-dom'
import {Home} from './components/Home/Home'
import { SelfPaced } from "./components/SelfPaced/SelfPaced";
import { Curriculum } from "./components/Curriculum/Curriculum";
import { ContactUs } from "./components/Contact/ContactUs";
import { Student } from "./components/Student/Student";
import { PreRequisites } from "./components/Student/PreRequisites/PreRequisites";
import { PythonNotes } from "./components/Student/Python/PythonNotes";
import { JavaScriptNotes } from "./components/Student/JavaScript/JavaScriptNotes";
import { FrontEndNotes } from "./components/Student/FrontEnd/FrontEndNotes";


function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/selfpaced' element={<SelfPaced/>}/>
          <Route exact path='/curriculum' element={<Curriculum/>}/>
          <Route exact path='/student' element={<Student/>}/>
          <Route exact path='/student/prerequisites' element={<PreRequisites/>}/>
          <Route exact path='/student/pythonnotes' element={<PythonNotes/>}/>
          <Route exact path='/student/javascriptnotes' element={<JavaScriptNotes/>}/>
          
          <Route exact path='/student/frontendnotes' element={<FrontEndNotes/>}/>
          <Route exact path='/student/frontend/htmlCheatSheet' element={<Navigate push to='/htmlcheatsheet.html'/>}/>
          

          <Route exact path='/contact' element={<ContactUs/>}/>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
