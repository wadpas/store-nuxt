import { db } from '~/server/utils/db'
import type { User } from '@prisma/client'
import { authSchema } from '~/utils/validations'

export default defineEventHandler(async (event) => {
  const { email, password } = await readValidatedBody(event, (body) => authSchema.parse(body))

  let currentUser = await db.user.findUnique({
    where: {
      email,
    },
  })

  if (currentUser) {
    throw createError({
      statusCode: 400,
      statusMessage: `Користувач з поштою ${email} вже існує`,
    })
  }

  const hashedPassword = await hashPassword(password)

  currentUser = await db.user.create({
    data: {
      email,
      username: email.split('@')[0],
      password: hashedPassword,
    },
  })

  const sanitizedUser = sanitizeUser(currentUser)

  await setUserSession(event, {
    user: sanitizedUser as User,
  })
  return sanitizedUser
})
