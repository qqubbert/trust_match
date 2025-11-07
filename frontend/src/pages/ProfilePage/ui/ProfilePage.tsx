import { PageHeader } from "@widgets/PageHeader";

import "./ProfilePage.css";

// import { Input } from "@shared/ui/Input";
import { TagCard } from "@entities/TagCard";
import { LabeledList } from "@widgets/LabeledList";

import { PersonInfo } from "@widgets/PersonInfo";
// import { Label } from "@shared/ui/Label";

import { ProfileImages } from "@widgets/ProfileImages";

import { useTagsStore } from "@shared/data/useTagsStore";

import Settings from "@shared/assets/icons/Settings/Tools.svg?react";

import {
  testPersonData,
  testImgsData,
} from "@shared/data/testData/testProfileData";

export function ProfilePage() {
  const tags = useTagsStore();

  const TagData = [
    tags.content.games,
    tags.content.anime,
    tags.sport.basketball,
    tags.sport.football,
    tags.lifestyle.alcohol,
  ];

  const PersonData = testPersonData;

  const ImgsData = testImgsData;

  const HeaderBtns = (
    <>
      <button>
        <Settings />
      </button>
    </>
  );

  return (
    <>
      <PageHeader title="Профиль" leftBtns={HeaderBtns} />
      <div className="page profile">
        <ProfileImages
          images={ImgsData}
          isOwn={true}
          isVisible={true}
          isFullSize={false}
        />
        <PersonInfo
          person={PersonData}
          classes=""
          hasEditBtn={true}
          isSelf={true}
        />
        <LabeledList title="Интересы" classes="">
          {TagData.map((tag, i) => {
            return <TagCard tagData={tag} key={`tag-${i}`} />;
          })}
        </LabeledList>
        {/* ProfilePage */}
      </div>
    </>
  );
}
