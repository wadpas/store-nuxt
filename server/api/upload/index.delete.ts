import path from 'path'
import fs from 'fs'
import { db } from '~/server/utils/db'

export default defineEventHandler(async (event) => {
  const { fileName } = getQuery(event)

  console.log(fileName)
  return fileName
})
