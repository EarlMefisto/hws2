const initState = {
  themeId: 1,
};

export type ThemeState = typeof initState;

type ThemeAction = {
  type: "SET_THEME_ID";
  id: number;
};

export const themeReducer = (
  state: ThemeState = initState,
  action: ThemeAction
): ThemeState => {
  switch (action.type) {
    case "SET_THEME_ID":
      return {
        ...state,
        themeId: action.id,
      };
    default:
      return state;
  }
};

export const changeThemeId = (id: number): ThemeAction => ({
  type: "SET_THEME_ID",
  id,
});
