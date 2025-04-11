declare global {
  const __buildAssetsURL: typeof import('../../node_modules/nuxt/dist/core/runtime/nitro/utils/paths')['buildAssetsURL']
  const __publicAssetsURL: typeof import('../../node_modules/nuxt/dist/core/runtime/nitro/utils/paths')['publicAssetsURL']
  const appendCorsHeaders: typeof import('../../node_modules/h3')['appendCorsHeaders']
  const appendCorsPreflightHeaders: typeof import('../../node_modules/h3')['appendCorsPreflightHeaders']
  const appendHeader: typeof import('../../node_modules/h3')['appendHeader']
  const appendHeaders: typeof import('../../node_modules/h3')['appendHeaders']
  const appendResponseHeader: typeof import('../../node_modules/h3')['appendResponseHeader']
  const appendResponseHeaders: typeof import('../../node_modules/h3')['appendResponseHeaders']
  const assertMethod: typeof import('../../node_modules/h3')['assertMethod']
  const cachedEventHandler: typeof import('../../node_modules/nitropack/dist/runtime/internal/cache')['cachedEventHandler']
  const cachedFunction: typeof import('../../node_modules/nitropack/dist/runtime/internal/cache')['cachedFunction']
  const callNodeListener: typeof import('../../node_modules/h3')['callNodeListener']
  const clearResponseHeaders: typeof import('../../node_modules/h3')['clearResponseHeaders']
  const clearSession: typeof import('../../node_modules/h3')['clearSession']
  const clearUserSession: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/utils/session')['clearUserSession']
  const createApp: typeof import('../../node_modules/h3')['createApp']
  const createAppEventHandler: typeof import('../../node_modules/h3')['createAppEventHandler']
  const createError: typeof import('../../node_modules/h3')['createError']
  const createEvent: typeof import('../../node_modules/h3')['createEvent']
  const createEventStream: typeof import('../../node_modules/h3')['createEventStream']
  const createRouter: typeof import('../../node_modules/h3')['createRouter']
  const db: typeof import('../../server/utils/db')['db']
  const defaultContentType: typeof import('../../node_modules/h3')['defaultContentType']
  const defineAppConfig: typeof import('../../node_modules/nuxt/dist/core/runtime/nitro/utils/config')['defineAppConfig']
  const defineCachedEventHandler: typeof import('../../node_modules/nitropack/dist/runtime/internal/cache')['defineCachedEventHandler']
  const defineCachedFunction: typeof import('../../node_modules/nitropack/dist/runtime/internal/cache')['defineCachedFunction']
  const defineEventHandler: typeof import('../../node_modules/h3')['defineEventHandler']
  const defineLazyEventHandler: typeof import('../../node_modules/h3')['defineLazyEventHandler']
  const defineNitroErrorHandler: typeof import('../../node_modules/nitropack/dist/runtime/internal/error/utils')['defineNitroErrorHandler']
  const defineNitroPlugin: typeof import('../../node_modules/nitropack/dist/runtime/internal/plugin')['defineNitroPlugin']
  const defineNodeListener: typeof import('../../node_modules/h3')['defineNodeListener']
  const defineNodeMiddleware: typeof import('../../node_modules/h3')['defineNodeMiddleware']
  const defineOAuthAppleEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/apple')['defineOAuthAppleEventHandler']
  const defineOAuthAtlassianEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/atlassian')['defineOAuthAtlassianEventHandler']
  const defineOAuthAuth0EventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/auth0')['defineOAuthAuth0EventHandler']
  const defineOAuthAuthentikEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/authentik')['defineOAuthAuthentikEventHandler']
  const defineOAuthAzureB2CEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/azureb2c')['defineOAuthAzureB2CEventHandler']
  const defineOAuthBattledotnetEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/battledotnet')['defineOAuthBattledotnetEventHandler']
  const defineOAuthCognitoEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/cognito')['defineOAuthCognitoEventHandler']
  const defineOAuthDiscordEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/discord')['defineOAuthDiscordEventHandler']
  const defineOAuthDropboxEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/dropbox')['defineOAuthDropboxEventHandler']
  const defineOAuthFacebookEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/facebook')['defineOAuthFacebookEventHandler']
  const defineOAuthGitHubEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/github')['defineOAuthGitHubEventHandler']
  const defineOAuthGitLabEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/gitlab')['defineOAuthGitLabEventHandler']
  const defineOAuthGiteaEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/gitea')['defineOAuthGiteaEventHandler']
  const defineOAuthGoogleEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/google')['defineOAuthGoogleEventHandler']
  const defineOAuthHerokuEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/heroku')['defineOAuthHerokuEventHandler']
  const defineOAuthHubspotEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/hubspot')['defineOAuthHubspotEventHandler']
  const defineOAuthInstagramEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/instagram')['defineOAuthInstagramEventHandler']
  const defineOAuthKeycloakEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/keycloak')['defineOAuthKeycloakEventHandler']
  const defineOAuthKickEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/kick')['defineOAuthKickEventHandler']
  const defineOAuthLineEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/line')['defineOAuthLineEventHandler']
  const defineOAuthLinearEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/linear')['defineOAuthLinearEventHandler']
  const defineOAuthLinkedInEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/linkedin')['defineOAuthLinkedInEventHandler']
  const defineOAuthLiveChatEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/livechat')['defineOAuthLiveChatEventHandler']
  const defineOAuthMicrosoftEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/microsoft')['defineOAuthMicrosoftEventHandler']
  const defineOAuthPaypalEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/paypal')['defineOAuthPaypalEventHandler']
  const defineOAuthPolarEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/polar')['defineOAuthPolarEventHandler']
  const defineOAuthSalesforceEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/salesforce')['defineOAuthSalesforceEventHandler']
  const defineOAuthSeznamEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/seznam')['defineOAuthSeznamEventHandler']
  const defineOAuthSlackEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/slack')['defineOAuthSlackEventHandler']
  const defineOAuthSpotifyEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/spotify')['defineOAuthSpotifyEventHandler']
  const defineOAuthSteamEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/steam')['defineOAuthSteamEventHandler']
  const defineOAuthStravaEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/strava')['defineOAuthStravaEventHandler']
  const defineOAuthTikTokEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/tiktok')['defineOAuthTikTokEventHandler']
  const defineOAuthTwitchEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/twitch')['defineOAuthTwitchEventHandler']
  const defineOAuthVKEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/vk')['defineOAuthVKEventHandler']
  const defineOAuthWorkOSEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/workos')['defineOAuthWorkOSEventHandler']
  const defineOAuthXEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/x')['defineOAuthXEventHandler']
  const defineOAuthXSUAAEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/xsuaa')['defineOAuthXSUAAEventHandler']
  const defineOAuthYandexEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/yandex')['defineOAuthYandexEventHandler']
  const defineOAuthZitadelEventHandler: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/zitadel')['defineOAuthZitadelEventHandler']
  const defineRenderHandler: typeof import('../../node_modules/nitropack/dist/runtime/internal/renderer')['defineRenderHandler']
  const defineRequestMiddleware: typeof import('../../node_modules/h3')['defineRequestMiddleware']
  const defineResponseMiddleware: typeof import('../../node_modules/h3')['defineResponseMiddleware']
  const defineRouteMeta: typeof import('../../node_modules/nitropack/dist/runtime/internal/meta')['defineRouteMeta']
  const defineTask: typeof import('../../node_modules/nitropack/dist/runtime/internal/task')['defineTask']
  const defineWebSocket: typeof import('../../node_modules/h3')['defineWebSocket']
  const defineWebSocketHandler: typeof import('../../node_modules/h3')['defineWebSocketHandler']
  const deleteCookie: typeof import('../../node_modules/h3')['deleteCookie']
  const dynamicEventHandler: typeof import('../../node_modules/h3')['dynamicEventHandler']
  const eventHandler: typeof import('../../node_modules/h3')['eventHandler']
  const fetchWithEvent: typeof import('../../node_modules/h3')['fetchWithEvent']
  const fromNodeMiddleware: typeof import('../../node_modules/h3')['fromNodeMiddleware']
  const fromPlainHandler: typeof import('../../node_modules/h3')['fromPlainHandler']
  const fromWebHandler: typeof import('../../node_modules/h3')['fromWebHandler']
  const getAtprotoClientMetadata: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/utils/atproto')['getAtprotoClientMetadata']
  const getCookie: typeof import('../../node_modules/h3')['getCookie']
  const getHeader: typeof import('../../node_modules/h3')['getHeader']
  const getHeaders: typeof import('../../node_modules/h3')['getHeaders']
  const getMethod: typeof import('../../node_modules/h3')['getMethod']
  const getProxyRequestHeaders: typeof import('../../node_modules/h3')['getProxyRequestHeaders']
  const getQuery: typeof import('../../node_modules/h3')['getQuery']
  const getRequestFingerprint: typeof import('../../node_modules/h3')['getRequestFingerprint']
  const getRequestHeader: typeof import('../../node_modules/h3')['getRequestHeader']
  const getRequestHeaders: typeof import('../../node_modules/h3')['getRequestHeaders']
  const getRequestHost: typeof import('../../node_modules/h3')['getRequestHost']
  const getRequestIP: typeof import('../../node_modules/h3')['getRequestIP']
  const getRequestPath: typeof import('../../node_modules/h3')['getRequestPath']
  const getRequestProtocol: typeof import('../../node_modules/h3')['getRequestProtocol']
  const getRequestURL: typeof import('../../node_modules/h3')['getRequestURL']
  const getRequestWebStream: typeof import('../../node_modules/h3')['getRequestWebStream']
  const getResponseHeader: typeof import('../../node_modules/h3')['getResponseHeader']
  const getResponseHeaders: typeof import('../../node_modules/h3')['getResponseHeaders']
  const getResponseStatus: typeof import('../../node_modules/h3')['getResponseStatus']
  const getResponseStatusText: typeof import('../../node_modules/h3')['getResponseStatusText']
  const getRouteRules: typeof import('../../node_modules/nitropack/dist/runtime/internal/route-rules')['getRouteRules']
  const getRouterParam: typeof import('../../node_modules/h3')['getRouterParam']
  const getRouterParams: typeof import('../../node_modules/h3')['getRouterParams']
  const getSession: typeof import('../../node_modules/h3')['getSession']
  const getUserSession: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/utils/session')['getUserSession']
  const getValidatedQuery: typeof import('../../node_modules/h3')['getValidatedQuery']
  const getValidatedRouterParams: typeof import('../../node_modules/h3')['getValidatedRouterParams']
  const handleCacheHeaders: typeof import('../../node_modules/h3')['handleCacheHeaders']
  const handleCors: typeof import('../../node_modules/h3')['handleCors']
  const hashPassword: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/utils/password')['hashPassword']
  const isCorsOriginAllowed: typeof import('../../node_modules/h3')['isCorsOriginAllowed']
  const isError: typeof import('../../node_modules/h3')['isError']
  const isEvent: typeof import('../../node_modules/h3')['isEvent']
  const isEventHandler: typeof import('../../node_modules/h3')['isEventHandler']
  const isMethod: typeof import('../../node_modules/h3')['isMethod']
  const isPreflightRequest: typeof import('../../node_modules/h3')['isPreflightRequest']
  const isStream: typeof import('../../node_modules/h3')['isStream']
  const isWebResponse: typeof import('../../node_modules/h3')['isWebResponse']
  const lazyEventHandler: typeof import('../../node_modules/h3')['lazyEventHandler']
  const nitroPlugin: typeof import('../../node_modules/nitropack/dist/runtime/internal/plugin')['nitroPlugin']
  const parseCookies: typeof import('../../node_modules/h3')['parseCookies']
  const promisifyNodeListener: typeof import('../../node_modules/h3')['promisifyNodeListener']
  const proxyRequest: typeof import('../../node_modules/h3')['proxyRequest']
  const readBody: typeof import('../../node_modules/h3')['readBody']
  const readFormData: typeof import('../../node_modules/h3')['readFormData']
  const readMultipartFormData: typeof import('../../node_modules/h3')['readMultipartFormData']
  const readRawBody: typeof import('../../node_modules/h3')['readRawBody']
  const readValidatedBody: typeof import('../../node_modules/h3')['readValidatedBody']
  const removeResponseHeader: typeof import('../../node_modules/h3')['removeResponseHeader']
  const replaceUserSession: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/utils/session')['replaceUserSession']
  const requireUserSession: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/utils/session')['requireUserSession']
  const runTask: typeof import('../../node_modules/nitropack/dist/runtime/internal/task')['runTask']
  const sanitizeStatusCode: typeof import('../../node_modules/h3')['sanitizeStatusCode']
  const sanitizeStatusMessage: typeof import('../../node_modules/h3')['sanitizeStatusMessage']
  const sanitizeUser: typeof import('../../server/utils/sanitize')['sanitizeUser']
  const sealSession: typeof import('../../node_modules/h3')['sealSession']
  const send: typeof import('../../node_modules/h3')['send']
  const sendError: typeof import('../../node_modules/h3')['sendError']
  const sendIterable: typeof import('../../node_modules/h3')['sendIterable']
  const sendNoContent: typeof import('../../node_modules/h3')['sendNoContent']
  const sendProxy: typeof import('../../node_modules/h3')['sendProxy']
  const sendRedirect: typeof import('../../node_modules/h3')['sendRedirect']
  const sendStream: typeof import('../../node_modules/h3')['sendStream']
  const sendWebResponse: typeof import('../../node_modules/h3')['sendWebResponse']
  const serveStatic: typeof import('../../node_modules/h3')['serveStatic']
  const sessionHooks: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/utils/session')['sessionHooks']
  const setCookie: typeof import('../../node_modules/h3')['setCookie']
  const setHeader: typeof import('../../node_modules/h3')['setHeader']
  const setHeaders: typeof import('../../node_modules/h3')['setHeaders']
  const setResponseHeader: typeof import('../../node_modules/h3')['setResponseHeader']
  const setResponseHeaders: typeof import('../../node_modules/h3')['setResponseHeaders']
  const setResponseStatus: typeof import('../../node_modules/h3')['setResponseStatus']
  const setUserSession: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/utils/session')['setUserSession']
  const splitCookiesString: typeof import('../../node_modules/h3')['splitCookiesString']
  const stripe: typeof import('../../server/utils/stripe')['stripe']
  const toEventHandler: typeof import('../../node_modules/h3')['toEventHandler']
  const toNodeListener: typeof import('../../node_modules/h3')['toNodeListener']
  const toPlainHandler: typeof import('../../node_modules/h3')['toPlainHandler']
  const toWebHandler: typeof import('../../node_modules/h3')['toWebHandler']
  const toWebRequest: typeof import('../../node_modules/h3')['toWebRequest']
  const unsealSession: typeof import('../../node_modules/h3')['unsealSession']
  const updateSession: typeof import('../../node_modules/h3')['updateSession']
  const useAppConfig: typeof import('../../node_modules/nitropack/dist/runtime/internal/config')['useAppConfig']
  const useBase: typeof import('../../node_modules/h3')['useBase']
  const useEvent: typeof import('../../node_modules/nitropack/dist/runtime/internal/context')['useEvent']
  const useNitroApp: typeof import('../../node_modules/nitropack/dist/runtime/internal/app')['useNitroApp']
  const useRuntimeConfig: typeof import('../../node_modules/nitropack/dist/runtime/internal/config')['useRuntimeConfig']
  const useSession: typeof import('../../node_modules/h3')['useSession']
  const useStorage: typeof import('../../node_modules/nitropack/dist/runtime/internal/storage')['useStorage']
  const verifyPassword: typeof import('../../node_modules/nuxt-auth-utils/dist/runtime/server/utils/password')['verifyPassword']
  const writeEarlyHints: typeof import('../../node_modules/h3')['writeEarlyHints']
}
// for type re-export
declare global {
  // @ts-ignore
  export type { OAuthAppleConfig, OAuthAppleTokens, OAuthAppleUser } from 'C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/apple.js'
  import('C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/apple.js')
  // @ts-ignore
  export type { OAuthAtlassianConfig } from 'C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/atlassian.js'
  import('C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/atlassian.js')
  // @ts-ignore
  export type { OAuthAuth0Config } from 'C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/auth0.js'
  import('C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/auth0.js')
  // @ts-ignore
  export type { OAuthAuthentikConfig } from 'C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/authentik.js'
  import('C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/authentik.js')
  // @ts-ignore
  export type { OAuthAzureB2CConfig } from 'C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/azureb2c.js'
  import('C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/azureb2c.js')
  // @ts-ignore
  export type { OAuthBattledotnetConfig } from 'C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/battledotnet.js'
  import('C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/battledotnet.js')
  // @ts-ignore
  export type { OAuthCognitoConfig } from 'C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/cognito.js'
  import('C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/cognito.js')
  // @ts-ignore
  export type { OAuthDiscordConfig } from 'C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/discord.js'
  import('C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/discord.js')
  // @ts-ignore
  export type { OAuthDropboxConfig } from 'C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/dropbox.js'
  import('C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/dropbox.js')
  // @ts-ignore
  export type { OAuthFacebookConfig } from 'C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/facebook.js'
  import('C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/facebook.js')
  // @ts-ignore
  export type { OAuthGiteaConfig } from 'C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/gitea.js'
  import('C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/gitea.js')
  // @ts-ignore
  export type { OAuthGitHubConfig } from 'C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/github.js'
  import('C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/github.js')
  // @ts-ignore
  export type { OAuthGitLabConfig } from 'C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/gitlab.js'
  import('C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/gitlab.js')
  // @ts-ignore
  export type { OAuthGoogleConfig } from 'C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/google.js'
  import('C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/google.js')
  // @ts-ignore
  export type { OAuthHerokuConfig } from 'C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/heroku.js'
  import('C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/heroku.js')
  // @ts-ignore
  export type { OAuthHubspotConfig } from 'C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/hubspot.js'
  import('C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/hubspot.js')
  // @ts-ignore
  export type { OAuthInstagramConfig } from 'C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/instagram.js'
  import('C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/instagram.js')
  // @ts-ignore
  export type { OAuthKeycloakConfig } from 'C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/keycloak.js'
  import('C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/keycloak.js')
  // @ts-ignore
  export type { OAuthKickConfig } from 'C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/kick.js'
  import('C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/kick.js')
  // @ts-ignore
  export type { OAuthLineConfig } from 'C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/line.js'
  import('C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/line.js')
  // @ts-ignore
  export type { OAuthLinearConfig } from 'C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/linear.js'
  import('C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/linear.js')
  // @ts-ignore
  export type { OAuthLinkedInConfig } from 'C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/linkedin.js'
  import('C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/linkedin.js')
  // @ts-ignore
  export type { LiveChatTokens, LiveChatUser, LiveChatConfig } from 'C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/livechat.js'
  import('C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/livechat.js')
  // @ts-ignore
  export type { OAuthMicrosoftConfig } from 'C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/microsoft.js'
  import('C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/microsoft.js')
  // @ts-ignore
  export type { OAuthPaypalConfig } from 'C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/paypal.js'
  import('C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/paypal.js')
  // @ts-ignore
  export type { OAuthPolarConfig } from 'C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/polar.js'
  import('C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/polar.js')
  // @ts-ignore
  export type { OAuthSalesforceConfig } from 'C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/salesforce.js'
  import('C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/salesforce.js')
  // @ts-ignore
  export type { OAuthSeznamConfig, OAuthSeznamUser } from 'C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/seznam.js'
  import('C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/seznam.js')
  // @ts-ignore
  export type { OAuthSlackConfig } from 'C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/slack.js'
  import('C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/slack.js')
  // @ts-ignore
  export type { OAuthSpotifyConfig } from 'C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/spotify.js'
  import('C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/spotify.js')
  // @ts-ignore
  export type { OAuthSteamConfig } from 'C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/steam.js'
  import('C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/steam.js')
  // @ts-ignore
  export type { OAuthStravaConfig, OAuthStravaUser, OAuthStravaTokens } from 'C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/strava.js'
  import('C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/strava.js')
  // @ts-ignore
  export type { OAuthTikTokConfig } from 'C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/tiktok.js'
  import('C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/tiktok.js')
  // @ts-ignore
  export type { OAuthTwitchConfig } from 'C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/twitch.js'
  import('C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/twitch.js')
  // @ts-ignore
  export type { OAuthVKConfig } from 'C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/vk.js'
  import('C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/vk.js')
  // @ts-ignore
  export type { OAuthWorkOSConfig, OAuthWorkOSUser, OAuthWorkOSAuthenticationMethod, OAuthWorkOSAuthenticateResponse, OAuthWorkOSTokens } from 'C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/workos.js'
  import('C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/workos.js')
  // @ts-ignore
  export type { OAuthXConfig } from 'C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/x.js'
  import('C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/x.js')
  // @ts-ignore
  export type { OAuthXSUAAConfig } from 'C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/xsuaa.js'
  import('C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/xsuaa.js')
  // @ts-ignore
  export type { OAuthYandexConfig } from 'C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/yandex.js'
  import('C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/yandex.js')
  // @ts-ignore
  export type { OAuthZitadelConfig } from 'C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/zitadel.js'
  import('C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/zitadel.js')
  // @ts-ignore
  export type { SessionHooks } from 'C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/utils/session.js'
  import('C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/utils/session.js')
}
export { useNitroApp } from 'nitropack/runtime/internal/app';
export { useRuntimeConfig, useAppConfig } from 'nitropack/runtime/internal/config';
export { defineNitroPlugin, nitroPlugin } from 'nitropack/runtime/internal/plugin';
export { defineCachedFunction, defineCachedEventHandler, cachedFunction, cachedEventHandler } from 'nitropack/runtime/internal/cache';
export { useStorage } from 'nitropack/runtime/internal/storage';
export { defineRenderHandler } from 'nitropack/runtime/internal/renderer';
export { defineRouteMeta } from 'nitropack/runtime/internal/meta';
export { getRouteRules } from 'nitropack/runtime/internal/route-rules';
export { useEvent } from 'nitropack/runtime/internal/context';
export { defineTask, runTask } from 'nitropack/runtime/internal/task';
export { defineNitroErrorHandler } from 'nitropack/runtime/internal/error/utils';
export { appendCorsHeaders, appendCorsPreflightHeaders, appendHeader, appendHeaders, appendResponseHeader, appendResponseHeaders, assertMethod, callNodeListener, clearResponseHeaders, clearSession, createApp, createAppEventHandler, createError, createEvent, createEventStream, createRouter, defaultContentType, defineEventHandler, defineLazyEventHandler, defineNodeListener, defineNodeMiddleware, defineRequestMiddleware, defineResponseMiddleware, defineWebSocket, defineWebSocketHandler, deleteCookie, dynamicEventHandler, eventHandler, fetchWithEvent, fromNodeMiddleware, fromPlainHandler, fromWebHandler, getCookie, getHeader, getHeaders, getMethod, getProxyRequestHeaders, getQuery, getRequestFingerprint, getRequestHeader, getRequestHeaders, getRequestHost, getRequestIP, getRequestPath, getRequestProtocol, getRequestURL, getRequestWebStream, getResponseHeader, getResponseHeaders, getResponseStatus, getResponseStatusText, getRouterParam, getRouterParams, getSession, getValidatedQuery, getValidatedRouterParams, handleCacheHeaders, handleCors, isCorsOriginAllowed, isError, isEvent, isEventHandler, isMethod, isPreflightRequest, isStream, isWebResponse, lazyEventHandler, parseCookies, promisifyNodeListener, proxyRequest, readBody, readFormData, readMultipartFormData, readRawBody, readValidatedBody, removeResponseHeader, sanitizeStatusCode, sanitizeStatusMessage, sealSession, send, sendError, sendIterable, sendNoContent, sendProxy, sendRedirect, sendStream, sendWebResponse, serveStatic, setCookie, setHeader, setHeaders, setResponseHeader, setResponseHeaders, setResponseStatus, splitCookiesString, toEventHandler, toNodeListener, toPlainHandler, toWebHandler, toWebRequest, unsealSession, updateSession, useBase, useSession, writeEarlyHints } from 'h3';
export { buildAssetsURL as __buildAssetsURL, publicAssetsURL as __publicAssetsURL } from 'C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt/dist/core/runtime/nitro/utils/paths';
export { defineAppConfig } from 'C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt/dist/core/runtime/nitro/utils/config';
export { defineOAuthAppleEventHandler } from 'C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/apple';
export { defineOAuthAtlassianEventHandler } from 'C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/atlassian';
export { defineOAuthAuth0EventHandler } from 'C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/auth0';
export { defineOAuthAuthentikEventHandler } from 'C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/authentik';
export { defineOAuthAzureB2CEventHandler } from 'C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/azureb2c';
export { defineOAuthBattledotnetEventHandler } from 'C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/battledotnet';
export { defineOAuthCognitoEventHandler } from 'C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/cognito';
export { defineOAuthDiscordEventHandler } from 'C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/discord';
export { defineOAuthDropboxEventHandler } from 'C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/dropbox';
export { defineOAuthFacebookEventHandler } from 'C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/facebook';
export { defineOAuthGiteaEventHandler } from 'C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/gitea';
export { defineOAuthGitHubEventHandler } from 'C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/github';
export { defineOAuthGitLabEventHandler } from 'C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/gitlab';
export { defineOAuthGoogleEventHandler } from 'C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/google';
export { defineOAuthHerokuEventHandler } from 'C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/heroku';
export { defineOAuthHubspotEventHandler } from 'C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/hubspot';
export { defineOAuthInstagramEventHandler } from 'C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/instagram';
export { defineOAuthKeycloakEventHandler } from 'C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/keycloak';
export { defineOAuthKickEventHandler } from 'C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/kick';
export { defineOAuthLineEventHandler } from 'C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/line';
export { defineOAuthLinearEventHandler } from 'C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/linear';
export { defineOAuthLinkedInEventHandler } from 'C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/linkedin';
export { defineOAuthLiveChatEventHandler } from 'C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/livechat';
export { defineOAuthMicrosoftEventHandler } from 'C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/microsoft';
export { defineOAuthPaypalEventHandler } from 'C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/paypal';
export { defineOAuthPolarEventHandler } from 'C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/polar';
export { defineOAuthSalesforceEventHandler } from 'C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/salesforce';
export { defineOAuthSeznamEventHandler } from 'C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/seznam';
export { defineOAuthSlackEventHandler } from 'C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/slack';
export { defineOAuthSpotifyEventHandler } from 'C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/spotify';
export { defineOAuthSteamEventHandler } from 'C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/steam';
export { defineOAuthStravaEventHandler } from 'C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/strava';
export { defineOAuthTikTokEventHandler } from 'C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/tiktok';
export { defineOAuthTwitchEventHandler } from 'C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/twitch';
export { defineOAuthVKEventHandler } from 'C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/vk';
export { defineOAuthWorkOSEventHandler } from 'C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/workos';
export { defineOAuthXEventHandler } from 'C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/x';
export { defineOAuthXSUAAEventHandler } from 'C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/xsuaa';
export { defineOAuthYandexEventHandler } from 'C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/yandex';
export { defineOAuthZitadelEventHandler } from 'C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/lib/oauth/zitadel';
export { getAtprotoClientMetadata } from 'C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/utils/atproto';
export { hashPassword, verifyPassword } from 'C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/utils/password';
export { sessionHooks, getUserSession, setUserSession, replaceUserSession, clearUserSession, requireUserSession } from 'C:/Users/Wad/Desktop/apps/store-nuxt/node_modules/nuxt-auth-utils/dist/runtime/server/utils/session';
export { db } from 'C:/Users/Wad/Desktop/apps/store-nuxt/server/utils/db';
export { sanitizeUser } from 'C:/Users/Wad/Desktop/apps/store-nuxt/server/utils/sanitize';
export { stripe } from 'C:/Users/Wad/Desktop/apps/store-nuxt/server/utils/stripe';