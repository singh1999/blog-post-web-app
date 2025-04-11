import { blogPosts } from './data.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const filename = fileURLToPath(import.meta.url);
const directoryName = dirname(filename);

export const resolvers = {
  Query: {
    blogPosts: () =>
      blogPosts.slice().sort((a, b) => parseInt(b.id) - parseInt(a.id)),
    blogPost: (_, { id }) => blogPosts.find((blogPost) => blogPost.id === id),
  },
  Mutation: {
    createBlogPost: (_, { title, author, content }) => {
      const now = new Date();
      const formattedDate = `${String(now.getDate()).padStart(2, '0')}-${String(
        now.getMonth() + 1
      ).padStart(2, '0')}-${now.getFullYear()}`;
      const formattedTime = `${String(now.getHours()).padStart(
        2,
        '0'
      )}:${String(now.getMinutes()).padStart(2, '0')}`;
      const newBLogPost = {
        id: `${blogPosts.length + 1}`,
        title,
        author,
        content,
        createdAt: formattedDate + '. ' + formattedTime,
      };
      blogPosts.push(newBLogPost);

      const filePath = path.join(directoryName, 'data.js');
      const updatedData = `export const blogPosts = ${JSON.stringify(
        blogPosts,
        null,
        2
      )};`;
      fs.writeFileSync(filePath, updatedData, 'utf-8');

      return newBLogPost;
    },
  },
};
