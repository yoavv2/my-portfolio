import { useUserAgent } from '@teambit/ui-foundation.ui.hooks.use-user-agent';

export function useIsMobile() {
  const deviceType = useUserAgent()?.getDevice().type;
  return deviceType === 'tablet' || deviceType === 'mobile';
}
