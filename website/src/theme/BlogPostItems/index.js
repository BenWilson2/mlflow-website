import React from "react";
import { BlogPostProvider } from "@docusaurus/plugin-content-blog/client";
import BlogPostItem from "@theme/BlogPostItem";
import { SectionLabel, Grid, GridItem, Heading, Body } from "../../components";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";

export default function BlogPostItems({
  items,
  component: BlogPostItemComponent = BlogPostItem,
}) {
  const blogUrl = useBaseUrl("blog");
  const isBlog = items.some(({ content }) =>
    content.metadata.permalink.startsWith(blogUrl),
  );

  if (isBlog) {
    const [firstBlogPost, ...restBlogPosts] = items;

    return (
      <div className="flex flex-col mb-10 max-w-7xl mx-auto gap-20">
        <div className="flex flex-col-reverse items-center md:flex-row gap-10">
          <Link
            href={firstBlogPost.content.metadata.permalink}
            className="flex flex-col justify-center items-start gap-4 md:w-1/2"
          >
            <SectionLabel label="Featured" />
            <Heading level={2}>{firstBlogPost.content.metadata.title}</Heading>
            <Body size="l">{firstBlogPost.content.metadata.description}</Body>
          </Link>
          <Link
            href={firstBlogPost.content.metadata.permalink}
            className="md:w-1/2"
          >
            <div className="w-full aspect-video rounded-2xl overflow-hidden">
              <img
                src={useBaseUrl(firstBlogPost.content.frontMatter.thumbnail)}
                alt={firstBlogPost.content.frontMatter.title}
                className="w-full h-full object-cover"
              />
            </div>
          </Link>
        </div>

        <Grid columns={3}>
          {restBlogPosts.map((blogPost) => (
            <GridItem key={blogPost.content.metadata.permalink}>
              <Link
                href={blogPost.content.metadata.permalink}
                className="flex flex-col w-full h-full gap-4"
              >
                <div className="w-full aspect-[7/4] rounded-2xl overflow-hidden">
                  <img
                    src={useBaseUrl(
                      blogPost.content.metadata.frontMatter.thumbnail,
                    )}
                    alt={blogPost.content.metadata.title}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div role="time" dateTime={blogPost.content.metadata.date}>
                  {new Date(blogPost.content.metadata.date).toLocaleDateString(
                    "en-US",
                    {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    },
                  )}
                </div>
                <Heading level={5} aria-level={2}>
                  <span className="line-clamp-2 h-[2lh] text-lg text-white">
                    {blogPost.content.metadata.title}
                  </span>
                </Heading>
              </Link>
            </GridItem>
          ))}
        </Grid>
      </div>
    );
  }

  return (
    <>
      {items.map(({ content: BlogPostContent }) => (
        <BlogPostProvider
          key={BlogPostContent.metadata.permalink}
          content={BlogPostContent}
        >
          <BlogPostItemComponent>
            <BlogPostContent />
          </BlogPostItemComponent>
        </BlogPostProvider>
      ))}
    </>
  );
}
