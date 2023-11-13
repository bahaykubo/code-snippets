import { ViewportSize } from '@playwright/test';

export interface TestConfig {
  headless: boolean;
  slowMo?: number;
  viewport?: ViewportSize;
  testTimeout: number;
  actionTimeout: number;
  testRunners?: number;
}
