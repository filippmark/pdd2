import * as SignIn from "./signIn";
import * as SignUp from "./signUp";

export interface ApplicationState {
  signIn: SignIn.SignInState;
  signUp: SignUp.SignUpState;
}

export const reducers = {
  signUp: SignUp.reducer,
  signIn: SignIn.reducer,
};
