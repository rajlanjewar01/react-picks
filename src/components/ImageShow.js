function ImageShow({image}) {
	return (
		<div>
			<img src={image.links.download} />
		</div>
	);
}

export default ImageShow;
