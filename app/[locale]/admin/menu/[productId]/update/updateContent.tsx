"use client"
import { CategoryType, ProductType } from "@/@types"
import FileSelect from "@/components/fileUpload"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import instance from "@/hooks/instance"
import { useRouter } from "@/i18n/navigation"
import {updateProduct } from "@/services"
import { getCookie } from "cookies-next"
import { SubmitEvent, useEffect, useState } from "react"
import { toast } from "sonner"


const UpdatePage = ({foundProduct:product}:{foundProduct:ProductType}) => {
  const router = useRouter()

 
  
  const [categoryList,setCategoryList] = useState<CategoryType[]>([]) 
  const [imageFile, setImageFile] = useState<File | null>(null) // new selected file
  const [imagePreview, setImagePreview] = useState<string>(`https://anorkhulov.uz/${product.image}`) // current image or preview
  const token = getCookie("token")
 

  const [name, setName] = useState(product.name)
  const [description, setDescription] = useState(product.description)
  const [price, setPrice] = useState(product.price)
  const [rating, setRating] = useState(product.rating)
  const [reviewsCount, setReviewsCount] = useState(product.reviewsCount)
  const [categoryId, setCategoryId] = useState(product.category?.id || 0)



  useEffect(()=>{
    try{
      instance().get(`/categories`).then(res => setCategoryList(res.data.data))
    }catch(err){
      toast.error(`error occured :${err}`)
    }
  },[])
  

  async function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
  
    const formData = new FormData();
    
    // Only append image if the user selected a new one
    if (imageFile) formData.append("image", imageFile);
  
    formData.append("name", name);
    formData.append("description", description || "");
    formData.append("price", price.toString());
    formData.append("categoryId", categoryId.toString());
    formData.append("rating", rating.toString());
    formData.append("reviewsCount", reviewsCount.toString());
  
    await updateProduct(formData, token, product.id)
      .then(() => {
        toast.success("Successfully updated");
        setTimeout(() => {
          router.back();
        }, 1000);
      })
      .catch(err => toast.error(`Error occurred: ${err}`));
  }
  return (
  <section  className="max-w-xl border my-4 border-gray-200 mx-auto p-5 bg-white dark:bg-gray-900 rounded-2xl shadow-lg flex flex-col gap-2">
     {/* Image Upload */}
     <div className="flex flex-col items-center gap-3">
     <FileSelect
       onFileChange={(file) => {
         setImageFile(file)
         if (file) setImagePreview(URL.createObjectURL(file))
       }}
     />

     <img
       src={imagePreview}
       alt="Product"
       className="w-40 h-40 object-cover rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm"
       onError={() => setImagePreview("/images/notFoundFood.webp")}
     />
   </div>

    <form
      onSubmit={handleSubmit}

    >
     
      {/* Inputs */}
      <div className="flex flex-col gap-5">
        {/* Name */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Product Name
          </label>
          <Input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter product name"
            className="border-b  border-gray-300 py-5 dark:border-gray-600 rounded-[5px] focus-visible:ring-0"
          />
        </div>
  
        {/* Description */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Description
          </label>
          <Input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter description"
            className="border-b  border-gray-300 py-5 dark:border-gray-600 rounded-[5px] focus-visible:ring-0"
          />
        </div>
  
        {/* Price + Rating */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Price
            </label>
            <Input
              required
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="0.00"
               className="border-b  border-gray-300 py-5 dark:border-gray-600 rounded-[5px] focus-visible:ring-0"
            />
          </div>
  
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Rating
            </label>
            <Input
              type="number"
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
              placeholder="0 - 5"
              className="border-b  border-gray-300 py-5 dark:border-gray-600 rounded-[5px] focus-visible:ring-0"
            />
          </div>
        </div>
  
        {/* Reviews */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Review Count
          </label>
          <Input
            type="number"
            value={reviewsCount}
            onChange={(e) => setReviewsCount(Number(e.target.value))}
            placeholder="Number of reviews"
          className="border-b  border-gray-300 py-5 dark:border-gray-600 rounded-[5px] focus-visible:ring-0"
          />
        </div>
  
        {/* Category */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Category
          </label>
          <Select
            value={`${categoryId}`}
            onValueChange={(val) => setCategoryId(Number(val))}
          >
            <SelectTrigger  className="border-b  border-gray-300 py-5 dark:border-gray-600 rounded-[5px] focus-visible:ring-0">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
  
            <SelectContent>
              <SelectGroup>
                <SelectItem value="0" disabled>
                  Select category
                </SelectItem>
                {categoryList.map((cat) => (
                  <SelectItem key={cat.id} value={`${cat.id}`}>
                    {cat.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
  
      {/* Button */}
     <div className="px-30">
     <Button
        type="submit"
        className="cursor-pointer w-full mx mt-4 py-5! bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition"
      >
        Update Product
      </Button>
     </div>
    </form>
  </section>
  )
}

export default UpdatePage



