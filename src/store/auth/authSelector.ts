import { AuthState } from "./authSlice"

function selectAuthStatusFetch(state: AuthModule) {
  return state.auth.status
}

function selectAuth(state: AuthModule) {
  return state.auth.entities
}

export type AuthModule = {
  auth: AuthState
}

export { selectAuthStatusFetch, selectAuth }
