/**
 * Returns all active conditions grouped by category.
 * Each category contains an array of condition names that are currently active.
 */
export declare function detectAll(): {
  core: string[];
  runtime: string[];
  common: string[];
  webpack: string[];
};