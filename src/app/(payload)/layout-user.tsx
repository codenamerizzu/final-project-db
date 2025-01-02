import React from 'react'
import Navbar from '../../../components/navbar'

const UserLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-800">
      <Navbar />
      {children}
    </div>
  )
}

export default UserLayout
