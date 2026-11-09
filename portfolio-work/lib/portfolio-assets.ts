import type { Project } from './projects';

type VisualKey = Project['visual'] | 'face' | 'camera' | 'video' | 'report' | 'profile';

// Add exported Figma files to public/portfolio and set their paths here.
export const portfolioAssets: {
  portrait: string | null;
  visuals: Record<VisualKey, string | null>;
} = {
  portrait: null,
  visuals: {
    'report-designer': null,
    tfsix: null,
    idm: null,
    softlogic: null,
    'smart-city': null,
    reporting: null,
    face: null,
    camera: null,
    video: null,
    report: null,
    profile: null,
  },
};

