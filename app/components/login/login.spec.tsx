import { render } from '@testing-library/react';

import Login from 'libs/shared/src/lib/pages/login/login';

describe('Login', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Login />);
    expect(baseElement).toBeTruthy();
  });
});
