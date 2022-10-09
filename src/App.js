import { Layout } from "./components/Layout/Layout";
import {Routes, Route} from 'react-router-dom'
import {Home} from './components/Home/Home'
import { SelfPaced } from "./components/SelfPaced/SelfPaced";
import { Curriculum } from "./components/Curriculum/Curriculum";
import { ContactUs } from "./components/Contact/ContactUs";
import { Student } from "./components/Student/Student";
import { PreRequisites } from "./components/Student/PreRequisites/PreRequisites";
import { FrontEndPage } from "./components/Student/FrontEnd/FrontEndPage";
import { JavaScriptPage } from "./components/Student/JavaScript/JavaScriptPage";
import { PythonPage } from "./components/Student/Python/PythonPage";


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

          <Route exact path='/student/pythonpage' element={<PythonPage/>}/>
          <Route exact path='/student/javascriptpage' element={<JavaScriptPage/>}/>
          <Route exact path='/student/frontendpage' element={<FrontEndPage/>}/>
          

          <Route exact path='/contact' element={<ContactUs/>}/>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
