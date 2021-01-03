import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "7km1qg61",
  dataset: "production",
  useCdn: true,
});
