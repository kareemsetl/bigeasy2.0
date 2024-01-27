import { authMiddleware } from "@clerk/nextjs";

// Routes grouped by similar patterns
const categoryRoutes = (years: number[], months: string[], otherCategories: string[]) => [
  ...years.map(year => `/category/monthly/${year}`),
  ...months.map(month => `/category/monthly/${month}`),
  ...otherCategories.map(category => `/category/${category}`),
];

const publicRoutes = [
  "/api/trpc/post.getFeaturedPostContents",
  "/", 
  "/shop", 
  "/support", 
  "/advertise", 
  "/about", 
  "/contact", 
  "/things-to-do",
  "/post/", // Include all routes starting with "/post/" (doenst work)
  ...categoryRoutes(
    [2018, 2019], // years
    ["December-2019", "October-2019", "September-2019", "August-2019", "July-2019", "June-2019", "May-2019", "April-2019", "March-2019", "February-2019", "January-2019"], // months
    ["Politics", "Economy", "Health-Care", "Social-Issues", "Culture-Lifestyle", "Art", "Film", "Food", "Music", "The-Progressive's-Weekend", "The-Progressive's-Lifestyle-in-New-Orleans", "Environment", "Air-And-Water-Quality", "Coastal-Restoration", "Op-Ed-Lagniappe", "Sports", "Guest-Posts", "Sponsored-Content", "Satire", "Big-Easy-Editorial", "Featured"] // other categories
  ),
  "/api/trpc/post.getPostThumbnailBySlug",
  "/api/trpc/post.getPostThumbnailBySlugPaginated",
  "/api/trpc/post.getTotalPostCountBySlug"
];

const ignoredRoutes = [
  "/((?!api|trpc))(_next.*|.+\.[\w]+$)",
  /*
  "/api/trpc/post.getFeaturedPostThumbnail",
  "/api/trpc/post.getPostThumbnailBySlug",
  "/api/trpc/post.getTotalPostCountBySlug",  this is commented out bc of the middleware error.
  "/api/trpc/post.getPostThumbnailBySlugPaginated",
  "/api/trpc/post.getTotalPostCountBySlug"
  */
];

export default authMiddleware({
  publicRoutes,
  ignoredRoutes,
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
