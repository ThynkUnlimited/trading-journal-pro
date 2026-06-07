import { useState } from "react"

import MainLayout from "../layouts/MainLayout"

import { useAuth } from "../context/AuthContext"
import { useTheme } from "../context/ThemeContext"

import { auth } from "../firebase/firebase"

import {
  updateProfile,
  updatePassword,
  sendPasswordResetEmail
} from "firebase/auth"

function Settings() {

  const { user } = useAuth()

  const {
    theme,
    setTheme
  } = useTheme()

  const [fullName, setFullName] = useState(
    user?.displayName || ""
  )

  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const [currency, setCurrency] = useState("USD")
  const [risk, setRisk] = useState("1")

  const handleProfileUpdate = async () => {

    try {

      await updateProfile(
        auth.currentUser,
        {
          displayName: fullName
        }
      )

      alert("Profile updated successfully")

    } catch (error) {

      console.error(error)
      alert(error.message)

    }

  }

  const handlePasswordChange = async () => {

    try {

      if (newPassword !== confirmPassword) {

        alert("Passwords do not match")
        return

      }

      await updatePassword(
        auth.currentUser,
        newPassword
      )

      alert("Password updated successfully")

      setCurrentPassword("")
      setNewPassword("")
      setConfirmPassword("")

    } catch (error) {

      console.error(error)

      alert(
        "For security reasons, Firebase may require you to log in again before changing your password."
      )

    }

  }

  const handleResetEmail = async () => {

    try {

      await sendPasswordResetEmail(
        auth,
        user.email
      )

      alert(
        `Password reset email sent to ${user.email}`
      )

    } catch (error) {

      console.error(error)
      alert(error.message)

    }

  }

  return (

    <MainLayout>

      <div className="space-y-6">

        {/* HEADER */}

        <div className="bg-white rounded-2xl border border-gray-200 p-6">

          <h1 className="text-[22px] font-bold text-gray-900">

            Settings

          </h1>

          <p className="text-[13px] text-gray-500 mt-1">

            Manage your account and application preferences

          </p>

        </div>

        {/* PROFILE */}

        <div className="bg-white rounded-2xl border border-gray-200 p-6">

          <h2 className="text-[16px] font-semibold text-gray-900 mb-5">

            Profile Information

          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            <div>

              <label className="block text-[12px] font-medium text-gray-700 mb-2">

                Full Name

              </label>

              <input
                type="text"
                value={fullName}
                onChange={(e) =>
                  setFullName(e.target.value)
                }
                className="w-full h-11 px-4 border border-gray-300 rounded-xl text-[12px]"
              />

            </div>

            <div>

              <label className="block text-[12px] font-medium text-gray-700 mb-2">

                Email Address

              </label>

              <input
                type="email"
                value={user?.email || ""}
                disabled
                className="w-full h-11 px-4 border border-gray-300 rounded-xl bg-gray-100 text-[12px]"
              />

            </div>

          </div>

          <button
            onClick={handleProfileUpdate}
            className="mt-5 px-5 h-11 rounded-xl bg-blue-600 text-white text-[12px] font-semibold hover:bg-blue-700"
          >

            Save Changes

          </button>

        </div>

        {/* SECURITY */}

        <div className="bg-white rounded-2xl border border-gray-200 p-6">

          <h2 className="text-[16px] font-semibold text-gray-900 mb-5">

            Security

          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

            <div>

              <label className="block text-[12px] font-medium text-gray-700 mb-2">

                Current Password

              </label>

              <input
                type="password"
                value={currentPassword}
                onChange={(e) =>
                  setCurrentPassword(e.target.value)
                }
                className="w-full h-11 px-4 border border-gray-300 rounded-xl text-[12px]"
              />

            </div>

            <div>

              <label className="block text-[12px] font-medium text-gray-700 mb-2">

                New Password

              </label>

              <input
                type="password"
                value={newPassword}
                onChange={(e) =>
                  setNewPassword(e.target.value)
                }
                className="w-full h-11 px-4 border border-gray-300 rounded-xl text-[12px]"
              />

            </div>

            <div>

              <label className="block text-[12px] font-medium text-gray-700 mb-2">

                Confirm Password

              </label>

              <input
                type="password"
                value={confirmPassword}
                onChange={(e) =>
                  setConfirmPassword(e.target.value)
                }
                className="w-full h-11 px-4 border border-gray-300 rounded-xl text-[12px]"
              />

            </div>

          </div>

          <div className="flex flex-wrap gap-3 mt-5">

            <button
              onClick={handlePasswordChange}
              className="px-5 h-11 rounded-xl bg-blue-600 text-white text-[12px] font-semibold hover:bg-blue-700"
            >

              Change Password

            </button>

            <button
              onClick={handleResetEmail}
              className="px-5 h-11 rounded-xl bg-amber-500 text-white text-[12px] font-semibold hover:bg-amber-600"
            >

              Send Reset Email

            </button>

          </div>

        </div>

        {/* TRADING PREFERENCES */}

        <div className="bg-white rounded-2xl border border-gray-200 p-6">

          <h2 className="text-[16px] font-semibold text-gray-900 mb-5">

            Trading Preferences

          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

            <div>

              <label className="block text-[12px] font-medium text-gray-700 mb-2">

                Currency

              </label>

              <select
                value={currency}
                onChange={(e) =>
                  setCurrency(e.target.value)
                }
                className="w-full h-11 px-4 border border-gray-300 rounded-xl text-[12px]"
              >

                <option>USD</option>
                <option>KES</option>
                <option>EUR</option>
                <option>GBP</option>

              </select>

            </div>

            <div>

              <label className="block text-[12px] font-medium text-gray-700 mb-2">

                Default Risk %

              </label>

              <input
                type="number"
                value={risk}
                onChange={(e) =>
                  setRisk(e.target.value)
                }
                className="w-full h-11 px-4 border border-gray-300 rounded-xl text-[12px]"
              />

            </div>

            <div>

              <label className="block text-[12px] font-medium text-gray-700 mb-2">

                Theme

              </label>

              <select
                value={theme}
                onChange={(e) =>
                  setTheme(e.target.value)
                }
                className="w-full h-11 px-4 border border-gray-300 rounded-xl text-[12px]"
              >

                <option value="light">
                  Light
                </option>

                <option value="dark">
                  Dark
                </option>

              </select>

            </div>

          </div>

          <button
            className="mt-5 px-5 h-11 rounded-xl bg-green-600 text-white text-[12px] font-semibold hover:bg-green-700"
          >

            Save Preferences

          </button>

        </div>

      </div>

    </MainLayout>

  )
}

export default Settings