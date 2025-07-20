import './OverflowingList.scss';
import { usePluralForm } from '@shared/lib/usePluralForm';

type OverflowingListProps<T> = {
  items: T[];
  maxCount: number;
  overflowTextTemplate?: (overflowCount: number, text:string) => string;
  renderItem: (item: T, index: number) => React.ReactNode;
  classes?: string;
  overflowText: string[];
}

export const OverflowingList = <T,>({
  items,
  maxCount,
  overflowTextTemplate = (count, text) => `И ещё ${count} ${text}`,
  renderItem,
  overflowText,
  classes = "",
}: OverflowingListProps<T>) => {
  const visibleItems = items.slice(0, maxCount);
  const overflowCount = items.length - maxCount;

  const processedText = usePluralForm(overflowCount, overflowText)

  return (
    <div className={`overflowing-list ${classes}`}>
      {visibleItems.map((item, index) => (
        <div className="overflowing-list__item" key={index}>
          {renderItem(item, index)}
        </div>
      ))}
      {overflowCount > 0 && (
        <div className="overflowing-list__overflow">
          {overflowTextTemplate(overflowCount, processedText)}
        </div>
      )}
    </div>
  );
};
