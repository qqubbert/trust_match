import { PageHeader } from "@widgets/PageHeader";

import './ProfilePage.scss';

// import { Input } from "@shared/ui/Input";
import { TagCard } from "@entities/TagCard";
import { LabeledList } from "@widgets/LabeledList";

import { PersonInfo } from "@widgets/PersonInfo";
// import { Label } from "@shared/ui/Label";

import { ProfileImages } from "@widgets/ProfileImages";

import { useTagsStore } from "@shared/data/useTagsStore";

export function ProfilePage() {
  const tags = useTagsStore();

  console.log(tags);

  const TagData = [
    tags.content.games,
    tags.content.anime,
    tags.sport.basketball,
    tags.sport.football,
  ];

  const PersonData = {
    name: 'Саня',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum magni pariatur magnam unde beatae molestias deleniti reiciendis esse repudiandae, tenetur nihil assumenda voluptate eos praesentium distinctio, quidem exercitationem? Dignissimos, iste.',
  }

  const ImgsData = [
    {src: '/images/usersPreview/boys/sasha/sasha1.jpg', alt: 'Санёк'},
    {src: '/images/usersPreview/boys/sasha/sasha2.jpg', alt: 'Санёк'},
    {src: '/images/usersPreview/boys/sasha/sasha3.jpg', alt: 'Санёк'},
    {src: '/images/usersPreview/boys/sasha/sasha4.jpg', alt: 'Санёк'},
    {src: '/images/usersPreview/boys/sasha/sasha5.jpg', alt: 'Санёк'},
    {src: '/images/usersPreview/boys/sasha/sasha6.jpg', alt: 'Санёк'},
  ]

  return (
    <>
      <PageHeader title="Профиль" />
      <div className="page">
        <ProfileImages images={ImgsData} isOwn={true} isVisible={true}/>
        <PersonInfo person={PersonData}/>
        <LabeledList title="Интересы">
          {TagData.map((tag, i) => {
            return (
              <TagCard tagData={tag} key={`tag-${i}`} />
            );
          })}
        </LabeledList>
        {/* ProfilePage */}
      </div>
    </>
  );
}
