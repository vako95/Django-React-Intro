import React, { useRef, useEffect } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

function ContactMap() {
    const mapContainer = useRef(null);

    useEffect(() => {
        const map = new maplibregl.Map({
            container: mapContainer.current,
            style: `https://api.maptiler.com/maps/streets/style.json?key=rDwQTZpUlrIFf99fawEg`,
            center: [49.82883763843378, 40.38539251517137],
            zoom: 12
        });

        new maplibregl.Marker()
            .setLngLat([49.82883763843378, 40.38539251517137])
            .addTo(map);
        map.addControl(new maplibregl.NavigationControl(), "top-right");
        return () => map.remove();
    }, []);


    return <div className='contact__map' ref={mapContainer} style={{ width: '100%', height: '400px' }} />;
}

export default ContactMap;
