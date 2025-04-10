import { type User } from '@prisma/client'

export const sanitizeUser = (user: User) => {
  if (!user) return null

  user.password = ''

  return user
}
