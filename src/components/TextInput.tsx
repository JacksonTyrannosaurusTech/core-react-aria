import classNames from 'classnames';
import { ReactNode, forwardRef } from 'react';
import { TextField, Label, Input, TextFieldProps, InputProps, LabelProps, Text } from 'react-aria-components';

export type TextInputProps = InputProps & React.RefAttributes<HTMLInputElement> & {
  containerProps?: TextFieldProps,
  labelProps?: LabelProps,
  label?: string,
  prependItem?: ReactNode,
  appendItem?: ReactNode,
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(({
  className,
  containerProps,
  labelProps,
  label,
  prependItem,
  appendItem,
  ...rest
}, ref) => {
  return (
    <TextField {...containerProps} className={
      classNames(
        "inline-flex flex-col w-full",
        containerProps?.className
      )}>
        {label && (
        <Text slot="description" className={classNames(
          "font-medium text-black leading-6",
          labelProps?.className
        )}>{label}</Text>
      )}
      <Label className={classNames(className, "flex flex-row w-full bg-slate-200 rounded-xl h-12 outline outline-transparent focus-within:outline-blue-600")} {...labelProps}>
        {prependItem && (
          <span className="flex flex-column items-center justify-center h-full min-w-10">{prependItem}</span>
        )}
        <Input ref={ref} className={
          classNames(
            "bg-transparent p-3 flex-1 rounded-xl text-slate-900 placeholder:text-slate-500 min-w-60 outline-none",
            {
              "rounded-l-none pl-0": !!prependItem,
              "rounded-r-none pr-0": !!appendItem,
            }
            )} 
            {...rest} 
          />
        {appendItem && (
          <span className="flex flex-column items-center justify-center h-full min-w-10">{appendItem}</span>
        )}
      </Label>
    </TextField>
  )
});

export default TextInput