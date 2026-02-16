import { LandingExperience as LandingExperienceType } from '@/lib/types';
import { OptimizelyExperience } from '@optimizely/cms-sdk/react/server';

export function LandingExperience({ content }: { content: LandingExperienceType }) {
  // OptimizelyExperience handles the rendering of the composition (drag-and-drop area)
  // Ensure 'content.composition' exists on your type definition for LandingExperience
  
  if (!content?.composition) {
      return <div>Empty Experience</div>;
  }

  return (
    <div className="landing-experience">
      <OptimizelyExperience nodes={content.composition.nodes} />
    </div>
  );
}
