import nextra from 'nextra'

const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  trailingSlash: true,
  // basePath: '/rust-course'
}

const withNextra = nextra({
  latex: true,
  defaultShowCopyCode: true,
})

export default withNextra(nextConfig)