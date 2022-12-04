function signUp(payload: SignUpPayload): User {
  console.log("signUp", payload)

  return {
    name: "user",
    email: "user@gmail.com",
  }
}

function signIn(payload: SignInPayload): User {
  console.log("signIn", payload)

  return {
    name: "user",
    email: "user@gmail.com",
  }
}

function signCheck(): User {
  console.log("signCheck")

  return {
    name: "user",
    email: "user@gmail.com",
  }
}

function signOut(): void {
  console.log("signOut")
}

export type SignUpPayload = {
  name: string
  email: string
  password: string
}

export type SignInPayload = {
  email: string
  password: string
}

export type User = {
  name: string
  email: string
}

export default {
  signUp,
  signIn,
  signOut,
  signCheck,
}
