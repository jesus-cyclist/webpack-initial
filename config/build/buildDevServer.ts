import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'
import { type TBuildOptions } from './types/types'

export function buildDevServer(options: TBuildOptions): DevServerConfiguration {
  const { mode, port } = options
  const isDev = mode === 'development'

  return isDev
    ? {
        port: port ?? 3000,
        open: true,
        // если раздавать статику через nginx То надо делать проксирование на Index.html
        historyApiFallback: true,
        //чтобы при изменениях в коде браузер не переагружал страницу, но изменения применял
        hot: true,
      }
    : undefined
}
