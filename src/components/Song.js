function Song(props){
	return(
		<div className="elemenNeo playlist">
      <img
        id="image"
        className="elemenNeo"
        width={props.albumImg.width}
        src={props.albumImg.url}
        alt="Album image"
      />
      <h3>Title: {props.songTitle}</h3>
      <h3>Artist: {props.artistName}</h3>
      <button className="elemenNeo btn">Select</button>
    </div>
	);
}

export default Song;