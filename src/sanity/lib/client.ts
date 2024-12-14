import { createClient } from 'next-sanity';

import { apiVersion, dataset, projectId } from '../env';

export const client = createClient({
  projectId, // Required: Your Sanity project ID
  dataset,   // Required: Your dataset (e.g., 'production')
  apiVersion, // Required: API version (e.g., '2024-12-03')
  useCdn: process.env.NODE_ENV === 'production', // Use the CDN in production for faster, cached reads
});
// Example usage
client.fetch('*[_type == "blog"][0..2]').then((data) => {
  console.log('Fetched data:', data);
}).catch((error) => {
  console.error('Error fetching data:', error);
});
