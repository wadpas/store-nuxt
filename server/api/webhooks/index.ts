import Stripe from 'stripe'

export default defineEventHandler(async (event) => {
  const signature = getHeader(event, 'stripe-signature') as string
  const body = (await readRawBody(event)) as string

  let stripeEvent: Stripe.Event

  try {
    stripeEvent = stripe.webhooks.constructEvent(body, signature, useRuntimeConfig().stripeWebhookSecret)
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Невірні дані',
    })
  }

  const session = stripeEvent.data.object as Stripe.Checkout.Session
  console.log(session)

  const address = session.customer_details?.address
  const addressComponents = [address?.country, address?.city, address?.line1, address?.line2]
  const addressString = addressComponents.filter((c) => c != null).join(', ')

  if (stripeEvent.type === 'checkout.session.completed') {
    await db.order.update({
      where: {
        id: session.metadata?.orderId,
      },
      data: {
        isPaid: true,
      },
      include: {
        books: true,
      },
    })
  }
})
