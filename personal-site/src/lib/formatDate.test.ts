import { describe, expect, it } from 'vitest'

import { formatDate } from './formatDate'

describe('formatDate', () => {
  it('formats an ISO date string for en-US', () => {
    expect(formatDate('2026-04-21')).toMatch(/April/)
    expect(formatDate('2026-04-21')).toMatch(/2026/)
  })
})
