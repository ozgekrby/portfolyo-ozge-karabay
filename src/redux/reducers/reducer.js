const initialData = {
  lang: "tr",
  data: {
    modeSwitch: {},
    header: {},
    hero: {},
    skills: [],
    profile: {},
    projects: [],
    footer: {}
  }
};

const reducer = (state = initialData, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.section]: action.payload.data,
        },
      };
    case 'SELECT_LANG':
      return {
        ...state,
        lang: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
