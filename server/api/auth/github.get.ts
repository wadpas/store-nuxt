import { db } from '~/utils/db'
import { sanitizeUser } from '~/utils/sanitize'

export default defineOAuthGitHubEventHandler({
  config: {
    emailRequired: true,
  },

  async onSuccess(event, { user }) {
    let currentUser = await db.user.findUnique({
      where: {
        email: user.email,
      },
    })

    if (!currentUser) {
      currentUser = await db.user.create({
        data: {
          email: user.email,
          username: user.email.split('@')[0],
          avatarUrl: user.avatar_url,
        },
      })
    }

    const oAuthAccount = await db.oAuthAccount.findFirst({
      where: {
        userId: currentUser.id,
      },
    })

    if (!oAuthAccount) {
      await db.oAuthAccount.create({
        data: {
          userId: currentUser.id,
          providerId: 'github',
          providerUserId: user.id + '',
        },
      })
    }

    const transformedUser = sanitizeUser(currentUser)

    await setUserSession(event, {
      user: transformedUser!,
    })
    return sendRedirect(event, '/')
  },

  onError(event, error) {
    console.error('GitHub OAuth error:', error)
    return sendRedirect(event, '/')
  },
})
