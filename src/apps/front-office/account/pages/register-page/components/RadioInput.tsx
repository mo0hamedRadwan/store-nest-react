import { useRadioInput } from "@mongez/react-form";
import "./../input.css";
export default function RadioInput({
  value,
  children,
  id, // Receive id as a prop
}: {
  value: any;
  children: React.ReactNode;
  id?: string;
}) {
  const { isSelected, changeValue } = useRadioInput(value);
  const inputId = id || value; // if not passed id take a value
  // I made some minor modifications to be able to implement the required style.
  return (
    <>
      <input
        type="radio"
        id={inputId}
        checked={isSelected}
        onChange={changeValue}
        className="hidden"
      />
      <label htmlFor={inputId} className="check-label">
        {children}
      </label>
    </>
  );
}
