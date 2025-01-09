interface Property {
  id: string;
  name: string;
  value: string | number | boolean | string[];
  type: string;
}

interface Setting {
  id: string;
  name: string;
  value: string;
  type: string;
}

export interface Config {
  connectorName: string;
  connectorVersion: string;
  models: string[];
  description: string;
  author: string;
  properties: Property[];
  settings: Setting[];
  iconBase64: string;
}

export const config: Config;
