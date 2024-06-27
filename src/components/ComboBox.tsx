import { ReactNode, forwardRef } from "react"
import { useMeasure } from "@uidotdev/usehooks";
import classNames from "classnames";
import {
  Button,
  Label,
  ListBox,
  ListBoxItem,
  Popover,
  Input,
  ComboBox as AriaComboBox,
  ListBoxItemProps,
  ComboBoxProps as AriaComboBoxProps,
  PopoverProps,
  ButtonProps,
  ListBoxProps,
  InputProps
} from 'react-aria-components';
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { TextInputProps } from "./TextInput";

export type ComboBoxItemProps = ListBoxItemProps & {
  label: string,
};

export type SelectProps<T extends object> = Omit<AriaComboBoxProps<T>, "children"> & {
  placeholder?: string,
  label?: string,
  items?: ComboBoxItemProps[]
  popoverProps?: PopoverProps,
  selectButtonProps?: Omit<ButtonProps, "className">,
  listBoxProps?: Omit<ListBoxProps<T>, "children">,
  textInputProps?: TextInputProps,
  prependItem?: ReactNode,
  appendItem?: ReactNode,
  selectIcon?: ReactNode,
}

function ComboBoxItem({ label, className, ...rest }: ComboBoxItemProps) {
  return (
    <ListBoxItem {...rest} className={classNames("p-3 w-full first-of-type:rounded-t-xl last-of-type:rounded-b-xl outline-none hover:bg-slate-300", className)}>
      {label}
    </ListBoxItem>
  )
}

const ComboBox = forwardRef<HTMLInputElement, SelectProps<InputProps>>(({
  className,
  items = [],
  label,
  popoverProps,
  selectButtonProps,
  listBoxProps,
  textInputProps,
  prependItem,
  appendItem,
  selectIcon,
  ...rest
}, ref) => {
  const [containerRef, { width }] = useMeasure();

  return (
    <AriaComboBox ref={containerRef} className={classNames("inline-flex flex-col min-w-60", className)} {...rest}>
      {!!label && (
        <Label>{label}</Label>
      )}
      <div
        className={
          classNames(
            "flex flex-row items-center w-full bg-slate-200 rounded-xl outline outline-transparent focus-within:outline-blue-600",
            textInputProps?.className
          )}>
        {prependItem && (
          <span className="inline-flex flex-column items-center justify-center h-full pl-3">{prependItem}</span>
        )}
        <Input ref={ref} {...textInputProps} className="inline-block outline-none bg-transparent h-12 p-3 flex-1 placeholder:text-slate-500 w-min" />
        {appendItem && (
          <span className="inline-flex flex-column items-center justify-center h-full">{appendItem}</span>
        )}
        <Button className={classNames("px-3", selectButtonProps)} {...selectButtonProps}>
          <span aria-hidden="true">
            {selectIcon || <ChevronDownIcon className="w-6 h-6 text-slate-600" />}
          </span>
        </Button>
      </div>
      <Popover style={{ width: width || 240 }} {...popoverProps}>
        <ListBox {...listBoxProps} className={classNames("bg-slate-200 text-slate-900 rounded-xl w-full h-64 overflow-y-scroll", listBoxProps?.className)}>
          {items.map((item, i) => (
            <ComboBoxItem
              key={`${i}-${item.label}`}
              {...item}
            />))}
        </ListBox>
      </Popover>
    </AriaComboBox>
  )
})

export default ComboBox;
