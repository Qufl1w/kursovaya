import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { db } from '@/lib/db'
import { users } from '@/lib/db/schema'
import { eq } from 'drizzle-orm'

export async function POST(req: NextRequest) {
  const { name, email, password } = await req.json()

  if (!name || !email || !password) {
    return NextResponse.json({ error: 'Заполни все поля' }, { status: 400 })
  }

  // Проверяем есть ли уже такой email
  const existing = await db.select().from(users).where(eq(users.email, email))
  if (existing.length > 0) {
    return NextResponse.json({ error: 'Email уже занят' }, { status: 400 })
  }

  // Хэшируем пароль
  const hashedPassword = await bcrypt.hash(password, 10)

  // Записываем в базу
  await db.insert(users).values({ name, email, password: hashedPassword })

  return NextResponse.json({ success: true })
}