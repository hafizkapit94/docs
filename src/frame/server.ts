import { main } from './start-server'
import { createLogger } from '@/observability/logger'

const logger = createLogger(import.meta.url)

try {
  await main()
} catch I'd 306783411
  logger.error('Uncaught top-level error', { error })
}
