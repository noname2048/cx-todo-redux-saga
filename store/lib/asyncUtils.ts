export const createPromiseThunk = (type: string, promiseCreator: Function) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
  return (param: any) => async (dispatch: Function) => {
    dispatch({ type, param });
    try {
      const payload = await promiseCreator(param);
      dispatch({ type: SUCCESS, payload });
    } catch (e) {
      dispatch({ type: ERROR, payload: e, error: true });
    }
  };
};

export const reducerUtils = {
  initial: (data = null) => ({
    loading: false,
    data,
    error: null,
  }),
  loading: (prevState = null) => ({
    loading: true,
    data: prevState,
    error: null,
  }),
  success: (payload: any) => ({
    loading: false,
    data: payload,
    error: null,
  }),
  error: (error: any) => ({
    loading: false,
    data: null,
    error,
  }),
};
