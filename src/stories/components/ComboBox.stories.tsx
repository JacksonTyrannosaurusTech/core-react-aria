import type { Meta, StoryObj } from '@storybook/react';
import ComboBox from '../../components/ComboBox';
import { BeakerIcon, FlagIcon } from '@heroicons/react/24/solid'
import { US_STATE_LIST } from '../../constants/usStateList';

const meta: Meta<typeof ComboBox> = {
  title: "Inputs/ComboBox",
  component: ComboBox,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    items: US_STATE_LIST.map(state => ({label: state})),
    label: "Label",
    placeholder: "Select an item"
  }
}

export default meta;
type Story = StoryObj<typeof ComboBox>

export const _ComboBox: Story = {}

export const _PrependIconSelect: Story = {
  args: {
    prependItem: <BeakerIcon className="w-6 text-slate-600" />,
  },
}

export const _AppendIconSelect: Story = {
  args: {
    appendItem: <BeakerIcon className="w-6 text-slate-600" />,
  },
}

export const _CustomIconSelect: Story = {
  args: {
    selectIcon: <FlagIcon className="w-6 text-slate-600" />,
  },
}
