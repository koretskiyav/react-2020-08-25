import { normalizedUsers } from '../../fixtures';
import { ADDREVIEW } from '../constants';

const defaultUsers = normalizedUsers.reduce(
  (acc, user) => ({ ...acc, [user.id]: user }),
  {}
);

export default (users = defaultUsers, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADDREVIEW:
      // Check for empty username/text (nothing will be added)
      if (payload.values.name === '' || payload.values.text === '')
        return users;
      return {
        ...users,
        [payload.values.userId]: {
          id: payload.values.userId,
          name: payload.values.name,
        },
      };

    default:
      return users;
  }
};
