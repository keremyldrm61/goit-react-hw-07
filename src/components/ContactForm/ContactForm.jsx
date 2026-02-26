import { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";
import css from "./ContactForm.module.css";

const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !number.trim()) {
      alert('Please fill in all fields!');
      return;
    }
    
    dispatch(addContact({ name: name.trim(), number: number.trim() }));
    setName('');
    setNumber('');
  };


  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label}>
        Name
        <input
          className={css.input}
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label className={css.label}>
        Number
        <input
          className={css.input}
          type="tel"
          name="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          required
        />
      </label>
      <button className={css.button} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
