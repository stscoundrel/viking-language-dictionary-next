import type { NextApiRequest, NextApiResponse } from 'next'
import { getSitemapEntries, formatSitemap } from 'lib/services/sitemap'
import { SitemapStream, streamToPromise } from 'sitemap'

/**
 * API endpoint to build new sitemap.xml
 */
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const content = getSitemapEntries()
  const sitemap = await formatSitemap(content, SitemapStream, streamToPromise)
  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()
}

export default handler
