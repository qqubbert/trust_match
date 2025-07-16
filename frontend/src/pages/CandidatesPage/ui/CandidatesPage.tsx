import { PageHeader } from "@widgets/PageHeader";


import { UserCard } from "@widgets/UserCard";

import { useTagsStore } from "@shared/data/useTagsStore";

export function CandidatesPage() {
  const tags = useTagsStore();

  const users = [
    {
      person: {
        name: "Даша",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum magni pariatur magnam unde beatae molestias deleniti reiciendis esse repudiandae, tenetur nihil assumenda voluptate eos praesentium distinctio, quidem exercitationem? Dignissimos, iste.",
      },
      tags: [
        tags.content.games,
      ],
      images: [
        { src: "/images/usersPreview/girls/dasha/dasha1.png", alt: "Даша" },
        { src: "/images/usersPreview/girls/dasha/dasha2.jpg", alt: "Даша" },
        { src: "/images/usersPreview/girls/dasha/dasha3.jpg", alt: "Даша" },
        { src: "/images/usersPreview/girls/dasha/dasha4.jpg", alt: "Даша" },
        { src: "/images/usersPreview/girls/dasha/dasha5.jpg", alt: "Даша" },
      ],
    },
    {
      person: {
        name: "Юля",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum magni pariatur magnam unde beatae molestias deleniti reiciendis esse repudiandae, tenetur nihil assumenda voluptate eos praesentium distinctio, quidem exercitationem? Dignissimos, iste.",
      },
      tags: [
        tags.content.games,
        tags.content.anime,
        tags.sport.basketball,
      ],
      images: [
        { src: "/images/usersPreview/girls/girl1/girl1_1.jpg", alt: "Юля" },
      ],
    },
    {
      person: {
        name: "Маша",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum magni pariatur magnam unde beatae molestias deleniti reiciendis esse repudiandae, tenetur nihil assumenda voluptate eos praesentium distinctio, quidem exercitationem? Dignissimos, iste.",
      },
      tags: [
        tags.content.anime,
        tags.content.games,
      ],
      images: [
        { src: "/images/usersPreview/girls/girl2/girl2_1.jpg", alt: "Маша" },
        { src: "/images/usersPreview/girls/girl2/girl2_2.jpg", alt: "Маша" },
        { src: "/images/usersPreview/girls/girl2/girl2_3.jpg", alt: "Маша" },
        { src: "/images/usersPreview/girls/girl2/girl2_4.jpg", alt: "Маша" },
      ],
    },
  ];

  return (
    <>
      <PageHeader title="Кандидаты" />
      <div className="page">
        {users && users.length > 0 ? (
          users.map((user)=>{
            return (
              <UserCard user={user}/>
            )
          })
        ) : (<></>)}
        {/* CandidatesPage */}
      </div>
    </>
  );
}
