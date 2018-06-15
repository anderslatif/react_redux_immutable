import path from 'path'

export const root = path.resolve(__dirname, '../')

export const build = path.join(root, 'build')
export const buildClient = path.join(build, 'client')
export const buildServer = path.join(build, 'server')

export const src = path.join(root, 'src')
export const srcClient = path.join(src, 'client')
export const srcServer = path.join(src, 'server')
