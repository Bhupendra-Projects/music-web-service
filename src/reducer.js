export const initalState = {
  user: null,
  playlist: [],
  playing: false,
  item: null,
  // token:
  //   "BQAX7OFQm7jdIMdi-upSkeuHj0aXna9SabKcPHLuhkyTUzn4Bt8tk6bev9fYl9O-qyiC2TV6Fx77i5b5glsAmCDRPHcRpmfX86X18HgXA9fC4XZU985HGihOCkCWgDVloCoIUCn_eIQbclvaoJOM8rWOT5MWq2MbIl2zzTx7ylqrFjmmmQPx",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLIST":
      return {
        ...state,
        playlist: action.playlist,
      };
      case "SET_DISCOVER_WEEKLY":
        return{
          ...state,
          discover_weekly:action.discover_weekly
        }
    default:
      return state;
  }
};

export default reducer;
