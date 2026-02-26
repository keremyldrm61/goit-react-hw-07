import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";

const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectNameFilter);

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <label className={css.label}>
      Find contacts by name
      <input
        className={css.input}
        type="text"
        value={filterValue}
        onChange={handleChange}
      />
    </label>
  );
};

export default Filter;
