import { useRef } from "react";

import { PageHeader } from "@widgets/PageHeader";

import { UserCard } from "@widgets/UserCard";

import { useTagsStore } from "@shared/data/useTagsStore";

import { useScrollToTop } from "@shared/lib/useScrollToTop";

export function CandidatesPage() {
  const tags = useTagsStore();

  const pageRef = useRef<HTMLDivElement>(null);
  useScrollToTop(pageRef);

  const users = [
    {
      id: 1,
      person: {
        name: "Даша",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum magni pariatur magnam unde beatae molestias deleniti reiciendis esse repudiandae, tenetur nihil assumenda voluptate eos praesentium distinctio, quidem exercitationem? Dignissimos, iste.",
      },
      tags: [
        tags.content.series,
        tags.content.games,
        tags.content.movies,
      ],
      images: [
        { src: "/images/usersPreview/girls/dasha/dasha2.jpg", alt: "Даша" },
        { src: "/images/usersPreview/girls/dasha/dasha4.jpg", alt: "Даша" },
        { src: "/images/usersPreview/girls/dasha/dasha1.png", alt: "Даша" },
        { src: "/images/usersPreview/girls/dasha/dasha5.jpg", alt: "Даша" },
        { src: "/images/usersPreview/girls/dasha/dasha3.jpg", alt: "Даша" },
      ],
    },
    {
      id: 2,
      person: {
        name: "Юля",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum magni pariatur magnam unde beatae molestias deleniti reiciendis esse repudiandae, tenetur nihil assumenda voluptate eos praesentium distinctio, quidem exercitationem? Dignissimos, iste.",
      },
      tags: [
        tags.content.anime,
        tags.sport.swimming,
        tags.lifestyle.alcohol,
      ],
      images: [
        { src: "/images/usersPreview/girls/girl1/girl1_1.jpg", alt: "Юля" },
      ],
    },
    {
      id: 3,
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
      id: 4,
      person: {
        name: "Василиса",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum magni pariatur magnam unde beatae molestias deleniti reiciendis esse repudiandae, tenetur nihil assumenda voluptate eos praesentium distinctio, quidem exercitationem? Dignissimos, iste.",
      },
      tags: [
        tags.content.movies,
        tags.content.series,
        tags.sport.gym,
        tags.content.books,
      ],
      images: [
        { src: "/images/usersPreview/girls/vasya/vasya1.jpg", alt: "Василиса" },
        // { src: "/images/usersPreview/girls/girl2/girl2_2.jpg", alt: "Василиса" },
        // { src: "/images/usersPreview/girls/girl2/girl2_3.jpg", alt: "Василиса" },
        // { src: "/images/usersPreview/girls/girl2/girl2_4.jpg", alt: "Василиса" },
      ],
    },
  ];

  return (
    <>
      <PageHeader title="Кандидаты" />
      <div className="page" ref={pageRef}>
        {users && users.length > 0 ? (
          users.map((user, i)=>{
            return (
              <UserCard user={user} key={user.id || `user-card-${i}`} classes="snap-start"/>
            )
          })
        ) : (<></>)}
        {/* CandidatesPage */}
      </div>
    </>
  );
}
