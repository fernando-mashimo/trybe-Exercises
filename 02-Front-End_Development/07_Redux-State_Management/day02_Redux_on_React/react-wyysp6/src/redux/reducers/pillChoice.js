const INITIAL_STATE = {
  id: '',
};

const selectedPill = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'id':
      return {
        id: state.id,
      };
    default:
      return state;
  }
};

export default selectedPill;
