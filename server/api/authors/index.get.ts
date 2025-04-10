import { db } from '~/server/utils/db'

export default defineEventHandler(async (event) => {
  const authors = await db.author.findMany({
    orderBy: {
      name: 'asc',
    },
  })
  return authors
})
