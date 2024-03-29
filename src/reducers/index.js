import { combineReducers } from "redux"
import { registration } from "./register.reducer"
import { authentication } from "./login.reducer"
import { alert } from "./alert.reducer"
import events from "../reducers/events.reducer"
import loading from "../reducers/loading.reducer"
import myEvents from "../reducers/myEvents.reducer"
import newEvent from "../reducers/newEvent.reducer"
import editEvent from "../reducers/editEvent.reducer"
import searchEvent from "../reducers/searchEvent.reducer"
import event from "../reducers/event.reducer"

const rootReducer = combineReducers({
	registration,
	authentication,
	alert,
	loading,
	event,
	events,
	myEvents,
	newEvent,
	editEvent,
	searchEvent
})
export default rootReducer
