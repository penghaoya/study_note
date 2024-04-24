import type { DefaultTheme } from 'vitepress/theme'
import { web } from './base'
import { devops } from './devops'
import { backend } from './backend'
import { daily } from './daily'
import { offer } from './offer'

export const sidebar: DefaultTheme.Sidebar = {
  '/web/': web,
  '/devops/': devops,
  '/backend/': backend,
  '/daily/': daily,
  '/offer/': offer
}
