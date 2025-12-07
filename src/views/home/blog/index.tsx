import SectionTitle from "@/components/SectionTitle";
import Section from "@/components/ui/Section";
import Parser from "rss-parser";
import Posts from "./Posts";
import { rssFeedToPosts } from "./utils";

const sectionId = "blog";

export default async function Blog() {
  const feed = await new Parser({
    customFields: { item: ["content:encoded"] },
  }).parseURL("https://medium.com/feed/@sammygopeh");

  // console.log(feed);

  return (
    <Section id={sectionId} className="overflow-hidden">
      <SectionTitle
        sectionId={sectionId}
        header="The Blog"
        subheader="console.log(thoughts)"
        animationDelay={1.5}
        className="mt-160"
      />

      <Posts posts={rssFeedToPosts(feed)} />
    </Section>
  );
}
