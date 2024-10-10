import "./Products.css"
import  {AddToCartIcon} from "./Icons.js"


// Interfaz para un producto individual
export interface productsProps{
    id: number,
    title:string,
    description:string,
    price:number,
    discountPercentage:number,
    rating:number,
    stock:number,
    brand:string,
    category:string,
    thumbnail:string,
    images:Array<string>
}

//Interfaz para las props que recibe el comonente
interface ProductsComponentProps{
    products: productsProps[]
}

export function Products({products}:ProductsComponentProps){
    return (        
        <main className="products">
            <ul>
                {products.slice(0,10).map((product)=>(
                    <li key={product.id}>
                        <img src={product.thumbnail} alt={product.title} />
                        <div>
                            <strong>{product.title}</strong> - {product.price}
                        </div>
                        <div>
                            <button><AddToCartIcon/></button>
                        </div>
                    </li>
                ))}
            </ul>
        </main>
    )
}