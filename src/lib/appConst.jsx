export default Object.freeze({
  SCREEN: {
    HOME     : 0,
    REGISTER : 1
  },

  URL: {
    INDEX        : "/",
    HOME         : "/home",
    INPUT        : "/input",
    SEARCH       : "/search",
    TASK_SHOW    : "/task-show",
    REGISTER     : process.env.NEXT_PUBLIC_DIARY_DOMAIN + "/register",
    PROFILE      : process.env.NEXT_PUBLIC_DIARY_DOMAIN + "/profile",
    CATEGORY     : process.env.NEXT_PUBLIC_DIARY_DOMAIN + "/category",
    SEARCH       : process.env.NEXT_PUBLIC_DIARY_DOMAIN + "/search",
    SETTING      : process.env.NEXT_PUBLIC_DIARY_DOMAIN + "/setting",
    API_LOGIN    : process.env.NEXT_PUBLIC_DIARY_DOMAIN + "/api/login/login",
    API_LOGOUT   : process.env.NEXT_PUBLIC_DIARY_DOMAIN + "/api/login/logout",
    API_CALLBACK : process.env.NEXT_PUBLIC_DIARY_DOMAIN + "/api/login/callback",
    API_MEMO     : process.env.NEXT_PUBLIC_DIARY_DOMAIN + "/api/memo",
    API_ME       : process.env.NEXT_PUBLIC_DIARY_DOMAIN + "/api/login/me",
  },

  REGISTER_DATA: {
    DATE     : "memo_date",
    MEMO     : "memo",
    CATEGORY : "category_id"
  },

  SEARCH_DATA: {
    DATE_FROM  : "date_from",
    DATE_TO    : "date_to",
    KEYWORD    : "keyword",
    CATEGORY   : "category"
  },

  CATEGORY_DEFAULT: {
    KEY   : 0,
    VALUE : "メモ"
  },

  SCREEN_TITLE: {
    REGISTER : "メモ登録",
    CALENDAR : "カレンダー"
  },

  BUTTON_TITLE: {
    REGISTER : "登録"
  },
  
  HTTP_METHOD: {
    GET     : "GET",
    POST    : "POST",
    PUT     : "PUT",
    DELETE  : "DELETE",
  },

  ACTION_TYPE: {
    SET_USER : "SET_USER",
  },
});