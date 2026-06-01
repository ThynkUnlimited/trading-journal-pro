import { useState }
from "react"

import {
  signInWithEmailAndPassword
} from "firebase/auth"

import { auth }
from "../firebase/firebase"

import { useNavigate, Link }
from "react-router-dom"

function Login() {

  const navigate =
    useNavigate()

  const [email, setEmail] =
    useState("")

  const [password, setPassword] =
    useState("")

  const [loading, setLoading] =
    useState(false)

  const [error, setError] =
    useState("")

  async function handleLogin(e) {

    e.preventDefault()

    setLoading(true)

    setError("")

    try {

      await signInWithEmailAndPassword(
        auth,
        email,
        password
      )

      navigate("/dashboard")

    } catch (err) {

      setError(err.message)

    } finally {

      setLoading(false)
    }
  }

  return (

    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl p-8">

        <h1 className="text-3xl font-bold mb-6">

          Login

        </h1>

        <form
          onSubmit={handleLogin}
          className="space-y-4"
        >

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 outline-none"
          />

          {error && (

            <p className="text-red-500 text-sm">

              {error}

            </p>
          )}

          <button
            disabled={loading}
            className="w-full bg-green-500 hover:bg-green-600 transition rounded-xl py-3 font-bold text-black"
          >

            {loading
              ? "Logging in..."
              : "Login"}

          </button>

        </form>

        <p className="text-zinc-500 text-sm mt-6">

          No account?

          <Link
            to="/register"
            className="text-orange-500 ml-2"
          >

            Register

          </Link>

        </p>

      </div>

    </div>
  )
}

export default Login