Live : https://frontend-ecommerce-nextjs.vercel.app/ 

## Create an eCommerce shop.  

### FRONTEND
- React 
- next js static site generator
- typescript 

### BACKEND/CMS
- postgres 
- Strapi as headless cms node      // https://strapi.io/
- Cloudinary as a media library    // https://cloudinary.com/

### ECOMMERCE
- Snipcart eComerce                // https://snipcart.com/

### HOST
- Deploy heroku and vercel


material ui

(Incremental Static Regeneration with nextjs to keep update data ! instead of using webhook between strapi and prod site)
 

How I do it:

1. Install strapi
2. Install NextJs with typescript
3. Home/shop page, product page.
4. Fetch data from strapi and use Incrematal static regeneration on shop and product page 
(getStaticProps , getStaticPaths for dynamic route) 
5. connect to postgres
6. image with cloudinary look for strapi-provider-upload-coudinary
7. Add snipcart
8. Add small shopping cart in the navbar
9. Authentication with snipcart // see what I can do with it
10. Deploy

OPTIONNAL 

- CI/CD
- Differents environment (playground stage production)

