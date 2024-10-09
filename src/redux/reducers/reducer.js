const initialData = {
  loading: true,
  data: {
    modeSwitch: {},
    header: {},
    hero: {},
    skills: [],
    profile: {},
    projects: [],
    footer: {},
  },
};

const reducer = (state = initialData, action) => {
  switch (action.type) {
    case "SET_DATA":
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.section]: action.payload.data,
          loading: false,
        },
      };
    default:
      return state;
  }
};

export default reducer;
