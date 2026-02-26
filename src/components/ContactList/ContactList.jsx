import { useSelector } from "react-redux";
import { selectContacts, selectLoading } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  const loading = useSelector(selectLoading);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <ul className={css.list}>
      {filteredContacts.length > 0 ? (
        filteredContacts.map((contact) => (
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
