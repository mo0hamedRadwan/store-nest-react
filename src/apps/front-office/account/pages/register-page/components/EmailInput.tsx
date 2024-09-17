import { trans } from "@mongez/localization";
import {
  emailRule,
  FormControlProps,
  minLengthRule,
  requiredRule,
  useFormControl,
} from "@mongez/react-form";
import "./../input.css";
import "./../locales";
export default function EmailInput(props: FormControlProps) {
  const { value, changeValue, id, error, otherProps } = useFormControl({
    rules: [requiredRule, minLengthRule, emailRule],
    ...props,
  });
  const getErrorMessage = () => {
    if (!error) return null;

    switch (error) {
      case "validation.required":
        return trans("required");
      case "validation.email":
        return trans("invalidEmailAddress");
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
