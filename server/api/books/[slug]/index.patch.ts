import { db } from '~/server/utils/db'
import { bookSchema } from '~/utils/validations'
import type { User } from '@prisma/client'
import { toSlug } from '~/utils/slug'

export default defineEventHandler(async (event) => {
  const user = (await requireUserSession(event)).user as User

  if (user && user?.role === 'admin') {
    const {
      title,
      description,
      coverPaths,
      filePaths,
      year,
      pages,
      genreIds,
      authorIds,
      price,
      isFeatured,
      isAvailable,
    } = await readValidatedBody(event, (body) => bookSchema.parse(body))

    const slug = toSlug(title)

    try {
      const book = await db.book.update({
        where: {
          slug: event.context.params?.slug,
        },
        data: {
          title,
          slug,
          description,
          coverPaths,
          filePaths,
          year,
          pages,
          genreIds,
          authorIds,
          price,
          isFeatured,
          isAvailable,
        },
      })
      return book
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
