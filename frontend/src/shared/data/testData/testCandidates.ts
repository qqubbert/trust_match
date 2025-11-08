import { useTagsStore } from "@shared/data/useTagsStore";
import { useState } from "react";

export const useTestUsers = () => {
  const tags = useTagsStore();
  const [users, setUsers] = useState([
    {
      id: 1,
      person: {
        name: "Юля",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum magni pariatur magnam unde beatae molestias deleniti reiciendis esse repudiandae, tenetur nihil assumenda voluptate eos praesentium distinctio, quidem exercitationem? Dignissimos, iste.",
      },
      tags: [tags.content.anime, tags.sport.swimming, tags.lifestyle.alcohol],
      images: [
        { src: "/images/usersPreview/girls/girl1/girl1_1.jpg", alt: "Юля" },
      ],
    },
    {
      id: 2,
      person: {
        name: "Маша",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum magni pariatur magnam unde beatae molestias deleniti reiciendis esse repudiandae, tenetur nihil assumenda voluptate eos praesentium distinctio, quidem exercitationem? Dignissimos, iste.",
      },
      tags: [
        tags.content.anime,
        tags.content.games,
        tags.content.series,
        tags.lifestyle.smoking,
        tags.content.movies,
      ],
      images: [
        { src: "/images/usersPreview/girls/girl2/girl2_1.jpg", alt: "Маша" },
        { src: "/images/usersPreview/girls/girl2/girl2_2.jpg", alt: "Маша" },
        { src: "/images/usersPreview/girls/girl2/girl2_3.jpg", alt: "Маша" },
        { src: "/images/usersPreview/girls/girl2/girl2_4.jpg", alt: "Маша" },
      ],
    },
    {
      id: 3,
      person: {
        name: "Лера",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum magni pariatur magnam unde beatae molestias deleniti reiciendis esse repudiandae, tenetur nihil assumenda voluptate eos praesentium distinctio, quidem exercitationem? Dignissimos, iste.",
      },
      tags: [tags.content.anime, tags.content.movies, tags.content.series],
      images: [
        { src: "/images/usersPreview/girls/girl4/girl4_1.jpg", alt: "Лера" },
      ],
    },
    {
      id: 4,
      person: {
        name: "Саша",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum magni pariatur magnam unde beatae molestias deleniti reiciendis esse repudiandae, tenetur nihil assumenda voluptate eos praesentium distinctio, quidem exercitationem? Dignissimos, iste.",
      },
      tags: [
        tags.lifestyle.alcohol,
        tags.lifestyle.smoking,
        tags.content.movies,
        tags.content.series,
      ],
      images: [
        { src: "/images/usersPreview/girls/girl3/girl3_1.jpg", alt: "Саша" },
      ],
    },
    {
      id: 5,
      person: {
        name: "Кира",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum magni pariatur magnam unde beatae molestias deleniti reiciendis esse repudiandae, tenetur nihil assumenda voluptate eos praesentium distinctio, quidem exercitationem? Dignissimos, iste.",
      },
      tags: [tags.sport.gym, tags.content.books, tags.content.anime],
      images: [
        { src: "/images/usersPreview/girls/girl5/girl5_2.jpg", alt: "Кира" },
        { src: "/images/usersPreview/girls/girl5/girl5_3.jpg", alt: "Кира" },
        { src: "/images/usersPreview/girls/girl5/girl5_1.jpg", alt: "Кира" },
      ],
    },
    {
      id: 6,
      person: {
        name: "Ксюша",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum magni pariatur magnam unde beatae molestias deleniti reiciendis esse repudiandae, tenetur nihil assumenda voluptate eos praesentium distinctio, quidem exercitationem? Dignissimos, iste.",
      },
      tags: [tags.content.anime, tags.content.games],
      images: [
        { src: "/images/usersPreview/girls/girl6/girl6_1.jpg", alt: "Ксюша" },
      ],
    },
  ]);

  return { users, setUsers };
};
