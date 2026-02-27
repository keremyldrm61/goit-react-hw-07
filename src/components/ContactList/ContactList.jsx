import { useSelector } from "react-redux";
import { selectFilteredContacts, selectLoading } from "../../redux/contactsSlice";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectLoading);


  return (
    <ul className={css.list}>
      {contacts.length > 0 ? (
        contacts.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))
      ) : (
        !loading && (
          <p className={css.message}>No contacts found!</p>
        )
      )}
    </ul>
  );
};

export default ContactList;
