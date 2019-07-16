import { Property } from '@lib/app-core';

export interface PropertyState {
  loading: boolean | false;
  loaded: boolean | false;
  properties: Property[] | null;
}
