import { builder } from '@builder.io/sdk';

// Initialize Builder.io with your API key
export const BUILDER_API_KEY = import.meta.env.VITE_BUILDER_API_KEY || 'SETUP_REQUIRED';

// Initialize the Builder SDK
builder.init(BUILDER_API_KEY);

export { builder };

// Check if Builder.io is properly configured
export const isBuilderConfigured = () => {
  return BUILDER_API_KEY && BUILDER_API_KEY !== 'SETUP_REQUIRED';
};
