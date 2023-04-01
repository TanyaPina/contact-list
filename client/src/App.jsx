import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavBar from './components/Navbar'
import ListStudents from './components/ListStudents'
import CreateContact from './components/CreateContact'
import Contacts from './components/Contacts'


function Home() {

  return (
    <div className="App">
      <MyNavBar />
      {/*<ListStudents />*/}
      <Contacts/>
      {/*<CreateContact/>*/}
    </div>
  )
}

export default Home
