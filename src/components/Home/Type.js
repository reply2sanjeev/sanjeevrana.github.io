import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Cloud Engineer",
          "DevOps Engineer",
          "Cloud Infra Engineer",
          "System Admnistrator",
		  "DevSecOps",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
