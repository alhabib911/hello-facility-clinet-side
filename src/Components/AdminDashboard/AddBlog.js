import React from 'react';
import { useForm } from 'react-hook-form';
import './AddBlog.css'

const AddBlog = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const imageStorageKey = 'af6edbcf0afb7b61b4867239c1a38820'


    const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })

            .then(res => res.json())
            .then(result => {
                // console.log(result);
                if (result.success) {
                    const img = result.data.url;
                    const blog = {
                        name: data.name,
                        details: data.details,       
                        img: img
                    }
                    // send to your database 
                    fetch('https://hidden-shelf-50745.herokuapp.com/blog', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(blog)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                alert('added')
                                // toast.success('Product Upload successfully')
                                reset();
                            }
                            else {
                                // toast.error('Failed to upload the product');
                            }
                        })

                }

            })
    }

    return (
        <div>
            <div className='dashboard-container'>
                <h2 className='dashboard-container-title'>Add Blog</h2>
                <div className="blog-container">
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Blog Title</span>
                            </label>

                            <input
                                type="text"
                                placeholder="Blog Title"
                                className="input input-bordered"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Blog Title is Required'
                                    }
                                })}
                            />

                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>
                        </div>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Blog</span>
                            </label>
                            <textarea
                                type="text"
                                placeholder="Blog"
                                className="input input-bordered "
                                {...register("details", {
                                    required: {
                                        value: true,
                                        message: 'Blog is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.details?.type === 'required' && <span className="label-text-alt text-red-500">{errors.details.message}</span>}
                            </label>
                        </div>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input
                                type="file"
                                className="input input-bordered "
                                {...register("image", {
                                    required: {
                                        value: true,
                                        message: 'Image is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}
                            </label>
                        </div>

                        <div className="add-blog-btn">
                            <input type="submit" value="Upload Content" />
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default AddBlog;