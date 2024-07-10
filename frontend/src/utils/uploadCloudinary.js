const upload_preset = import.meta.env.VITE_UPLOAD_PRESET;
const cloud_name = import.meta.env.VITE_CLOUD_NAME;
const api_key = import.meta.env.VITE_API_KEY;

const UploadImageToCloudinary = async (file) => {
    const uploadData = new FormData();
    uploadData.append('file', file);
    uploadData.append('upload_preset', upload_preset);
    uploadData.append('api_key', api_key);

    try {
        const res = await fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, {
            method: "post",
            body: uploadData,
        });

        if (!res.ok) {
            throw new Error('Image upload failed');
        }

        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Error uploading image:", error);
        throw error;
    }
}

export default UploadImageToCloudinary;
