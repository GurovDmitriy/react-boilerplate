import { createAsyncThunk } from "@reduxjs/toolkit"
import api from "../../api/api"
import { SignInPayload, SignUpPayload, User } from "../../api/auth/auth"

const signUpAction = createAsyncThunk<User, SignUpPayload>(
  "auth/signUpAction",
  async (payload) => {
    const response = await api.auth.signUp(payload)

    const data = {
      name: response.name,
      email: response.email,
    }

    return data as User
  }
)

const signInAction = createAsyncThunk<User, SignInPayload>(
  "auth/signInAction",
  async (payload) => {
    const response = await api.auth.signIn(payload)

    const data = {
      name: response.name,
      email: response.email,
    }

    return data as User
  }
)

const signCheckAction = createAsyncThunk<User>(
  "auth/signCheckAction",
  async () => {
    const response = await api.auth.signCheck()
    return response as User
  }
)

const signOutAction = createAsyncThunk("auth/signOutAction", async () => {
  await api.auth.signOut()
  return null
})

export { signInAction, signUpAction, signOutAction, signCheckAction }
