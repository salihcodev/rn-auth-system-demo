// login form interface:
export interface authLoginFormTypes {
  email: string | null;
  password: string | null;
}
// ==

// signup form interface:
export interface authSignupFormTypes {
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  password: string | null;
  confirmedPassword: string | null;
}
// ==

// user store data:
export interface userTypes {
  result: { _id: string; email: string; name: string; password: string };
  token: string;
}

export interface userStoreTypes {
  user: { user: userTypes; stage: string };
}
// ==
