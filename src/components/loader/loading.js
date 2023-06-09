import React from 'react'
import loading from "../../assets/animations/loading.json"
import Lottie from "lottie-react"
import "./loading.css"


export const Loading = () => {
  return (
    <div className="loader">
    <Lottie animationData={loading} />
    </div>
  )
}
