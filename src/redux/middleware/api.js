import { FAILURE, REQUEST, SUCCESS } from '../constants';

export default (store) => (next) => async (action) => {
  if (!action.CallAPI && !action.PostAPI) return next(action);

  const { CallAPI, PostAPI, type, payload, ...rest } = action;

  next({ ...rest, type: type + REQUEST });

  if (CallAPI){
	  try {
	    const response = await fetch(CallAPI).then((res) => res.json());
	    next({ ...rest, type: type + SUCCESS, response });
	  } catch (error) {
	    next({ ...rest, type: type + FAILURE, error });
	  }
  }

  if (PostAPI){
	  try {
	    let xhr = new XMLHttpRequest();
		xhr.open('POST', PostAPI);
		xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
		xhr.send(JSON.stringify(payload));
		xhr.onload = (response) => next({ ...rest, type: type + SUCCESS, response });
	  } catch (error) {
	    next({ ...rest, type: type + FAILURE, error });
	  }
  }

};
