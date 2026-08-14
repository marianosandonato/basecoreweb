import SyncHtmlLang from "@/components/SyncHtmlLang";

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SyncHtmlLang lang="en" />
      {children}
    </>
  );
}
