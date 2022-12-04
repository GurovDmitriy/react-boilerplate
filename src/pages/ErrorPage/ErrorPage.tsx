import { Link, useRouteError } from "react-router-dom"

function ErrorPage() {
  const error: any = useRouteError()
  console.error(error)

  const errorMessage = renderErrorMessage()

  function renderErrorMessage() {
    let message = null

    if (error && error.statusText) {
      message = error.statusText
    } else if (error && error.message) {
      message = error.message
    } else {
      message = "unknown error"
    }

    return message
  }

  return (
    <div id="error-page" className="error-page">
      <h1 className="error-page__caption">Oops!</h1>
      <p className="error-page__description">
        Sorry, an unexpected error has occurred.
      </p>
      <p className="error-page__error-content">{errorMessage}</p>
      <Link to="/">Go Home</Link>
    </div>
  )
}

export default ErrorPage
