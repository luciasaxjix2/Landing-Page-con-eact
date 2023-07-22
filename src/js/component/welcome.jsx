import React from "react";

const Welcome = () => {

    return( <div className="alert alert-secondary " role="alert">
    <h4 className="alert-heading display-4 fw-bold text-dark">A Warm Welcome!</h4>
    <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
    <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
    <button type="button" class="btn btn-primary">Call to action!</button>
  </div>

    ) 
}

export default Welcome;