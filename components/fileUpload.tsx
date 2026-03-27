"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

const FileSelect = ({ onFileChange }: { onFileChange?: (file: File) => void }) => {
  const [file, setFile] = useState<File | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0]
      setFile(selectedFile)
      onFileChange?.(selectedFile)
    }
  }

  return (
    <div className="flex flex-col gap-2">

      <div className="flex items-center flex-col gap-4 relative">
        {/* Use native input, not Shadcn */}
       
        {/* Button triggers input via label */}
       <Button>
       <label>
        <input
          type="file"
          accept="image/*"
          id="file-input"
          className="hidden"
          onChange={handleChange}
        />
        Select file

        </label>
       </Button>
        {/* Display file name */}
        {file && <span className="bg-white border border-gray-200 p-2 -top-10 rounded absolute text-sm truncate max-w-xs">{file.name}</span>}
      </div>
    </div>
  )
}

export default FileSelect