export type Route = {
  title: string
  pathName: string
  description: string
}

const home: Route = { title: 'Home', pathName: 'index', description: '' }
const repository: Route = {
  title: 'Repositories',
  pathName: 'repositories',
  description: 'Public Repositoryの一覧・詳細',
}
const apiDocument: Route = {
  title: 'API Documents',
  pathName: 'api-doc',
  description: 'WebAPIの開発に使用するAPI仕様書',
}
const dbDocument: Route = {
  title: 'DB Documents',
  pathName: 'db-doc',
  description: 'WebAPIの開発に使用するDB仕様書',
}

export const routes: Route[] = [home, apiDocument]

export const routeExplanations: Route[] = [repository, apiDocument, dbDocument]
