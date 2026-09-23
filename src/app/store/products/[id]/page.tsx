interface IProductProps {
  params: Promise<{ id: string }>;
  serachParams: Promise<{}>;
}

async function Product(props: IProductProps) {
  const { id } = await props.params;
  console.log(id);
  console.log(props);
  return <div>Product</div>;
}

export default Product;
