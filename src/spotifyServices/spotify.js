import { useSelector, useDispatch } from 'react-redux'
import {useState} from 'react'
import {storeUser} from '../features/user/userSlice'
import {storeTracks} from '../features/trackResult/trackResultSlice'
import {storeSelected} from '../features/trackResult/trackResultSlice'

function useSpotify(){
	// const [tracks, setTracks] = useState([])
  // const [selectedTracks, setSelectedTracks] = useState([])
  const [loading, setLoading] = useState(false)

	const userProfile = useSelector((state) => state.user.value)
  const accessToken = useSelector((state) => state.token.value)
	const selectedTracks = useSelector((state) => state.trackResult.selectedTracks)
	const dispatch = useDispatch();

	function searchTrack(trackName) {
    setLoading(true);
		return fetch(`https://api.spotify.com/v1/search?q=${trackName}&type=track`, {
			method: "GET",
			headers: {
				Authorization: "Bearer " + accessToken,
			},
		})
			.then((res) => res.json())
			.then((data) => {
				setLoading(false);
				// setTracks(data.tracks.items);
				dispatch(storeTracks(data.tracks.items))
			})
			.catch((err) => console.log(err));
	}

	function createPlaylist(
		playlistName,
		playlistDescription
	) {
		return fetch(`https://api.spotify.com/v1/users/${userProfile.id}/playlists`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: "Bearer " + accessToken,
			},
			body: JSON.stringify({
				name: playlistName,
				description: playlistDescription,
				public: false,
				collaborative: false,
			}),
		})
			.then((res) => res.json())
			.then((data) => data);
	}

	function addTracksToPlaylist(idPlaylist) {
		return fetch(
			`https://api.spotify.com/v1/playlists/${idPlaylist}/tracks?uris=${selectedTracks.join(
				","
			)}`,
			{
				method: "POST",
				headers: {
					Authorization: "Bearer " + accessToken,
				},
			}
		)
			.then((res) => res.json())
			.then((data) => {
				if ("snapshot_id" in data) alert("Playlist Created")
				dispatch(storeSelected([]))
			});
	}

	function fetchUserProfile() {
		if (accessToken && Object.keys(userProfile).length ===0) {
			fetch(`https://api.spotify.com/v1/me`, {
				method: "GET",
				headers: {
					Authorization: "Bearer " + accessToken,
				},
			})
				.then((res) => res.json())
				.then((data) => dispatch(storeUser(data)));
		}
	}

	return {
		loading,
		searchTrack,
		createPlaylist,
		addTracksToPlaylist,
		fetchUserProfile
	}

}

export default useSpotify;
