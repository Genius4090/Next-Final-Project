export interface ProductType {
    id: number
    isActive: boolean
    createdAt: string
    updatedAt: string
    category: CategoryType
    name: string
    description: string
    price: string
    image: string
    rating: number
    reviewsCount: number
    isAvailable: boolean
  }
  
  export interface CategoryType {
    id: number
    isActive: boolean
    createdAt: string
    updatedAt: string
    name: string
  }



 export interface NewsType {
    id: number
    isActive: boolean
    createdAt: string
    updatedAt: string
    image: string
    description: string
    author: AuthorType
  }
  
 export interface AuthorType {
    id: number
    isActive: boolean
    createdAt: string
    updatedAt: string
    firstName: string
    lastName: any
    email: string
    username: string
    avatar: string
    address: string
    position: string
    role: string
  }

  export interface GalleryType {
    id: number
    isActive: boolean
    createdAt: string
    updatedAt: string
    image: string
  }
  





  export interface CartProduct {
    id: number
    status: string
    user: AuthorType
    table: any
    itemCount: number
    subtotal: number
    items: CartItem[]
  }
  
  
  
  export interface CartItem {
    id: number
    quantity: number
    note: any
    unitPrice: number
    totalPrice: number
    product: Product
  }
  
  export interface Product {
    id: number
    name: string
    image: string
    price: number
    isAvailable: boolean
  }
  