import {tailwindTheme} from '@cqcl/quantinuum-ui'
import path from 'path'
import { Config } from 'tailwindcss'

module.exports = {
  ...tailwindTheme,
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    path.join(
      path.dirname(require.resolve('@cqcl/quantinuum-ui')),
      '**/*.{js,ts,jsx,tsx,mdx}'
    ),
  ],
  presets: [tailwindTheme],
} satisfies Config

