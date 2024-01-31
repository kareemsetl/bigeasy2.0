import { authMiddleware } from "@clerk/nextjs";

const publicRoutes = [
  "/api/trpc/post.getFeaturedPostContents",
  "/", 
  "/shop", 
  "/support", 
  "/advertise", 
  "/about", 
  "/contact", 
  "/things-to-do",
  "/post/(.*)", // Include all routes starting with "/post/" (doenst work)
  "/category/(.*)",
  "/api/trpc/post.getPostThumbnailBySlug",
  "/api/trpc/post.getPostThumbnailBySlugPaginated",
  "/api/trpc/post.getFeaturedPostThumbnail",
  "/api/trpc/post.getTotalPostCountBySlug",
  "/api/(.*)",
  "/author/(.*)",
  "/user/(.*)"
];

const ignoredRoutes = [
  "/((?!api|trpc))(_next.*|.+\.[\w]+$)",
  
  /*
  //the below is commented out bc of the middleware error.
  
  "/api/trpc/post.getFeaturedPostThumbnail",
  "/api/trpc/post.getPostThumbnailBySlug",
  "/api/trpc/post.getTotalPostCountBySlug",  
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
