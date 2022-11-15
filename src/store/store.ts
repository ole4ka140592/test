import {appReducer} from "./appReducer";
import {AnyAction, applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import thunk, {ThunkDispatch} from "redux-thunk";


const rootReducer = combineReducers({
    app: appReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk));
export const useAppDispatch = ()=> useDispatch<AppDispatch>()
export type AppRootStateType = ReturnType<typeof store.getState>;
export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AnyAction>;
export const useAppSelector: TypedUseSelectorHook<AppRootStateType>=useSelector
