# IDS-DRR Branding Types

TypeScript type definitions for the [IDS-DRR](https://github.com/CivicDataLab/IDS-DRR-Frontend) branding-package contract.

## Install

```bash
npm install github:open-contracting/ids-drr-branding-types
```

## Usage

In a branding package:

```ts
// ids-drr-my-brand/src/config.ts
import type { DeploymentConfig } from 'ids-drr-branding-types';

export const config: DeploymentConfig = {
  heroImage: '...',
  states: [...],
  // ...
};
```
