import { Reducer, combineReducers } from "redux";
import { PersistConfig } from "redux-persist/es/types";
import storage from "redux-persist/lib/storage";
import filmReducer from "./slices/film";
import starshipsReducer from "./slices/starship";

const rootPersistConfig: PersistConfig<any> = {
  key: "root",
  storage,
  keyPrefix: "starwars-",
};

const rootReducer: Reducer = combineReducers({
  film: filmReducer,
  starships: starshipsReducer,
});

export { rootPersistConfig, rootReducer };
