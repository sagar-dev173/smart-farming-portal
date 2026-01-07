import React from 'react'

const ErrorBox = () => {
  return (
    <div className="bg-red-200 text-red-800 p-3 rounded">
      {message || "Something went wrong"}
    </div>
  )
}

export default ErrorBox
