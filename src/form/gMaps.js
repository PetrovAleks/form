import React, { Component } from "react";

import { Map, GoogleApiWrapper } from "google-maps-react";

export class MapContainer extends Component {
	containerStyle = {
		display: "block",
		width: "100%",
		height: "100%",
		zIndex: "1000",
	};
	render() {
		return (
			<Map
				google={this.props.google}
				zoom={14}
				scrollwheel={false}
				draggable={false}
				keyboardShortcuts={false}
				disableDoubleClickZoom={false}
				containerStyle={this.containerStyle}
				initialCenter={{
					lat: 40.854885,
					lng: -88.081807,
				}}
			></Map>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: "AIzaSyCV7OuHFgh1vhobla1lr_EWuXjz4oPTeiM",
})(MapContainer);
