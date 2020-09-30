import { worker } from '../../../msw-mocks/browser';

export async function startMockBackend() {
  await worker.start();
}

export function stopMockBackend() {
  worker.stop();
}
