import type { Meta, StoryObj } from '@storybook/react';

import TextInput from '../components/TextInput';
import { BeakerIcon } from '@heroicons/react/24/solid'

const meta: Meta<typeof TextInput> = {
  title: "Inputs",
  component: TextInput,
  args: {
    label: "Label",
    placeholder: "Text Input"
  }
}

export default meta;
type Story = StoryObj<typeof TextInput>

export const _TextInput: Story = {}

export const _PrependIconTextInput: Story = {
  render: (props) => <TextInput {...props} prependItem={<BeakerIcon className="w-6 text-slate-600" />} />
}

export const _AppendIconTextInput: Story = {
  render: (props) => <TextInput {...props} appendItem={<BeakerIcon className="w-6 text-slate-600" />} />
}