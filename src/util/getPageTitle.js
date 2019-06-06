import defaultSettings from '@/settings'

const title = defaultSettings.title || 'Vue Element Admin'

export function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
