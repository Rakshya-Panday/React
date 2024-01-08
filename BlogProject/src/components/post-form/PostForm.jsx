// import React, { useCallback } from "react";
// import { useForm } from "react-hook-form";
// import { Button, Input, RTE, Select } from "..";
// import appwriteService from "../../appwrite/config";
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";

// export default function PostForm({ post }) {
//     const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
//         defaultValues: {
//             title: post?.title || "",
//             slug: post?.$id || "",
//             content: post?.content || "",
//             status: post?.status || "active",
//         },
//     });

//     const navigate = useNavigate();
//     const userData = useSelector((state) => state.auth.userData);

//     const submit = async (data) => {
//         if (post) {
//             const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null;

//             if (file) {
//                 appwriteService.deletefile(post.featuredImage);
//             }

//             const dbPost = await appwriteService.updatePost(post.$id, {
//                 ...data,
//                 featuredImage: file ? file.$id : undefined,
//             });

//             if (dbPost) {
//                 navigate(`/post/${dbPost.$id}`);
//             }
//         } else {
//             const file = await appwriteService.uploadFile(data.image[0]);

//             if (file) {
//                 const fileId = file.$id;
//                 data.featuredImage = fileId;
//                 const dbPost = await appwriteService.createPost({ ...data, userId: userData.$id });

//                 if (dbPost) {
//                     navigate(`/post/${dbPost.$id}`);
//                 }
//             }
//         }
//     };

//     const slugTransform = useCallback((value) => {
//         if (value && typeof value === "string")
//             return value
//                 .trim()
//                 .toLowerCase()
//                 .replace(/[^a-zA-Z\d\s]+/g, "-")
//                 .replace(/\s/g, "-");

//         return "";
//     }, []);

//     React.useEffect(() => {
//         const subscription = watch((value, { name }) => {
//             if (name === "title") {
//                 setValue("slug", slugTransform(value.title), { shouldValidate: true });
//             }
//         });

//         return () => subscription.unsubscribe();
//     }, [watch, slugTransform, setValue]);

//     return (
//         <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
//             <div className="w-2/3  px-5">
//                 <Input
//                     label="Title :"
//                     placeholder="Title"
//                     className="mb-4 m-4 p-4 w-5/6"
//                     {...register("title", { required: true })}
//                 />
//                 <Input
//                     label="Slug :"
//                     placeholder="Slug"
//                     className="mb-8 w-5/6"
//                     {...register("slug", { required: true })}
//                     onInput={(e) => {
//                         setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
//                     }}
//                 />
//                 <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
//             </div>
//             <div className="w-1/3 px-2">
//                 <Input
//                     label="Featured Image :"
//                     type="file"
//                     className="mb-5"
//                     accept="image/png, image/jpg, image/jpeg, image/gif"
//                     {...register("image", { required: !post })}
//                 />
//                 {post && (
//                     <div className="w-full mb-8">
//                         <img
//                             src={appwriteService.getFilePreview(post.featuredImage)}
//                             alt={post.title}
//                             className="rounded-lg"
//                         />
//                     </div>
//                 )}
//                 <Select
//                     options={["active", "inactive"]}
//                     label="Status"
//                     className="mb-4 mt-6"
//                     {...register("status", { required: true })}
//                 />
//                 <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
//                     {post ? "Update" : "Submit"}
//                 </Button>
//             </div>
//         </form>
//     );
// }

import React, { useState } from "react";
import { Button, Input, RTE, Select } from "..";
import { addPost } from "../../store/postSlice";
import { useDispatch } from "react-redux";

const PostForm = () => {
    const dispatch = useDispatch();
    const[input,setInput] = useState({
        name : "",
        slug: "",
        desc : "",
        file : ""

    })

    const handleInput = (e)=>{
        const {name,value} = e.target;
        setInput({
            ...input,
            [name]:[value]

        })

    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log("post submitted");
        dispatch(addPost(input))

    }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          label="Title :"
          type="text"
          name = "title"
          value = {input.title}
          onChange = {handleInput}
          
         
        />
        <Input
          label="Slug :"
          type="text"
          name = "slug"
          value = {input.slug}
          onChange = {handleInput}
          
         
        />
        <Input
          label="Description :"
          type="text"
          name = "desc"
          value = {input.desc}
          onChange = {handleInput}
          
         
        />
         <Input
          label="Featured Image :"
          type="file"
          name = "file"
          value = {input.file}
          onChange = {handleInput}
         
        />
        <Button type="submit" className="w-full">AddPost</Button>
      </form>
    </>
  );
};

export default PostForm;
