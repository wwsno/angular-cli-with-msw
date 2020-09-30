import { worker } from '../../../msw-mocks/browser';

export async function startMockBackend() {
  await worker.start({ quiet: true });
}

export function stopMockBackend() {
  worker.stop();
}
