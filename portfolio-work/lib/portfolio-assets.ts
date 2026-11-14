import type { Project } from './projects';

type VisualKey = Project['visual'] | 'face' | 'camera' | 'video' | 'report' | 'profile';

// Add exported Figma files to public/portfolio and set their paths here.
export const portfolioAssets: {
  portrait: string | null;
  visuals: Record<VisualKey, string | null>;
} = {
  portrait: '/portfolio/portrait.png',
  visuals: {
    'report-designer': '/portfolio/report-designer.png',
    tfsix: '/portfolio/tfsix.png',
    idm: '/portfolio/idm.png',
    softlogic: '/portfolio/softlogic.png',
    'smart-city': '/portfolio/smart-city.png',
    reporting: '/portfolio/reporting.png',
    face: null,
    camera: null,
    video: null,
    report: null,
    profile: null,
  },
};

