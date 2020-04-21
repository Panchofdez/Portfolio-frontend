
const fixImage = (image)=>{
	const imageArr = image.split('upload');
	const newImage = imageArr[0] + 'upload/a_exif' + imageArr[1];
	return newImage;

}


export default fixImage;