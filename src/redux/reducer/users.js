import { normalizedUsers } from '../../fixtures';
import { ADD_REVIEW } from '../constants';

const defaultUsers = normalizedUsers.reduce(
  (acc, user) => ({
    ...acc,
    [user.id]: user,
  }),
  {}
);

export default (users = defaultUsers, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_REVIEW: {
      return {
        ...users,
        [action.userId]: {
          id: action.userId,
          name: payload.user.name,
        },
      };
    }
    default:
      return users;
  }
};
