export const apiVersion: string =
    process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-12-03';

export const dataset: string = assertValue(
    process.env.NEXT_PUBLIC_SANITY_DATASET,
    'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
);

export const projectId: string = assertValue(
    process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
);

function assertValue<T>(v: T | undefined, errorMessage: string): T {
    if (v === undefined) {
        throw new Error(errorMessage);
    }
    return v;
}

// Debugging (only during development)
if (process.env.NODE_ENV !== 'production') {
    console.log({ apiVersion, dataset, projectId });
}
