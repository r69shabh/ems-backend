import { ENV } from '../core/env.config';

interface AuthConfig {
  CLIENT_ID: string;
  CLIENT_DOMAIN: string;
  AUDIENCE: string;
  REDIRECT: string;
  SCOPE: string;
  NAMESPACE: string;
};

export const AUTH_CONFIG: AuthConfig = {
  CLIENT_ID: 'sHe1SQCcJ3o1Vg7CuAz8ddXO9yDq4sYV',
  CLIENT_DOMAIN: 'dev-fmqe7ajp17nmk1gt.us.auth0.com', // e.g., kmaida.auth0.com
  AUDIENCE: 'http://localhost:8083/api/', // e.g., http://localhost:8083/api/
  REDIRECT: `${ENV.BASE_URI}/callback`,
  SCOPE: 'openid profile email',
  NAMESPACE: 'http://event-management-system.com/roles'
};
