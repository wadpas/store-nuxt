import { User } from '@prisma/client'
import { db } from '~/server/utils/db'
import { sanitizeUser } from '~/server/utils/sanitize'
import { authSchema } from '~/utils/validations'

export default defineEventHandler(async (event) => {
  const { email, password } = await readValidatedBody(event, (body) => authSchema.parse(body))

  let currentUser = await db.user.findUnique({
    where: {
      email,
    },
  })

  if (!currentUser) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Невірні облікові дані',
    })
  }

  if (!currentUser.password) {
    const userOAuthAccount = await db.oAuthAccount.findFirst({
      where: {
        userId: currentUser.id,
      },
    })
    if (userOAuthAccount) {
      const oAuthProvider = userOAuthAccount.providerId
      throw createError({
        statusCode: 400,
        statusMessage: `Please login with ${oAuthProvider}`,
      })
    }
  }

  if (currentUser.password) {
    const isPasswordCorrect = await verifyPassword(currentUser.password, password)
    if (!isPasswordCorrect) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Невірні облікові дані',
      })
    }
  }

  const sanitizedUser = sanitizeUser(currentUser)

  await setUserSession(event, {
    user: sanitizedUser as User,
  })
  return sanitizedUser
})
