import { HeroBlock } from './HeroBlock';
import { TextBlock } from './TextBlock';
import { initReactComponentRegistry } from '@optimizely/cms-sdk/react/server';

try {
    initReactComponentRegistry({
      resolver: {
        HeroBlock: HeroBlock as any,
        TextBlock: TextBlock as any,
      },
    });
} catch (e) {
    // Registry might already be initialized in dev mode hot-reload
    console.warn("Component registry init warning:", e);
}
