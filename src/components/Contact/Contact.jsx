import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

import css from "./Contact.module.css";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  }

  return (
    <li className={css.item}>
      <span className={css.name}>
        {contact.name}: {contact.number}
      </span>
      <button className={css.deleteBtn} type="button" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
