export const seo = {
  title: 'SkyRiN | 开发者、设计师、细节控',
  description:
    '自由开发探索者',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://cali.so'
      : 'http://localhost:3000'
  ),
} as const
