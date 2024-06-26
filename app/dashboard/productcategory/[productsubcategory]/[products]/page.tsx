import CustomContainer from '@/components/CustomContainer';
import ProductsTable from '@/components/ProductsTable';
import { getProducts } from '@/lib/db/productCrud';
import Link from 'next/link';
import { Session, getServerSession } from 'next-auth';
import { authOptions } from '@/lib/config/authOptions';
import { redirect } from 'next/navigation';

interface ProductsSearchParams {
   searchParams?: { productsubcategoryid?: string };
}

async function Products({ searchParams }: ProductsSearchParams) {
   const staffInSession: Session | null = await getServerSession(authOptions);
   if (!staffInSession) {
      redirect('/');
   }
   let products: any = [];
   let error = '';

   const productSubCategory = searchParams?.productsubcategoryid
      ? parseInt(searchParams.productsubcategoryid)
      : null;

   if (!productSubCategory) {
      error = 'No product category specified.';
      return;
   }

   try {
      products = await getProducts(productSubCategory);
   } catch (err) {
      console.error('Error fetching products:', err);
      error = 'Check your internet connection.';
   }

   return (
      <CustomContainer>
         <div className='flex flex-col justify-center gap-8'>
            {error ? (
               <div className='flex flex-col items-center gap-2'>
                  <p className='text-red-500'>{error}</p>
                  <Link
                     className='text-blue-500 underline text-xl'
                     href='/dashboard/productcategory'
                  >
                     Go here
                  </Link>
               </div>
            ) : (
               <ProductsTable
                  productSubCategoryId={productSubCategory}
                  products={products}
               />
            )}
         </div>
      </CustomContainer>
   );
}

export default Products;
