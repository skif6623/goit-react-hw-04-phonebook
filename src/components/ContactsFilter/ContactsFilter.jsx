export const ContactsFilter = ({ filter, changeFilter }) => {
  return (
    <label>
      <input type="text" value={filter} onChange={changeFilter} />
    </label>
  );
};
