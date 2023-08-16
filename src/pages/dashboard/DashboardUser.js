import { Link, useLoaderData, useParams } from "react-router-dom"

export async function loader() {
  const res = await fetch("https://dummyjson.com/products").then(res => res.json())
  return res.products
}

export function Component () {
  const params = useParams()
  const products = useLoaderData()

  return (
    <div>
      <div>User's ({params.uid}) products</div>
      <ul>
        {products.map((product, index) => {
          return (
            <li key={index}>
              <Link to={`/dashboard/${params.uid}/product/${product.id}`}>{product.title}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
