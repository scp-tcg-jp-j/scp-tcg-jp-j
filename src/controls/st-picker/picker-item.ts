import { IPersonaProps } from '@fluentui/react/lib/Persona';
export class PickerItem implements IPersonaProps {
  constructor(
    public key: string | number,
    public text: string,
    public backgroundColor: string,
    public color: string,
  ) {}
}
