import Link from "next/link";
import { filled, type TeamMember } from "@/content/team";
import { Avatar } from "./Avatar";

export function TeamCard({ member }: { member: TeamMember }) {
  const credentials = filled(member.credentials);
  const bio = filled(member.bio);
  return (
    <article className="flex w-full flex-col items-center rounded-md border border-line bg-white p-6 text-center">
      <Avatar name={member.name} photo={member.photo} alt={`${member.name}, ${member.title}`} className="w-28" />
      <h3 className="mt-4 text-lg font-semibold text-navy">
        {member.profile ? (
          <Link href={member.profile} className="hover:underline">
            {member.name}
          </Link>
        ) : (
          member.name
        )}
        {credentials && <span className="font-normal text-muted">, {credentials}</span>}
      </h3>
      <p className="mt-1 text-sm text-muted">{member.title}</p>
      {bio && <p className="mt-4 text-sm text-muted">{bio}</p>}
      <div className="mt-auto flex gap-4 pt-4 text-sm font-semibold">
        {member.profile && (
          <Link href={member.profile} className="text-navy-600 hover:underline">
            Full profile
          </Link>
        )}
        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-navy-600 hover:underline"
            aria-label={`${member.name} on LinkedIn (opens in a new tab)`}
          >
            LinkedIn
          </a>
        )}
      </div>
    </article>
  );
}
