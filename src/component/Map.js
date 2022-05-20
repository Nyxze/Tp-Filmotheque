import React from 'react';
const AddressMap = () => {
    return (
        <div className="google-map-code">
            <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDNa10K-NCdpzRgj-iiLS5wd0mRSYjpwhA&q=Pl.+de+la+Visitation,+49100+Angers+Oya+Fleurs"  width="600" height="450" frameBorder="0" style={{ border: 0 }} allowFullScreen="" aria-hidden="false" tabindex="0"></iframe>
        </div>
    );
}
export { AddressMap }