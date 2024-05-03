import { newClientInstance } from "@/src/service/admin/newClient"
import { ProductImageDetail } from "@/src/service/admin/productVariant"
import React from "react"
import { toast } from "react-toastify"
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"
import Image from "next/image"
import { defaultUrl } from "@/src/service/common"
import { MdDelete } from "react-icons/md"
import Swal from "sweetalert2"
import Button from "@/src/common/button"
import { useRouter } from "next/router"

interface ProductImageProps {
  productId: string
}

const ProductImage: React.FC<ProductImageProps> = (props) => {
  const { productId } = props
  const router = useRouter()
  const [imageList, setImageList] = React.useState<ProductImageDetail[]>([])
  const [productDetail, setProductDetail] = React.useState<string>("")

  const handleGetProductList = React.useCallback(async () => {
    try {
      const params = {
        product_id: productId,
      }
      const response = await newClientInstance.getProductImage({
        params: params,
      })
      if (response.data.success) {
        setImageList(response.data.data.Product_images)
        setProductDetail(response.data.data.name)
        console.log(response.data.data)
      }
    } catch (error: any) {
      console.error(error)
      toast.error(error.message)
    }
  }, [productId])

  React.useEffect(() => {
    if (productId) {
      handleGetProductList()
    }
  }, [handleGetProductList, productId])

  const handleDragEnd = async (result: any) => {
    if (!result.destination) {
      return // The item was dropped outside of a Droppable
    }
    const updatedImage = Array.from(imageList)
    const [movedRule] = updatedImage.splice(result.source.index, 1)
    updatedImage.splice(result.destination.index, 0, movedRule)
    setImageList(updatedImage)
    try {
      const params = {
        product_image_id: updatedImage.map((i) => i.id),
      }
      await newClientInstance.changeImageOrder({
        params: params,
      })
    } catch (error: any) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const handleImageRemove = (id: number, index: number) => {
    Swal.fire({
      title: "Are you sure?",
      text: "you want to delete this image.",
      showCancelButton: true,
      confirmButtonText: "Delete",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        handleDeleteImage(id, index)
      }
    })
  }

  const handleDeleteImage = async (id: number, index: number) => {
    try {
      const params = {
        imageId: id,
      }
      const response = await newClientInstance.removeImage({ params: params })
      if (response.data.success) {
        handleGetProductList()
        Swal.fire("Delete!", response.data.message, "success")
      }
    } catch (error: any) {
      console.error(error)
      Swal.fire("error", error.message, "error")
    }
  }

  return (
    <div className='w-full p-2'>
      <div>
        <label>{productDetail ? productDetail : ""}</label>
      </div>
      {imageList.length > 0 && (
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId='imageList' direction='horizontal'>
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className='flex w-full gap-2 '
              >
                {imageList.map((image, index) => (
                  <Draggable
                    key={image.id}
                    draggableId={image.id.toString()}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        key={image.id}
                        className='relative'
                      >
                        <Image
                          src={`${defaultUrl}/${image.image}`}
                          alt={`Image ${index}`}
                          height={150}
                          width={150}
                          priority
                        />
                        <div className='absolute top-1 right-1 text-[red] '>
                          <MdDelete
                            className='w-full cursor-pointer'
                            onClick={() => handleImageRemove(image.id, index)}
                          />
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      )}
      <div className='w-full flex items-center justify-center mt-8 mb-5'>
        <Button intent={"blue"} onClick={() => router.push("/admin/products")}>
          Back
        </Button>
      </div>
    </div>
  )
}

export default ProductImage
