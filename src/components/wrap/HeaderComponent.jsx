import React from 'react'
import { Outlet } from 'react-router-dom';

export default function HeaderComponent() {
  return (
    <>
      <header id="header">
        <h1>header</h1>
      </header>
      <Outlet />
    </>
  )
}