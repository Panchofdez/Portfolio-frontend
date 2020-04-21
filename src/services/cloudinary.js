import axios from 'axios';


const cloudinaryUpload = async (image)=>{
	try{
		const formData = new FormData();
		formData.append('file',image);
		formData.append('upload_preset', 'panchofdez')
		const res = await axios.post('https://api.cloudinary.com/v1_1/fdez/image/upload',formData);
		return res.data;
	}catch(err){
		console.log(err);
		return;
	}
	
	}



export default cloudinaryUpload;