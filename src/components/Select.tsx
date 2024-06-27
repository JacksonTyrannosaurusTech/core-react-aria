import { ReactNode, forwardRef } from "react"
import { useMeasure } from "@uidotdev/usehooks";
import classNames from "classnames";
import {
  Button,
  Label,
  ListBox,
  ListBoxItem,
  Popover,
  Select as AriaSelect,
  SelectValue,
  Text,
  ListBoxItemProps,
  SelectProps as AriaSelectProps,
  PopoverProps,
  ButtonProps,
  ListBoxProps
} from 'react-aria-components';
import { ChevronDownIcon } from "@heroicons/react/24/solid";

export type ListItemProps = ListBoxItemProps & {
  label: string,
  description?: string,
};

export type SelectProps<T extends object> = Omit<AriaSelectProps<T>, "children"> & {
  label?: string,
  items?: ListItemProps[]
  popoverProps?: PopoverProps,
  selectButtonProps?: Omit<ButtonProps, "className">,
  listBoxProps?: Omit<ListBoxProps<T>, "children">,
  prependItem?: ReactNode,
  appendItem?: ReactNode,
  selectIcon?: ReactNode,
}

function ListItem({ label, description, className, ...rest }: ListItemProps) {
  return (
    <ListBoxItem {...rest} className={classNames("p-3 w-full first-of-type:rounded-t-xl last-of-type:rounded-b-xl outline-none hover:bg-slate-300", className)}>
      <Text slot="label">{label}</Text>
      {!!description && <Text slot="description">{description}</Text>}
    </ListBoxItem>
  )
}

const Select = forwardRef<HTMLButtonElement, SelectProps<ButtonProps>>(({
  className,
  items = [],
  label,
  popoverProps,
  selectButtonProps,
  listBoxProps,
  prependItem,
  appendItem,
  selectIcon,
  ...rest
}, ref) => {
  const [containerRef, { width }] = useMeasure();

  return (
    <AriaSelect ref={containerRef} className={classNames("inline-flex flex-col min-w-60", className)} {...rest}>
      {!!label && (
          <Label>{label}</Label>
      )}
      <div>
        <Button ref={ref} className={classNames("flex flex-row items-center justify-between w-full bg-slate-200 rounded-xl h-12 outline outline-transparent focus:outline-blue-600 p-3", selectButtonProps)} {...selectButtonProps}>
          <span className="flex gap-2">
            {prependItem && (
              <span className="flex flex-column items-center justify-center h-full">{prependItem}</span>
            )}
            <SelectValue className={({isPlaceholder}) => isPlaceholder ? "text-slate-500" : "text-slate-900"} />
          </span>

          <span className="flex gap-2">
            {appendItem && (
              <span className="flex flex-column items-center justify-center h-full">{appendItem}</span>
            )}
            <span aria-hidden="true">
              {selectIcon || <ChevronDownIcon className="w-6 h-6 text-slate-600" />}
            </span>
          </span>
        </Button>
        <Popover style={{ width: width || 240 }} {...popoverProps}>
          <ListBox {...listBoxProps} className={classNames("bg-slate-200 text-slate-900 rounded-xl w-full h-64 overflow-y-scroll", listBoxProps?.className)}>
            {items.map((item, i) => (
              <ListItem
                key={`${i}-${item.label}`}
                {...item}
              />))}
          </ListBox>
        </Popover>
      </div>
    </AriaSelect>
  )
})

export default Select;
