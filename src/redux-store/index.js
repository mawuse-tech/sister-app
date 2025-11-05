import { configureStore } from '@reduxjs/toolkit'
import registerReducer from './features/users/registerSlice'
import loginReducer from './features/users/loginSlice'
import logoutReducer from './features/users/logoutSlice'
import isUserLoggedIn from './features/users/userLoggedInSlice'
import volunteer from './features/users/volunteerSlice'
import quitVolunteerReducer from './features/users/quitVolunteeringSlice'
import allVolunteers from './features/users/allVolunteerSlice'
import fourVolunteerPerPage from './features/users/volunteerPerPageSlice'
import chatReducer from './features/users/chatSlice'
import chatPartnersReducer from './features/users/chatPartnersSlice'
import recentChatReducer from './features/users/recentChatSlice'

export const store = configureStore({
    reducer: {
        signup: registerReducer,
        login: loginReducer,
        logout: logoutReducer,
        isUserLoggedIn: isUserLoggedIn,
        volunteerDetails: volunteer,
        quitVolunteer: quitVolunteerReducer,
        volunteers: allVolunteers,
        volunteerPerPage: fourVolunteerPerPage,
        chat: chatReducer,
        chatPartnersData: chatPartnersReducer,
        recentChatData: recentChatReducer
    }
})