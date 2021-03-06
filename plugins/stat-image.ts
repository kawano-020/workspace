import { defineNuxtPlugin } from '@nuxtjs/composition-api'
import { GithubInfo } from '@/lib/githubInfo'

const githubInfo = new GithubInfo()

const getStatImageUrl = (
  section: string,
  isDark: boolean,
  queryString: string,
  repositoryName: string
): string => {
  const baseUrl =
    `https://github-readme-stats.vercel.app/api/${section}/` +
    `?username=${githubInfo.userName}` +
    `&repo=${repositoryName}&show_owner=true` +
    '&show_icons=true&langs_count=10'
  const theme = isDark ? 'dark' : 'default_repocard'
  const backgroundColor = isDark ? '1e1e1e' : ''
  return (
    `${baseUrl}${queryString}&theme=${theme}` + `&bg_color=${backgroundColor}`
  )
}

const getRepoStatImageUrl = (
  isDark: boolean,
  queryString: string = '',
  repositoryName: string = githubInfo.repositoryName
): string => {
  return getStatImageUrl('pin', isDark, queryString, repositoryName)
}

const getTopLangsStatImageUrl = (
  isDark: boolean,
  queryString: string = ''
): string => {
  return getStatImageUrl(
    'top-langs',
    isDark,
    queryString,
    githubInfo.repositoryName
  )
}

declare module '@nuxt/types' {
  interface Context {
    $getRepoStatImageUrl: (
      isDark: boolean,
      queryString?: string,
      repositoryName?: string
    ) => string
    $getTopLangsStatImageUrl: (isDark: boolean, queryString?: string) => string
  }
}

export default defineNuxtPlugin((_, inject) => {
  inject('getRepoStatImageUrl', getRepoStatImageUrl)
  inject('getTopLangsStatImageUrl', getTopLangsStatImageUrl)
})
