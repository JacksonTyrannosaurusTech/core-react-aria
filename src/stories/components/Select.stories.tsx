import type { Meta, StoryObj } from '@storybook/react';
import Select from '../../components/Select';
import { BeakerIcon, FlagIcon } from '@heroicons/react/24/solid'
import { US_STATE_LIST } from '../../constants/usStateList';

const meta: Meta<typeof Select> = {
  title: "Inputs/Select",
  component: Select,
  args: {
    items: US_STATE_LIST.map(state => ({label: state})),
    label: "Label",
    placeholder: "Select an item"
  }
}

export default meta;
type Story = StoryObj<typeof Select>

export const _Select: Story = {}

export const _PrependIconSelect: Story = {
  render: (props) => <Select {...props} prependItem={<BeakerIcon className="w-6 text-slate-600" />} />
}

export const _AppendIconSelect: Story = {
  render: (props) => <Select {...props} appendItem={<BeakerIcon className="w-6 text-slate-600" />} />
}

export const _CustomIconSelect: Story = {
  render: (props) => <Select {...props} selectIcon={<FlagIcon className="w-6 text-slate-600" />} />
}