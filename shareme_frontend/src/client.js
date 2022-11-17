import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
    projectId: import.meta.env.VITE_SANITY_PROJECTID,
    dataset: 'production',
    apiVersion: '2022-11-17',
    useCdn: true,
    token: import.meta.env.VITE_SANITY_TOKEN
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);