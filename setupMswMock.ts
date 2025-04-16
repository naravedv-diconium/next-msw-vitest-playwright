import { afterAll, afterEach, beforeAll } from 'vitest'

const { server } = await import('./src/mock/node');

// Start server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))

// Close server after all tests
afterAll(() => server.close())

// Reset handlers after each test for test isolation
afterEach(() => server.resetHandlers())