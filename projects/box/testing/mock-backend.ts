import { worker } from '../../../msw-mocks/browser';

export async function startMockBackend() {
  // Set waitUntilReady to false so it does not overwrite the patch from zone.js on xhr
  await worker.start({ quiet: true, waitUntilReady: false });
}

export function stopMockBackend() {
  worker.stop();
}
