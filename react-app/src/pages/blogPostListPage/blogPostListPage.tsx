import { useQuery } from '@apollo/client';
import { GET_BLOG_POSTS } from '../../services/queries/blogPostListQuery';
import { BlogPost, blogPostData } from './blogPostListPage.types';
import { StyledBlogPostListContainer } from './blogPostListPage.styled';
import { BlogPostCard } from '../../components/blogPostCard';

export const BlogPostListPage = () => {
  const { data } = useQuery<blogPostData>(GET_BLOG_POSTS);
  const RenderBlogPostList = () => {
    return (
      <>
        {data?.blogPosts.map((blogPost: BlogPost, index: number) => (
          <BlogPostCard key={index} blogPost={blogPost} />
        ))}
      </>
    );
  };

  return (
    <StyledBlogPostListContainer>
      <RenderBlogPostList />
    </StyledBlogPostListContainer>
  );
};
