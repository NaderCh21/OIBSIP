import React from "react";

export default function Loading() {
  return (
    <div className="text-center">
      <div className="spinner-border" role="status" style={{height:'80px' , width:'80px' , marginTop: '20px' , marginBottom: '20px'}}>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
