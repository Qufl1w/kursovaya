import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { db } from '@/lib/db'
import { users } from '@/lib/db/schema'
import { eq } from 'drizzle-orm'
import { cookies } from 'next/headers'

export async function POST(req: NextRequest) {
  const { email, password } = await req.json()

  const result = await db.select().from(users).where(eq(users.email, email))
  const user = result[0]

  if (!user) {
    return NextResponse.json({ error: 'Неверный email или пароль' }, { status: 401 })
  }

  const passwordMatch = await bcrypt.compare(password, user.password)
  if (!passwordMatch) {
    return NextResponse.json({ error: 'Неверный email или пароль' }, { status: 401 })
  }

  const cookieStore = await cookies()
  cookieStore.set('user', JSON.stringify({ id: user.id, name: user.name, email: user.email }), {
    httpOnly: true,
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  })

  return NextResponse.json({ success: true })
}