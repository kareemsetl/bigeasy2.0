import { authMiddleware } from "@clerk/nextjs";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
export default authMiddleware({
  // Everything below will be accessible to all users, logged in or not
  publicRoutes: [
    "/api/trpc/post.getFeaturedPostContents", "/",
    "/shop",
    "/support-us",
    "/advertise",
    "/about-us",
    "/contact",
    "/things-to-do",
    "/category/Politics",
    "/category/Economy",
    "/category/Health-Care",
    "/category/Social-Issues",
    "/category/Culture-Lifestyle",
    "/category/Art",
    "/category/Film",
    "/category/Food",
    "/category/Music",
    "/category/The-Progressive's-Weekend",
    "/category/The-Progressive's-Lifestyle-in-New-Orleans",
    "/category/Environment",
    "/category/Air-And-Water-Quality",
    "/category/Coastal-Restoration",
    "/category/Op-Ed-Lagniappe",
    "/category/Sports",
    "/category/monthly/December-2019",
    "/category/monthly/October-2019",
    "/category/monthly/September-2019",
    "/category/monthly/August-2019",
    "/category/monthly/July-2019",
    "/category/monthly/June-2019",
    "/category/monthly/May-2019",
    "/category/monthly/April-2019",
    "/category/monthly/March-2019",
    "/category/monthly/February-2019",
    "/category/monthly/January-2019",
    "/category/monthly/December-2018",
    "/category/monthly/November-2018",
    "/category/monthly/October-2018",
    "/category/monthly/September-2018",
    "/category/monthly/",
    "/category/monthly/August-2018",
    "/category/monthly/July-2018",
    "/category/monthly/June-2018",
    "/category/Guest-Posts/",
    "/category/Sponsored-Content/",
    "/category/Satire/",
    "/category/Big-Easy-Editorial/",
    "/category/Featured/",
    "/api/trpc/post.getPostThumbnailBySlug"
  ],
  ignoredRoutes: ["/((?!api|trpc))(_next.*|.+\.[\w]+$)", "/api/trpc/post.getFeaturedPostThumbnail","/api/trpc/post.getPostThumbnailBySlug","/api/trpc/post.getTotalPostCountBySlug"]
});
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
