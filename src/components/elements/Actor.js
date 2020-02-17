import React from "react";

import NoImage from "../../images/no_image.jpg";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";

const Actor = ({ actor }) => {
  return (
    <div class="flex items-center">
      <img
        class="w-12 h-12 rounded-full mr-4"
        src={
          actor.profile_path
            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
            : NoImage
        }
        alt="actorimages"
      />
      <div class="text-sm">
        <p class="text-indigo-600 leading-none font-semibold">{actor.name}</p>
        <p class="text-gray-600">{actor.character}</p>
      </div>
    </div>
  );
};

export default Actor;

// <div>
//     <img
//         src={
//                 actor.profile_path
//                 ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
//                 : NoImage
//             }
//         alt="actorimages" />
//     <span className="">{actor.name}</span>
//     <span className="">{actor.character}</span>
// </div>
