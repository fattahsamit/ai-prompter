// http://localhost:3000/user

// static metadata
export const metadata = {
  title: "User",
};

// Dynamic metadata
export async function generateMetadata({ params, searchParams }: any) {
  const product = await getProduct(params.id);
  return { title: product.title };
}

const page = () => {
  return (
    <div>
      <h2>user</h2>
    </div>
  );
};

export default page;
