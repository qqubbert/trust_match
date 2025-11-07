import { useRef } from "react";
import { PageHeader } from "@widgets/PageHeader";

import { UserCard } from "@entities/UserCard";

import { useScrollToTop } from "@shared/lib/useScrollToTop";

import { useTestUsers } from "@shared/data/testData/testCandidates";

export function CandidatesPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useScrollToTop(pageRef);

  const { users } = useTestUsers();

  return (
    <>
      <PageHeader title="Кандидаты" />
      <div className="page" ref={pageRef}>
        {users && users.length > 0 ? (
          users.map((user, i) => {
            return (
              <UserCard
                user={user}
                key={user.id || `user-card-${i}`}
                classes="snap-start"
              />
            );
          })
        ) : (
          <></>
        )}
        {/* CandidatesPage */}
      </div>
    </>
  );
}
