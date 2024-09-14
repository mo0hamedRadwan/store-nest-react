import { trans } from "@mongez/localization";
import {
  FormControlProps,
  matchRule,
  maxLengthRule,
  minLengthRule,
  requiredRule,
  useFormControl,
} from "@mongez/react-form";
import "./../input.css";
import "./../locales";
export default function PasswordInput(props: FormControlProps) {
  const { value, changeValue, id, error, otherProps } = useFormControl({
    rules: [requiredRule, minLengthRule, maxLengthRule, matchRule],
    ...props,
  });
  const getErrorMessage = () => {
    if (!error) return null;

    switch (error) {
      case "validation.required":
        return trans("required");
      case "validation.minLength":
        return trans("min");
      case "validation.maxLength":
        return trans("max");
      case "validation.match":
        return trans("matchPassword");
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
