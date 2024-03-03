import { getAllDocs } from "@/lib/api";
import TitleList from "./_components/title-list";
import Header from "./_components/header";
import TagList from "./_components/tag-list";

export default function Index() {
  const allDocs = getAllDocs()
  return (
    <>
      <div>
        <Header />
        <TagList tags={Array.from(new Set(allDocs.flatMap(data => data.tags)))}/>
        <TitleList docs={allDocs} />
      </div>
    </>
  );
}
