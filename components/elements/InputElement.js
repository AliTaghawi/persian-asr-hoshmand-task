
const InputElement = ({name, label, value, onChange, type}) => {
  return (
    <div className="flex flex-col mb-4">
      <label htmlFor={name}>{label}:</label>
      <input
        className="block w-96 py-2 px-5 mt-2 border-sky-300 border-2 rounded-lg outline-none"
        name={name}
        id={name}
        type={type}
        placeholder={label}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputElement;
