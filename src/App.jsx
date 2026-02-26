import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from './redux/contactsOps';
import { selectLoading, selectError } from './redux/contactsSlice';

import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import css from './App.module.css';

function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.app}>
      <h1 className={css.title}>PhoneBook</h1>
      
      {error && <div className={css.error}>Hata: {error}</div>}
      
      <ContactForm />

      <h2 className={css.subtitle}>Contacts</h2>
      <SearchBox />
      {loading && <div className={css.loading}>Contacts Loading...</div>}
      <ContactList />
    </div>
  );
}

export default App;