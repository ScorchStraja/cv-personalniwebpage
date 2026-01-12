import "../styles/classicinput.css";

export default function ClassicInput({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  name,
  id,
  error = false,
  errorMessage = "",
  multiline = false,
  rows = 4,
}) {
  const inputId = id || name || label?.toLowerCase()?.replace(/\s+/g, "-");
  const InputElement = multiline ? "textarea" : "input";

  return (
    <div className="classic_input">
      {label && (
        <label className="classic_input_label" htmlFor={inputId}>
          {label}
        </label>
      )}

      <InputElement 
        id={inputId}
        name={name}
        type={!multiline ? type : undefined}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`classic_input_input ${multiline ? "classic_textarea" : ""}`}
        aria-invalid={error}
        aria-describedby={error ? `${inputId}-error` : undefined}
        rows={multiline ? rows : undefined}
      />

       {error && errorMessage && (
        <span className="classic_input_error" id={`${inputId}-error`}>
          {errorMessage}
        </span>
      )}
    </div>
  );
}
