export enum ItemConfigKey {
  INJECTION_TOKEN = 'injection_token',
  CONTROL_VALUE_ACCESSOR = 'control_value_accessor',
}

export interface ItemConfig {
  key: ItemConfigKey;
  title: string;
  subtitle: string;
  image: string;
  content: string;
  route: string;
}

export const CONFIGS: ItemConfig[] = [
  {
    key: ItemConfigKey.INJECTION_TOKEN,
    title: 'Injection Token',
    subtitle: 'Simple Bridge Pattern Example',
    image: 'bridge-injection-token.png',
    content:
      'The example of how to implement pattern Bridge using Angular DI container within Injection Token approach',
    route: 'injection-token',
  },
  {
    key: ItemConfigKey.CONTROL_VALUE_ACCESSOR,
    title: 'Control Value Accessor',
    subtitle: 'An example how to create custom form control',
    image: 'value-accessor.png',
    content:
      'The example of how to create custom form control to use it within formControlName directive for both reactive and template driven froms',
    route: 'value-accessor',
  },
];
