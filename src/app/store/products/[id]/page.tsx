import { notFound } from "next/navigation";

interface IProductProps {
  params: Promise<{ id: string }>;
  serachParams: Promise<{}>;
}

async function Product(props: IProductProps) {
  const { id } = await props.params;
  console.log(id);
  console.log(props);

  if (+id > 100) {
    return notFound();
  }

  return <div>Product</div>;
}

export default Product;
