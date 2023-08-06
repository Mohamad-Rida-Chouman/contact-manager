import './App.css';
// import ContactCard from './components/contactCard/ContactCard';
import ContactList from './components/contactList/ContactList';
import ContactForm from './components/contactForm/ContactForm';

function App() {
  
  return (
    <div className="App">
      <ContactForm/>
      <ContactList/>
    </div>
  );
}

export default App;
