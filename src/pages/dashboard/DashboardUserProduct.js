import { useLoaderData } from "react-router-dom"

export async function loader(request) {
  const res = await fetch(`https://dummyjson.com/products/${request.params.productId}`).then(res => res.json())
  return res
}

export function Component() {
  const product = useLoaderData()

  return (
    <div>
      Project
      <div>ID: {product.id}</div>
      <div>Title: {product.title}</div>
    </div>
  )
}
