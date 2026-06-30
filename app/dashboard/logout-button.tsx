'use client'

export default function LogoutButton() {
  const handleLogout = async () => {
    await fetch('/api/logout', { method: 'POST' })
    window.location.href = '/'
  }

  return (
    <button
      onClick={handleLogout}
      style={{ fontSize: 16, color: '#888', background: 'none', border: 'none', cursor: 'pointer' }}
    >
      Выйти
    </button>
  )
}