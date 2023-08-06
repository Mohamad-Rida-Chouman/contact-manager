import './App.css';
import ContactList from './components/contactList/ContactList';
import ContactForm from './components/contactForm/ContactForm';

function App() {
  
  return (
    <div className="App flex">
      <ContactForm/>
      <ContactList/>
    </div>
  );
}

export default App;
