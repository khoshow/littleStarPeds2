const Map = () => {
  return (
    <div className="map-area-one p-30 mt-120 lg-mt-80 wow fadeInUp">
      <div className="box-layout">
        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe
              className="gmap_iframe"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d53237.239669955336!2d-112.286149!3d33.492856!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b41409dff6e87%3A0x4f42e9113bd9b5f!2sLittle%20Star%20Pediatrics!5e0!3m2!1sen!2sin!4v1688988169574!5m2!1sen!2sin collage&t=&z=12&ie=UTF8&iwloc=B&output=embed"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
