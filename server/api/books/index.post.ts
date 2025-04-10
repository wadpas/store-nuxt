import { db } from '~/server/utils/db'
import { bookSchema } from '~/utils/validations'
import type { User } from '@prisma/client'
import { toSlug } from '~/utils/slug'

export default defineEventHandler(async (event) => {
  const user = (await requireUserSession(event)).user as User

  if (user && user?.role === 'admin') {
    const { title, description, year, pages, genreIds, coverPaths, authorIds, price, isFeatured, isAvailable } =
      await readValidatedBody(event, (body) => bookSchema.parse(body))
    const slug = toSlug(title)

    try {
      let book = await db.book.findUnique({
        where: { slug },
      })
      if (book) {
        throw createError({
          statusCode: 500,
          statusMessage: 'Книга вже існує',
        })
      }
      book = await db.book.create({
        data: {
          title: title.trim(),
          slug,
          description,
          coverPaths,
          year,
          pages,
          genreIds,
          authorIds,
          filePaths: [],
          price,
          creatorId: user.id,
          isFeatured,
          isAvailable,
        },
      })
      return book
    } catch (error) {
      console.log(error)

      throw createError({
        statusCode: 500,
        statusMessage: 'Помилка при створенні нової книги',
      })
    }
  } else {
    throw createError({
      statusCode: 401,
      statusMessage: 'У доступі відмовлено. Ви не авторизовані як адміністратор',
    })
  }
})
