import { trans } from "@mongez/localization";
import {
  FormControlProps,
  requiredRule,
  useFormControl,
} from "@mongez/react-form";
import "./../input.css";
import "./../locales";
export default function TextInput(props: FormControlProps) {
  const { value, changeValue, id, error, otherProps } = useFormControl({
    rules: [requiredRule],
    ...props,
  });
  const getErrorMessage = () => {
    if (!error) return null;

    switch (error) {
      case "validation.required":
        return trans("required");
      default:
        return trans("required");
    }
  };
  return (
    <>
      <input
        className={`Input border-[#ececec] ${error && "border-red-300"}`}
        value={value}
        id={id}
        onChange={e => {
          changeValue(e.target.value);
        }}
        {...otherProps}
      />
      {error && (
        <span className="text-red-500 text-[13px] -mt-3">
          {getErrorMessage()}
        </span>
      )}
    </>
  );
}
