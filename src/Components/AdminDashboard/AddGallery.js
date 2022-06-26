import React from 'react';
import { useForm } from 'react-hook-form';

const AddGallery = () => {
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
                    const gallery = {
                        img: img
                    }
                    // send to your database 
                    fetch('http://localhost:5000/gallery', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(gallery)
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
                <h2 className='profile-container-title'>Add Gallery Photos</h2>
                <div className="gallery-container">
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-area ">
                            <label className="label">
                                <span className="label-text-image">Upload Photo</span>
                            </label>
                            <input
                                type="file"
                                className="input image-input"
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

                        <div className="add-gallery-btn">
                            <input type="submit" value="Upload Photo" />
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default AddGallery;