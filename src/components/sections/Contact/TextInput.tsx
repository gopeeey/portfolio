import { HTMLInputTypeAttribute } from "react";

type Props = {
  label: string;
  type?: HTMLInputTypeAttribute;
  className?: string;
  textArea?: boolean;
};

export default function TextInput({
  label,
  type,
  className,
  textArea = false,
}: Props) {
  const classNameProp = `
            bg-transparent border-solid border-[1.9px] border-background 
            rounded-lg px-4 py-3 outline-none w-full placeholder:text-lighter_grey
            ${className}
        `;
  return textArea ? (
    <textarea className={classNameProp} placeholder={label} />
  ) : (
    <input type={type} className={classNameProp} placeholder={label} />
  );
}
