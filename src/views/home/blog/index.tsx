import { getPosts } from "@/app/server/posts";
import SectionTitle from "@/components/SectionTitle";
import Section from "@/components/ui/Section";
import Posts from "./Posts";

const sectionId = "blog";

export default async function Blog() {
  const postsData = await getPosts();

  console.log(postsData);
  return (
    <Section id={sectionId} className="overflow-hidden">
      <SectionTitle
        sectionId={sectionId}
        header="The Blog"
        subheader="console.log(thoughts)"
        animationDelay={1.5}
        className="mt-160"
      />

      <Posts posts={postsData.results} />
    </Section>
  );
}
