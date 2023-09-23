import React from "react";
import { useParams, useNavigate } from "react-router-dom";


const withParam = WrappedComponent => props => {
    const params = useParams();
    let navigate = useNavigate();
    // etc... other react-router-dom v6 hooks
  
    return (
      <WrappedComponent
        {...props}
        params={params}
        navigate={navigate}
        // etc...
      />
    );
};

export default withParam;