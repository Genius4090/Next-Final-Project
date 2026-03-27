"use client"
import { CategoryType } from "@/@types"
import FileSelect from "@/components/fileUpload"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import instance from "@/hooks/instance"
import { useRouter } from "@/i18n/navigation"
import { addProduct } from "@/services"
import { getCookie } from "cookies-next"
import { SubmitEvent, useEffect, useState } from "react"
import { toast } from "sonner"


const CreatePage = () => {
  const router = useRouter()
  const [categoryList,setCategoryList] = useState<CategoryType[]>([]) 
  const [imageFile, setImageFile] = useState<File | null>(null)
  const token = getCookie("token")
 



  useEffect(()=>{
    try{
      instance().get(`/categories`).then(res => setCategoryList(res.data.data))
    }catch(err){
      toast.error(`error occured :${err}`)
    }
  },[])
  

  async function handleSubmit(e:SubmitEvent<HTMLFormElement>){
   e.preventDefault()
   if (!imageFile) return toast("Please select an image")

   
    const formData = new FormData()
    formData.append("image", imageFile)
    formData.append("name", e.target.productName.value)
    formData.append("description", e.target.productDescription.value || "")
    formData.append("price", e.target.productPrice.value)
    formData.append("categoryId", e.target.categoryId.value)
    formData.append("rating", e.target.productRating.value || 0)
    formData.append("reviewsCount", e.target.productReview.value || 0)
  
   await addProduct(formData,token).then(res => {
    toast.success("successfully created")
    setTimeout(()=>{
      router.back()
    },1000)
   })
  
  }
  return (
    <section className="max-w-xl border mt-10 border-gray-200 mx-auto p-5 bg-white dark:bg-gray-900 rounded-2xl shadow-lg flex flex-col gap-2">
      
      {/* Image Upload */}
      <div className="flex flex-col items-center gap-3">
        <FileSelect onFileChange={setImageFile} />
      </div>
  
      <form onSubmit={handleSubmit}>
        
        {/* Inputs */}
        <div className="flex flex-col gap-5">
          
          {/* Name */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Product Name
            </label>
            <Input
              required
              name="productName"
              placeholder="Enter product name"
              className="border-b border-gray-300 py-5 dark:border-gray-600 rounded-[5px] focus-visible:ring-0"
            />
          </div>
  
          {/* Description */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Description
            </label>
            <Input
              name="productDescription"
              placeholder="Enter description"
              className="border-b border-gray-300 py-5 dark:border-gray-600 rounded-[5px] focus-visible:ring-0"
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
                name="productPrice"
                type="number"
                placeholder="0.00"
                className="border-b border-gray-300 py-5 dark:border-gray-600 rounded-[5px] focus-visible:ring-0"
              />
            </div>
  
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Rating
              </label>
              <Input
                name="productRating"
                type="number"
                placeholder="0 - 5"
                className="border-b border-gray-300 py-5 dark:border-gray-600 rounded-[5px] focus-visible:ring-0"
              />
            </div>
          </div>
  
          {/* Reviews */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Review Count
            </label>
            <Input
              name="productReview"
              type="number"
              placeholder="Number of reviews"
              className="border-b border-gray-300 py-5 dark:border-gray-600 rounded-[5px] focus-visible:ring-0"
            />
          </div>
  
          {/* Category */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Category
            </label>
  
            <Select name="categoryId">
              <SelectTrigger className="border-b border-gray-300 py-5 dark:border-gray-600 rounded-[5px] focus-visible:ring-0">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
  
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="0" disabled>
                    Select category
                  </SelectItem>
  
                  {categoryList.map((item) => (
                    <SelectItem key={item.id} value={`${item.id}`}>
                      {item.name}
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
            className="cursor-pointer w-full mt-4 py-5! bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition"
          >
            Create Product
          </Button>
        </div>
  
      </form>
    </section>
  )
}

export default CreatePage



