import classNames from "classnames";
import { HTMLAttributes } from "react";
import TextInput from "../components/TextInput";
import ComboBox from "../components/ComboBox";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Select from "../components/Select";
import { US_STATE_LIST } from "../constants/usStateList";
import Button from "../components/Button";
import { PressEvent } from "react-aria-components";
import { COUNTRIES_LIST } from "../constants/countryList";
import { MARTIAL_STATUS_LIST } from "../constants/martialStatusList";

export type LocationFormProps = HTMLAttributes<HTMLFormElement> & {
  onSkip: (e: PressEvent) => void,
  onBack: (e: PressEvent) => void,
  onNext: (e: PressEvent) => void,
}

function LocationForm({ className, onBack, onNext, onSkip, ...rest }: LocationFormProps) {
  return (
    <div className={classNames("bg-white border border-slate-200 rounded-3xl p-6 max-w-3xl shadow-sm", className)}>
      <form {...rest}>
        <div className="flex flex-col gap-6 ">
          <div>
            <h1 className="font-semibold text-xl">Where are you located?</h1>
          </div>
          <div>
            {/* TODO: Add progress */}
          </div>
          <div>
            <p className="text-sm text-slate-500">Kindly provide us with your current location information so that we can tailor our services or content to better suit your specific geographic context and offer a more personalized experience.</p>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <TextInput name="address" label="Address" placeholder="Enter Address" />
            <TextInput name="unit" label="Unit Or Apt Number" placeholder="Enter Unit or Apt" />
            <TextInput name="city" label="City" placeholder="Enter City" />
            <ComboBox name="country" label="Country" placeholder="Enter Country" items={COUNTRIES_LIST.map(state => ({ label: state }))} selectIcon={<MagnifyingGlassIcon className="w-6 text-slate-600" />} />
            <Select name="state" label="State" placeholder="Enter State" items={US_STATE_LIST.map(state => ({ label: state }))} />
            <TextInput name="zipcode" placeholder="Enter ZIP Code" label="ZIP Code" />
          </div>
          <div>
            <h3 className="text-base font-medium">Additional information</h3>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <Select name="martial-status" label="Marital Status" placeholder="Select" items={MARTIAL_STATUS_LIST.map(state => ({ label: state }))} />
            <TextInput name="annual-income" label="Annual Income (USD)" placeholder="Enter Income" />
          </div>
          <div className="flex justify-between pt-28">
            <div>
              <Button variant="ghost" onPress={onSkip}>Skip Step</Button>
            </div>
            <div className="flex gap-6">
              <Button variant="outline" onPress={onBack}>Back</Button>
              <Button onPress={onNext}>Next</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default LocationForm;