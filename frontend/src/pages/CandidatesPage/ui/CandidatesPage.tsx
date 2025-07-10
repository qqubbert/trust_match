import { PageHeader } from '@widgets/NavigationPanel/PageHeader';

import { Input } from '@shared/ui/Input/ui/Input';
import { TagCard } from '@entities/TagCard/ui/TagCard';
import { LabeledList } from '@widgets/LabeledList/ui/LabeledList';

import type { HorizontalKeyword, VerticalKeyword } from '@shared/types/GradientTypes';

import Anime from '@icons/TagIcons/Content/Anime.svg?react';
import AnimeBG from '@icons/TagIcons/Content/AnimeBG.svg?react';
import Games from '@icons/TagIcons/Content/Games.svg?react';
import GamesBG from '@icons/TagIcons/Content/GamesBG.svg?react';
// import Movies from '@icons/TagIcons/Content/Movies.svg?react';
// import MoviesBG from '@icons/TagIcons/Content/MoviesBG.svg?react';
// import Series from '@icons/TagIcons/Content/Series.svg?react';
// import SeriesBG from '@icons/TagIcons/Content/SeriesBG.svg?react';
import Basketball from '@icons/TagIcons/Sport/Basketball.svg?react';
import BasketballBG from '@icons/TagIcons/Sport/BasketballBG.svg?react';
import Football from '@icons/TagIcons/Sport/Football.svg?react';
import FootballBG from '@icons/TagIcons/Sport/FootballBG.svg?react';

export function CandidatesPage() {
  const TagData = [
    {
      title: 'Аниме',
      Icon: Anime,
      BgIcon: AnimeBG,
      gradientConfig: [
        { color: '#DE4327', xPos: 'left' as HorizontalKeyword, yPos: 'center' as VerticalKeyword },
        { color: '#F8B57E', xPos: 'right' as HorizontalKeyword, yPos: 'center' as VerticalKeyword },
      ],
    },
    {
      title: 'Компьютерные игры',
      Icon: Games,
      BgIcon: GamesBG,
      gradientConfig: [
        { color: '#052e36', xPos: 'left' as HorizontalKeyword, yPos: 'center' as VerticalKeyword },
        { color: '#1EB875', xPos: 'center' as HorizontalKeyword, yPos: 'center' as VerticalKeyword },
        { color: '#052e36', xPos: 'right' as HorizontalKeyword, yPos: 'center' as VerticalKeyword },
      ],
    },
    {
      title: 'Баскетбол',
      Icon: Basketball,
      BgIcon: BasketballBG,
      gradientConfig: [
        { color: '#533831', xPos: 'left' as HorizontalKeyword, yPos: 'center' as VerticalKeyword },
        { color: '#C7661D', xPos: 'center' as HorizontalKeyword, yPos: 'bottom' as VerticalKeyword },
        { color: '#EC3B3C', xPos: '60%' as HorizontalKeyword, yPos: '0%' as VerticalKeyword },
        { color: '#7D3257', xPos: 'right' as HorizontalKeyword, yPos: 'bottom' as VerticalKeyword },
      ],
    },
    {
      title: 'Футбол',
      Icon: Football,
      BgIcon: FootballBG,
      gradientConfig: [
        { color: '#66af3c', xPos: 'left' as HorizontalKeyword, yPos: 'center' as VerticalKeyword },
        { color: '#ffb780', xPos: 'center' as HorizontalKeyword, yPos: 'center' as VerticalKeyword },
        { color: '#c06223', xPos: 'right' as HorizontalKeyword, yPos: 'bottom' as VerticalKeyword },
      ],
    },
  ];

  return (
    <>
      <PageHeader title='Кандидаты' />
      <div className='page'>
        <LabeledList title='Интересы'>
          {TagData.map((tag, i)=>{
            return (
              <TagCard tagData={tag} key={`tag-${i}`}/>
            )
          })}
        </LabeledList>
        <Input
          inputLabel='Напишите, если понравилась анкета!'
          placeholder='Введите сообщение...'
        />
        CandidatesPage
      </div>
    </>
  );
}
