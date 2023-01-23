import { USER_ACTION_TYPES } from "./user.types";
import { createAction } from "../../utils/reducer/reducer.util";
import { UserData } from "../../utils/firebase/firebase.utils";

export const setCurrentUser = (user: UserData) =>
	createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);

export const checkUserSession = () =>
	createAction(USER_ACTION_TYPES.CHECK_USER_SESSION);

/**
 * Google/Email sign in
 */
export const googleSignInStart = () =>
	createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START);

export const emailSignInStart = (email: string, password: string) =>
	createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, { email, password });

export const signInSuccess = (user) =>
	createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user);

export const signInFailed = (error: Error) =>
	createAction(USER_ACTION_TYPES.SIGN_IN_FAILED, error);

/**
 * Sign up
 */
export const signUpStart = (
	email: string,
	password: string,
	displayName: string
) =>
	createAction(USER_ACTION_TYPES.SIGN_UP_START, {
		email,
		password,
		displayName,
	});

export const signUpSuccess = (user, additionalDetails) =>
	createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, {
		user,
		additionalDetails,
	});

export const signUpFailed = (error: Error) =>
	createAction(USER_ACTION_TYPES.SIGN_UP_FAILED, error);

/**
 * Sign out
 */
export const signOutStart = () =>
	createAction(USER_ACTION_TYPES.SIGN_OUT_START);

export const signOutSuccess = () =>
	createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS);

export const signOutFailed = (error: Error) =>
	createAction(USER_ACTION_TYPES.SIGN_OUT_FAILED, error);
