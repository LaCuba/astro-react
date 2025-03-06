import { Switch as UiSwitch } from "@/components/ui/switch";
import type { SwitchProps as UiSwitchProps } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useId } from "react";

export type SwitchProps = {
  id?: string;
  label?: string;
} & UiSwitchProps;

export function Switch({ label, ...props }: SwitchProps) {
  const localId = useId();

  const id = props.id ?? localId;

  return (
    <div className="flex items-center space-x-2">
      <UiSwitch {...props} id={id} />
      {label && <Label htmlFor={id}>{label}</Label>}
    </div>
  );
}
