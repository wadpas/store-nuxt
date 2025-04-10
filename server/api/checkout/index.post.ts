import { Book } from '@prisma/client'
// import { stripe } from '~/server/utils/stripe'

export default defineEventHandler(async (event) => {
  const { books, user } = await readBody(event)

  if (!books) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Невірні дані',
    })
  }

  const order = await db.order.create({
    data: {
      booksIds: books.map((book: Book) => book.id),
      userId: user.id,
    },
  })

  const session = await stripe.checkout.sessions.create({
    line_items: books.map((book: Book) => {
      return {
        price_data: {
          currency: 'uah',
          product_data: {
            name: book.title,
          },
          unit_amount: book.price * 100,
        },
        quantity: 1,
      }
    }),
    mode: 'payment',
    success_url: 'http://localhost:3000/cart?sucess=1',
    cancel_url: 'http://localhost:3000/cart?canceled=1',
    metadata: {
      orderId: order.id,
    },
  })

  return session.url
})
