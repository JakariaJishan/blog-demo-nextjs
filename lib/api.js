const path = require("path");
const fs = require("fs");
const matter = require("gray-matter");
export function getAllPosts() {
  const pathDirectory = path.join("_posts");
  const fileNames = fs.readdirSync(pathDirectory);
  const finalFile =  fileNames.map((fileName) => {
    const fileDirectory = path.join("_posts", fileName);
    const file = fs.readFileSync(fileDirectory, "utf8");

    const { data } = matter(file);
    const slug = fileName.replace(".md", "");
    return {...data, slug: slug, permalink: `/posts/${slug}` };
  });
  return(finalFile)
}
