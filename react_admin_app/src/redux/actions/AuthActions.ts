export enum AuthActionTypes{
    LOGIN_REQUEST = 'Login Request',
    LOGIN_REQUEST_SUCCESS = 'Login Request Success',
    USER_ERROR_OCCURRED = 'User Error Occurred',
    USER_LOGOUT = 'User Logout',
    SIGNUP_ACTION = 'Sign Up Action',
    START_LOADOING ='START_LOADOING',
    STOP_LOADOING ='STOP_LOADOING',
}

export class AuthAction {
    static LoginRequestAction = () => ({
        type: AuthActionTypes.LOGIN_REQUEST,
    });
    static LoginRequestSuccessAction = (user:any) => ({
        type: AuthActionTypes.LOGIN_REQUEST_SUCCESS,
        payload: user,
    });
    static UserErrorOccurred = (errorMessage:any) => ({
        type: AuthActionTypes.USER_ERROR_OCCURRED,
        payload:errorMessage
    });
    static UserLogoutAction = () => ({
        type: AuthActionTypes.USER_LOGOUT,
    });
    static SignUpAction = (user:any) => ({
        type: AuthActionTypes.SIGNUP_ACTION,
        payload: user,
    });
}