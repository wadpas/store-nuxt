import { db } from '~/server/utils/db'
import { authorSchema } from '~/utils/validations'
import type { User } from '@prisma/client'
import { toSlug } from '~/utils/slug'

export default defineEventHandler(async (event) => {
  const user = (await requireUserSession(event)).user as User

  if (user && user?.role === 'admin') {
    const { name } = await readValidatedBody(event, (body) => authorSchema.parse(body))
    const slug = toSlug(name)

    try {
      let author = await db.author.findUnique({
        where: { slug },
      })
      if (author) {
        throw new Error()
      }
      author = await db.author.create({
        data: {
          name,
          slug,
          creatorId: user.id,
        },
      })
      return author
    } catch (error) {
      throw createError({
        statusCode: 500,
        statusMessage: 'Помилка при створенні нового жанру',
      })
    }
  } else {
    throw createError({
      statusCode: 401,
      statusMessage: 'У доступі відмовлено. Ви не авторизовані як адміністратор',
    })
  }
})
