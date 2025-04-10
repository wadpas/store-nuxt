import path from 'path'
import fs from 'fs'
import sharp from 'sharp'
import { db } from '~/server/utils/db'
import { toSlug, toUpSlug } from '~/utils/slug'

export default defineEventHandler(async (event) => {
  try {
    const files = await readMultipartFormData(event)
    const { bookName, authorIds } = getQuery(event)

    if (!files) {
      return createError({ statusCode: 400, statusMessage: 'No files uploaded' })
    }

    console.log(bookName)
    console.log(authorIds)

    // !!! authorIds is Array
    const author = await db.author.findFirst({
      where: {
        id: authorIds as string,
      },
    })

    console.log(author)

    const authorSlug = toSlug(author?.name as string)
    const authorUpSlug = toUpSlug(author?.name as string)
    const bookSlug = toSlug(author?.name as string)
    const bookUpSlug = toUpSlug(author?.name as string)

    const dir = path.join('public/books', files[0].name as string)

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir)
    }

    const bookPaths: string[] = []

    files.forEach((file, index) => {
      const { filename, data, type, name } = file

      if (!filename || !data || !type || !name) {
        return createError({ statusCode: 400, statusMessage: 'Invalid file' })
      }

      if (type.startsWith('image')) {
        try {
          const imageName = name + `_${index}.webp`
          sharp(data).resize(300, 450, { fit: 'fill' }).webp({ quality: 80 }).toFile(path.join(dir, imageName))
          bookPaths.push(imageName)
        } catch (error) {
          console.log(error)
        }
      } else {
        try {
          fs.writeFileSync(path.join(dir, filename), data)
          bookPaths.push(filename)
        } catch (error) {
          console.log(error)
        }
      }
    })

    return ['2']
  } catch (error) {
    console.log(error)
    return createError({ statusCode: 500, statusMessage: 'Something went wrong' })
  }
})
