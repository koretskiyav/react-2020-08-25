import { normalizedUsers } from '../../fixtures';
import { CREATE_REVIEW } from '../constants';

const defaultUsers = normalizedUsers.reduce(
  (acc, user) => ({ ...acc, [user.id]: user }),
  {}
);

export default (users = defaultUsers, action) => {
  const { type } = action;

  switch (type) {
    case CREATE_REVIEW: {
      const { userData } = action.payload;
      if (userData.id) {
        return users;
      }

      const newUsers = { ...users };
      const newUserId = action.newIds[1];
      newUsers[newUserId] = {
        id: newUserId,
        name: userData.name,
      };
      return newUsers;
    }
    default:
      return users;
  }
};
