import { useState } from "react"

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail
} from "firebase/auth"

import { auth } from "../firebase/firebase"

function Auth() {

  const [isRegister, setIsRegister] = useState(false)

  const [email, setEmail] = useState("")

  const [password, setPassword] = useState("")

  const [message, setMessage] = useState("")

  const handleSubmit = async (e) => {

    e.preventDefault()

    setMessage("")

    try {

      if (isRegister) {

        await createUserWithEmailAndPassword(
          auth,
          email,
          password
        )

      } else {

        await signInWithEmailAndPassword(
          auth,
          email,
          password
        )
      }

    } catch (error) {

      setMessage(error.message)
    }
  }

  const handleForgotPassword = async () => {

    if (!email) {

      return setMessage(
        "Enter your email first"
      )
    }

    try {

      await sendPasswordResetEmail(
        auth,
        email
      )

      setMessage(
        "Password reset email sent"
      )

    } catch (error) {

      setMessage(error.message)
    }
  }

  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">

        <h1 className="text-[24px] font-bold text-center text-gray-900 mb-2">

          Trading Journal

        </h1>

        <p className="text-[13px] text-gray-500 text-center mb-8">

          Professional Trade Tracking

        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <div>

            <label className="text-[13px] font-semibold text-gray-700">

              Email

            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-2 border border-gray-300 rounded-xl px-4 py-3 text-[14px] outline-none focus:border-blue-500"
              required
            />

          </div>

          <div>

            <label className="text-[13px] font-semibold text-gray-700">

              Password

            </label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-2 border border-gray-300 rounded-xl px-4 py-3 text-[14px] outline-none focus:border-blue-500"
              required
            />

          </div>

          {message && (

            <div className="text-[12px] text-red-500">

              {message}

            </div>

          )}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-3 text-[14px] font-semibold transition-all"
          >

            {isRegister
              ? "Create Account"
              : "Login"}

          </button>

        </form>

        <div className="flex items-center justify-between mt-6">

          <button
            onClick={() =>
              setIsRegister(!isRegister)
            }
            className="text-[12px] text-blue-600 font-medium"
          >

            {isRegister
              ? "Already have account?"
              : "Create account"}

          </button>

          <button
            onClick={handleForgotPassword}
            className="text-[12px] text-gray-500"
          >

            Forgot Password?

          </button>

        </div>

      </div>

    </div>
  )
}

export default Auth