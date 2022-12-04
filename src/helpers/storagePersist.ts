function getItemLS(key: LSKey): LSReturn {
  try {
    if (key) {
      return JSON.parse(localStorage.getItem(key) || "")
    }

    return null
  } catch (err) {
    console.error("Error get item from local storage", err)
  }
}

function setItemLS(key: LSKey, payload: LSPayload): LSPayload {
  try {
    let data = null

    if (key && payload) {
      localStorage.setItem(key, JSON.stringify(payload))
      data = payload
    }

    return data
  } catch (err) {
    console.error("Error set item to local storage", err)
  }
}

function removeItemLS(key: LSKey): LSReturn {
  try {
    let data = null

    if (key) {
      data = JSON.parse(localStorage.getItem(key) || "")
      localStorage.removeItem(key)
    }

    return data
  } catch (err) {
    console.error("Error remove item from local storage", err)
  }
}

function removeCredentialFromLS(): void {
  try {
    removeItemLS(Credential.credential)
  } catch (err) {
    console.error("Error remove item from local storage", err)
  }
}

function setCredentialToLS(payload: CredentialPayload): CredentialPayload {
  try {
    let credential = null

    if (payload?.token && payload?.tokenType) {
      credential = {
        token: payload.token,
        tokenType: payload.tokenType || Credential.Bearer,
      }

      setItemLS(Credential.credential, credential)
    }

    return credential
  } catch (err) {
    console.error("Error set credential to local storage", err)
  }
}

function getTokenAuthorizationFromLS(): Token {
  const credential: any = getItemLS(Credential.credential)
  const token = credential ? credential.token : null
  const tokenType = credential ? credential.tokenType : null

  return token ? `${tokenType || Credential.Bearer} ${token}` : ""
}

export type LSKey = string | null | undefined
export type LSPayload = string | object | null | undefined
export type LSReturn = string | object | null | undefined

export type CredentialPayload =
  | {
      token: string
      tokenType: string
    }
  | null
  | undefined

export type Token = string

export enum Credential {
  credential = "credential",
  Bearer = "Bearer",
}

export {
  getItemLS,
  setItemLS,
  removeItemLS,
  removeCredentialFromLS,
  setCredentialToLS,
  getTokenAuthorizationFromLS,
}
