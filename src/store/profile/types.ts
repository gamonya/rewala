import { Me } from '../../shared/interface/profile';

export interface ProfileState {
  data: Me | null;
  errors: any;
}
