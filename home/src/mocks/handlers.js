import { rest } from 'msw';
import { signinFun } from './controllers';

export const handlers = [rest.post('*/auth/signin', signinFun)];
