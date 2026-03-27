"use client"
import { ProductType } from '@/@types'
import { TimeFormatter } from '@/components/timeFormatter'
import { Button } from '@/components/ui/button'
import instance from '@/hooks/instance'
import { useRouter } from '@/i18n/navigation'
import { getCookie } from 'cookies-next'
import Image from 'next/image'
import { useState } from 'react'
import { toast } from 'sonner'

const ProductContent = ({ foundProduct: product }: { foundProduct: ProductType }) => {
  const router = useRouter()
  const token = getCookie("token")
  const [image, setImage] = useState(`https://anorkhulov.uz/${product.image}`)

  function handleDeleteProduct(id: number) {
    try {
      instance(token).delete(`/products/${id}`).then(res => {
        toast.success("Product successfully deleted")
        setTimeout(() => {
          router.push("/admin/menu")
        }, 1000)
      })
    } catch (err) {
      toast.error(`Error occurred: ${err}`)
    }
  }

  return (
    <div className="max-w-4xl mx-auto mt-11 p-6 bg-white border border-gray-200 shadow-lg rounded-xl flex flex-col md:flex-row gap-6  ">
      {/* Image Section */}
      <div className="">
        <Image
          alt={product.name}
          width={400}
          height={400}
          src={image}
          onError={() => setImage("/images/notFoundFood.webp")}
          className="w-full md:w-64 h-64 object-cover rounded-lg border border-gray-200 dark:border-gray-700"
        />
      </div>

      {/* Content Section */}
      <div className="flex-1 flex flex-col  gap-6">
        {/* Header & Actions */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{product.name}</h2>
          <div className="flex gap-2">
            <Button className="bg-red-500 hover:bg-red-600 text-white cursor-pointer" onClick={() => handleDeleteProduct(product.id)}>Delete</Button>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white cursor-pointer" onClick={() => router.push(`/admin/menu/${product.id}/update`)}>Update</Button>
          </div>
        </div>

        {/* Details */}
        <div className="text-gray-700 dark:text-gray-300 space-y-2">
          <p className="text-lg"><span className="font-semibold">Description:</span> {product.description}</p>
          <p className="text-lg"><span className="font-semibold">Price:</span> ${product.price}</p>
          <p className="text-lg"><span className="font-semibold">Category:</span> {product.category?.name || 'Uncategorized'}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">Created: {TimeFormatter(product.createdAt)}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">Updated: {TimeFormatter(product.updatedAt)}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductContent