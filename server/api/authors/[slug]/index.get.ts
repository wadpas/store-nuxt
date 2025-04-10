import { db } from '~/server/utils/db'

export default defineEventHandler(async (event) => {
  const author = await db.author.findUnique({
    where: {
      slug: event.context.params?.slug,
    },
  })
  return author
})
