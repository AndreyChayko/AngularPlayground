export enum ItemConfigKey {
  INJECTION_TOKEN = 'injection_token',
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
];
