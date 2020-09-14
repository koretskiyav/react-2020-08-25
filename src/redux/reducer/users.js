import { normalizedUsers } from '../../fixtures';
import { ADDREVIEW } from '../constants';

const defaultUsers = normalizedUsers.reduce(
  (acc, user) => ({ ...acc, [user.id]: user }),
  {}
);

export default (users = defaultUsers, action) => {
  const { type } = action;

  switch (type) {
    case ADDREVIEW:
      let { userId: id, name } = action.review;
      return {
        ...users,
        [id]: { id: id, name },
      };
    default:
      return users;
  }
};
