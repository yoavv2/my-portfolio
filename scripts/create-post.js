const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to create slug from title
function createSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-zA-Z0-9\s-]/g, '')
    .replace(/\s+/g, '-');
}

// Function to get today's date in YYYY-MM-DD format
function getTodayDate() {
  const date = new Date();
  return date.toISOString().split('T')[0];
}

// Function to create the MDX file content
function createPostContent(title, description) {
  const date = getTodayDate();
  return `---
title: '${title}'
date: '${date}'
description: '${description}'
image: '/images/blog/${createSlug(title)}/cover.jpg'
---

Write your blog post content here...
`;
}

// Main function to create a new post
async function createNewPost() {
  try {
    // Get post title
    const title = await new Promise(resolve => {
      rl.question('Enter post title: ', resolve);
    });

    // Get post description
    const description = await new Promise(resolve => {
      rl.question('Enter post description: ', resolve);
    });

    const slug = createSlug(title);
    const postsDir = path.join(process.cwd(), '_posts');
    const fileName = `${slug}.mdx`;
    const filePath = path.join(postsDir, fileName);

    // Create the post content
    const content = createPostContent(title, description);

    // Create images directory for the post
    const imageDir = path.join(process.cwd(), 'public', 'images', 'blog', slug);
    if (!fs.existsSync(imageDir)) {
      fs.mkdirSync(imageDir, { recursive: true });
    }

    // Write the file
    fs.writeFileSync(filePath, content);

    console.log(`\nPost created successfully!`);
    console.log(`File: ${fileName}`);
    console.log(`Don't forget to add a cover image at: /images/blog/${slug}/cover.jpg`);

    rl.close();
  } catch (error) {
    console.error('Error creating post:', error);
    rl.close();
  }
}

createNewPost();
